import axios from "axios";

export const loginUser = async (email, password) => {
	return await axios.post("http://localhost:5000/auth/login", {
		email,
		password,
	});
};

export const registerUser = async (firstName, lastName, email, password) => {
	return await axios.post("http://localhost:5000/auth/register", {
		firstName,
		lastName,
		email,
		password,
	});
};

export const deleteAccount = async (id) => {
	return await axios.delete(`http://localhost:5000/auth/delete/${id}`, {
		id,
	});
};
