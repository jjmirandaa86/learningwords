import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const Words = () => {
	const listWords = [
		{
			id: 1,
			category: "NOUN",
			word: "Housed",
			meaning: "It is a place where people live",
			example: [
				"The house is beautiful.",
				"This house is mine.",
				"I prefer staying in my house.",
			],
			association: [],
			img: "",
			status: "F",
		},
	];

	return (
		<div>
			<Card>
				<CardTitle>Back</CardTitle>
				<CardHeader>Noun</CardHeader>
				<CardBody>xsdkl</CardBody>
			</Card>
		</div>
	);
};

export default Words;
