import { useState } from 'react';

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
    }

   return (
   <section>
    <form onSubmit={handleSubmit}>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" 
        value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1"
        value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1"
        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} 
        value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">I have read and understood the privacy policy
    </label> 
    </div>
    <a href="#" className="link-info">Our privacy policy</a>
 
    <button
            type="submit" 
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >
            Submit
    </button>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
          <div className="modal-content">
           <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Thanks for contacting us</h5>
        `   <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ></button>
           </div>

           <div className="modal-body">We will get back to you as soon as possible!</div>
           <div className="modal-footer">
            <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal">close
            </button>
           </div>
          </div>
         </div>
       </div>
    
      </form>
    </section>
    
   );

};

export default ContactForm;