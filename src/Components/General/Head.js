import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaBookReader } from "react-icons/fa";

const Head = ({ user }) => {
	return (
		<div>
			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						<FaBookReader /> Learning words
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as: <a href="#login">{user} </a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Head;
