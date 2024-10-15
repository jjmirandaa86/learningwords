import React, { useState } from "react";
import Loading from "./General/Loading";
import Logo from "./General/Logo";
import { Container, Row, Col, Navbar, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useLoadingWebHook } from "../Controller/useLoadingWebHook";
import { useSelector } from "react-redux";

const LoadingWeb = () => {
	const { blueHex } = useSelector((state) => state.general.appearance.color);
	const { wordsRandom } = useLoadingWebHook();

	const MarqueeList = () => {
		return (
			<>
				{wordsRandom.map((el) => (
					<div key={el.id} className="m-0 d-inline-flex fs-1">
						<div style={{ marginRight: "10px" }}>{el.component}</div>
						<div style={{ marginRight: "100px" }}>{el.name}</div>
					</div>
				))}{" "}
			</>
		);
	};

	return (
		<div
			className="m-0"
			style={{ height: "100vh", backgroundColor: `${blueHex}` }}
		>
			<div
				style={{
					paddingTop: "100px",
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
						<Col xs={12} sm={8} md={8} lg={6}>
							<div className="d-flex text-center">
								<Image src={"svg/pacman.svg"} alt="Eat words while, you are learning" />
								<Marquee speed={150}>
									<MarqueeList />
								</Marquee>
							</div>
						</Col>
						<Col></Col>
					</Row>
				</Container>
				<Navbar fixed="bottom">
					<Image src={"svg/waveButton.svg"} alt="Wave effect of website" />
				</Navbar>
			</div>
		</div>
	);
};

export default LoadingWeb;
