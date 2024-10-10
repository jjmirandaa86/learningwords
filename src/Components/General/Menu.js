"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { DropdownButton, Dropdown, Nav, ListGroup } from "react-bootstrap";
import { FaPlusCircle, FaThList, FaChartBar, FaHome } from "react-icons/fa";
import { FaDoorClosed, FaListUl } from "react-icons/fa6";

const Menu = () => {
	const pathname = usePathname();
	const splitUrl = pathname.split("/");
	//to control navigation if i am in top or not
	const url = splitUrl.length === 2 ? "dashboard" : "../dashboard";

	return (
		<div style={{ padding: 10 }}>
			<ListGroup>
				<ListGroup.Item action href={`${url}/`} variant="dark">
					{" "}
					<FaHome /> Dashboard
				</ListGroup.Item>
				<hr></hr>
				<ListGroup.Item action href={`${url}/add`} style={{ marginLeft: 20 }}>
					{" "}
					<FaPlusCircle /> Add
				</ListGroup.Item>
				<ListGroup.Item action href={`${url}/list`} style={{ marginLeft: 20 }}>
					{" "}
					<FaListUl /> List
				</ListGroup.Item>

				<ListGroup.Item action href={`${url}/category`} style={{ marginLeft: 20 }}>
					{" "}
					<FaThList /> Category
				</ListGroup.Item>
				<hr></hr>
				<ListGroup.Item action href={`${url}/graphics`}>
					{" "}
					<FaChartBar /> Graphics
				</ListGroup.Item>
				<hr></hr>
				<ListGroup.Item action href={`/`}>
					{" "}
					<FaDoorClosed /> Exit
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
};

export default Menu;
