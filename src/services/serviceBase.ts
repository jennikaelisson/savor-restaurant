import axios from "axios";
export const get = async (url: string) => {
	return await axios.get(url, {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	});
};

export const post = async (url: string, data: any) => {
	return await axios.post(url, data, {
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
	});
};
