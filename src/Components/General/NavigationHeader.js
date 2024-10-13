"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { FirstLetterUpperCase } from "../../javascript/generalFunctions";
import Find from "../General/Find";

const NavigationHeader = () => {
	const pathname = usePathname();
	const editor = pathname.split("/");

	return (
		<>
			<Row>
				<Col sm={8}>
					<Breadcrumb>
						{editor.map((el, index) => {
							return el !== "" ? (
								<Breadcrumb.Item
									key={index}
									href={"../".repeat(editor.length - 1 - index) + el}
								>
									{FirstLetterUpperCase(el)}{" "}
								</Breadcrumb.Item>
							) : (
								""
							);
						})}
					</Breadcrumb>
				</Col>
				<Col>
					<Find />{" "}
				</Col>
			</Row>
		</>
	);
};

export default NavigationHeader;
