import { Booking } from "../models/Booking.ts";
import {
	updateBookingAndCustomerService,
	getBookingsAndCustomerService,
	deleteBookingService,
} from "../services/bookingService.ts";
import { useState, useEffect } from "react";

const APItest = () => {
	const [bookings, setBookings] = useState<Booking[]>([]);

	const getBookings = async () => {
		setBookings(await getBookingsAndCustomerService());
	};

	const updateBooking = async (index: number) => {
		console.log(bookings[index]);
		await updateBookingAndCustomerService(bookings[index]);
	};

	const deleteBooking = async (bookingID: string) => {
		await deleteBookingService(bookingID);
		getBookings();
	};

	useEffect(() => {
		getBookings();
	}, []);

	const handleInputChange = (bookingID: string, field: string, value: any) => {
		setBookings((prevValues) =>
			prevValues.map((booking) =>
				booking._id === bookingID ? booking.updateField(field, value) : booking
			)
		);
	};

	return (
		<>
			<h1>API test</h1>

			<div className="bg-light border">
				{bookings && bookings.length > 0 ? (
					<>
						{bookings.map((booking, index) => (
							<div key={booking._id} className="bg-primary my-2 p-2">
								<p>ID: {booking._id}</p>
								Date:
								<input
									type="text"
									value={booking.date}
									onChange={(e) =>
										handleInputChange(
											booking._id,

											"date",
											e.target.value
										)
									}
								/>
								<br />
								Time:
								<input
									type="text"
									value={booking.time}
									onChange={(e) =>
										handleInputChange(
											booking._id,

											"time",
											e.target.value
										)
									}
								/>
								<br />
								Number of Guests:
								<input
									type="number"
									value={booking.numberOfGuests}
									onChange={(e) =>
										handleInputChange(
											booking._id,

											"numberOfGuests",
											parseInt(e.target.value, 10)
										)
									}
									min="1"
									max="240"
								/>
								<br />
								<div className="bg-secondary p-2 my-2">
									<p>
										CustomerID:
										<input
											type="text"
											readOnly
											value={booking.customerId}
											onChange={(e) =>
												handleInputChange(
													booking._id,

													"customerId",
													e.target.value
												)
											}
										/>
									</p>
									<hr />
									Name:
									<input
										type="text"
										value={booking.customer?.name || ""}
										onChange={(e) =>
											handleInputChange(
												booking._id,

												"name",
												e.target.value
											)
										}
									/>
									<input
										type="text"
										value={booking.customer?.lastname || ""}
										onChange={(e) =>
											handleInputChange(
												booking._id,

												"lastname",
												e.target.value
											)
										}
									/>
									<br />
									Email:
									<input
										type="text"
										value={booking.customer?.email || ""}
										onChange={(e) =>
											handleInputChange(
												booking._id,

												"email",
												e.target.value
											)
										}
									/>
									<br />
									Phone:
									<input
										type="text"
										value={booking.customer?.phone || ""}
										onChange={(e) =>
											handleInputChange(
												booking._id,

												"phone",
												e.target.value
											)
										}
									/>
								</div>
								<div>
									<button
										className="btn btn-warning"
										onClick={() => {
											updateBooking(index);
										}}
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
