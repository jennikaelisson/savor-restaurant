import { Customer } from "./Customer";

export class Booking {
	_id: string;
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	customerId: string;
	customer: Customer | null | undefined;

	constructor(data: any) {
		this._id = data._id;
		this.restaurantId = data.restaurantId;
		this.date = data.date;
		this.time = data.time;
		this.numberOfGuests = data.numberOfGuests;
		this.customerId = data.customerId;
		this.customer = data.customer ?? null;
	}

	updateField(field: any, value: any): Booking {
		return new Booking({
			...this,
			[field]: value,
			customer: {
				...this.customer,
				[field]: value,
			},
		});
	}
}
