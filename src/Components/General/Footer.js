import React from "react";
import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
	return (
		<div>
			<Container>
				<Navbar expand="lg" fixed="bottom" className="bg-body-tertiary ">
					<Navbar.Brand href="#">Developed by: </Navbar.Brand>
					<Link href="https://www.acertijo.dev/" target="_blank">
						{" "}
						acertijo.dev
					</Link>
				</Navbar>
			</Container>
		</div>
	);
};

export default Footer;
