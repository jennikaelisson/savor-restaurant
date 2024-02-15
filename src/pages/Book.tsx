import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
	getBookingsService,
	createBookingService,
} from "../services/bookingService.ts";

import { useState, useEffect } from "react";

const Book = () => {
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
	const [selectedDate, changeDate] = useState<Date>(new Date());
	const [selectedGuests, changeGuests] = useState(2);
	const [selectedTime, changeTime] = useState("");

	const [freeTables, setFreeTables] = useState<{ [key: string]: number }>({
		"18:00": 15,
		"21:00": 15,
	});
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
		setRestaurantBookings(await getBookingsService());
	};

	const formatDate = (date: Date) => {
		const year = date.getFullYear();
		const month = ("0" + (date.getMonth() + 1)).slice(-2);
		const day = ("0" + date.getDate()).slice(-2);
		return `${year}-${month}-${day}`;
	};

	const updateFreeTables = () => {
		const updatedFreeTables = {
			"18:00": 15,
			"21:00": 15,
		};

		restaurantBookings?.forEach((element: any) => {
			if (element.date === formatDate(selectedDate)) {
				const numberOfTables = Math.floor((element.numberOfGuests - 1) / 6) + 1;
				updatedFreeTables[element.time] -= numberOfTables;
			}
		});

		setFreeTables(updatedFreeTables);
	};
	const createNewBooking = async () => {
		const bookingData = {
			restaurantId: "65cc7dddf65c4399fb07d036",
			date: formatDate(selectedDate),
			time: selectedTime,
			numberOfGuests: selectedGuests,
			customer: {
				name: "testaa",
				lastname: "testaa",
				email: "someone@somedomain.com",
				phone: "070-1112233",
			},
		};
		await createBookingService(bookingData);
		fetchData();
	};

	const tablesNeeded = Math.floor((selectedGuests - 1) / 6) + 1;

	return (
		<>
			<p className="h1">Booking</p>

			<p className="h2">Number of guests</p>
			<div className="bg-light border p-2">
				<input
					type="number"
					min="1"
					max="90"
					value={selectedGuests}
					onChange={(e) => changeGuests(parseInt(e.target.value))}
				/>
			</div>
			<p className="h2">Select a date</p>
			<div className="bg-light border p-2">
				<Calendar
					onChange={changeDate}
					value={selectedDate}
					minDate={new Date()}
					maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
				/>
			</div>

			<p className="h2">Select a time</p>
			<div className="bg-light border p-2">
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
							: "btn-outline-success"
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
							: "btn-outline-success"
					} mx-2`}
					htmlFor="time21"
				>
					21:00 ({freeTables["21:00"]} available)
				</label>
			</div>
			<p className="h2">Your information</p>
			<div className="bg-light border p-2">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					value={customer.name}
					onChange={(e) => handleCustomerChange("name", e.target.value)}
				/>

				<label htmlFor="lastname">Lastname:</label>
				<input
					type="text"
					id="lastname"
					value={customer.lastname}
					onChange={(e) => handleCustomerChange("lastname", e.target.value)}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={customer.email}
					onChange={(e) => handleCustomerChange("email", e.target.value)}
				/>

				<label htmlFor="phone">Phone:</label>
				<input
					type="tel"
					id="phone"
					value={customer.phone}
					onChange={(e) => handleCustomerChange("phone", e.target.value)}
				/>
			</div>
			<p className="h2">Book</p>
			<div className="bg-light border p-2">
				<button
					className="btn btn-success"
					onClick={createNewBooking}
					disabled={!selectedTime}
				>
					Book table
				</button>
			</div>
		</>
	);
};

export default Book;
