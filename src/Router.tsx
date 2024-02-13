import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { Cheat } from "./pages/Cheat";
import { Errorpage } from "./pages/Errorpage";

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
			{
				path: "/cheat",
				element: <Cheat />,
			},
		],
	},
	{
		path: "*",
		element: <Errorpage />,
	},
]);
