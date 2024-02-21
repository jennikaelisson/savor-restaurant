import { useState } from "react";
import BookingConfirmed from "./BookingConfirmed.tsx";
import BookingTable from "./BookingTable.tsx";
interface BookingConfirmedProps {
	name: string;
	date: string;
	time: string;
	guests: number;
}

const Book = () => {
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const [bookingData, setBookingData] = useState<BookingConfirmedProps>({
		name: "",
		date: "",
		time: "",
		guests: 0,
	});

	const handleBookingConfirmed = (data: BookingConfirmedProps) => {
		setBookingData(data);
		setBookingConfirmed(true);
	};
	return (
		<main className="flex-shrink">
			<div className="row">
				<div
					className=" p-5 col-12 col-md-6"
					style={{ height: "100vh", overflowY: "auto" }}
				>
					<p className="h1 pt-5">BOOKING</p>
					{bookingConfirmed ? (
						<BookingConfirmed {...bookingData} />
					) : (
						<BookingTable onBookingConfirmed={handleBookingConfirmed} />
					)}
				</div>
				<div className="col-12 col-md-6">
					<img
						src="src/assets/Table.jpg"
						alt="A made up table"
						className="img-fluid fade-in-container img-scale"
					/>
				</div>
			</div>
		</main>
	);
};

export default Book;
