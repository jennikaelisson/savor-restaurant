import { get, post, del } from "../services/serviceBase";

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net";
const restaurantID = "65cc7dddf65c4399fb07d036";

export const getRestaurantData = async () => {
	const response = await get(API_BASE_URL + "/restaurant/" + restaurantID);

	return response.data;
};

export const getBookings = async () => {
	const response = await get(
		API_BASE_URL + "/booking/restaurant/" + restaurantID
	);

	return response.data;
};

export const createBooking = async (data: object) => {
	const response = await post(API_BASE_URL + "/booking/create/", data);
	return response.data;
};

export const deleteBooking = async (bookingID: string) => {
	const response = await del(API_BASE_URL + "/booking/delete/" + bookingID);

	return response.data;
};
