import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
	return (
		<>
			<Header />

			<main className="flex-shrink-0">
				<div>
					<Outlet />
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Layout;
