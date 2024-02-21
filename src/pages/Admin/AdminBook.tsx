import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
	deleteBookingService,
	getBookingsAndCustomerService,
	updateBookingAndCustomerService,
} from "../../services/bookingService.ts";
import { Booking } from "../../models/Booking.ts";
import AdminBookingCard from "./AdminBookingCard.tsx";

const AdminBook = () => {
	type ValuePiece = Date | null;
	type Value = ValuePiece | [ValuePiece, ValuePiece];

	const [selectedDate, setSelectedDate] = useState<Value>(new Date());
	const [bookings, setBookings] = useState<Booking[]>([]);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);

	const getBookings = async () => {
		setBookings(await getBookingsAndCustomerService());
	};

	const resetEditing = () => {
		setEditingIndex(null);
	};

	const updateBooking = async (index: number) => {
		if (editingIndex === null) {
			setEditingIndex(index);
		} else {
			await updateBookingAndCustomerService(filteredBookings[index]);
			setEditingIndex(null);
		}
	};

	const deleteBooking = async (bookingID: string) => {
		await deleteBookingService(bookingID);
		getBookings();
	};

	useEffect(() => {
		try {
			getBookings();
		} catch (error) {
			console.error("Error fetching data: ", error);
		}
	}, []);

	const handleInputChange = (bookingID: string, field: string, value: any) => {
		setBookings((prevValues) =>
			prevValues.map((booking) =>
				booking._id === bookingID ? booking.updateField(field, value) : booking
			)
		);
	};
	const handleDateChange = (date: Value) => {
		setSelectedDate(date);
		resetEditing();
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
	const filteredBookings = bookings.filter((booking: Booking) => {
		const selectedDates = Array.isArray(selectedDate)
			? selectedDate
			: [selectedDate];

		const selectedDateLocal = selectedDates.map((date) => {
			const dateObject = new Date(formatDate(date));
			dateObject.setMinutes(
				dateObject.getMinutes() - dateObject.getTimezoneOffset()
			);
			return dateObject;
		});

		const bookingDateLocal = new Date(booking.date);
		bookingDateLocal.setMinutes(
			bookingDateLocal.getMinutes() - bookingDateLocal.getTimezoneOffset()
		);

		return selectedDateLocal.some(
			(date) => formatDate(date) === formatDate(bookingDateLocal)
		);
	});

	return (
		<>
			<div className="row">
				<div className="col-12 col-lg-4">
					<b>Select Date:</b>
					<Calendar onChange={handleDateChange} value={selectedDate} />
				</div>

				<div className="col-12 col-lg-8">
					<b>Bookings:</b>
					<div className="border">
						<>
							<h2>{formatDate(selectedDate)}</h2>
							{filteredBookings && filteredBookings.length > 0 ? (
								<div className="row">
									{filteredBookings.map((booking, index) => (
										<AdminBookingCard
											key={booking._id}
											booking={booking}
											index={index}
											editingIndex={editingIndex}
											handleInputChange={handleInputChange}
											deleteBooking={deleteBooking}
											updateBooking={updateBooking}
										/>
									))}
								</div>
							) : (
								<h4 className="text-danger">
									No bookings available on this date
								</h4>
							)}
						</>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminBook;
