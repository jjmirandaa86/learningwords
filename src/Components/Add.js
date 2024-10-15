import React, { useState } from "react";
import {
	Card,
	Button,
	Form,
	Container,
	Row,
	Col,
	ListGroup,
	Accordion,
	Image,
} from "react-bootstrap";

const Add = () => {
	const data = {
		id: 1,
		type: "NO", //NOUN
		category: 1, //"Basic English",
		word: "House",
		meanings: [
			{
				id: 1,
				meaning:
					"Noun: A building for human habitation, especially one that consists of a ground floor and one or more upper storeys.",
				examples: ["my wife and I are moving to a new house"],
				synonyms: ["Place of residence", "Homestead", "Lodging place"],
				antonyms: ["c", "x"],
			},
			{
				id: 2,
				meaning:
					"Adjective: (of an animal or plant) kept in, frequenting, or infesting buildings.",
				examples: ["relating to a firm, institution, or society."],
				synonyms: [],
				antonyms: [],
			},
			{
				id: 3,
				meaning: "Verb: provide with shelter or accommodation.",
				examples: ["provide with shelter or accommodation."],
				synonyms: ["Accommodate", "provide accommodation for"],
				antonyms: ["c"],
			},
		],
		pronunciation: "ssdsdd",
		image: "https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg",
		status: "F",
	};

	const [form, setForm] = useState(data);

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};
	const variant = "Dark";

	return (
		<>
			<Row>
				<Col></Col>
				<Col xs={12}>
					<Card
						bg={variant.toLowerCase()}
						key={variant}
						text={variant.toLowerCase() === "light" ? "dark" : "white"}
						border="warning"
						className="border-1"
					>
						<Card.Body>
							<Card.Title>New word</Card.Title>
							<Form>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Id:</Form.Label>
									<Form.Control type="text" disabled readOnly value={data.id} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Type: </Form.Label>
									<Form.Select
										aria-label="Default select example"
										defaultValue={"NO"}
										onChange={handleChange}
										name={"type"}
										value={form.type}
									>
										<option>Choose one</option>
										<option value="NO">Noun</option>
										<option value="VE">Verb</option>
										<option value="CO">Connector</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Category: </Form.Label>
									<Form.Select
										aria-label="Default select example"
										onChange={handleChange}
										name={"category"}
										value={form.category}
									>
										<option>Choose one</option>
										<option value="1">Basic English</option>
										<option value="2">Office</option>
										<option value="3">Places</option>
										<option value="3">Computer</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Word:</Form.Label>
									<Form.Control
										type="text"
										onChange={handleChange}
										value={form.word}
										name={"word"}
									/>
									<Form.Control.Feedback type="invalid">
										Please choose a username.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Label>Meaning:</Form.Label>
									<Container>
										<Button type="button">+</Button>
										<Row>
											{/* ADD DATA*/}
											<Col>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Meaning:</Form.Label>
													<Form.Control type="text" value={data.meanings.meaning} />
												</Form.Group>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Example:</Form.Label>
													<Form.Control type="text" />
												</Form.Group>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Synonyms:</Form.Label>
													<Form.Control type="text" value={data.word} />
												</Form.Group>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Antonyms:</Form.Label>
													<Form.Control type="text" value={data.word} />
												</Form.Group>
											</Col>
											{/* SHOW DATA*/}
											<Col>
												{data.meanings.length > 0 &&
													data.meanings.map((el, index) => (
														<Accordion key={index}>
															<Accordion.Item eventKey="0">
																<Accordion.Header>{el.meaning}</Accordion.Header>
																<Accordion.Body>
																	<ListGroup>
																		{el.examples.map((el2, index) => (
																			<ListGroup.Item key={index}>
																				{index + 1}
																				{" - "} {el2}{" "}
																			</ListGroup.Item>
																		))}
																		<Row>
																			<Col>
																				{el.synonyms.map((el3, index) => (
																					<ol key={index}>{el3} </ol>
																				))}
																			</Col>
																			<Col>
																				{el.antonyms.map((el3, index) => (
																					<ol key={index}>{el3} </ol>
																				))}
																			</Col>
																		</Row>
																	</ListGroup>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													))}
											</Col>
										</Row>
									</Container>
								</Form.Group>

								<Form.Group controlId="formFile" className="mb-3">
									<Form.Label>Image:</Form.Label>
									<Form.Control
										type="file"
										onChange={handleChange}
										name={"image"}
										value={form.image}
									/>
									<Image
										src={form.image}
										width={100}
										height={100}
										alt={form.category}
										rounded
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Status: </Form.Label>
									<Form.Select
										aria-label="Default select example"
										onChange={handleChange}
										name={"status"}
										value={form.status}
									>
										<option value="F">Favorite</option>
										<option value="P">Pendent</option>
									</Form.Select>
								</Form.Group>
							</Form>
							<Button variant="primary">Save</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col></Col>
			</Row>
		</>
	);
};

export default Add;
