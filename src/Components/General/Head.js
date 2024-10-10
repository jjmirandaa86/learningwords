import React from "react";
import {
	Container,
	Navbar,
	Offcanvas,
	Nav,
	NavDropdown,
	Form,
	Button,
} from "react-bootstrap";
import Logo from "../General/Logo";
import Menu from "../General/Menu";

const Head = ({ user }) => {
	const expand = false;
	return (
		<>
			<Navbar
				bg="dark"
				data-bs-theme="dark"
				key={expand}
				expand={expand}
				className="bg-body-tertiary mb-3"
			>
				<Container>
					<Navbar.Brand href="#">
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Menu
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<span>
									<strong>Signed in as:</strong> <em href="#login">Mark Otto</em>
								</span>
								<Menu />
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default Head;

/*
<Navbar bg="dark" data-bs-theme="dark">
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
*/
