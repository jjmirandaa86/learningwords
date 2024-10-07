import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../General/Logo";

const Head = ({ user }) => {
	return (
		<>
			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as: <a href="#login">{user} </a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Head;
