import { useState, useEffect } from "react";
const restaurantID = "65cc7dddf65c4399fb07d036";

const APItest = () => {
	const [restaurantData, setRestaurantData] = useState<any>(null);
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);

	const fetchRestaurantData = async () => {
		try {
			const response = await fetch(
				`https://school-restaurant-api.azurewebsites.net/restaurant/${restaurantID}`,
				{
					method: "GET",
					headers: {
						accept: "application/json",
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				setRestaurantData(data);
			} else {
				console.error("Error:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const fetchRestaurantBookings = async () => {
		try {
			const response = await fetch(
				`https://school-restaurant-api.azurewebsites.net/booking/restaurant/${restaurantID}`,
				{
					method: "GET",
					headers: {
						accept: "application/json",
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				setRestaurantBookings(data);
			} else {
				console.error("Error:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchRestaurantData();
		fetchRestaurantBookings();
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
