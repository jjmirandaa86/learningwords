import React from "react";
import { ListGroup } from "react-bootstrap";

const Examples = ({ data }) => {
	return (
		<ListGroup>
			{data.map((el) => (
				<>
					<ListGroup.Item>{el}</ListGroup.Item>
				</>
			))}
		</ListGroup>
	);
};

export default Examples;
