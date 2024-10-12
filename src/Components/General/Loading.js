import React from "react";
import {
	styleBlue,
	styleBlack,
	styleOrange,
	styleYellow,
	styleWhite,
} from "../../Styles/generalStyles";
import { Spinner } from "react-bootstrap";

const Loading = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<div>Loading...</div>
			<div>
				<Spinner animation="grow" variant={"warning"} />
				<Spinner animation="grow" variant={"warning"} />
				<Spinner animation="grow" variant={"warning"} />
				<Spinner animation="grow" variant={"warning"} />
			</div>
		</div>
	);
};

export default Loading;
