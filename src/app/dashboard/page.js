"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationHeader from "../../Components/General/NavigationHeader";
import Words from "../../Components/General/Words";
import KpiLearnWords from "../../Components/Graphics/KpiLearnWords";

const page = () => {
	const list = [
		{ id: 1, word: "House" },
		{ id: 2, word: "nevertheless" },
		{ id: 3, word: "futermore" },
		{ id: 4, word: "polite" },
		{ id: 5, word: "Sing" },
		{ id: 6, word: "Menu" },
		{ id: 7, word: "deal" },
		{ id: 8, word: "bite" },
		{ id: 9, word: "blow" },
		{ id: 10, word: "provider" },
	];
	return (
		<>
			<NavigationHeader />
			<Container>
				<Row>
					<Row>
						<Col sm={8}>
							<Words list={list} title="List favorite words" />
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
