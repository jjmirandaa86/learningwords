"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Head from "../../Components/General/Head";
import Footer from "../../Components/General/Footer";

const RootLayout = ({ children }) => {
	return (
		<>
			<Head user={"admin"}></Head>
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default RootLayout;
