import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <main className="flex-shrink pt-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 p-5">
                        <h1 className='h1'>CONTACT US</h1>
                        <section>
                            <p>
                                To get in touch with the Savor team simply fill out the contact form
                                below. <br />
                                Alternatively you can telephone us on 079 123 4567 or email us at{" "}
                                <br />
                                contact@savor.se <br />
                                <br />
                                Address: Drottninggatan 17, Stockholm Sweden
                            </p>
                            <div>
                                <ContactForm />
                            </div>
                        </section>
                    </div>
                
                    <div className="col-12 col-md-6 d-none d-md-block" style={{ maxHeight: "820px", overflow: "hidden" }}>
                        <img
                            src="src/assets/ContactPic.jpg"
                            alt="A made up table"
                            className="img-fluid fade-in-container img-scale" style={{ width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
