import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import "../../styles/index.scss";

const Bord = () => {
	const defaultBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
	const [values, togglevalues] = useState(defaultBoard);
	const [turn, changeTurn] = useState(true);
	const [disable, toggledisable] = useState(false);
	const [winmessage, setmessage] = useState("");

	const win = i => {
		let char = turn ? "X" : "O";
		if (
			values[i] === char &&
			values[(i + 3) % 9] === char &&
			values[(i + 6) % 9] === char
		) {
			return true;
		}
		let weight = i > 2 ? 3 : 0;
		weight = i > 5 ? 6 : weight;
		if (
			values[(i % 3) + weight] === char &&
			values[((i + 1) % 3) + weight] === char &&
			values[((i + 2) % 3) + weight] === char
		) {
			return true;
		}
		if (values[0] === char && values[4] === char && values[8] === char) {
			return true;
		}
		if (values[2] === char && values[4] === char && values[6] === char) {
			return true;
		}
		return false;
	};

	const onClickCard = i => {
		if (disable) {
			return;
		}
		let data = values;
		if (turn && values[i] === " ") {
			data[i] = "X";
		} else if (values[i] === " ") {
			data[i] = "O";
		} else {
			return;
		}
		togglevalues(data);
		changeTurn(!turn);
		if (!values.includes(" ")) {
			setmessage(`Match is Draw`);
		}
		if (win(i)) {
			toggledisable(true);
			setmessage(`${turn ? "X" : "O"} Wins`);
		}
	};

	const resetHandler = () => {
		toggledisable(false);
		togglevalues(defaultBoard);
		setmessage("");
	};

	return (
		<div className="Board">
			<h1 className={!turn ? "playerX winMessage" : "playerO winMessage"}>
				{winmessage}
			</h1>
			{values.map((val, i) => (
				<span
					key={i}
					onClick={() => {
						onClickCard(i);
					}}>
					<Card character={val} />
				</span>
			))}

			<button onClick={resetHandler} className="btn reset-btn mt-4">
				Reset
			</button>
		</div>
	);
};

export default Bord;
