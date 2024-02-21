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
        <a href="#" className="link-info">
          Our privacy policy
        </a> <br />

        <button
          type="submit"
          className="btn button mt-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
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
