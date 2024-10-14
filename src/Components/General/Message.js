import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { LastSeconds } from "../../javascript/generalFunctions";
import { LowerCase } from "../../javascript/generalFunctions";

const Message = ({ typeMessage, title, body }) => {
	//typeMessage
	//Informative Dark
	//Error       Danger
	//Success     Success

	const [show, setShow] = useState(true);
	const [color, setColor] = useState("Dark");
	const [date, setDate] = useState(LastSeconds);

	useEffect(() => {
		if (LowerCase(typeMessage) === "informative") setColor("Dark");
		if (LowerCase(typeMessage) === "error") setColor("Danger");
		if (LowerCase(typeMessage) === "success") setColor("Success");
	}, [typeMessage]);

	return (
		<div>
			<ToastContainer position="top-end" style={{ zIndex: 1 }}>
				<Toast
					className="d-inline-block m-1"
					bg={LowerCase(color)}
					key={1}
					onClose={() => setShow(false)}
					show={show}
					delay={3000}
					autohide
				>
					<Toast.Header>
						<strong className="me-auto">{title} </strong>
						<small>{date}</small>
					</Toast.Header>
					<Toast.Body className={LowerCase(color) === "dark" && "text-white"}>
						{body}
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default Message;
