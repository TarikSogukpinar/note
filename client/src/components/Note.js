import React, { useEffect, useState } from "react";
import { deletNotes } from "../services/noteService";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { IoCreateSharp } from "react-icons/io5";
import { FaNotEqual, FaRegStickyNote, FaRegEdit } from "react-icons/fa";
import axios from "axios";
import "../styles/Note.css";

export default function Note() {
	const [notes, setNotes] = useState([]);
	const [token, setToken] = useState("");

	const getNotes = async (token) => {
		const res = await axios.get("http://localhost:5000/api/notes/getNotes", {
			headers: { Authorization: token },
		});

		setNotes(res.data);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		setToken(token);
		if (token) {
			getNotes(token);
		}
	}, []);

	const deleteNote = async (id) => {
		try {
			const token = localStorage.getItem("token");
			if (token) {
				deletNotes(id, token);
				getNotes(token);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Container className="d-inline-flex p-2 bd-highlight">
				<Row className="justify-content-end">
					<Col className="p-3">
						<Button size="xs" variant="link" bg="dark" href="/createnote">
							<IoCreateSharp /> Create Note
						</Button>
					</Col>
				</Row>
			</Container>
			{notes != "" ? (
				notes.map((note, index) => (
					<Container key={index}>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>{note.category}</Accordion.Header>
								<Accordion.Body>
									<Row>
										<Col>
											<h4>{note.title}</h4>
										</Col>
									</Row>
									<Row>
										<Col>
											<h5>{note.content}</h5>
										</Col>
									</Row>
									<Container className="d-flex flex-row-reverse">
										<Row className="justify-content-between">
											<Col>
												<Button
													variant="link"
													className="close"
													onClick={() => deleteNote(note._id)}
												>
													<FaRegStickyNote /> Delete Note
												</Button>
												<Button
													variant="link"
													className="close"
													href={`/edit/${note._id}`}
												>
													<FaRegEdit /> Edit Note
												</Button>
											</Col>
										</Row>
									</Container>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Container>
				))
			) : (
				<h2>
					<FaNotEqual /> You have zero notes!
				</h2>
			)}
		</div>
	);
}
