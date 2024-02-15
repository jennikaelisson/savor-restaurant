import AdminBook from "../components/AdminBook";
import Login from "../components/Login";
import { useState } from "react";
import Book from "./Book";

const Admin = () => {
  const [admin, setAdmin] = useState(
    () => localStorage.getItem("admin") !== null
  );
  const handleAdminStatus = (adminStatus: boolean) => {
    // Depending on adminStatus value, set or remove from local storage
    adminStatus
      ? localStorage.setItem("admin", "true")
      : localStorage.removeItem("admin");
    // Update the state
    setAdmin(adminStatus);
  };

  return (
    <>
      <h1>Admin</h1>
      {admin ? (
        <>
          <div className="p-2 bg-light border my-2">
            <div className="col-12">
              <h1>Admin</h1>
            </div>

            <div className="row p-2">
              <div className="col-12 col-lg-5 col-xl-4">
                <AdminBook />
              </div>
              {/* <div className="col-12 col-md-6 col-lg-3  col-xl-4 p-2">
                <h4>6PM</h4>
                <div>list of bookings</div>
              </div>
              <div className="col-12 col-md-6 col-lg-4  col-xl-4 p-2">
                <h4>9PM</h4>
                <div>list of bookings</div>
              </div> */}
            </div>
            <div className="p-2">
              <div>
                <h3>Add booking</h3>
              </div>
              <div>
                <Book /> 
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleAdminStatus(false)}
          >
            Logout
          </button>
        </>
      ) : (
        <Login handleAdminStatus={handleAdminStatus} />
      )}
    </>
  );
};
export default Admin;
