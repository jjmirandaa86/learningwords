import React from "react";
import {
	Container,
	Card,
	CardBody,
	ListGroup,
	Button,
	Row,
	Col,
} from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import PaginationControl from "./PaginationControl";

const Words = ({ list = {}, title = "" }) => {
	return (
		<>
			<Card>
				<CardBody>
					<Card.Title>
						<FaRectangleList /> {title}
					</Card.Title>
					<ListGroup variant="flush">
						<ListGroup.Item action onClick={() => {}}>
							<Row>
								<Col xs sm={2}>
									{"1"}
								</Col>
								<Col xs sm={8}>
									{"House"}
								</Col>
								<Col xs sm={2}>
									<Button variant="primary" size="sm">
										<FaStar />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item action onClick={() => {}}>
							<Row>
								<Col xs sm={2}>
									{"1"}
								</Col>
								<Col xs sm={8}>
									{"House"}
								</Col>
								<Col xs sm={2}>
									<Button variant="primary" size="sm">
										<FaStar />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item action onClick={() => {}}>
							<Row>
								<Col xs sm={2}>
									{"1"}
								</Col>
								<Col xs sm={8}>
									{"House"}
								</Col>
								<Col xs sm={2}>
									<Button variant="primary" size="sm">
										<FaStar />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item action onClick={() => {}}>
							<Row>
								<Col xs sm={2}>
									{"1"}
								</Col>
								<Col xs sm={8}>
									{"House"}
								</Col>
								<Col xs sm={2}>
									<Button variant="primary" size="sm">
										<FaStar />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item action onClick={() => {}}>
							<Row>
								<Col xs sm={2}>
									{"1"}
								</Col>
								<Col xs sm={8}>
									{"House"}
								</Col>
								<Col xs sm={2}>
									<Button variant="primary" size="sm">
										<FaStar />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
					<PaginationControl />
				</CardBody>
			</Card>
		</>
	);
};

export default Words;
