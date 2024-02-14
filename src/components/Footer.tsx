import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container">
					<div className="mx-0 row">
						<div className="col-md-8 p-0 col-xs-12">
							<div className="p-1">
								<h1>SAVOR</h1>
							</div>
							<div className="row">
								<div className="col-sm-3 col-xs-12">
									{/* display these 3 as flex wrap */}
									<div className="p-1">
										<h3>Sitemap</h3>
										<ul>
											<li>
												<Link to="#">About</Link>
											</li>
											<li>
												<Link to="#">Menu</Link>
											</li>
											<li>
												<Link to="#">News</Link>
											</li>
											<li>
												<Link to="#">Meet the team</Link>
											</li>
											<li>
												<Link to="#">Reservation Policy</Link>
											</li>
											<li>
												<Link to="#">Privacy Policy</Link>
											</li>
										</ul>
									</div>
									<div className="p-1">
										<h3>Socials</h3>
										<div>icons</div>
									</div>
								</div>
								<div className="col-sm-4 col-xs-12">
									<div className="p-1">
										<h3>Locations</h3>
										<p>
											Upper Level, Overseas Passenger Terminal,
											<br />
											The Rocks, Sydney 2000
											<br />
											phone: 02 9251 5600
										</p>
									</div>
									<div className="p-1">
										<h3>Opening hours</h3>
										<p>
											LUNCH
											<br />
											Saturday and Sunday
											<br />
											First come first served 12pm to 1.30pm
										</p>
										<p>
											DINNER
											<br />
											Thursday to Sunday Reservations from 6pm to 8.45pm
										</p>
									</div>
								</div>
								<div className="col-sm-5 col-xs-12">
									<div className="p-1">
										<h3>Reservations</h3>
									</div>
									<div className="p-1">
										<Link to="/book">Make a reservation!</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 p-0 col-xs-12">
							<div className="p-1">
								<h2>Other branches</h2>
							</div>
							<div className="p-1">
								<ul>
									<li>
										<h4>Restaurant 1</h4>
									</li>
									<li>
										<h4>Restaurant 2</h4>
									</li>
									<li>
										<h4>Restaurant 3</h4>
									</li>
									<li>
										<h4>Restaurant 4</h4>
									</li>{" "}
								</ul>
							</div>
						</div>
					</div>
					<div className="p-1 text-center">
						<h4>© Savor Restaurant 2024. All rights reserved.</h4>
					</div>
					<span className="text-muted">
						<Link to="/admin">Adminlogin</Link>
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
