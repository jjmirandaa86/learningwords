import React from "react";

const TextGradient = ({
	color = "#eda800",
	size = "100px",
	text = "",
	bold = false,
}) => {
	//<TextGradient color={"#eda800"} size={"100px"} text="Hello" />

	return (
		<div>
			<div
				style={{
					background: `linear-gradient(180deg,${color} ,${color} 46%,#6A6769 69%,#6A6769)`,
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "rgba(0,0,0,0)",
					fontSize: `${size}`,
				}}
			>
				{bold ? <strong>{text}</strong> : { text }}
			</div>
		</div>
	);
};

export default TextGradient;
