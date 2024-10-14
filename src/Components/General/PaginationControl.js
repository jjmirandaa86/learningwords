import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationControl = ({ data }) => {
	return (
		<div className="p-2">
			<div style={{ fontSize: "12px" }} className="p-1">
				Showing: 1 to 10
			</div>
			<div className="p-1"></div>
			<div className="d-flex justify-content-center">
				<Pagination size="sm">
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>

					<Pagination.Ellipsis />

					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</div>
		</div>
	);
};

export default PaginationControl;
