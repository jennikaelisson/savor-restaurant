import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";

type DatePiece = Date | null;
type DateValue = DatePiece | [DatePiece, DatePiece];

const AdminBook = () => {
    const [selectedDate, changeDate] = useState<DateValue>(new Date());

    useEffect(() => {
console.log(selectedDate);
        // Placera logik här
    }, [selectedDate]);

    return (
        <Calendar onChange={changeDate} value={selectedDate} />
    );
};

export default AdminBook;