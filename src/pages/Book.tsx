import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
	getBookingsAndCustomerService,
	createBookingService,
} from "../services/bookingService.ts";

import { useState, useEffect } from "react";
import { Booking } from "../models/Booking.ts";

const Book = () => {
	interface FreeTables {
		[key: string]: number;
	}

	type ValuePiece = Date | null;
	type Value = ValuePiece | [ValuePiece, ValuePiece];

	const [bookings, setBookings] = useState<Booking[]>([]);
	const [selectedDate, setSelectedDate] = useState<Value>(new Date());
	const [selectedGuests, changeGuests] = useState(2);
	const [selectedTime, changeTime] = useState("");
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const [freeTables, setFreeTables] = useState<FreeTables>({});
	const [customer, setCustomer] = useState({
		name: "testar",
		lastname: "testar",
		email: "someone@somedomain.com",
		phone: "070-1112233",
	});

	const handleCustomerChange = (field: string, value: string) => {
		setCustomer((prevCustomer) => ({ ...prevCustomer, [field]: value }));
	};

	useEffect(() => {
		updateFreeTables();
		changeTime("");
	}, [selectedGuests, selectedDate]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setBookings(await getBookingsAndCustomerService());
	};

	const formatDate = (date: Value): string => {
		if (date instanceof Date) {
			const year = date.getFullYear();
			const month = ("0" + (date.getMonth() + 1)).slice(-2);
			const day = ("0" + date.getDate()).slice(-2);
			return `${year}-${month}-${day}`;
		}

		return "";
	};
	const updateFreeTables = () => {
		const updatedFreeTables: FreeTables = {
			"18:00": 15,
			"21:00": 15,
		};

		bookings?.forEach((booking: Booking) => {
			if (booking.date === formatDate(selectedDate)) {
				const numberOfTables = Math.floor((booking.numberOfGuests - 1) / 6) + 1;
				updatedFreeTables[booking.time] -= numberOfTables;
			}
		});

		setFreeTables(updatedFreeTables);
	};
	const createNewBooking = async () => {
		const bookingData = {
			date: formatDate(selectedDate),
			time: selectedTime,
			numberOfGuests: selectedGuests,
			customer: customer,
		};
		await createBookingService(bookingData);
		setBookingConfirmed(true);
	};

	const tablesNeeded = Math.floor((selectedGuests - 1) / 6) + 1;

	return (
		<div className="row">
			<div
				className=" p-5 col-12 col-md-6"
				style={{ height: "100vh", overflowY: "auto" }}
			>
				<p className="h1 pt-5">BOOKING</p>
				{bookingConfirmed ? (
					<div className="mt-3 alert alert-success" role="alert">
						Booking confirmed! Thank you, {customer.name} {customer.lastname},
						for your reservation. <br />
						<br />
						Date: {formatDate(selectedDate)}
						<br />
						Time: {selectedTime}
						<br />
						Guests: {selectedGuests}
						<br />
					</div>
				) : (
					<>
						<div>
							{" "}
							<p className="h4">Number of guests</p>
							<div className=" p-2 pb-4">
								<input
									type="number"
									min="1"
									max="90"
									className="form-control input-border"
									value={selectedGuests}
									onChange={(e) => changeGuests(parseInt(e.target.value))}
								/>
							</div>
						</div>
						<p className="h4">Select a date</p>
						<div className="p-2 pb-4">
							<Calendar
								onChange={setSelectedDate}
								value={selectedDate}
								minDate={new Date()}
								maxDate={
									new Date(new Date().setMonth(new Date().getMonth() + 1))
								}
							/>
						</div>

						<p className="h4">Select a time</p>
						<div className="p-2 pb-4">
							<input
								type="radio"
								className="btn-check"
								id="time18"
								checked={selectedTime === "18:00"}
								onChange={() => changeTime("18:00")}
								disabled={freeTables["18:00"] < tablesNeeded}
							/>
							<label
								className={`btn ${
									freeTables["18:00"] < tablesNeeded
										? "btn-danger"
										: "btn-outline-dark button"
								} mx-2`}
								htmlFor="time18"
							>
								18:00 ({freeTables["18:00"]} available)
							</label>

							<input
								type="radio"
								className="btn-check"
								id="time21"
								checked={selectedTime === "21:00"}
								onChange={() => changeTime("21:00")}
								disabled={freeTables["21:00"] < tablesNeeded}
							/>
							<label
								className={`btn ${
									freeTables["21:00"] < tablesNeeded
										? "btn-danger"
										: "btn-outline-dark button"
								} mx-2`}
								htmlFor="time21"
							>
								21:00 ({freeTables["21:00"]} available)
							</label>
						</div>
						<p className="h4">Your information</p>
						<div className="p-2 pr-4">
							<div className="row mb-3">
								<label
									htmlFor="name"
									className="col-12 col-sm-4 col-form-label"
								>
									Name:
								</label>
								<div className="col-12 col-sm-8">
									<input
										type="text"
										id="name"
										className="form-control input-border"
										value={customer.name}
										onChange={(e) =>
											handleCustomerChange("name", e.target.value)
										}
									/>
								</div>
							</div>
							<div className="row mb-3">
								<label
									htmlFor="lastname"
									className="col-12 col-sm-4 col-form-label"
								>
									Last name:
								</label>
								<div className="col-12 col-sm-8">
									<input
										type="text"
										id="lastname"
										className="form-control input-border"
										value={customer.lastname}
										onChange={(e) =>
											handleCustomerChange("lastname", e.target.value)
										}
									/>
								</div>
							</div>

							<div className="row mb-3">
								{" "}
								<label
									htmlFor="email"
									className="col-12 col-sm-4 col-form-label"
								>
									Email:
								</label>
								<div className="col-12 col-sm-8">
									{" "}
									<input
										type="email"
										id="email"
										className="form-control input-border"
										value={customer.email}
										onChange={(e) =>
											handleCustomerChange("email", e.target.value)
										}
									/>
								</div>
							</div>

							<div className="row mb-3">
								{" "}
								<label
									htmlFor="phone"
									className="col-12 col-sm-4 col-form-label"
								>
									Phone:
								</label>
								<div className="col-12 col-sm-8">
									{" "}
									<input
										type="tel"
										id="phone"
										className="form-control input-border"
										value={customer.phone}
										onChange={(e) =>
											handleCustomerChange("phone", e.target.value)
										}
									/>
								</div>
							</div>
						</div>

						<div className="border p-2">
							<button
								className="btn button"
								onClick={createNewBooking}
								disabled={!selectedTime}
							>
								BOOK TABLE
							</button>
						</div>
					</>
				)}
			</div>
			<div className="col-12 col-md-6">
				<img
					src="src/img/Table.jpg"
					alt="A made up table"
					className="img-fluid fade-in-container img-scale"
				/>
			</div>
		</div>
	);
};

export default Book;
