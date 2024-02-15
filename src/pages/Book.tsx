import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
	getBookingsService,
	createBookingService,
} from "../services/bookingService.ts";

import { useState, useEffect } from "react";

type DatePiece = Date | null;
type DateValue = DatePiece | [DatePiece, DatePiece];

const Book = () => {
	const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
	const [selectedDate, changeDate] = useState<DateValue>(new Date());
	const [selectedGuests, changeGuests] = useState(2);
	const [selectedTime, changeTime] = useState("18:00");

	useEffect(() => {
		const freeTables: { [key: string]: number } = {
			"18:00": 15,
			"21:00": 15,
		};
		restaurantBookings?.forEach((element: Object) => {
			if (element.date == formatDate(selectedDate)) {
				const numberOfTables = Math.floor((element.numberOfGuests - 1) / 6) + 1;
				freeTables[element.time] -= numberOfTables;
			}
		});

		let tablesNeeded = Math.floor((selectedGuests - 1) / 6) + 1;
		console.log(`Needed (${tablesNeeded}) `);
		console.log(freeTables);
	}, [selectedGuests, selectedDate, selectedTime]);

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

	return (
		<>
			<p className="h1">Booking</p>

			<p className="h2">Number of guests</p>
			<div className="bg-light border p-2">
				<input
					type="number"
					min="1"
					max="240"
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
					name="options-outlined"
					id="success-outlined"
					checked={selectedTime === "18:00"}
					onChange={() => changeTime("18:00")}
				/>
				<label
					className="btn btn-outline-success mx-2"
					htmlFor="success-outlined"
				>
					18:00
				</label>

				<input
					type="radio"
					className="btn-check"
					name="options-outlined"
					id="danger-outlined"
					checked={selectedTime === "21:00"}
					onChange={() => changeTime("21:00")}
				/>
				<label
					className="btn btn-outline-success mx-2"
					htmlFor="danger-outlined"
				>
					21:00
				</label>
			</div>
		</>
	);
};

export default Book;
