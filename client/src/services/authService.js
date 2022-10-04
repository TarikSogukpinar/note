import axios from "axios";

export const loginUser = async (email, password) => {
  return await axios.post(
    "http://localhost:5000/api/auth/login",
    {
      email,
      password,
    },
    { withCredentials: true }
  );
};

export const logoutUser = async () => {
  return await axios.get("http://localhost:5000/api/auth/logout", {
    credentials: "include",
    withCredentials: true,
  });
};

export const registerUser = async (firstName, lastName, email, password) => {
  return await axios.post(
    "http://localhost:5000/api/auth/register",
    {
      firstName,
      lastName,
      email,
      password,
    },
    { withCredentials: true }
  );
};

export const deleteAccount = async (id) => {
  return await axios.delete(
    `http://localhost:5000/auth/delete/${id}`,
    {
      id,
    },
    { withCredentials: true }
  );
};
