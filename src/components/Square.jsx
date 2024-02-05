// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
	return (
		<button onClick={onSquareClick} className="w-20 h-20 bg-lightblue text-2xl font-bold rounded-md cursor-pointer border-2 border-black shadow-box active:shadow-box-active active:translate-x-[3px] active:translate-y-[3px]">
			{value}
		</button>
	);
}

export default Square;