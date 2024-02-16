import {
	getBookingsService,
	getCustomerDataService,
	updateBookingService,
	updateCustomerService,
	deleteBookingService,
} from "../services/bookingService.ts";
import { useState, useEffect } from "react";

const APItest = () => {
	const [bookings, setBookings] = useState<any>(null);
	const [customers, setCustomers] = useState<{
		[key: string]: any;
	}>({});

	const [updatedBookingValues, setUpdatedBookingValues] = useState<{
		[key: string]: any;
	}>({});
	const [updatedCustomerValues, setUpdatedCustomerValues] = useState<{
		[key: string]: any;
	}>({});

	const fetchData = async () => {
		setBookings(await getBookingsService());
	};

	const fetchCustomerData = async (customerId: string) => {
		const fetchedCustomerInfo = await getCustomerDataService(customerId);
		console.log(fetchedCustomerInfo);

		setCustomers((prevCustomerInfo) => ({
			...prevCustomerInfo,
			[customerId]: fetchedCustomerInfo[0],
		}));
	};

	const updateBooking = async (bookingID: string) => {
		console.log("Update booking");
		console.log(updatedBookingValues[bookingID]);
		await updateBookingService(bookingID, updatedBookingValues[bookingID]);
	};

	const updateCustomer = async (customerID: string) => {
		console.log("Update customer");
		console.log(updatedBookingValues[customerID]);
		await updateCustomerService(customerID, updatedCustomerValues[customerID]);
	};

	const deleteBooking = async (bookingID: string) => {
		await deleteBookingService(bookingID);
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const initialUpdatedValues: { [key: string]: any } = {};
		bookings?.forEach((booking: any) => {
			initialUpdatedValues[booking._id] = {
				date: booking.date,
				time: booking.time,
				numberOfGuests: booking.numberOfGuests,
				customerId: booking.customerId,
			};
			fetchCustomerData(booking.customerId);
		});
		setUpdatedBookingValues(initialUpdatedValues);
	}, [bookings]);

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

			<div className="bg-light border">
				{bookings && bookings.length > 0 ? (
					<>
						{bookings.map((booking: any) => (
							<div key={booking._id} className="bg-primary my-2 p-2">
								<p>ID: {booking._id}</p>
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
								<br />
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
								<br />
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
								<br />
								<div className="bg-secondary p-2 my-2">
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
										Name: {customers[booking.customerId]?.name || ""}{" "}
										{customers[booking.customerId]?.lastname || ""}
									</p>
									<p>Email: {customers[booking.customerId]?.email || ""}</p>
									<p>Phone: {customers[booking.customerId]?.phone || ""}</p>
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
