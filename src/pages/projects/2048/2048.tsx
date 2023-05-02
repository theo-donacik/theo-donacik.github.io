import React, { useCallback, useEffect, useRef, useState } from "react";
import "./2048Style"
import {themed_style, themed_text} from "./2048Style"
import { BOARD_STYLE, ROW_STYLE } from "./2048Style";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


enum DIRECTION {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

export enum THEME {
  Classic = "Classic",
  Amongus = "Amongus",
}

class Tile {
  val: number;
  merged: boolean;
  constructor(val : number){
    this.val = val
    this.merged = false;
  }

  render(theme: THEME){
    return(
      <div className="square border border-dark" style={themed_style(theme, this.val)}>
        <p style={themed_text(theme)}>{this.val === 0 ? "" : this.val}</p>
      </div>
    )
  }
}

class Board {
  board: Tile[][];
  width : number;
  height : number;
  starting_vals : number[];
  constructor(board? : Tile[][]) {
    this.height = 4
    this.width = 4
    if(board){
      this.board = board
    }
    else {
      this.board = [[]]
      for(var i = 0; i < this.height; i++ ){
        var row= [];
        for(var j = 0; j < this.width; j++){
          row[j] = new Tile(0);
        }
        this.board[i] = row;
      }
    }

    this.starting_vals = [2, 4]
  }

  outOfBounds(x : number, y : number) : boolean {
    return x >= this.width || y >= this.height || x < 0 || y < 0
  }

  setTile(x : number, y : number, tile : Tile) : void {
    //alert("Set tile at " + x.toString() + " " + y.toString() + " to value " + value.toString())
    if(this.outOfBounds(x, y)){
      alert("Requested out of bounds move");
      return
    }
    this.board[y][x] = tile;
  }

  getTile(x : number, y : number) : Tile {
    return this.board[y][x]
  }

  boardFull() : boolean {
    var ret = true
    for (var row = 0; row < this.height; row++){
      for (var col = 0; col < this.width; col++){
        Object.keys(DIRECTION).forEach((direction, index) => {
          var newCoords = this.directionOffset(direction as DIRECTION, col, row);
          //console.log("Can move", col, row, newCoords, direction)
          if (this.canMove(col, row, newCoords[0], newCoords[1])) {
            //console.log(false)
            ret = false
          }
        })
      }
    }
    return ret
  }

  boardEmpty() : boolean {
    for (var row = 0; row < this.height; row++){
      for (var col = 0; col < this.width; col++){
        if(this.getTile(col, row).val !== 0) {
          return false
        }
      }
    }
    return true
  }

  newTile() : Board {
    var x
    var y
    do {
      x = Math.floor(Math.random()*this.width)
      y = Math.floor(Math.random()*this.height)
    } while (this.getTile(x, y).val !== 0) 
    
    var val = this.starting_vals[Math.floor(Math.random()*(this.starting_vals.length))]
    this.setTile(x, y, new Tile(val))

    if(!this.boardEmpty() && this.boardFull()) {
      alert("Game Over!")
      return new Board().newTile();
    }
    return new Board(this.board)
  }

  handleKeypress(event : React.KeyboardEvent) : Board {
    const keyToDir : {[key : string]: DIRECTION} = {
      "ArrowUp": DIRECTION.Up, 
      "ArrowDown": DIRECTION.Down, 
      "ArrowLeft": DIRECTION.Left,
      "ArrowRight": DIRECTION.Right
    }

    var key = keyToDir[event.key]
    return key in DIRECTION ? this.moveBoard(key) : this
  }

  handleSwipe(event : SwipeEventData) {
    const swipeToDir : {[key : string]: DIRECTION} = {
      "Up": DIRECTION.Up, 
      "Down": DIRECTION.Down, 
      "Left": DIRECTION.Left,
      "Right": DIRECTION.Right
    }

    var key = swipeToDir[event.dir]
    return key in DIRECTION ? this.moveBoard(key) : this
  }

  moveTile(direction : DIRECTION, x : number, y : number) : boolean {
    var newCoords = this.directionOffset(direction, x, y);
    if(this.canMove(x, y, newCoords[0], newCoords[1])){
      var t1 : Tile = this.getTile(x, y)
      var t2 : Tile = this.getTile(newCoords[0],newCoords[1]);
      if(t2.val === 0){
        this.setTile(newCoords[0], newCoords[1], t1)
        this.setTile(x, y, new Tile(0))
      }
      else if (!t1.merged && !t2.merged){
        var mergedTile : Tile = new Tile(t1.val + t2.val)
        this.setTile(newCoords[0], newCoords[1], mergedTile)
        this.setTile(x, y, new Tile(0))
        mergedTile.merged = true
      }
      else {
        return false
      }
      return true
    }
    return false
  }

