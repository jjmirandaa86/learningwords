import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import PaginationControl from "./PaginationControl.js";
import { FirstLetterUpperCase } from "../../javascript/generalFunctions.js";
import { useSelector } from "react-redux";

const ListGrid = ({ list = [], title = "", type = "w" }) => {
	const { orangeHex } = useSelector((state) => state.general.appearance.color);

	return (
		<>
			{type === "w" && (
				<OnlyWords orangeHex={orangeHex} list={list} title={title} />
			)}
			{type === "c" && (
				<OnlyCategory orangeHex={orangeHex} list={list} title={title} />
			)}
		</>
	);
};

const OnlyWords = ({ list, title, orangeHex }) => {
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
						<FaRectangleList color={orangeHex} /> {title}
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
												<FaStar color={orangeHex} />
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

const OnlyCategory = ({ list, title, orangeHex }) => {
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
						<FaRectangleList color={orangeHex} /> {title}
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
