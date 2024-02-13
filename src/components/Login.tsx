// Login.tsx
import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = () => {
		if (username === "admin" && password === "password") {
			console.log(username);
			console.log(password);
			console.log("success");
			setError("");
		} else {
			setError("Wrong username or password");
		}
	};

	return (
		<div>
			{error && (
				<div className="alert alert-danger " role="alert">
					{error}
				</div>
			)}

			<div className="col-12 col-lg-4 bg-light border p-2 mx-auto">
				<div className="mb-3">
					<label htmlFor="adminUsername" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="adminUsername"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="adminPassword" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="adminPassword"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button
					className="btn btn-outline-primary d-block w-100"
					onClick={handleLogin}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
