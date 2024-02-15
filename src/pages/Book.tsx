import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

type DatePiece = Date | null;
type DateValue = DatePiece | [DatePiece, DatePiece];

const Book = () => {
	const [selectedDate, changeDate] = useState<DateValue>(new Date());

	const calendarChange = (newDate: DateValue) => {
		changeDate(newDate);
	};

	return (
		<>
			<p className="h1">Booking</p>

			<p className="h2">Number of guests</p>
			<div className="bg-light border p-2">
				<input type="number" min="1" max="240" placeholder="2" />
			</div>
			<p className="h2">Select a date</p>
			<div className="bg-light border p-2">
				<Calendar onChange={calendarChange} value={selectedDate} />
			</div>
			<div>Time </div>
		</>
	);
};

export default Book;
