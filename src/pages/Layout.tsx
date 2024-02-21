import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
const Layout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]);

	return (
		<>
			<Header />

			<Outlet />

			<Footer />
		</>
	);
};

export default Layout;
