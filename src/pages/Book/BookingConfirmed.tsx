interface BookingConfirmedProps {
	name: string;
	date: string;
	time: string;
	guests: number;
}

const BookingConfirmed = (props: BookingConfirmedProps) => {
	const { name, date, time, guests } = props;
	return (
		<>
			<div className="mt-3 alert alert-success" role="alert">
				Booking confirmed! Thank you, {name}, for your reservation. <br />
				<br />
				Date: {date}
				<br />
				Time: {time}
				<br />
				Guests: {guests}
				<br />
			</div>
		</>
	);
};

export default BookingConfirmed;
