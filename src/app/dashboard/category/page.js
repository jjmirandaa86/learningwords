import React from "react";
import UserLogin from "../../../Components/General/UserLogin";

const page = () => {
	return (
		<>
			<UserLogin
				data={[
					{
						id: 1,
						title: "Dashboard",
						url: "/dashboard",
					},
				]}
			/>
			category page
		</>
	);
};

export default page;
