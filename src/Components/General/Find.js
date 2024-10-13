import React from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
	styleBlue,
	styleBlack,
	styleOrange,
	styleYellow,
	styleWhite,
} from "../../Styles/generalStyles";

const Find = () => {
	return (
		<div>
			<InputGroup className="mb-3" size="sm">
				<Form.Control placeholder="Find" maxLength="4" size="4" />
				<Button variant="outline-secondary" id="button-addon2">
					<FaMagnifyingGlass color={styleOrange} />
				</Button>
			</InputGroup>
		</div>
	);
};

export default Find;
