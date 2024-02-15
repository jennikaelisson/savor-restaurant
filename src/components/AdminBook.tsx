// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { useState, useEffect } from "react";

// type DatePiece = Date | null;
// type DateValue = DatePiece | [DatePiece, DatePiece];

// const AdminBook = () => {
//     const [selectedDate, changeDate] = useState<DateValue>(new Date());

//     useEffect(() => {
// console.log(selectedDate);
//         // Placera logik här
//     }, [selectedDate]);

//     return (
//         <Calendar onChange={changeDate} value={selectedDate} />
//     );
// };

// export default AdminBook;

import axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AdminBook = () => {
  const restaurantID = "65cc7dddf65c4399fb07d036";
  const [restaurantBookings, setRestaurantBookings] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  const fetchData = async (endpoint: string) => {
    try {
      const response = await axios.get(
        `https://school-restaurant-api.azurewebsites.net/${endpoint}/${restaurantID}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;

        switch (endpoint) {
          case "booking/restaurant":
            setRestaurantBookings(data);
            break;
        }
      } else {
        console.error("Error:", response.statusText);
      }
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
              <div key={booking._id}>
                {/* <p>ID: {booking._id}</p> */}
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Number of Guests: {booking.numberOfGuests}</p>
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

export default AdminBook;
