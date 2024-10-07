"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationHeader from "../../Components/General/NavigationHeader";
import Words from "../../Components/General/Words";
import KpiLearnWords from "../../Components/Graphics/KpiLearnWords";

const page = () => {
	return (
		<>
			<NavigationHeader />
			<Container>
				<Row>
					<Row>
						<Col sm={8}>
							<Words list={{}} title="List favorite words" />
						</Col>
						<Col sm={4}>
							<h1>Kpi</h1>
							<KpiLearnWords />
						</Col>
					</Row>
					<Col></Col>
					<Col xs sm={4}></Col>
				</Row>
			</Container>
		</>
	);
};

export default page;
