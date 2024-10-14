import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import FooterDeveloperBy from "../General/FooterDeveloperBy";
import { LongHour } from "../../javascript/generalFunctions";

const Footer = () => {
	const [date, setDate] = useState(LongHour);

	setInterval(() => {
		setDate(LongHour);
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
