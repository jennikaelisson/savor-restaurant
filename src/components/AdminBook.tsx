import axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getBookingsService } from "../services/bookingService";

const AdminBook = () => {
  const restaurantID = "65cc7dddf65c4399fb07d036";
  const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  const fetchData = async (endpoint: string) => {
    try {
      setRestaurantBookings(await getBookingsService());

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData("restaurant");
    fetchData("booking/restaurant");
  }, []);

  // Filter bookings for the selected date
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

    return (
      selectedDateLocal.toISOString().split("T")[0] ===
      bookingDateLocal.toISOString().split("T")[0]
    );
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
              <div key={booking._id} className="border">
                {/* <p>ID: {booking._id}</p> */}
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Number of Guests: {booking.numberOfGuests}</p>
                <button type="button" className="btn btn-warning">
				Edit
			</button><button type="button" className="btn btn-danger">
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
