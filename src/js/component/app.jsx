import React from "react";
import "../../styles/index.scss";
import Bord from "./bord.jsx";
import Heading from "./heading.jsx";

export function App() {
	return (
		<div className="playground">
			<Heading />
			<Bord />
		</div>
	);
}
