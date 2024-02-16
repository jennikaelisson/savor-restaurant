import { get, post, del, put } from "../services/serviceBase.ts";

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net";
const restaurantID = "65cc7dddf65c4399fb07d036";

export const getRestaurantDataService = async () => {
	const response = await get(API_BASE_URL + "/restaurant/" + restaurantID);

	return response.data;
};

export const getCustomerDataService = async (customerID: string) => {
	const response = await get(API_BASE_URL + "/customer/" + customerID);

	return response.data;
};

export const getBookingsService = async () => {
	const response = await get(
		API_BASE_URL + "/booking/restaurant/" + restaurantID
	);
	return response.data;
};

export const createBookingService = async (data: any) => {
	data.restaurantId = restaurantID;
	const response = await post(API_BASE_URL + "/booking/create/", data);
	return response.data;
};

export const updateBookingService = async (bookingID: string, data: any) => {
	data.id = bookingID;
	data.restaurantId = restaurantID;
	const response = await put(
		API_BASE_URL + "/booking/update/" + bookingID,
		data
	);
	return response.data;
};

export const updateCustomerService = async (customerID: string, data: any) => {
	data.id = customerID;
	const response = await put(
		API_BASE_URL + "/customer/update/" + customerID,
		data
	);
	return response.data;
};

export const deleteBookingService = async (bookingID: string) => {
	const response = await del(API_BASE_URL + "/booking/delete/" + bookingID);
	return response.data;
};
