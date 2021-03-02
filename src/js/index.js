//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ClockFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

import * as Icon from "react-bootstrap-icons";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//const [seconds, SetSeconds] = useState(0);

export function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="clockNumber">
					<ClockFill />
				</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">{props.digitTwo % 10}</div>
				<div className="clockNumber">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitOne: PropTypes.string,
	digitTwo: PropTypes.string
};

let counter = 0;

//render your react application
setInterval(function() {
	let primerDigito = Math.floor(counter / 1);
	let segundoDigito = Math.floor(counter / 10);
	counter++;
	ReactDOM.render(
		<SecondsCounter digitOne={primerDigito} digitTwo={segundoDigito} />,
		document.querySelector("#app")
	);
}, 1000);
