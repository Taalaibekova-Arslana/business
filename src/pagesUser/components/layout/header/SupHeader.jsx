import React from "react";
import logo1 from "../../../../assets/img/logo.png";
import logo2 from "../../../../assets/img/logo copy.png";
import plus from "../../../../assets/img/plus.svg";
import "./SupHeader.css";

const SupHeader = () => {
	return (
		<div>
			<div className="container">
				<div className="header">
					<div className="flex">
						<img className="logo1" src={logo1} alt="" />
						<div className="block"></div>
						<img className="logo2" src={logo2} alt="" />
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
