"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Head from "../../Components/General/Head";
import Footer from "../../Components/General/Footer";
import Message from "../../Components/General/Message";
import NavigationHeader from "../../Components/General/NavigationHeader";
import store from "../../Redux/store";
import { Provider } from "react-redux";

const RootLayout = ({ children }) => {
	return (
		<>
			<Message />
			<div
				style={{
					height: "100vh",
					background: "linear-gradient(to bottom, #121f1d, #0b5871, #eda800)",
					margin: "0",
				}}
				className=""
			>
				<Head user={"admin"}></Head>
				<Container>
					<NavigationHeader />
					<Container>
						<Provider store={store}>{children}</Provider>
					</Container>
				</Container>
				<Footer />
			</div>
		</>
	);
};

export default RootLayout;
