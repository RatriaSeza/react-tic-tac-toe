/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
	return (
		<button onClick={onSquareClick} className="w-10 h-10 border border-solid bg-white border-black text-2xl font-bold cursor-pointer">
			{value}
		</button>
	);
}

function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();

		nextSquares[i] = xIsNext ? "X" : "O";

		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status = "";

	winner ? (status = "Winner : " + winner) : (status = (xIsNext ? "X" : "O") + " Turn");

	return (
		<>
			<div className="text-center font-semibold">{status}</div>
			<div className="flex flex-wrap w-32">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

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

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];

		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	return false;
}

export default Game;
