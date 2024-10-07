import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationControl = () => {
	return (
		<div className="p-3">
			<h6>Showing: 1 to 10</h6>
			<div className="d-flex justify-content-center">
				<Pagination>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>

					<Pagination.Ellipsis />

					<Pagination.Item>{20}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</div>
		</div>
	);
};

export default PaginationControl;
