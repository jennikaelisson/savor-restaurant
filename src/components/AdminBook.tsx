import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  deleteBookingService,
  getBookingsAndCustomerService,
  updateBookingAndCustomerService,
} from "../services/bookingService";
import { Booking } from "../models/Booking";

const AdminBook = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const getBookings = async () => {
    setBookings(await getBookingsAndCustomerService());
  };

  const updateBooking = async (index: number) => {
    if (editingIndex === null) {
      setEditingIndex(index);
    } else {
      await updateBookingAndCustomerService(bookings[index]);
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

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const filteredBookings = bookings.filter((booking: Booking) => {
    const selectedDates = Array.isArray(selectedDate)
      ? selectedDate
      : [selectedDate];

    const selectedDateLocal = selectedDates.map((date) => {
      const dateObject = new Date(date);
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

  const handleDateChange = (date: Date | Date[]) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className= 'col-12 col-lg-4'>
        <b>Select Date:</b>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div>
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
            {filteredBookings.map((booking, index) => (
              <div key={booking._id} className="border m-1">
                <p>ID: {booking._id}</p>
                Date:
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={booking.date}
                    onChange={(e) =>
                      handleInputChange(booking._id, "date", e.target.value)
                    }
                  />
                ) : (
                  <span>{booking.date}</span>
                )}
                <br />
                Time:
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={booking.time}
                    onChange={(e) =>
                      handleInputChange(booking._id, "time", e.target.value)
                    }
                  />
                ) : (
                  <span>{booking.time}</span>
                )}
                <br />
                Number of Guests:
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={booking.numberOfGuests}
                    onChange={(e) =>
                      handleInputChange(
                        booking._id,
                        "numberOfGuests",
                        parseInt(e.target.value, 10)
                      )
                    }
                    min="1"
                    max="240"
                  />
                ) : (
                  <span>{booking.numberOfGuests}</span>
                )}
                <br />
                <div className="bg-secondary p-2 my-2">
                  <p>
                    CustomerID:
                    <input
                      type="text"
                      readOnly
                      value={booking.customerId}
                      onChange={(e) =>
                        handleInputChange(
                          booking._id,
                          "customerId",
                          e.target.value
                        )
                      }
                    />
                  </p>
                  <hr />
                  Name:
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={booking.customer?.name || ""}
                        onChange={(e) =>
                          handleInputChange(booking._id, "name", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        value={booking.customer?.lastname || ""}
                        onChange={(e) =>
                          handleInputChange(
                            booking._id,
                            "lastname",
                            e.target.value
                          )
                        }
                      />
                    </>
                  ) : (
                    <span>
                      {booking.customer?.name} {booking.customer?.lastname}
                    </span>
                  )}
                  <br />
                  Email:
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={booking.customer?.email || ""}
                      onChange={(e) =>
                        handleInputChange(booking._id, "email", e.target.value)
                      }
                    />
                  ) : (
                    <span>{booking.customer?.email}</span>
                  )}
                  <br />
                  Phone:
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={booking.customer?.phone || ""}
                      onChange={(e) =>
                        handleInputChange(booking._id, "phone", e.target.value)
                      }
                    />
                  ) : (
                    <span>{booking.customer?.phone}</span>
                  )}
                </div>
                <button
                  type="button"
                  className={`btn ${
                    editingIndex === index ? "btn-success" : "btn-warning"
                  }`}
                  onClick={() => updateBooking(index)}
                >
                  {editingIndex === index ? "Save" : "Edit"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteBooking(booking._id);
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
      </div>
    </>
  );
};

export default AdminBook;
