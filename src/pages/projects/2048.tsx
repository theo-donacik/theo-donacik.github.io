import React, { useEffect, useState } from "react";

enum DIRECTION {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

class Board {
  board: number[][];
  width : number;
  height : number;
  starting_vals : number[];

  constructor(board? : number[][]) {
    if(board){
      this.board = board
    }
    else {
      this.board = [[0,0,0,0], 
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]]
    }
    this.height = this.board.length
    this.width = this.board[0].length
    this.starting_vals = [2, 4]
  }

  outOfBounds(x : number, y : number) : boolean {
    return x >= this.width || y >= this.height || x < 0 || y < 0
  }

  setTile(x : number, y : number, value : number) : void {
    //alert("Set tile at " + x.toString() + " " + y.toString() + " to value " + value.toString())
    if(this.outOfBounds(x, y)){
      alert("Requested out of bounds move");
      return
    }
    this.board[y][x] = value
  }

  getTile(x : number, y : number) : number {
    return this.board[y][x]
  }

  boardFull() : boolean {
    var ret = true
    for (var row = 0; row < this.height; row++){
      for (var col = 0; col < this.width; col++){
        Object.keys(DIRECTION).forEach((direction, index) => {
          var newCoords = this.directionOffset(direction as DIRECTION, col, row);
          console.log("Can move", col, row, newCoords, direction)
          if (this.canMove(col, row, newCoords[0], newCoords[1])) {
            console.log(false)
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
        if(this.getTile(col, row) !== 0) {
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
    } while (this.getTile(x, y) !== 0) 
    
    var val = this.starting_vals[Math.floor(Math.random()*(this.starting_vals.length))]
    this.setTile(x, y, val)

    if(!this.boardEmpty() && this.boardFull()) {
      alert("Game Over!")
      return new Board().newTile();
    }
    return new Board(this.board)
  }

  handleInput(event : React.KeyboardEvent) : Board {
    //alert("got input")
    const keyToDir : {[key : string]: DIRECTION} = {
      "ArrowUp": DIRECTION.Up, 
      "ArrowDown": DIRECTION.Down, 
      "ArrowLeft": DIRECTION.Left,
      "ArrowRight": DIRECTION.Right
    }

    return this.moveBoard(keyToDir[event.key])
  }

  moveTile(direction : DIRECTION, x : number, y : number) : boolean {
    var newCoords = this.directionOffset(direction, x, y);
    if(this.canMove(x, y, newCoords[0], newCoords[1])){
      //alert("new coords " + newCoords.toString())
      this.setTile(newCoords[0], newCoords[1], 
                   this.getTile(x, y) + this.getTile(newCoords[0],newCoords[1]))
      this.setTile(x , y, 0)
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
          console.log(col, row)
          var move = this.moveTile(direction, col, row)
          noneMoved = noneMoved || move
          changed = changed || move
        }
      }
    }
    return (changed ? this.newTile() : this)
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
           this.getTile(x, y) !== 0 &&
           (this.getTile(newX, newY) === 0 || 
           this.getTile(newX, newY) === this.getTile(x, y))
  }

  oneAway(x : number, y : number, newX : number, newY : number) : boolean {
    var distX = Math.abs(x - newX)
    var distY = Math.abs(y - newY)
    return (distX === 1) !== (distY === 1)
  }

  render(){
    var boardStr : string = ""
    for (var row in this.board) {
      boardStr += this.board[row].toString() + "\n"
    } 
    return(
      <text className="body-text">{boardStr}</text>
    )
  }
}

const RenderBoard = ({b}: {b: Board}) => {
  return b.render()
}

const GameWindow = () => {
  const [board, setBoard] = useState(new Board())
  useEffect(() => setBoard(board.newTile()), []);
  return(
    <div className="GameWindow"
      onKeyDown={(event) => setBoard(board.handleInput(event))}
      tabIndex={0}
    >
      <RenderBoard b={board}/>
    </div>
  );
}

export default GameWindow

