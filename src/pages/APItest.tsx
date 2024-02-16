import {
	getBookingsService,
	getRestaurantDataService,
	createBookingService,
	updateBookingService,
	getCustomerDataService,
	deleteBookingService,
} from "../services/bookingService.ts";
import { useState, useEffect } from "react";

const APItest = () => {
	const [restaurantData, setRestaurantData] = useState<any>(null);
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
	const [customerInformations, setCustomerInformation] = useState<{
		[key: string]: any;
	}>({});
	const [bookingFormData, setBookingFormData] = useState<string>("");
	const [updatedBookingValues, setUpdatedBookingValues] = useState<{
		[key: string]: any;
	}>({});

	const fetchData = async () => {
		setRestaurantData(await getRestaurantDataService());
		setRestaurantBookings(await getBookingsService());
	};

	const fetchCustomerData = async (customerId: string) => {
		const fetchedCustomerInfo = await getCustomerDataService(customerId);
		console.log(fetchedCustomerInfo);

		setCustomerInformation((prevCustomerInfo) => ({
			...prevCustomerInfo,
			[customerId]: fetchedCustomerInfo[0],
		}));
	};

	const createNewBooking = async () => {
		const bookingData = JSON.parse(bookingFormData);
		await createBookingService(bookingData);
		fetchData();
	};

	const updateBooking = async (bookingID: string) => {
		console.log("Update");
		console.log(updatedBookingValues[bookingID]);
		await updateBookingService(bookingID, updatedBookingValues[bookingID]);
	};
	const deleteBooking = async (bookingID: string) => {
		await deleteBookingService(bookingID);
		fetchData();
	};

	useEffect(() => {
		setBookingFormData(
			JSON.stringify({
				restaurantId: "65cc7dddf65c4399fb07d036",
				date: "2022-03-21",
				time: "18:00",
				numberOfGuests: 4,
				customer: {
					name: "Franzén",
					lastname: "Sebastian",
					email: "someone@somedomain.com",
					phone: "070-1112233",
				},
			})
		);
		fetchData();
	}, []);

	useEffect(() => {
		const initialUpdatedValues: { [key: string]: any } = {};
		restaurantBookings?.forEach((booking: any) => {
			initialUpdatedValues[booking._id] = {
				date: booking.date,
				time: booking.time,
				numberOfGuests: booking.numberOfGuests,
				customerId: booking.customerId,
			};
			fetchCustomerData(booking.customerId);
		});
		setUpdatedBookingValues(initialUpdatedValues);
	}, [restaurantBookings]);

	const handleBookingUpdateInputChange = (
		bookingID: string,
		field: string,
		value: any
	) => {
		setUpdatedBookingValues((prevValues) => ({
			...prevValues,
			[bookingID]: {
				...prevValues[bookingID],
				[field]: value,
			},
		}));
	};

	return (
		<>
			<h1>API test</h1>

			<b>GET Restaurant:</b>
			<div className="bg-light border">
				{restaurantData && restaurantData.length > 0 ? (
					<>
						<h2>{restaurantData[0].name}</h2>
						<p>Address: {restaurantData[0].address}</p>
						<p>Zip Code: {restaurantData[0].zip}</p>
						<p>City: {restaurantData[0].city}</p>
					</>
				) : (
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			</div>

			<b>Create booking:</b>
			<div className="bg-light border">
				<textarea
					className="form-control"
					value={bookingFormData}
					onChange={(e) => setBookingFormData(e.target.value)}
				/>
				<button className="btn btn-success" onClick={createNewBooking}>
					CREATE
				</button>
			</div>

			<b>GET Bookings:</b>
			<div className="bg-light border">
				{restaurantBookings && restaurantBookings.length > 0 ? (
					<>
						<h2>Bookings</h2>
						{restaurantBookings.map((booking: any) => (
							<div key={booking._id} className="bg-primary my-2 p-2">
								<p>ID: {booking._id}</p>
								<p>
									Date:
									<input
										type="text"
										value={updatedBookingValues[booking._id]?.date || ""}
										onChange={(e) =>
											handleBookingUpdateInputChange(
												booking._id,
												"date",
												e.target.value
											)
										}
									/>
								</p>
								<p>
									Time:
									<input
										type="text"
										value={updatedBookingValues[booking._id]?.time || ""}
										onChange={(e) =>
											handleBookingUpdateInputChange(
												booking._id,
												"time",
												e.target.value
											)
										}
									/>
								</p>
								<p>
									Number of Guests:
									<input
										type="number"
										value={
											updatedBookingValues[booking._id]?.numberOfGuests || ""
										}
										onChange={(e) =>
											handleBookingUpdateInputChange(
												booking._id,
												"numberOfGuests",
												parseInt(e.target.value, 10)
											)
										}
										min="1"
										max="240"
									/>
								</p>

								<div className="bg-secondary p-2">
									<p>
										CustomerID:
										<input
											type="text"
											readOnly
											value={
												updatedBookingValues[booking._id]?.customerId || ""
											}
											onChange={(e) =>
												handleBookingUpdateInputChange(
													booking.customerId,
													"customerId",
													e.target.value
												)
											}
										/>
									</p>
									<hr />
									<p>
										Name: {customerInformations[booking.customerId]?.name || ""}{" "}
										{customerInformations[booking.customerId]?.lastname || ""}
									</p>
									<p>
										Email:{" "}
										{customerInformations[booking.customerId]?.email || ""}
									</p>
									<p>
										Phone:{" "}
										{customerInformations[booking.customerId]?.phone || ""}
									</p>
								</div>

								<div>
									<button
										className="btn btn-warning"
										onClick={() => updateBooking(booking._id)}
									>
										Update
									</button>
									<button
										className="btn btn-danger"
										onClick={() => deleteBooking(booking._id)}
									>
										DELETE
									</button>
								</div>
							</div>
						))}
					</>
				) : (
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			</div>
		</>
	);
};

export default APItest;
