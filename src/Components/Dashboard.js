import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGrid from "../Components/General/ListGrid";
import KpiLearnWords from "../Components/Graphics/KpiLearnWords";

const Dashboard = () => {
	const list = [
		{ id: 1, word: "House", category: "noun" },
		{ id: 2, word: "nevertheless", category: "connector" },
		{ id: 3, word: "furthermore", category: "connector" },
		{ id: 4, word: "polite", category: "adjective" },
		{ id: 5, word: "Sing", category: "noun" },
		{ id: 6, word: "Menu", category: "noun" },
		{ id: 7, word: "deal", category: "adjective" },
		{ id: 8, word: "bite", category: "verb" },
		{ id: 9, word: "blow", category: "verb" },
		{ id: 10, word: "provider", category: "adjective" },
	];

	const type = "w";
	return (
		<>
			<Row>
				<Col xs sm md={12} lg={6}>
					<ListGrid list={list} title="List favorite words" type={type} />
				</Col>
				{/* ClassName hide KPI dependent of resolutions: HIDE: xs sm md */}
				<Col className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
					<h1 className={"text-white"}>KPI</h1>
					<KpiLearnWords />
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
