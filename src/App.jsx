/* eslint-disable react/prop-types */
import { useState } from "react";
import Board from "./components/Board";

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

	function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
	}

	const moves = history.map((squares, move) => {
		let description = "";
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)} className="text-gray-900 w-36 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-sm text-xs px-1.5 py-0.5 me-1">{description}</button>
			</li>
		);
	});

	return (
		<div className="m-10 flex justify-center">
			<div>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="ml-5">
				<ol className="list-decimal text-xs">{moves}</ol>
			</div>
		</div>
	);
}

export default Game;
