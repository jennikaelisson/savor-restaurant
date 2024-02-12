import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<header className="w-100">
				<nav className="navbar navbar-expand-lg fixed-top  bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							Navbar
						</a>
						<button className="navbar-toggler" type="button">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/" className="nav-link active">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/book" className="nav-link ">
										Book table
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact" className="nav-link ">
										Contact us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<main className="flex-shrink-0 mt-5">
				<div className="container py-2">
					<Outlet />
				</div>
			</main>

			<footer className="footer mt-auto py-3 bg-light">
				<div className="container text-center">
					<span className="text-muted ">
						Footer - <Link to="/admin">Adminlogin</Link>
					</span>
				</div>
			</footer>
		</>
	);
};
