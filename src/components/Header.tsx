import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							LOGO
						</a>
						<button
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarCollapse"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="navbar-collapse collapse" id="navbarCollapse">
							<ul className="navbar-nav me-auto mb-2 mb-md-0">
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
		</>
	);
};
