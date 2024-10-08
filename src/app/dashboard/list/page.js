"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationHeader from "../../../Components/General/NavigationHeader";
import ListGrid from "../../../Components/General/ListGrid";

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
		<div>
			<NavigationHeader />

			<Container>
				<Row>
					<Row>
						<Col sm={8}>
							<ListGrid list={list} title="List favorite words" type={type} />
						</Col>
					</Row>
					<Col></Col>
					<Col xs sm={4}></Col>
				</Row>
			</Container>
		</div>
	);
};

export default page;
