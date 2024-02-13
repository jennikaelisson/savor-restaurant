import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const Layout = () => {
	return (
		<>
			<Header />

			<main className="flex-shrink-0 mt-5">
				<div className="container py-4">
					<Outlet />
				</div>
			</main>

			<Footer />
		</>
	);
};
