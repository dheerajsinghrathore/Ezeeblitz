import React from "react";
import NavBar from "./components/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
function App() {
	return (
		<div className="wrapper bg-dark text-white">
			<div className="container mt-5 py-5 px-3 px-md-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/single/:id" element={<Single />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			<NavBar title="Ezee-Cart-Blitz" />
		</div>
	);
}

export default App;
