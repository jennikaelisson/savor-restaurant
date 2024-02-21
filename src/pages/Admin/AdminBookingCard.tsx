import { Booking } from "../../models/Booking";

interface AdminBookingCardProps {
	booking: Booking;
	index: number;
	editingIndex: number | null;
	handleInputChange: (bookingID: string, field: string, value: any) => void;
	deleteBooking: (bookingID: string) => Promise<void>;
	updateBooking: (index: number) => Promise<void>;
}

const AdminBookingCard = (props: AdminBookingCardProps) => {
	const {
		booking,
		index,
		editingIndex,
		handleInputChange,
		deleteBooking,
		updateBooking,
	} = props;

	return (
		<>
			<div key={booking._id} className="col-12 col-lg-6 col-xl-4">
				<div className="card h-100 d-flex flex-fill">
					<div className="card-body">
						<h5 className="card-title">Booking ID: {booking._id}</h5>
						<p className="card-text">
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
						</p>

						<p className="card-text">
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
						</p>

						<p className="card-text">
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
						</p>

						<div className="light-background p-2 my-2">
							<p className="card-text">
								CustomerID:
								<input
									type="text"
									readOnly
									value={booking.customerId}
									onChange={(e) =>
										handleInputChange(booking._id, "customerId", e.target.value)
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
											handleInputChange(booking._id, "lastname", e.target.value)
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
							className={`btn ${
								editingIndex === index ? "custom-btn-save" : "custom-btn-edit"
							}`}
							onClick={() => updateBooking(index)}
						>
							{editingIndex === index ? "Save" : "Edit"}
						</button>
						<button
							className="btn btn-danger custom-btn-delete"
							onClick={() => {
								deleteBooking(booking._id);
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default AdminBookingCard;
