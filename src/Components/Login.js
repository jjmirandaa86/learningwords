import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
	return (
		<Container>
			<Form>
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
							<p>Credential Testing: </p>
							<p>User: admin Password: admin</p>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="primary" size="sm" href="/dashboard">
							Login
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Login;
