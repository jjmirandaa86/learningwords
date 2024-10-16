"use client";

import React from "react";
import Word from "../../../../Components/Word";
import data from "../../../../app/data";

const Page = ({ params }) => {
	const word = data.filter((el) => el.word === params.word);
	return <Word data={word[0]} />;
};

export default Page;
