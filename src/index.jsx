import React from "react";
import ReactDOM from "react-dom/client";

// Import React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import App
import App from "./App.jsx";

// Import Pages
import Service from "./pages/Service.jsx";
import Projects from "./pages/Projects.jsx";
import Subscription from "./pages/Subscription.jsx";
import Blog from "./pages/Blog.jsx";
import Connect from "./pages/connect.jsx";

// Import CSS Styling
import "./input.css";

const router = createBrowserRouter([
	// App
	{
		path: "/",
		element: <App />,
	},

	// Pages
	// Service
	{
		path: "/service",
		element: <Service />,
	},

	// Project
	{
		path: "/projects",
		element: <Projects />,
	},

	// Subscription
	{
		path: "/subscription",
		element: <Subscription />,
	},

	// Blog
	{
		path: "/blog",
		element: <Blog />,
	},

	// Connect
	{
		path: "/connect",
		element: <Connect />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
