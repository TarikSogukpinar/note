import axios from "axios";

export const AddNote = async (title, content, category, token) => {
  return await axios.post(
    "http://localhost:5000/notes/addNote",
    {
      title,
      content,
      category,
    },
    { headers: { Authorization: token } }
  );
};

export const getNote = async (id, token) => {
  return await axios.get(`http://localhost:5000/notes/getNote/${id}`, {
    headers: { Authorization: token },
  });
};

export const deletNotes = async (id, token) => {
  return await axios.delete(`http://localhost:5000/notes/deleteNote/${id}`, {
    headers: { Authorization: token },
  });
};

export const updateNote = async (id, title, content, category, token) => {
  return await axios.put(
    `http://localhost:5000/notes/updateNote/${id}`,
    {
      title,
      content,
      category,
    },
    { headers: { Authorization: token } }
  );
};
