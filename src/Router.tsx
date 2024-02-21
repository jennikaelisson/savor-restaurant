import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Errorpage from "./pages/Errorpage/Errorpage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				index: true,
			},
			{
				path: "/book",
				element: <Book />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/admin",
				element: <Admin />,
			},
		],
	},
	{
		path: "*",
		element: <Errorpage />,
	},
]);
