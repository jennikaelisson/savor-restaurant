import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	const [navOpen, setNavOpen] = useState(true);

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
										className="nav-link active"
										onClick={() => setNavOpen(false)}
									>
										Home
									</Link>
								</li>
								<li className="nav-item  border-end">
									<Link
										to="/book"
										className="nav-link "
										onClick={() => setNavOpen(false)}
									>
										Book table
									</Link>
								</li>
								<li className="nav-item   border-end">
									<Link
										to="/contact"
										className="nav-link "
										onClick={() => setNavOpen(false)}
									>
										Contact us
									</Link>
								</li>
								<li className="nav-item  border-end">
									<Link
										to="/cheat"
										className="nav-link text-danger"
										onClick={() => setNavOpen(false)}
									>
										Cheat
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/APItest"
										className="nav-link text-warning"
										onClick={() => setNavOpen(false)}
									>
										API TEST
									</Link>
								</li>
							</ul>
						</div>
						<Link
							to="/book"
							className="btn btn-outline-secondary d-none d-md-inline"
						>
							MAKE A RESERVATION
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
};
