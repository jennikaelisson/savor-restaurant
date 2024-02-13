import ContactForm from '../components/ContactForm';


export const Contact = () => {
	return (
		<>
			<h1>CONTACT US</h1>
			<section>
			<p>
			To get in touch with the Savor team simply fill out the contact form below. <br />
			Alternatively you can telephone us on 079 123 4567 or email us at <br /> 
			contact@savor.se <br /><br />
			Address: Drottninggatan 16, Stockholm Sweden
			</p>
			<div>
				<ContactForm />
			</div>
			</section>
		</>
	);
};
