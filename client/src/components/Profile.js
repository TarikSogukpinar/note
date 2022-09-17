import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../styles/Profile.css";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
export default function Profile() {
	const auth = JSON.parse(localStorage.getItem("user"));

	return (
		<Container fluid>
			<h1>Welcome to the Profile Page!</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{auth.firstName}</td>
						<td>{auth.lastName}</td>
						<td>{auth.email}</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}
