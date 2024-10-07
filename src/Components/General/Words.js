import React from "react";
import { Card, CardBody, ListGroup, Button, Row, Col } from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import PaginationControl from "./PaginationControl.js";

const Words = ({ list = [], title = "" }) => {
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
											<Button variant="primary" size="sm">
												<FaStar />
											</Button>
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

export default Words;
