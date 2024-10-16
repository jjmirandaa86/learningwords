import React from "react";
import { Container, Card } from "react-bootstrap";

const DoesNotExist = () => {
	return (
		<div>
			<Container>
				<Card>
					<Card.Body>
						<Card.Title> No Exist</Card.Title>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default DoesNotExist;
