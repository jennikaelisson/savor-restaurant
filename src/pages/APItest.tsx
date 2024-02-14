import { useState, useEffect } from "react";

const APItest = () => {
	const restaurantID = "65cc7dddf65c4399fb07d036";
	const [restaurantData, setRestaurantData] = useState<any>([]);
	const [restaurantBookings, setRestaurantBookings] = useState<any>([]);

	const fetchData = async (endpoint: string) => {
		try {
			const response = await fetch(
				`https://school-restaurant-api.azurewebsites.net/${endpoint}/${restaurantID}`,
				{
					method: "GET",
					headers: {
						accept: "application/json",
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				switch (endpoint) {
					case "restaurant":
						setRestaurantData(data);
						break;
					case "booking/restaurant":
						setRestaurantBookings(data);
						break;
				}
			} else {
				console.error("Error:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchData("restaurant");
		fetchData("booking/restaurant");
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
