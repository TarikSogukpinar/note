import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
// import {
//   Accordion,
//   Button,
//   Col,
//   Container,
//   Row,
//   Card,
//   Nav,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { getAllNotes } from "../services/noteService";
import axios from "axios";

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("http://localhost:5000/notes/getNotes", {
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

  // console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <h4 title={note.title}>{note.title}</h4>
          <h4 title={note.title}>{note.content}</h4>
          <h4 title={note.title}>{note.category}</h4>
          {/* <div className="text-wrapper">
            <p>{note.content}</p>
          </div> */}
          {/* <p className="date">{format(note.content)}</p> */}

          {/* <button className="close" onClick={() => deleteNote(note._id)}>
            X
          </button> */}
        </div>
      ))}
    </div>
  );
}
