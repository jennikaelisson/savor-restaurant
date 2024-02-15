import {
	getBookings,
	getRestaurantData,
	createBooking,
	deleteBooking,
} from "../services/bookingService";
import { useState, useEffect } from "react";

const APItest = () => {
	const [restaurantData, setRestaurantData] = useState<any>(null);
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
	const [bookingFormData, setBookingFormData] = useState<string>("");

	const fetchData = async () => {
		setRestaurantData(await getRestaurantData());
		setRestaurantBookings(await getBookings());
	};

	const createNewBooking = async () => {
		const bookingData = JSON.parse(bookingFormData);
		await createBooking(bookingData);
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
					placeholder="Enter booking data JSON here"
					value={bookingFormData}
					onChange={(e) => setBookingFormData(e.target.value)}
				/>
				<button className="btn btn-primary" onClick={createNewBooking}>
					Skapa
				</button>
			</div>

			<b>GET Bookings:</b>
			<div className="bg-light border">
				{restaurantBookings && restaurantBookings.length > 0 ? (
					<>
						<h2>Bookings</h2>
						{restaurantBookings.map((booking: any) => (
							<div key={booking._id} className="bg-warning">
								<p>ID: {booking._id}</p>
								<p>Date: {booking.date}</p>
								<p>Time: {booking.time}</p>
								<p>Number of Guests: {booking.numberOfGuests}</p>
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
