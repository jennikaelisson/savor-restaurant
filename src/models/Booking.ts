class Booking {
	public id: string;
	public date: string;
	public time: string;
	public numberOfGuests: number;
	public customer?: Customer;

	constructor(id: string, date: string, time: string, numberOfGuests: number) {
		this.id = id;
		this.date = date;
		this.time = time;
		this.numberOfGuests = numberOfGuests;
	}

	setCustomer(customer: Customer) {
		this.customer = customer;
	}
}
