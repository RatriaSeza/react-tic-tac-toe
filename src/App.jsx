/* eslint-disable react/prop-types */
import { useState } from "react";
import Board from "./components/Board";

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const [board, setBoard] = useState(Array(9).fill(null));
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	function handlePlay(nextSquares, i) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);

		const nextBoard = board.slice();
		nextBoard[i] = xIsNext ? "X" : "O";
		setBoard(nextBoard);
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
				<button onClick={() => jumpTo(move)} className="text-gray-900 w-36 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-sm text-xs px-1.5 py-0.5 me-1">
					{description}
				</button>
			</li>
		);
	});

	return (
		<div className="bg-[#E8E8E8] w-dvw h-dvh flex flex-col">
			<div className="flex gap-10">
				<div className="basis-1/2 flex items-center justify-end">
					<div className="w-fit">
						<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} board={board} />
					</div>
				</div>
				<div className="basis-1/2 mt-16 ml-10">
					<div className="w-fit">
						<h4 className="text-center text-black text-3xl font-bold mb-3 drop-shadow-md">Moves</h4>
						<div className="bg-lightblue w-80 h-96 rounded-md border-2 border-black shadow-box">
							<ol className="list-decimal text-xs">{moves}</ol>
						</div>
					</div>
				</div>
			</div>
			<footer className="grow mx-auto w-full mt-12 px-10 flex items-center justify-between bg-lightblue mb-0 text-black border-black shadow-2xl">
				<div className="text-base font-medium">
					Made with <i className="mx-2 text-pink-500 fa-regular fa-heart"></i> by RatriaSeza
				</div>
				<div className="text-4xl">
					<a href="https://github.com/RatriaSeza" target="_blank" rel="noreferrer">
						<img className="w-10 bg-black border-2 border-black rounded-full shadow-icon active:shadow-icon-active active:translate-x-[3px] active:translate-y-[3px]" src="/github-mark-white.png" alt="" />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Game;
