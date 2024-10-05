import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./Data";
import React, { useState } from "react";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

const Model = () => {
	const [chartData, setChartData] = useState({
		labels: Data.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained ",
				data: Data.map((data) => data.userGain),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
				height: "200",
			},
		],
	});

	return (
		<div>
			<div className="App">
				<PieChart chartData={chartData} />
			</div>
		</div>
	);
};

export default Model;
