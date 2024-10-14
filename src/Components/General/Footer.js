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
		<>
			<Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
				<Container className={"text-white"}>
					<div className="">
						<FooterDeveloperBy />
					</div>
					<div style={{ fontSize: "12px" }}>{date} </div>
				</Container>
			</Navbar>
		</>
	);
};

export default Footer;

//<div className="w-100 p-3 float-right">{date}</div>
