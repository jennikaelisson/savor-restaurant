import { ChangeEvent, useState } from 'react';

const useForm = (initialState:any) => {
 const [formData, setFormData] = useState(initialState)

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.id] :e.target.value
    });
 };
 const resetForm = () => {
    setFormData(initialState);
 };

  return {
    formData,
    handleChange,
    resetForm
  };
};

const ContactForm = () => {
    const {formData, handleChange, resetForm} = useForm({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    }); 
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetForm();
        
    };

   return (
   <section>
    <form onSubmit={handleSubmit}>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" 
        value={formData.firstName} onChange={handleChange} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName"
        value={formData.lastName} onChange={handleChange} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phoneNumber"
        value={formData.phoneNumber} onChange={handleChange} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
    </div>
    <div className={"mb-3"}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows={3} 
        value={formData.message} onChange={handleChange}></textarea>
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="policyCheckbox" />
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
           <button
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