import React from "react";
import "../../styles/index.scss";
import Bord from "./bord.js";
import Heading from "./heading.js";

export function App() {
	return (
		<div className="playground">
			<Heading />
			<Bord />
		</div>
	);
}
