export class Customer {
	id: string;
	name: string;
	lastname: string;
	email: string;
	phone: string;

	constructor(data: any) {
		this.id = data._id;
		this.name = data.name;
		this.lastname = data.lastname;
		this.email = data.email;
		this.phone = data.phone;
	}
}
