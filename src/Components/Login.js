import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import Logo from "../Components/General/Logo";
import { FaBookReader } from "react-icons/fa";
import {
	styleBlue,
	styleOrange,
	styleBlack,
	styleWhite,
	styleYellow,
} from "../Styles/generalStyles";

const Login = () => {
	return (
		<div style={{}}>
			<div className="text-center display-1 p-4">
				<FaBookReader size={100} color={styleOrange} />
			</div>
			<Container>
				<Form>
					<Row>
						<Col></Col>
						<Col sm={8} lg={6}>
							<Card
								bg={"dark"}
								text={"dark" === "light" ? "dark" : "white"}
								border="warning"
								className="border-5"
							>
								<Card.Header>
									{" "}
									<Logo />
								</Card.Header>
								<Card.Body>
									<Card.Title>Login</Card.Title>
									<br></br>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formGroupEmail">
												<Form.Label>Email</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
											</Form.Group>
										</Col>
									</Row>

									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formGroupPassword">
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formGroupPassword">
												<i>
													Are you new user?{" "}
													<strong>
														<em>Register here!</em>
													</strong>
												</i>
											</Form.Group>
										</Col>
									</Row>
									<Row className="text-center">
										<Col>
											<Button variant="primary" size="sm" href="/dashboard">
												Login
											</Button>
										</Col>
									</Row>
								</Card.Body>
								<Card.Footer>
									Developer by:{" "}
									<a href="http://www.acertijo.dev" target="_blank">
										Jefferson Miranda {"✌️"}
									</a>
								</Card.Footer>
							</Card>
						</Col>
						<Col></Col>
					</Row>
				</Form>
			</Container>
			quod! Commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Obcaecati repellat cupiditate dolore nemo laborum? Eum commodi numquam vitae
			at a! Mollitia voluptatibus non dolor sunt veritatis culpa corporis.
			Reprehenderit, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Eum nesciunt mollitia repellat, delectus praesentium, molestiae quod
			distinctio hic, aspernatur corrupti aperiam officia placeat neque suscipit
			voluptatum? Officiis fugit enim magni! Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Dicta, dolor error a non sit assumenda. Laborum
			harum amet ducimus libero animi fugiat magni, eaque, eos dicta pariatur est
			sequi cum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
			magnam omnis quia officia incidunt consectetur aspernatur porro vero
			quibusdam pariatur excepturi ut alias, totam, rerum, amet asperiores
			cupiditate enim nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Incidunt sed minima deserunt pariatur nobis fugiat ea natus repellat
			voluptate doloremque dolor quod, sequi dicta, enim, quae voluptatem explicabo
			adipisci assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Maiores expedita consectetur nisi recusandae cumque cupiditate itaque alias
			perspiciatis, sint ex ipsum neque temporibus unde illo ipsa nobis aliquid.
			Iste, quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
			laudantium veritatis ab et! Suscipit omnis quam aliquid dolor vel? Tempore
			quos tempora asperiores laboriosam voluptatibus ad excepturi molestias beatae
			sed!
		</div>
	);
};

export default Login;
