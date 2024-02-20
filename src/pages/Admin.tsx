import AdminBook from "../components/AdminBook";
import Login from "../components/Login";
import { useState } from "react";

const Admin = () => {
  const [admin, setAdmin] = useState(
    () => localStorage.getItem("admin") !== null
  );
  const handleAdminStatus = (adminStatus: boolean) => {
    adminStatus
      ? localStorage.setItem("admin", "true")
      : localStorage.removeItem("admin");
    setAdmin(adminStatus);
  };

  return (
    <>
      <h2>ADMIN</h2>
      {admin ? (
        <>
          <div className="row">
            <div className="col-12">
            <div className="p-2 bg-light border my-2">
              <div>
                <AdminBook />
              </div>
            </div>
           </div>
          </div>
          <button
            className="btn btn-outline-primary button"
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
