import React from "react";
import "./HeaderMash.css";
import vector from "../../../../assets/img/Vector.svg";
import more from "../../../../assets/img/more.svg";

const HeaderMash = () => {
	return (
		<div className="sub_header">
			<div className="container">
				<div className="main_div_page_mash">
					<div className="first_div">
						<button className="button_hea">Срочно</button>
						<button className="button_hea">Легковые</button>
						<button className="button_hea">Коммерческие</button>
						<button className="button_hea">Спецтехники</button>
						<button className="button_hea">Рекломодателям</button>
					</div>
					<div className="second_div">
						<img src={vector} alt="logo" className="vector" />
						<button className="more_btn">
							Любой регион
							<img src={more} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMash;
