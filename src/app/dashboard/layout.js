"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Head from "../../Components/General/Head";
import Footer from "../../Components/General/Footer";

const RootLayout = ({ children }) => {
	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #121f1d, #0b5871, #eda800)",
				width: "100%",
				margin: "0",
				paddingBottom: "100px",
				display: "relative",
				height: "100%",
			}}
			className=""
		>
			<Head user={"admin"}></Head>
			<Container>{children}</Container>
			<Footer />
		</div>
	);
};

export default RootLayout;
