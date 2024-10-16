import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { LastSeconds } from "../../javascript/generalFunctions";
import { LowerCase } from "../../javascript/generalFunctions";
import { useSelector, useDispatch } from "react-redux";
import { resetMessage } from "../../Redux/Reducer/generalReducer";

const Message = () => {
	const { colorError, colorSuccess, colorInfo } = useSelector(
		(state) => state.general.appearance.toast,
	);

	const { title, msg, typeColor, hour, date } = useSelector(
		(state) => state.general.message,
	);
	const [show, setShow] = useState(true);
	const [color, setColor] = useState(colorInfo);

	const dispatch = useDispatch();

	useEffect(() => {
		if (LowerCase(typeColor) === "i") setColor(colorInfo); //informative
		if (LowerCase(typeColor) === "e") setColor(colorError); //error
		if (LowerCase(typeColor) === "s") setColor(colorSuccess); // success
	}, [typeColor]);

	const handleHide = () => {
		dispatch(resetMessage());
		setShow(false);
	};
	return (
		<div>
			<ToastContainer position="top-end" style={{ zIndex: 1 }}>
				<Toast
					className="d-inline-block m-1"
					bg={LowerCase(color)}
					key={1}
					onClose={handleHide}
					show={show}
					delay={3000}
					autohide
				>
					<Toast.Header>
						<strong className="me-auto">{title} </strong>
						<small>
							{date}
							{" - "} {hour}
						</small>
					</Toast.Header>
					<Toast.Body className={LowerCase(color) === "dark" && "text-white"}>
						{msg}
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default Message;
