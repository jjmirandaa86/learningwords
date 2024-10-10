"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import Menu from "../General/Menu";

const NavigationHeader = () => {
	const pathname = usePathname();
	const editor = pathname.split("/");

	return (
		<div>
			<Row>
				<Col>
					<Breadcrumb>
						{editor.map((el, index) => {
							return el !== "" ? (
								<Breadcrumb.Item
									key={index}
									href={"../".repeat(editor.length - 1 - index) + el}
								>
									{el}{" "}
								</Breadcrumb.Item>
							) : (
								""
							);
						})}
					</Breadcrumb>
				</Col>
				<Col className={"text-end"}>
					<Menu />
				</Col>
			</Row>
		</div>
	);
};

export default NavigationHeader;
