import React from "react";

import { Row, Col } from "react-bootstrap";
import ListGrid from "../Components/General/ListGrid";
import data from "../app/data";

const ListWords = () => {
	const type = "w";
	return (
		<>
			<Row>
				<Row>
					<Col sm={8}>
						<ListGrid list={data} title="List words" type={type} />
					</Col>
				</Row>
				<Col></Col>
				<Col xs sm={4}></Col>
			</Row>
		</>
	);
};

export default ListWords;
