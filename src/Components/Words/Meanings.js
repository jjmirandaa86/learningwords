import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import Examples from "./Examples";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";

const Meanings = ({ data, index }) => {
	return (
		<Accordion.Item eventKey={index}>
			<Accordion.Header>
				{data.id}
				{" - "} {data.meaning}
			</Accordion.Header>
			<Accordion.Body style={{ textAlign: "left" }}>
				<Examples key={index} index={index} data={data.examples} />
				<Row>
					<Col></Col>
					<Col className="m-1">
						<strong>{"Synonyms"}</strong>
						<Synonyms key={index} data={data.synonyms} />
					</Col>
					<Col className="m-1">
						<strong>{"Antonyms"}</strong>
						<Antonyms key={index} data={data.antonyms} />
					</Col>
					<Col></Col>
				</Row>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Meanings;
