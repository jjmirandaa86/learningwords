import React from "react";
import {
	FaApple,
	FaCrown,
	FaGhost,
	FaGift,
	FaGlobeAmericas,
	FaGrinStars,
	FaHeart,
	FaKey,
	FaMoon,
	FaRedhat,
} from "react-icons/fa";

export const useLoadingWebHook = () => {
	const words = [
		{ id: 1, name: "Apple", component: <FaApple color={"red"} /> },
		{ id: 2, name: "Crown", component: <FaCrown color={"red"} /> },
		{ id: 3, name: "Ghost", component: <FaGhost color={"red"} /> },
		{ id: 4, name: "Gift", component: <FaGift color={"red"} /> },
		{ id: 5, name: "World", component: <FaGlobeAmericas color={"red"} /> },
		{ id: 6, name: "Happy", component: <FaGrinStars color={"red"} /> },
		{ id: 7, name: "Heart", component: <FaHeart color={"red"} /> },
		{ id: 8, name: "Key", component: <FaKey color={"red"} /> },
		{ id: 9, name: "Moon", component: <FaMoon color={"red"} /> },
		{ id: 10, name: "Hat", component: <FaRedhat color={"red"} /> },
	];

	//different words each connections
	const wordsRandom = words
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return {
		wordsRandom,
	};
};
