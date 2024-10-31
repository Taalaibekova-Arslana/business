import React from "react";
import logo1 from "../../../../assets/img/logo.png";
import logo2 from "../../../../assets/img/logo copy.png";
import plus from "../../../../assets/img/plus.svg";
import "./SupHeader.css";
import { Link } from "react-router-dom";

const SupHeader = () => {
	return (
		<div>
			<div className="container">
				<div className="header">
					<div className="flex">
						<Link to="/mashinakg">
							<img className="logo1" src={logo1} alt="" />
						</Link>
						<div className="block"></div>
						<Link to="/housekg">
							<img className="logo2" src={logo2} alt="" />
						</Link>
					</div>
					<div className="button">
						<button className="btn"> Войти</button>
						<button className="btn2">
							<img src={plus} alt="" />
							Разместить объявление
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupHeader;
