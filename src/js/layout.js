import React from "react";
// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import injectContext from "./store/appContext";
// Views
import { Home } from "./views/home";
import { Login } from "./views/Login.js";
import { Dashboard } from "./views/Dashboard.js";
// Components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

	return (
		<div className="container-fluid">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
