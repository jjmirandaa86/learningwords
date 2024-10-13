"use client";

import React from "react";
import NavigationHeader from "../../../../Components/General/NavigationHeader";
import Word from "../../../../Components/Word";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
	const router = useRouter();

	return (
		<div>
			<NavigationHeader />
			<Word word={params.word} />
		</div>
	);
};

export default Page;
