import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<>
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
