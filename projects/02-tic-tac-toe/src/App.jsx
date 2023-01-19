import { useState } from "react";
import confetti from "canvas-confetti";
import { GoMarkGithub } from "react-icons/go";
import { Square } from "./components/Square";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";
import { GameBoard } from "./components/GameBoard";
import { TURNS } from "./constants";
import "./App.css";




function App() {

  const [board, setBoard] = useState(() => {
    const savedBoard = JSON.parse(window.localStorage.getItem('board'))
    if(savedBoard) return savedBoard
    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    if(savedTurn) return savedTurn
    return Math.random() < 0.5 ? TURNS.X : TURNS.O
    });

  const [winner, setWinner] = useState(null); //false empate, true hay ganador

  

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //comprobar si hay ganador o empate
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // hay un empate
    }
  };


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Math.random() < 0.5 ? TURNS.X : TURNS.O)
    setWinner(null)
    resetGameStorage()
  }


  return (
    <main className="board">
      <h1>Miguel's Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <GameBoard updateBoard={updateBoard} board={board}/>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <footer><a href="https://github.com/Mike094md" target="_blank">Created by Miguel Díez Jiménez <GoMarkGithub/></a></footer>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
