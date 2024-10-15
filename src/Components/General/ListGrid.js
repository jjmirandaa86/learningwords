import React from "react";
import { Card, ListGroup, Button, Row, Col } from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import PaginationControl from "./PaginationControl.js";
import {
	styleBlue,
	styleBlack,
	styleOrange,
	styleYellow,
	styleWhite,
} from "../../Styles/generalStyles.js";
import { FirstLetterUpperCase } from "../../javascript/generalFunctions.js";

const ListGrid = ({ list = [], title = "", type = "w" }) => {
	return (
		<>
			{type === "w" && <OnlyWords list={list} title={title} />}
			{type === "c" && <OnlyCategory list={list} title={title} />}
		</>
	);
};

const OnlyWords = ({ list, title }) => {
	return (
		<>
			<Card
				bg={"dark"}
				text={"dark" === "light" ? "dark" : "white"}
				border="warning"
				className="border-1"
			>
				<Card.Body>
					<Card.Title>
						<FaRectangleList color={styleOrange} /> {title}
					</Card.Title>
					{list.length === 0 ? "No items" : ""}
					{list.length !== 0 ? (
						<ListGroup variant="dark">
							{list.map((item, index) => (
								<ListGroup.Item
									action
									variant=""
									href={"/dashboard/word/" + FirstLetterUpperCase(item.word)}
									onClick={() => {}}
									key={index}
								>
									<Row>
										<Col xs={2} sm={1}>
											<h5>
												<FaStar color={styleOrange} />
											</h5>
										</Col>
										<Col xs={10} sm={11}>
											{FirstLetterUpperCase(item.word)}
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						""
					)}
					<PaginationControl />
				</Card.Body>
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
			<Card
				bg={"dark"}
				text={"dark" === "light" ? "dark" : "white"}
				border="warning"
				className="border-1"
			>
				<Card.Body>
					<Card.Title>
						<FaRectangleList color={styleOrange} /> {title}
					</Card.Title>
					{list.length === 0 ? "No items" : ""}
					{list.length !== 0 ? (
						<ListGroup variant="dark">
							{list.map((item, index) => (
								<ListGroup.Item action variant="" onClick={() => {}} key={index}>
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
				</Card.Body>
			</Card>
		</>
	);
};

export default ListGrid;
