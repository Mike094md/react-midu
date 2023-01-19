import { WINNER_COMBOS } from "../constants";

export const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; //sera X u O
      }
    }
    return null;
  };

export const checkEndGame = (board) => {
    return board.every((elem) => elem !== null);
  };