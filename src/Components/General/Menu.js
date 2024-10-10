"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { SplitButton, Dropdown } from "react-bootstrap";
import { FaPlusCircle, FaThList, FaChartBar, FaHome } from "react-icons/fa";
import { FaDoorClosed, FaListUl } from "react-icons/fa6";

const Menu = () => {
	const pathname = usePathname();
	const splitUrl = pathname.split("/");
	//to control navigation if i am in top or not
	const url = splitUrl.length === 2 ? "dashboard" : "../dashboard";

	return (
		<>
			<SplitButton
				id={`dropdown-split-variants-primary`}
				variant="primary"
				title="Menu"
				size="sm"
			>
				<Dropdown.Item eventKey="1" href={`${url}/`}>
					<FaHome /> Dashboard
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="1" href={`${url}/add`}>
					<FaPlusCircle /> Add
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" href={`${url}/list`}>
					<FaListUl /> List
				</Dropdown.Item>
				<Dropdown.Item eventKey="3" href={`${url}/category`}>
					<FaThList /> Category
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="4" href={`${url}/graphics`}>
					<FaChartBar /> Graphics
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="4" href="/">
					<FaDoorClosed /> Exit
				</Dropdown.Item>
			</SplitButton>
		</>
	);
};

export default Menu;
