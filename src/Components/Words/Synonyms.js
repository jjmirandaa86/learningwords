import React from "react";

const Synonyms = ({ data }) => {
	return (
		<ul>
			{data.map((el, index) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	);
};

export default Synonyms;
