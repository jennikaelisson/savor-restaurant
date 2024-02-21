import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [navOpen, setNavOpen] = useState(true);
	const location = useLocation().pathname;
	useEffect(() => {
		setNavOpen(false);
	}, [location]);

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<img src="src/assets/logo.png" height="40" />
						</a>
						<button
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarCollapse"
							onClick={() => setNavOpen(!navOpen)}
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className={`navbar-collapse collapse ${navOpen ? "show" : ""}`}
							id="navbarCollapse"
						>
							<ul className="navbar-nav me-auto mb-2 mb-md-0">
								<li className="nav-item border-end">
									<Link
										to="/"
										className={`nav-link ${location == "/" ? "active" : ""}`}
									>
										Home
									</Link>
								</li>
								<li className="nav-item  border-end">
									<Link
										to="/book"
										className={`nav-link ${
											location == "/book" ? "active" : ""
										}`}
									>
										Book table
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/contact"
										className={`nav-link ${
											location == "/contact" ? "active" : ""
										}`}
									>
										Contact us
									</Link>
								</li>
							</ul>
						</div>
						<Link
							to="/book"
							className="btn button link-color d-none d-md-inline"
						>
							MAKE A RESERVATION
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
