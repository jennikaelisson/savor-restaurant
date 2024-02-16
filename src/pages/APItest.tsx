import {
	getBookingsService,
	getCustomerDataService,
	updateBookingService,
	updateCustomerService,
	deleteBookingService,
} from "../services/bookingService.ts";
import { useState, useEffect } from "react";

const APItest = () => {
	const [bookings, setBookings] = useState<any[]>([]);
	const [customers, setCustomers] = useState<any[]>([]);

	const fetchData = async () => {
		try {
			const bookingsFetch = await getBookingsService();
			setBookings(bookingsFetch || []);

			const customerPromises = (bookingsFetch || []).map(
				async (booking: any) => {
					const fetchedCustomerInfo = await getCustomerDataService(
						booking.customerId
					);
					setCustomers((prevCustomerInfo) => ({
						...prevCustomerInfo,
						[booking.customerId]: fetchedCustomerInfo[0],
					}));
				}
			);

			customerPromises.forEach(async (promise) => await promise);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const updateBooking = async (bookingID: string) => {
		await updateBookingService(bookingID, bookings[bookingID]);
	};

	const updateCustomer = async (customerID: string) => {
		await updateCustomerService(customerID, customers[customerID]);
	};

	const deleteBooking = async (bookingID: string) => {
		await deleteBookingService(bookingID);
		fetchData();
	};

	useEffect(() => {
		try {
			fetchData();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, []);

	const handleInputChange = (
		entityID: string,
		entityType: string,
		field: string,
		value: any
	) => {
		if (entityType === "booking") {
			setBookings((prevValues) => ({
				...prevValues,
				[entityID]: {
					...prevValues[entityID],
					[field]: value,
				},
			}));
		} else if (entityType === "customer") {
			setCustomers((prevValues) => ({
				...prevValues,
				[entityID]: {
					...prevValues[entityID],
					[field]: value,
				},
			}));
		}
	};

	return (
		<>
			<h1>API test</h1>

			<div className="bg-light border">
				{bookings && bookings.length > 0 ? (
					<>
						{bookings.map((booking: any) => (
							<div key={booking._id} className="bg-primary my-2 p-2">
								<p>ID: {booking._id}</p>
								Date:
								<input
									type="text"
									value={booking.date}
									onChange={(e) =>
										handleInputChange(
											booking._id,
											"booking",
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
											"booking",
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
											"booking",
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
													booking.customerId,
													"booking",
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
										value={customers[booking.customerId]?.name}
										onChange={(e) =>
											handleInputChange(
												booking.customerId,
												"customer",
												"name",
												e.target.value
											)
										}
									/>
									<input
										type="text"
										value={customers[booking.customerId]?.lastname}
										onChange={(e) =>
											handleInputChange(
												booking.customerId,
												"customer",
												"lastname",
												e.target.value
											)
										}
									/>
									<br />
									Email:
									<input
										type="text"
										value={customers[booking.customerId]?.email}
										onChange={(e) =>
											handleInputChange(
												booking.customerId,
												"customer",
												"email",
												e.target.value
											)
										}
									/>
									<br />
									Phone:
									<input
										type="text"
										value={customers[booking.customerId]?.phone}
										onChange={(e) =>
											handleInputChange(
												booking.customerId,
												"customer",
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
											updateBooking(booking._id);
											updateCustomer(booking.customerId);
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
