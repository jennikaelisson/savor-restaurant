class Customer {
	public id: string;
	public name: string;
	public lastName: string;
	public email: string;
	public phone: string;

	constructor(
		id: string,
		name: string,
		lastName: string,
		email: string,
		phone: string
	) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}
}
