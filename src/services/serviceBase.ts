import axios from "axios";
export const get = async (url: string) => {
	return await axios.get(url, {
		headers: {
			accept: "application/json",
		},
	});
};

export const del = async (url: string) => {
	return await axios.delete(url, {
		headers: {
			accept: "application/json",
		},
	});
};

export const post = async (url: string, data: any) => {
	return await axios.post(url, data, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
	});
};

export const put = async (url: string, data: any) => {
	return await axios.put(url, data, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
	});
};
