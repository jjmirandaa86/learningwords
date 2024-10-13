import React from "react";
import { Card, Row, Col, Container, Image, Form } from "react-bootstrap";
import {
	FirstLetterUpperCase,
	UpperCase,
} from "../javascript/generalFunctions";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import {
	styleBlue,
	styleBlack,
	styleOrange,
	styleYellow,
	styleWhite,
} from "../Styles/generalStyles";

const Word = ({ word = null }) => {
	const data = {
		id: 1,
		type: "NOUN",
		category: "Basic English",
		word: "House",
		meaning: "It is a place where people live",
		example: [
			"The house is beautiful.",
			"This house is mine.",
			"I prefer staying in my house.",
		],
		pronunciation: "ssdsdd",
		synonyms: [],
		antonyms: [],
		img: "https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg",
		status: "F",
	};

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>
						<Row>
							<Col>
								<h5>{FirstLetterUpperCase(data.category)}</h5>
							</Col>
							<Col style={{ textAlign: "end" }}>
								<h5>{FirstLetterUpperCase(data.type)}</h5>
							</Col>
						</Row>
						<Row>
							<Col style={{ textAlign: "start" }}>
								<h1>
									{data.pronunciation !== "" ? (
										<HiSpeakerWave color={styleOrange} />
									) : (
										<HiOutlineSpeakerWave />
									)}
								</h1>
							</Col>
							<Col xs={8} style={{ textAlign: "center" }}>
								<h1>{UpperCase(word)}</h1>
							</Col>
							<Col style={{ textAlign: "end" }}>
								<h1>
									{data.status === "F" ? <FaStar color={styleOrange} /> : <FaRegStar />}
								</h1>
							</Col>
						</Row>
					</Card.Title>
					<div style={{ textAlign: "center" }}>
						<Image src={data.img} rounded style={{ width: "90%" }} />
					</div>
					<h3>
						<strong>{data.meaning}</strong>
					</h3>
					{/* EXAMPLES */}
					<h4>
						<ul>
							{data.example.map((example, index) => (
								<li key={index}>
									<h6>{example}</h6>
								</li>
							))}
						</ul>
					</h4>
					<Row>
						{/* SYNONYMS */}
						<Col>
							<h4>
								<ul>
									{data.synonyms.map((el, index) => (
										<li key={index}>
											<h6>{el}</h6>
										</li>
									))}
								</ul>
							</h4>
						</Col>
						{/* ANTONYMS */}
						<Col>
							<h4>
								<ul>
									{data.antonyms.map((el, index) => (
										<li key={index}>
											<h6>{el}</h6>
										</li>
									))}
								</ul>
							</h4>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Word;
