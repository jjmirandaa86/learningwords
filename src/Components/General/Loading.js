import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LowerCase } from "../../javascript/generalFunctions";

const Loading = () => {
	const { orangeBot } = useSelector((state) => state.general.appearance.color);

	return (
		<div className="text-center">
			<div>Loading...</div>
			<div>
				<Spinner animation="grow" variant={LowerCase(orangeBot)} />
				<Spinner animation="grow" variant={LowerCase(orangeBot)} />
				<Spinner animation="grow" variant={LowerCase(orangeBot)} />
				<Spinner animation="grow" variant={LowerCase(orangeBot)} />
			</div>
		</div>
	);
};

export default Loading;
