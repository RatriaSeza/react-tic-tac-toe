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

	function handleReset() {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
		setBoard(Array(9).fill(null));
	}

	const moves = history.map((squares, move) => {
		let description = "";
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}

		return (
			<button key={move} onClick={() => jumpTo(move)} className="bg-white w-11/12 h-8 border-2 font-semibold border-black rounded-md shadow-box active:shadow-box-active active:translate-x-[3px] active:translate-y-[3px]">
				{description} →
			</button>
		);
	});

	return (
		<div className="bg-[#E8E8E8] w-dvw h-fit md:h-dvh flex flex-col justify-between">
			<div className="flex flex-col md:flex-row gap-10 py-10">
				<div className="basis-1/2 flex flex-col items-center md:items-end justify-center">
					<div className="flex flex-col items-center">
						<div className="w-fit">
							<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} board={board} />
						</div>
						<button onClick={handleReset} className="bg-white w-36 h-8 mt-4 border-2 font-semibold border-black rounded-md shadow-box active:shadow-box-active active:translate-x-[3px] active:translate-y-[3px]">
							Reset
						</button>
					</div>
				</div>
				<div className="basis-1/2 flex justify-center md:justify-start mt-0 md:mt-16 md:ml-10">
					<div className="w-fit">
						<h4 className="text-center text-black text-3xl font-bold mb-3 drop-shadow-md">Moves</h4>
						<div className="flex flex-col items-center gap-2 bg-lightblue w-72 md:w-80 h-96 p-2 rounded-md border-2 border-black shadow-box overflow-y-auto">{moves}</div>
					</div>
				</div>
			</div>
			<footer className="fixed bottom-0 mx-auto w-full h-16 px-10 flex items-center justify-between bg-lightblue text-black border-black shadow-2xl">
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
