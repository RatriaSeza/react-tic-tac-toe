// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
	return (
		<button onClick={onSquareClick} className="w-20 h-20 bg-white text-2xl font-bold rounded-md cursor-pointer">
			{value}
		</button>
	);
}

export default Square;