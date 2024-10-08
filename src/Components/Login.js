import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import Logo from "../Components/General/Logo";
import { FaBookReader } from "react-icons/fa";

const Login = () => {
	return (
		<>
			<div className="text-center display-1 p-4">
				<FaBookReader />
			</div>
			<Container>
				<Form>
					<Row>
						<Col></Col>
						<Col sm={8} lg={6}>
							<Card>
								<Card.Header>
									{" "}
									<Logo />
								</Card.Header>
								<Card.Body>
									<Card.Title>Login</Card.Title>
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
													<strong>Credential Testing:</strong>
													User: admin Password: admin
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
								<Card.Footer className="text-muted">Ongoing development</Card.Footer>
							</Card>
						</Col>
						<Col></Col>
					</Row>
				</Form>
			</Container>
		</>
	);
};

export default Login;
