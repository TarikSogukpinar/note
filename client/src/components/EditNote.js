import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EditNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
    id: "",
  });

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("token");
      if (match.params.id) {
        const res = await axios.get(`http://localhost:5000/notes/${id}`, {
          headers: { Authorization: token },
        });
        setNote({
          title: res.data.title,
          content: res.data.content,
          category: res.data.category,
          id: res.data._id,
        });
      }
    };
    getNote();
  }, [match.params.id]);

  const onChangeInput = (e) => {
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
        await axios.put(`http://localhost:5000/notes/${id}`, newNote, {
          headers: { Authorization: token },
        });
        window.location.href = "/";
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return <div>EditNote</div>;
}
