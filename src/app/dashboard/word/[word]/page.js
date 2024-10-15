"use client";

import React from "react";
import Word from "../../../../Components/Word";

const Page = ({ params }) => {
	return <Word word={params.word} />;
};

export default Page;
