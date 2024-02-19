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
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
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
      date: formatDate(selectedDate),
      time: selectedTime,
      numberOfGuests: selectedGuests,
      customer: customer,
    };
    await createBookingService(bookingData);
    setBookingConfirmed(true);
  };

  const tablesNeeded = Math.floor((selectedGuests - 1) / 6) + 1;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="light-background">
        <p className="h1">BOOKING</p>
        {bookingConfirmed ? (
          <div className="mt-3 alert alert-success" role="alert">
            Booking confirmed! Thank you, {customer.name} {customer.lastname},
            for your reservation. <br />
            <br />
            Date: {formatDate(selectedDate)}
            <br />
            Time: {selectedTime}
            <br />
            Guests: {selectedGuests}
            <br />
          </div>
        ) : (
          <>
            <p className="h2">Number of guests</p>
            <div className=" border p-2">
              <input
                type="number"
                min="1"
                max="90"
                className="input-border"
                value={selectedGuests}
                onChange={(e) => changeGuests(parseInt(e.target.value))}
              />
            </div>
            <p className="h2">Select a date</p>
            <div className=" border p-2">
              <Calendar
                onChange={changeDate}
                value={selectedDate}
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setMonth(new Date().getMonth() + 1))
                }
              />
            </div>

            <p className="h2">Select a time</p>
            <div className="border p-2">
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
            <div className="border p-2">
              <div><label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="input-border"
                value={customer.name}
                onChange={(e) => handleCustomerChange("name", e.target.value)}
              /></div>
<div>
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                className="input-border"
                value={customer.lastname}
                onChange={(e) =>
                  handleCustomerChange("lastname", e.target.value)
                }
              /></div>

             <div> <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="input-border"
                value={customer.email}
                onChange={(e) => handleCustomerChange("email", e.target.value)}
              /></div>

             <div> <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                className="input-border"
                value={customer.phone}
                onChange={(e) => handleCustomerChange("phone", e.target.value)}
              /></div>
            </div>
            <p className="h2">Book</p>
            <div className="border p-2">
              <button
                className="btn button"
                onClick={createNewBooking}
                disabled={!selectedTime}
              >
                BOOK TABLE
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default Book;
