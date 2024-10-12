import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import Logo from "../Components/General/Logo";
import FooterDeveloperBy from "../Components/General/FooterDeveloperBy";
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
		<div
			style={{
				height: "100vh",
				background: "linear-gradient(to bottom, #121f1d, #0b5871, #eda800)",
				margin: "0",
			}}
		>
			<div
				className="text-center"
				style={{ paddingTop: "80px", paddingBottom: "50px" }}
			>
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
									<FooterDeveloperBy />
								</Card.Footer>
							</Card>
						</Col>
						<Col></Col>
					</Row>
				</Form>
			</Container>
		</div>
	);
};

export default Login;
