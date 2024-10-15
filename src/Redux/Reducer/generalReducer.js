import { createSlice } from "@reduxjs/toolkit";

const init = {
	message: {
		active: false,
		title: "",
		msg: "",
		variantColor: "",
		hour: "",
		date: "",
	},
	appearance: {
		background: { color: "Dark" },
		Card: { color: "Dark" },
		button: { color: "Primary" },
		icon: { color: "Primary" },
		text: { color: "Primary" },
	},
};

export const generalReducer = createSlice({
	name: "general",
	initialState: {
		message: {
			active: false,
			title: "",
			msg: "",
			color: "",
			hour: "",
			date: "",
		},
		appearance: {
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
		},
	},
	reducers: {
		changeMessage: (state, action) => {
			state.message = action.payload;
		},
		resetMessage: (state) => {
			state.message = init.message;
		},
	},
});

export const { changeMessage, resetMessage } = generalReducer.actions;

export default generalReducer.reducer;
