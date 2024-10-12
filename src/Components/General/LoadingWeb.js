import React, { useState } from "react";
import {
	FaApple,
	FaCrown,
	FaGhost,
	FaGift,
	FaGlobeAmericas,
	FaGrinStars,
	FaHeart,
	FaKey,
	FaMoon,
	FaRedhat,
} from "react-icons/fa";
import Loading from "./Loading";
import Logo from "./Logo";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const LoadingWeb = () => {
	const words = [
		{ id: 1, name: "Apple", component: <FaApple color={"red"} /> },
		{ id: 2, name: "Crown", component: <FaCrown color={"red"} /> },
		{ id: 3, name: "Ghost", component: <FaGhost color={"red"} /> },
		{ id: 4, name: "Gift", component: <FaGift color={"red"} /> },
		{ id: 5, name: "World", component: <FaGlobeAmericas color={"red"} /> },
		{ id: 6, name: "Happy", component: <FaGrinStars color={"red"} /> },
		{ id: 7, name: "Heart", component: <FaHeart color={"red"} /> },
		{ id: 8, name: "Key", component: <FaKey color={"red"} /> },
		{ id: 9, name: "Moon", component: <FaMoon color={"red"} /> },
		{ id: 10, name: "Hat", component: <FaRedhat color={"red"} /> },
	];

	//different words each connections
	const wordsRandom = words
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	const MarqueeList = () => {
		return (
			<>
				{wordsRandom.map((el) => (
					<div
						key={el.id}
						style={{ margin: "0", display: "inline-flex", fontSize: "40px" }}
					>
						<div style={{ marginRight: "10px" }}>{el.component}</div>
						<div style={{ marginRight: "100px" }}>{el.name}</div>
					</div>
				))}{" "}
			</>
		);
	};

	return (
		<div style={{ height: "100vh" }}>
			<div
				style={{
					backgroundColor: "#121f1d",
					width: "100%",
					margin: "0",
					paddingTop: "100px",
					paddingBottom: "100px",
					height: "100%",
					color: "white",
				}}
			>
				<Container fluid="md">
					<Row>
						<Col>
							<div className="p-5">
								<Logo />
							</div>
						</Col>
					</Row>
					<Row>
						<Col></Col>
						<Col sm lg xl={4}>
							<div className="mt-5">
								<Loading />
							</div>
						</Col>
						<Col></Col>
					</Row>
					<Row>
						<Col></Col>
						<Col xs={10} sm={8} md={8} lg={6}>
							<div style={{ display: "flex", alignItems: "center" }}>
								<img src={"svg/pacman.svg"} alt="React Logo" />
								<Marquee speed={150}>
									<MarqueeList />
								</Marquee>
							</div>
						</Col>
						<Col></Col>
					</Row>
				</Container>
				<Navbar fixed="bottom">
					<img src={"svg/waveButton.svg"} alt="React Logo" />
				</Navbar>
			</div>
		</div>
	);
};

export default LoadingWeb;
