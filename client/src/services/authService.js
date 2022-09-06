import axios from "axios";

export const loginUser = async (email, password) => {
  return await axios.post("auth/login", {
    email,
    password,
  });
};

export const registerUser = async (firstName, lastName, email, password) => {
  return await axios.post("auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

