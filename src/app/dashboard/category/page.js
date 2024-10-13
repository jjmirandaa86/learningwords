"use client";

import React from "react";
import NavigationHeader from "../../../Components/General/NavigationHeader";
import { Container, Row, Col } from "react-bootstrap";
import ListGrid from "../../../Components/General/ListGrid";

const page = () => {
	const list = [
		{
			id: 1,
			word: "House",
			type: "noun",
			category: "The 100 verb, ypu need know.",
		},
		{ id: 2, word: "nevertheless", type: "connector", category: "connector" },
		{ id: 3, word: "furthermore", type: "connector", category: "connector" },
		{ id: 4, word: "polite", type: "adjective", category: "idioms" },
		{ id: 5, word: "Sing", type: "noun", category: "Basic English" },
		{ id: 6, word: "Menu", type: "noun", category: "noun" },
		{ id: 7, word: "deal", type: "adjective", category: "adjective" },
		{
			id: 8,
			word: "bite",
			type: "verb",
			category: "The 100 verb, ypu need know.",
		},
		{
			id: 9,
			word: "blow",
			type: "verb",
			category: "The 100 verb, ypu need know.",
		},
		{ id: 10, word: "provider", type: "adjective", category: "adjective" },
	];

	//w words / c category / cw category + word
	const type = "c";

	return (
		<>
			<NavigationHeader />
			<Container>
				<Row>
					<Row>
						<Col sm={8}>
							<ListGrid list={list} title="List Category" type={type} />
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
