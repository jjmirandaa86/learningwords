import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../Redux/Reducer/generalReducer";

export default configureStore({
	reducer: {
		general: generalReducer,
	},
});
