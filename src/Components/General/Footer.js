import React, { useState } from "react";
import Link from "next/link";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import FooterDeveloperBy from "../General/FooterDeveloperBy";
import moment from "moment";

const Footer = () => {
	const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

	setInterval(() => {
		setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
	}, 1000);

	return (
		<div>
			<Container>
				<Navbar fixed="bottom" bg="light" data-bs-theme="light">
					<div className="w-100 p-3 float-left">
						<FooterDeveloperBy />
					</div>
					<div className="w-100 p-3">{date}</div>
				</Navbar>
			</Container>
		</div>
	);
};

export default Footer;

//<div className="w-100 p-3 float-right">{date}</div>
