"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGrid from "../../../Components/General/ListGrid";
import data from "../../data";

const page = () => {
	//w words / c category / cw category + word
	const type = "c";

	return (
		<>
			<Row>
				<Row>
					<Col sm={8}>
						<ListGrid list={data} title="List Category" type={type} />
					</Col>
				</Row>
				<Col></Col>
				<Col xs sm={4}></Col>
			</Row>
		</>
	);
};

export default page;
