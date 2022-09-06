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

  useEffect(() => {
    axios
      .get("note")
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(notes);

  return (
    <div>
      {notes.map((note) => {
        return <h1>{note.title}</h1>;
      })}
    </div>
  );
}
