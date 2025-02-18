import { ChangeEvent, useState, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string | number;
  email: string;
  message: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  phoneNumber: string | number;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
  });

  const validateField = (
    fieldName: keyof FormData,
    value: string | number
  ): string => {
    switch (fieldName) {
      case "firstName":
      case "lastName":
      case "phoneNumber":
      case "email":
        const stringValue =
          typeof value === "number" ? value.toString() : value;
        if (stringValue.trim() === "") {
          return `${fieldName} is required`;
        }
        break;
      default:
        break;
    }
    return "";
  };

  const handleChange =
    (fieldName: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [fieldName]: value }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: validateField(fieldName, value),
      }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every((error) => error === "");
    if (!isFormValid) {
      alert("Please fill out the form.");
      return;
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className={"mb-3 col-md-4"}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
            {errors.firstName &&(
              <div className="error">{errors.firstName}</div>
            )}
          </div>
          <div className={"mb-3 col-md-4"}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
            {errors.lastName && (<div className="error">{errors.lastName}</div>)}
          </div>
          <div className={"mb-3"}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </div>
          <div className={"mb-3"}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange("email")}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className={"mb-3"}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange("message")}
            ></textarea>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="policyCheckbox"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I have read and understood the privacy policy
          </label>
        </div>
        <button
          className="btn custom-btn-privacy mt-2"
          data-bs-toggle="modal"
          data-bs-target="#privacyPolicyModal"
        >
          Our privacy policy
        </button>

        <div
          className="modal fade"
          id="privacyPolicyModal" 
          aria-labelledby="privacyPolicyModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                Our privacy policy
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
              At Savor, we are committed to protecting your privacy and ensuring the security of your personal information. We collect and process your personal data solely for the purpose of providing you with the best dining experience possible. Your information, including your name, contact details, and dining preferences, is stored securely and used only for reservations, communication, and improving our services. <br /><br />

              We do not sell, trade, or share your personal information with third parties without your consent. Any information provided to us is treated with the utmost confidentiality and will not be disclosed except as required by law or with your explicit permission. By using our services, you agree to the terms of this privacy policy. <br /><br />

              For any questions or concerns regarding your privacy or our data practices, please contact us at privacy@savor.com.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
         <br />

        <button
          type="submit"
          className="btn button mt-2"
          data-bs-toggle="modal"
          data-bs-target="#submitModal"
        >
          Submit
        </button>
        <div
          className="modal fade"
          id="submitModal" 
          aria-labelledby="submitModalLabel" 
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thanks for contacting us
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                We will get back to you as soon as possible!
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  close
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
