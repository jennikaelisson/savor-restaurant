import AdminBook from "../components/AdminBook";
import Login from "../components/Login";
import { useState } from "react";
import { AdminCreateBooking } from "../components/AdminCreateBooking";

const Admin = () => {
  const [admin, setAdmin] = useState(
    () => localStorage.getItem("admin") !== null
  );
  const [activeTab, setActiveTab] = useState("adminBook");

  const handleAdminStatus = (adminStatus: boolean) => {
    adminStatus
      ? localStorage.setItem("admin", "true")
      : localStorage.removeItem("admin");
    setAdmin(adminStatus);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "adminBook":
        return <AdminBook />;
      case "adminCreateBooking":
        return <AdminCreateBooking />;
      default:
        return null;
    }
  };

  return (
    <>
      
      {admin ? (
        <>
          <div className="p-2 bg-light border my-2">
            <div className="col-12">
              <h2>ADMIN</h2>
            </div>

            <div className="row p-2">
              <div className="col-12 col-lg-5 col-xl-4">
              
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "adminBook" ? "active" : ""}`}
                      onClick={() => setActiveTab("adminBook")}
                    >
                      Admin Book
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "adminCreateBooking" ? "active" : ""}`}
                      onClick={() => setActiveTab("adminCreateBooking")}
                    >
                      Add Booking
                    </button>
                  </li>
                </ul>
                
              
                {renderTabContent()}
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
