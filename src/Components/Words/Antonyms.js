import React from "react";

const Antonyms = ({ data }) => {
	return (
		<ul>
			{data.map((el, index) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	);
};

export default Antonyms;
