import { exit } from "process";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMessage } from "../Redux/Reducer/generalReducer";
import { Hour, Date } from "../javascript/generalFunctions";
export const useLoginHook = () => {
	const defaultValueForm = { username: "", password: "" };
	const defaultValueErrors = {};

	const [form, setForm] = useState(defaultValueForm);
	const [errors, setErrors] = useState(defaultValueErrors);
	const [validated, setValidated] = useState(false);
	const [login, setLogin] = useState(null);

	const dispatch = useDispatch();

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
		validateForm();
	};

	const handleBlur = (event) => {
		handleChange(event);
	};

	const validateForm = () => {
		setErrors(defaultValueErrors);

		if (!form.username.trim()) {
			setErrors({ ...errors, ["username"]: "Field must be specified." });
			return;
		}

		if (!form.password.trim()) {
			setErrors({ ...errors, ["password"]: "Field must be specified." });
			return;
		}
		setValidated(true);
	};

	const handleLogin = (event) => {
		validateForm();
		if (validated) {
			dispatch(
				changeMessage({
					active: true,
					title: "Login",
					msg: "Login successfully",
					typeColor: "S",
					hour: Hour(),
					date: Date(),
				}),
			);
			setLogin({});
		} else return;
	};

	return {
		form,
		login,
		errors,
		handleChange,
		handleBlur,
		handleLogin,
	};
};
