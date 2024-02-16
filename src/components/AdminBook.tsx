import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  deleteBookingService,
  getBookingsService,
} from "../services/bookingService";

const AdminBook = () => {
  const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  const fetchData = async () => {
    try {
      setRestaurantBookings(await getBookingsService());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2); 
    return `${year}-${month}-${day}`;
};

const filteredBookings = restaurantBookings?.filter((booking: any) => {
  const selectedDateLocal = new Date(selectedDate);
  const bookingDateLocal = new Date(booking.date);

  // Adjust to the local time zone offset
  selectedDateLocal.setMinutes(
    selectedDateLocal.getMinutes() - selectedDateLocal.getTimezoneOffset()
  );
  bookingDateLocal.setMinutes(
    bookingDateLocal.getMinutes() - bookingDateLocal.getTimezoneOffset()
  );

  return formatDate(selectedDateLocal) === formatDate(bookingDateLocal);
});

  const handleDateChange = (date: Date | Date[]) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <b>Select Date:</b>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <b>Bookings</b>
      <div className="border">
        {filteredBookings && filteredBookings.length > 0 ? (
          <>
            <h2>
              Bookings for{" "}
              {selectedDate instanceof Date
                ? selectedDate.toLocaleDateString()
                : ""}
            </h2>
            {filteredBookings.map((booking: any) => (
              <div key={booking._id} className="border m-1">
                {/* <p>ID: {booking._id}</p> */}
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Number of Guests: {booking.numberOfGuests}</p>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteBookingService(booking._id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        ) : (
          <h4 className="text-danger">No bookings available on this date</h4>
        )}
      </div>
    </>
  );
};

export default AdminBook;
