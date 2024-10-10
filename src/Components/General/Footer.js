import React from "react";
import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import FooterDeveloperBy from "../General/FooterDeveloperBy";

const Footer = () => {
	return (
		<div>
			<Container>
				<Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
					<FooterDeveloperBy />
				</Navbar>
			</Container>
		</div>
	);
};

export default Footer;
