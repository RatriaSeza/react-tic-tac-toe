/* eslint-disable react/prop-types */
import XIcon from "./XIcon";
import OIcon from "./OIcon";

function Player({ xIsNext }) {
	return (
		<span className="flex justify-center items-end">
			{xIsNext ? <XIcon className="text-black" /> : <OIcon className="text-black" />} <span className="text-4xl ml-3">Turn</span>
		</span>
	);
}

export default Player;
