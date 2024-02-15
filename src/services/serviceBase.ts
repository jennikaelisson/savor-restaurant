import axios from "axios";
export const get = async (url: string) => {
	return await axios.get(url, {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	});
};

export const del = async (url: string) => {
	return await axios.delete(url, {
		method: "DELETE",
		headers: {
			accept: "application/json",
		},
	});
};

export const post = async (url: string, data: any) => {
	return await axios.post(url, data, {
		headers: {
			method: "POST",
			"Content-Type": "application/json",
			accept: "application/json",
		},
	});
};
