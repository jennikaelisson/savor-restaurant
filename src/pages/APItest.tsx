import {
	getBookingsService,
	getRestaurantDataService,
	createBookingService,
	deleteBookingService,
} from "../services/bookingService.ts";
import { useState, useEffect } from "react";

const APItest = () => {
	const [restaurantData, setRestaurantData] = useState<any>(null);
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
	const [bookingFormData, setBookingFormData] = useState<string>("");

	const fetchData = async () => {
		setRestaurantData(await getRestaurantDataService());
		setRestaurantBookings(await getBookingsService());
	};

	const createNewBooking = async () => {
		const bookingData = JSON.parse(bookingFormData);
		await createBookingService(bookingData);
		fetchData();
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
	}, []); // Sebastian dont approve this way [], fix later :)

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
							<div key={booking._id} className="bg-warning my-2">
								<p>ID: {booking._id}</p>
								<p>
									Date: <input type="text" value={booking.date} />
								</p>
								<p>
									Time: <input type="text" value={booking.time} />
								</p>
								<p>
									Number of Guests:{" "}
									<input type="number" value={booking.numberOfGuests} />
								</p>
								<div>
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
