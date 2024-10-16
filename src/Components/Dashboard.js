import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGrid from "../Components/General/ListGrid";
import KpiLearnWords from "../Components/Graphics/KpiLearnWords";
import data from "../app/data";

const Dashboard = () => {
	const type = "w";
	return (
		<>
			<Row>
				<Col xs sm md={12} lg={6}>
					<ListGrid list={data} title="List favorite words" type={type} />
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
