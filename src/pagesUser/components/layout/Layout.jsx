import React from "react";
import SupHeader from "./header/SupHeader";
import Footer from "./footer/Footer";
import "./Layout.css";

const Layout = () => {
	return (
		<div className="layout">
			<div>
				<SupHeader />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
