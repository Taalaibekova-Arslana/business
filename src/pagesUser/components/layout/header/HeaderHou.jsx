import React, { useState } from "react";
import "./HeaderHou.css";
import vector from "../../../../assets/img/Vector.svg";
import map from "../../../../assets/img/map.svg";
import more from "../../../../assets/img/more.svg";

const HeaderHou = () => {
	return (
		<div className="sub_header">
			<div className="container">
				<div className="main_div_page_mash_h">
					<div className="first_div_h">
						<button className="button_hea">Срочно</button>
						<button className="button_hea">Продажа</button>
						<button className="button_hea">Аренда</button>
						<button className="button_hea">Посуточно</button>
						<button className="button_hea">Компания</button>
						<button className="button_hea">Новостройки</button>
					</div>
					<div className="buttons">
						<button className="map_btn">
							<img src={map} alt="" />
							На карте
						</button>
					</div>
					<div className="second_div_h">
						<img src={vector} alt="logo" className="vector" />
						<button className="more_btn_h">
							Любой регион
							<img src={more} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderHou;
