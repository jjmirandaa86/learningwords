"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationHeader from "../../Components/General/NavigationHeader";
import ListGrid from "../../Components/General/ListGrid";
import KpiLearnWords from "../../Components/Graphics/KpiLearnWords";

const page = () => {
	const list = [
		{ id: 1, word: "House", category: "noun" },
		{ id: 2, word: "nevertheless", category: "connector" },
		{ id: 3, word: "furthermore", category: "connector" },
		{ id: 4, word: "polite", category: "adjective" },
		{ id: 5, word: "Sing", category: "noun" },
		{ id: 6, word: "Menu", category: "noun" },
		{ id: 7, word: "deal", category: "adjective" },
		{ id: 8, word: "bite", category: "verb" },
		{ id: 9, word: "blow", category: "verb" },
		{ id: 10, word: "provider", category: "adjective" },
	];

	const type = "w";

	return (
		<>
			<NavigationHeader />
			<Container>
				<Row>
					<Col xs={12} sm={12} md={8} lg={6}>
						<ListGrid list={list} title="List favorite words" type={type} />
					</Col>
					<Col>
						<h1>Kpi</h1>
						<KpiLearnWords />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default page;
