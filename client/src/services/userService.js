import axios from "axios";

export const updateUserInfo = async (id, firstName, lastName, email) => {
  return await axios.put(
    `http://localhost:5000/api/user/updateUser/${id}`,
    {
      firstName,
      lastName,
      email,
    },
    { withCredentials: true }
  );
};

export const getUserById = async (id) => {
  return await axios.get(
    `http://localhost:5000/api/user/getUserById/${id}`,

    { withCredentials: true }
  );
};
