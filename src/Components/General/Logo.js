import React from "react";
import { FaBookReader } from "react-icons/fa";
import { useSelector } from "react-redux";

const Logo = () => {
	const { orangeHex } = useSelector((state) => state.general.appearance.color);

	return (
		<div className="p-1 text-center">
			<h1>
				<span>
					<FaBookReader size={"25px"} color={orangeHex} />
					<strong>Learning</strong>
					<>Words</>
				</span>
			</h1>
		</div>
	);
};

export default Logo;
