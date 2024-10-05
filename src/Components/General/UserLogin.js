import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import Menu from "../General/Menu";

const UserLogin = ({ data = [] }) => {
	return (
		<div>
			<Row>
				<Col>
					<Breadcrumb>
						{data.map((el) => (
							<Breadcrumb.Item key={el.id} href={el.url}>
								{el.title}{" "}
							</Breadcrumb.Item>
						))}
					</Breadcrumb>
				</Col>
				<Col className={"text-end"}>
					<Menu />
				</Col>
			</Row>
		</div>
	);
};

export default UserLogin;
