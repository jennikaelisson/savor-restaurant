import Login from "../components/Login";
import { useState } from "react";

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
						Adminpanel should be here
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
