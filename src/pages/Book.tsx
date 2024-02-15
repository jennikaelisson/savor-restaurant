import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";

type DatePiece = Date | null;
type DateValue = DatePiece | [DatePiece, DatePiece];

const Book = () => {
	const [selectedDate, changeDate] = useState<DateValue>(new Date());
	const [selectedGuests, changeGuests] = useState(2);
	const [selectedTime, changeTime] = useState("18:00");

	useEffect(() => {
		checkAvailability();
	}, [selectedGuests, selectedDate]);

	const checkAvailability = () => {
		console.log(
			`Checking availability for ${selectedGuests} at ${selectedDate}`
		);
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
				<Calendar onChange={changeDate} value={selectedDate} />
			</div>

			<p className="h2">Select a time</p>
			<div className="bg-light border p-2">
				<input
					type="radio"
					className="btn-check"
					name="options-outlined"
					id="success-outlined"
					checked
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
