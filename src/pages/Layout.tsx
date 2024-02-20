import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
const Layout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]);

	const location = useLocation();

	const isHome = location.pathname === "/" || location.pathname === "/book"; // Adjust the path accordingly

	return (
		<>
			<Header />

			<main className={` ${isHome ? "flex-shrink" : "flex-shrink-0 mt-5"}`}>
				<div className={` ${isHome ? "" : "container py-4"}`}>
					<Outlet />
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Layout;
