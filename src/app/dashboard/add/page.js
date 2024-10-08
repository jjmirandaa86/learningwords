"use client";
import React from "react";
import NavigationHeader from "../../../Components/General/NavigationHeader";
import { Card, Button, Form } from "react-bootstrap";

const page = () => {
	const list = [
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
			<NavigationHeader />
			<Card>
				<Card.Body>
					<Card.Title>New word</Card.Title>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Category: </Form.Label>
							<Form.Select aria-label="Default select example">
								<option>Choose one</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Word:</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Meaning:</Form.Label>
							<Form.Control as="textarea" rows={2} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Example:</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Image:</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Status: </Form.Label>
							<Form.Select aria-label="Default select example">
								<option value="F">Favorite</option>
								<option value="P">Pendent</option>
							</Form.Select>
						</Form.Group>
					</Form>
					<Button variant="primary">Save</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default page;
