import React from "react";
import {
	Container,
	ListGroup,
	Button,
	SplitButton,
	Dropdown,
} from "react-bootstrap";
import { FaPlusCircle, FaThList, FaChartBar } from "react-icons/fa";
import { FaDoorClosed, FaListUl } from "react-icons/fa6";

const Menu = () => {
	return (
		<>
			<SplitButton
				id={`dropdown-split-variants-primary`}
				variant="primary"
				title="Menu"
				size="sm"
			>
				<Dropdown.Item eventKey="1" href="dashboard/add">
					<FaPlusCircle /> Add
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" href="dashboard/list">
					<FaListUl /> List
				</Dropdown.Item>
				<Dropdown.Item eventKey="3" href="dashboard/category">
					<FaThList /> Category
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="4" href="dashboard/graphics">
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
