/* eslint-disable react/prop-types */
import Square from "./Square";
import XIcon from "./XIcon";
import OIcon from "./OIcon";
import Player from "./Player";

function Board({ xIsNext, squares, onPlay, board }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(board)) return;
		const nextSquares = squares.slice();

		nextSquares[i] = xIsNext ? <XIcon /> : <OIcon />;

		onPlay(nextSquares, i);
	}

	const winner = calculateWinner(board);
	let status = "";

	if (winner) {
		status = "Winner : " + winner
	}

	return (
		<>
			<div className="text-3xl text-white text-center font-semibold mb-4">{winner ? status : (<Player xIsNext={xIsNext} />)}</div>
			<div className="grid grid-cols-3 gap-1">
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
      console.log(squares[a]);
			return squares[a];
		}
	}

	return false;
}

export default Board;