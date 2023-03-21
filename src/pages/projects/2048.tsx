import React, { useState } from "react";

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
    return x > this.width || y > this.height
  }

  changeTile(x : number, y : number, value : number) : Board {
    if(this.outOfBounds(x,y)) {
      return this
    }
    var newBoard = this.board
    newBoard[y][x] = value

    return new Board(newBoard)
  }

  getValue(x : number, y : number) : number {
    return this.board[y][x]
  }

  boardFull() : boolean {
    var ret = true
    for (var row in this.board){
      for (var col in this.board[row]){
        if (this.board[row][col] === 0) {
          ret = false
        }
      }
    }
    return ret
  }

  newTile() : Board {
    var x
    var y
    if (this.boardFull()) {
      //Game over
    }
    do {
      x = Math.floor(Math.random()*this.width)
      y = Math.floor(Math.random()*this.height)
    } while (this.getValue(x, y) !== 0) 
    
    var val = this.starting_vals[Math.floor(Math.random()*(this.starting_vals.length - 1))]
    return this.changeTile(x, y, val)
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

  return(
    <div className="GameWindow">
      <text>{board.width}</text>
      <text>{board.height}</text>
      <RenderBoard b={board}/>
      <button onClick={() => setBoard(board.newTile())}></button>
    </div>
  );
}

export default GameWindow

