import React from "react";
import { Card, CardBody, ListGroup, Button, Row, Col } from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import PaginationControl from "./PaginationControl.js";

const ListGrid = ({ list = [], title = "", type = "w" }) => {
	return (
		<>
			{type === "w" && <OnlyWords list={list} />}
			{type === "c" && <OnlyCategory list={list} />}
		</>
	);
};

const OnlyWords = ({ list, title }) => {
	return (
		<>
			<Card>
				<CardBody>
					<Card.Title>
						<FaRectangleList /> {title}
					</Card.Title>
					{list.length === 0 ? "No items" : ""}
					{list.length !== 0 ? (
						<ListGroup variant="flush">
							{list.map((item, index) => (
								<ListGroup.Item key={index} action onClick={() => {}}>
									<Row>
										<Col xs={2} sm={1}>
											<h5>
												<FaStar />
											</h5>
										</Col>
										<Col xs={10} sm={11}>
											{item.word}
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						""
					)}

					<PaginationControl />
				</CardBody>
			</Card>
		</>
	);
};

const OnlyCategory = ({ list, title }) => {
	//Filter unique category
	//type === "c" ?
	const result = [];
	list.forEach((item) => {
		if (!result.includes(item.category)) {
			result.push(item.category);
		}
	});
	list = result;

	return (
		<>
			<Card>
				<CardBody>
					<Card.Title>
						<FaRectangleList /> {title}
					</Card.Title>
					{list.length === 0 ? "No items" : ""}
					{list.length !== 0 ? (
						<ListGroup variant="flush">
							{list.map((item, index) => (
								<ListGroup.Item key={index} action onClick={() => {}}>
									<Row>
										<Col xs={2} sm={1}>
											<FaStar />
										</Col>
										<Col xs={10} sm={11}>
											{item}
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						""
					)}

					<PaginationControl />
				</CardBody>
			</Card>
		</>
	);
};

export default ListGrid;
