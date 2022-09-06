import axios from "axios";

export const AddNote = async (title, content, category) => {
  return await axios.post("notes/addNote", {
    title,
    content,
    category,
  });
};

export const getAllNotes = async (title, content, category) => {
  return await axios.get("notes/getAllNotes", {
    title,
    content,
    category,
  });
};
