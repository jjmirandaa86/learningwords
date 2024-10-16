import React from "react";
import {
	Card,
	Row,
	Col,
	Container,
	Image,
	Form,
	Accordion,
} from "react-bootstrap";
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
import Meanings from "./Words/Meanings";
import Synonyms from "./Words/Synonyms";

const Word = ({ data = {} }) => {
	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>
						<Row>
							<Col xs={9}>
								<h6>{FirstLetterUpperCase(`${data.category}`)}</h6>
							</Col>
							<Col style={{ textAlign: "end" }}>
								<h6>{FirstLetterUpperCase(`${data.type}`)}</h6>
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
								<h1>{UpperCase(`${data.word}`)}</h1>
							</Col>
							<Col style={{ textAlign: "end" }}>
								<h1>
									{data.status === "F" ? <FaStar color={styleOrange} /> : <FaRegStar />}
								</h1>
							</Col>
						</Row>
					</Card.Title>

					<div style={{ textAlign: "center" }}>
						<Row>
							<Col xs={8} sm={7} md={5} lg={5}>
								<div style={{ display: "block", margin: "auto" }}>
									<Image
										src={data.image}
										style={{ width: "90%" }}
										alt={`${data.word} - ${data.category}`}
										rounded
									/>
								</div>
							</Col>
							<Col>
								<Accordion>
									{data.meanings.map((el, index) => {
										return (
											<>
												<Meanings key={index} data={el} index={index} />
											</>
										);
									})}
								</Accordion>
							</Col>
						</Row>
					</div>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Word;
