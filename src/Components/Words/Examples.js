import React from "react";
import { ListGroup } from "react-bootstrap";

const Examples = ({ data, index }) => {
	return (
		<ListGroup key={index}>
			{data.map((el, index) => (
				<ListGroup.Item key={index}>{el}</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default Examples;
