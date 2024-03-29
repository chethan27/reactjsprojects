import "./styles.css";
import { useState, useEffect } from "react";
import Square from "./components/Square";
import {Patterns} from './patterns';

const TicTacToe = () => {
  const [board, setBoard] = useState(["","","","","","","","","",]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(() => {
    checkWin();
    checkIfTied();
    if(player === "X") {
        setPlayer("O");
    } else {
        setPlayer("X");
    }
  }, [board])
  
  useEffect(() => {
      if(result.state !== "none") {
        alert(`Game Finished . Winning Player: ${result.winner}`)
        restartGame();
      } 
  }, [result])

  const chooseSquare = (squareValue) => { 
    setBoard(board.map((val,idx) => {
        if(idx === squareValue && val === "") {
            return player;
        }
        return val;
    }))
  }

  const restartGame = () => {
      setBoard(["","","","","","","","","",]);
        setPlayer("X");
  }

  const checkWin = () => {
      Patterns.forEach(currPattern => {
          const firstPlayer = board[currPattern[0]];
          if(firstPlayer === "") return;
          let foundWinningPattern = true;
          currPattern.forEach((idx) => {
              if(board[idx] !== firstPlayer) {
                foundWinningPattern = false;
              }
          })
          if(foundWinningPattern) {
              setResult({winner: "none", state: "Won"})
          }
      });

  }

  const checkIfTied = () => {
      let filled = true;
      board.map((square) => {
        if(square === "") {
            filled = false;
        }
      })
    if(filled) {
        setResult({winner: "No one", state: "tie"})
    }
  }
  
  return (
    <div className="App">
      <div className="board">
        <div className="row">
            <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="row">
            <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="row">
            <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
