"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserLogin from "../../Components/General/UserLogin";
import Words from "../../Components/General/Words";
import KpiLearnWords from "../../Components/Graphics/KpiLearnWords";

const page = () => {
	return (
		<>
			<UserLogin
				data={[
					{
						id: 1,
						title: "Dashboard",
						url: "/dashboard",
					},
				]}
			/>
			<Container>
				<Row>
					<Row>
						<Col sm={8}>
							<Words list={{}} title="List favorite words" />
						</Col>
						<Col sm={4}>
							<h1>Kpi</h1>
							<KpiLearnWords />
						</Col>
					</Row>
					<Col></Col>
					<Col xs sm={4}></Col>
				</Row>
			</Container>
		</>
	);
};

export default page;
