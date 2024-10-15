import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

const PieChart = () => {
	//Word by status
	//F favoritas || L learning || K Knowing
	//1000 100          100         800

	const Data = [
		{
			id: 1,
			status: "Favorite",
			countWords: 100,
		},
		{
			id: 2,
			status: "Learning",
			countWords: 900,
		},
		{
			id: 3,
			status: "Knowing",
			countWords: 89,
		},
	];

	const [chartData, setChartData] = useState({
		labels: Data.map((data) => data.status),
		datasets: [
			{
				label: "Status ",
				data: Data.map((data) => data.countWords),
				backgroundColor: ["#50AF95", "#f3ba2f", "#2a71d0"],
				borderColor: "black",
				borderWidth: 2,
				height: "200",
			},
		],
	});

	const options = {
		plugins: {
			responsive: true,
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Word´s learning",
			},
		},
	};

	return (
		<div className="chart-container">
			<Pie data={chartData} options={options} />
		</div>
	);
};
export default PieChart;
