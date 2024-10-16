"use client";

import React from "react";
import Word from "../../../../Components/Word";
import data from "../../../../app/data";
import DoesNotExist from "../../../../Components/Words/DoesNotExist";

const Page = ({ params }) => {
	const word = data.filter((el) => el.word === params.word);

	return <>{word.length > 0 ? <Word data={word[0]} /> : <DoesNotExist />}</>;
};

export default Page;
