// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
	return (
		<button onClick={onSquareClick} className="w-10 h-10 border border-solid bg-white border-black text-2xl font-bold cursor-pointer">
			{value}
		</button>
	);
}

export default Square;