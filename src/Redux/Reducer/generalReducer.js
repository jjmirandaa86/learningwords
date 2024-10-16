import { createSlice } from "@reduxjs/toolkit";

const initialMessage = {
	active: false,
	title: "",
	msg: "",
	typeColor: "",
	hour: "",
	date: "",
};

const initialAppearance = {
	color: {
		orangeHex: "#eda800",
		orangeBot: "Warning",
		blueHex: "#0b5871",
		blueBot: "Primary",
		blackHex: "#121f1d",
		blackBot: "Dark",
		whiteHex: "#ffffff",
		whiteHex: "White",
	},
	card: {
		bg: "dark",
		borderColor: "warning",
		borderSize: 1,
	},
	background: {
		gradient: {
			color1: "#121f1d",
			color2: "#0b5871",
			color3: "#eda800",
		},
	},
	toast: {
		colorError: "Danger",
		colorSuccess: "Success",
		colorInfo: "Dark",
	},
};

export const generalReducer = createSlice({
	name: "general",
	initialState: {
		message: initialMessage,
		appearance: initialAppearance,
	},
	reducers: {
		changeMessage: (state, action) => {
			state.message = action.payload;
		},
		resetMessage: (state) => {
			state.message = initialMessage;
		},
	},
});

export const { changeMessage, resetMessage } = generalReducer.actions;

export default generalReducer.reducer;
