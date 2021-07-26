import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

function Card(props) {
	return (
		<div className="card">
			<h1 className={props.character === "O" ? "playerX" : "playerO"}>
				{props.character}
			</h1>
		</div>
	);
}

export default Card;

Card.propTypes = {
	character: PropTypes.bool
};
