import React from "react";
import { FaBookReader } from "react-icons/fa";
import {
	styleBlue,
	styleOrange,
	styleBlack,
	styleWhite,
	styleYellow,
} from "../../Styles/generalStyles";

const Logo = () => {
	return (
		<div className="p-1 h1">
			<span>
				<FaBookReader size={25} color={styleOrange} /> <strong>Learning</strong>
				<>Words</>
			</span>
		</div>
	);
};

export default Logo;
