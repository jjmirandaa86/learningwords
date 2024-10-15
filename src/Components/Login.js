import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import Logo from "../Components/General/Logo";
import FooterDeveloperBy from "../Components/General/FooterDeveloperBy";
import { FaBookReader } from "react-icons/fa";
import { useLoginHook } from "../Controller/useLoginHook";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Login = () => {
	const { orangeHex } = useSelector((state) => state.general.appearance.color);

	const { color1, color2, color3 } = useSelector(
		(state) => state.general.appearance.background.gradient,
	);

	const { bg, borderColor, borderSize } = useSelector(
		(state) => state.general.appearance.card,
	);

	const router = useRouter();

	const { form, login, errors, handleChange, handleBlur, handleLogin } =
		useLoginHook();

	return (
		<div
			className="m-0"
			style={{
				height: "100vh",
				background: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`,
			}}
		>
			<div
				className="text-center"
				style={{ paddingTop: "80px", paddingBottom: "50px" }}
			>
				<FaBookReader size={100} color={orangeHex} />
			</div>
			<Container>
				<Form noValidate validated={true}>
					<Row>
						<Col></Col>
						<Col sm={8} lg={6}>
							<Card
								bg={bg}
								text={bg === "light" ? "dark" : "white"}
								border={borderColor}
								className={`border-${borderSize}`}
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
											<Form.Group className="mb-3" controlId="formGroupUser">
												<Form.Label>User</Form.Label>
												<Form.Control
													required
													type="text"
													placeholder="Enter user"
													name="username"
													value={form.username}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.username}{" "}
												</Form.Control.Feedback>
											</Form.Group>
										</Col>
									</Row>

									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formGroupPassword">
												<Form.Label>Password</Form.Label>
												<Form.Control
													required
													type="password"
													placeholder="Enter Password"
													name="password"
													value={form.password}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.password}{" "}
												</Form.Control.Feedback>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formGroupNewUser">
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
											<Button variant="primary" size="sm" onClick={handleLogin}>
												{login ? router.push("/dashboard") : null}
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
