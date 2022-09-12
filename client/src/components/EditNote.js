import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function EditNote({ match }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
    id: "",
  });

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("token");
      //if (match.params._id) {
      const { res } = await axios.get(
        `http://localhost:5000/notes/getNote/${note.id}`,
        {
          headers: { Authorization: token },
        }
      );
      setNote({
        title: res.data.title,
        content: res.data.content,
        category: res.data.category,
        id: res.data._id,
      });
      //}
    };
    getNote();
  }, []);

  const onChangeInput = async (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { title, content, category, id } = note;
        const newNote = {
          title,
          content,
          category,
        };
        await axios.up(
          `http://localhost:5000/notes/updateNote/${id}`,
          newNote,
          {
            headers: { Authorization: token },
          }
        );
        window.location.href = "/";
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div className="create-note">
      <h2>Edit Note</h2>
      <form onSubmit={editNote} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            value={note.content}
            id="content"
            name="content"
            required
            rows="10"
            onChange={onChangeInput}
          />
        </div>

        <label htmlFor="date">Category: {note.category} </label>
        <div className="row">
          <input
            type="text"
            id="category"
            name="category"
            onChange={onChangeInput}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
