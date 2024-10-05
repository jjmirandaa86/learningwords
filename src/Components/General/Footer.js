import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
	return (
		<div>
			<Container>
				<Navbar expand="lg" fixed="bottom" className="bg-body-tertiary ">
					<Navbar.Brand href="#">
						Developed by:{" "}
						<a href="https://www.acertijo.dev/" target="_blank">
							acertijo.dev
						</a>
					</Navbar.Brand>
				</Navbar>
			</Container>
		</div>
	);
};

export default Footer;
