import axios from "axios";

export const AddNote = async (title, content, category) => {
  return await axios.post(
    "http://localhost:5000/api/notes/addNote",
    {
      title,
      content,
      category,
    },
    { withCredentials: true }
  );
};

export const getNote = async (id) => {
  return await axios.get(
    `http://localhost:5000/api/notes/getNote/${id}`,

    { withCredentials: true }
  );
};

export const deletNotes = async (id) => {
  return await axios.delete(
    `http://localhost:5000/api/notes/deleteNote/${id}`,

    { withCredentials: true }
  );
};

export const updateNote = async (id, title, content, category) => {
  return await axios.put(
    `http://localhost:5000/api/notes/updateNote/${id}`,
    {
      title,
      content,
      category,
    },
    { withCredentials: true }
  );
};
