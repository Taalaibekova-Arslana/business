import React from "react";
import SupHeader from "./header/SupHeader";
import Footer from "./footer/Footer";
import "./Layout.css";
import { Route, Routes, useLocation } from "react-router-dom";
import MashinaKg from "../pages/MashinaKg";
import HouseKg from "../pages/HouseKg";
import HeaderMash from "./header/HeaderMash";
import HeaderHou from "./header/HeaderHou";

const Layout = () => {
	const location = useLocation();

	const renderHeader = () => {
		if (location.pathname === "/mashinakg") {
			return <HeaderMash />;
		} else if (location.pathname === "/housekg") {
			return <HeaderHou />;
		}
		return null;
	};

	return (
		<div className="layout">
			<div>
				<SupHeader />
				{renderHeader()}
			</div>
			<main>
				<Routes>
					<Route path="/mashinakg" element={<MashinaKg />} />
					<Route path="/housekg" element={<HouseKg />} />
				</Routes>
			</main>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