  moveBoard(direction : DIRECTION) : Board {
    var changed = false
    var noneMoved = true

    const moves : { [key in DIRECTION] : [number, (n : number) => boolean, (n : number) => number][] } = {
      [DIRECTION.Left] : [[0, (n : number) => {return n < this.width}, (n : number) => {return n + 1}],
      [0, (n : number) => {return n < this.height}, (n : number) => {return n + 1}]],

      [DIRECTION.Right] : [[this.width, (n : number) => {return n >= 0}, (n : number) => {return n - 1}],
      [0, (n : number) => {return n < this.height}, (n : number) => {return n + 1}]],

      [DIRECTION.Up] : [[0, (n : number) => {return n < this.width}, (n : number) => {return n + 1}],
      [0, (n : number) => {return n < this.height}, (n : number) => {return n + 1}]],

      [DIRECTION.Down] : [[0, (n : number) => {return n < this.width}, (n : number) => {return n + 1}],
      [this.height, (n : number) => {return n >= 0}, (n : number) => {return n - 1}]]
    }

    while(noneMoved){
      //alert("Moved board in direction " + direction.toString())
      noneMoved = false
      for(var col = moves[direction][0][0]; moves[direction][0][1](col); col = moves[direction][0][2](col)){
        for(var row = moves[direction][1][0]; moves[direction][1][1](row); row = moves[direction][1][2](row)){
          //console.log(col, row)
          var move = this.moveTile(direction, col, row)
          noneMoved = noneMoved || move
          changed = changed || move
        }
      }
    }
    this.resetMerged();
    return (changed ? this.newTile() : this)
  }

  resetMerged() : void{
    for(var i = 0; i < this.height; i++ ){
      for(var j = 0; j < this.width; j++){
        this.getTile(j, i).merged = false
      }
    }
  }

  directionOffset(direction: DIRECTION, x : number, y : number) : [number, number]{
    switch(direction){
      case(DIRECTION.Up):{
        return [x, y-1]
      }
      case(DIRECTION.Down):{
        return [x, y+1]
      }
      case(DIRECTION.Left):{
        return [x-1, y]
      }
      case(DIRECTION.Right):{
        return [x+1, y]
      }
      default : {
        return [x,y]
      }
    }
  }

  canMove(x : number, y : number, newX : number, newY : number) : boolean {
    //console.log(x, y, newX, newY)
    //alert(this.outOfBounds(x, y).toString() + " : " + this.outOfBounds(newX, newY).toString())
    return this.oneAway(x, y, newX, newY) &&
           !this.outOfBounds(newX, newY) &&
           this.getTile(x, y).val !== 0 &&
           (this.getTile(newX, newY).val === 0 || 
           this.getTile(newX, newY).val === this.getTile(x, y).val)
  }

  oneAway(x : number, y : number, newX : number, newY : number) : boolean {
    var distX = Math.abs(x - newX)
    var distY = Math.abs(y - newY)
    return (distX === 1) !== (distY === 1)
  }

  render(theme : THEME) { 
    var boardElements = []
    for(var i = 0; i < this.height; i++ ){
      var boardRow = []
      for(var j = 0; j < this.width; j++){
        boardRow.push(this.getTile(j, i).render(theme))
      }
      boardElements.push(boardRow)
    } 
    return(
      <div style={BOARD_STYLE}>{boardElements.map((row) => (
        <div style={ROW_STYLE}>
          {row}
          <br />
        </div>))}
      </div>
    )
  }
}

const RenderBoard = ({b, theme}: {b: Board, theme: THEME}) => {
  return b.render(theme)
}

const GameWindow = () => {
  const [board, setBoard] = useState(new Board())
  const [theme, setTheme] = useState(THEME.Classic)

  useEffect(() => {
    setBoard(board.newTile());
  }, []);

  const refPassthrough = (el : HTMLElement | null) => {
    handlers.ref(el);
    if(el){
      el.focus();
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData : SwipeEventData) => setBoard(board.handleSwipe(eventData)),
  });

  return(
    <div className="GameWindow"
      onKeyDown={(event) => setBoard(board.handleKeypress(event))}
      tabIndex={0}
      style={{outline: 'none'}}
      {... handlers}
      ref={refPassthrough}
    >
      <Dropdown>
        <DropdownButton 
          title="Theme"
          onSelect={(e) => setTheme(e == null ? THEME.Classic : e as THEME)}>
          <Dropdown.Item eventKey="Classic">Classic</Dropdown.Item>
          <Dropdown.Item eventKey="Amongus">Sussy</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <RenderBoard b={board} theme={theme}/>
    </div>
  );
}

export default GameWindow

