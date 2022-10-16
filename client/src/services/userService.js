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

export const resetPassword = async () => {
  return await axios.post(`http://localhost:5000/api/user/reset-password`);
};

export const deleteUsers = async (id) => {
  return await axios.delete(
    `http://localhost:5000/api/user/delete/${id}`,

    { withCredentials: true }
  );
};
