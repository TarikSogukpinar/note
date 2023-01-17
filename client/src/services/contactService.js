import axios from "axios";

export const CreateContact = async (
  title,
  description,
  email,
  github,
  linkedin,
  token
) => {
  return await axios.post(
    "http://localhost:5000/api/contact/newContact",
    {
      title,
      description,
      email,
      github,
      linkedin,
    },
    { withCredentials: true },
    { headers: { Authorization: token } }
  );
};
