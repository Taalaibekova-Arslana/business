import React from "react";
import "./Select.css";

const Select = ({ options, name, id, placeholder, className }) => {
	return (
		<div className={`select ${className}`}>
			<select name={name} id={id} defaultValue="">
				<option value="" disabled>
					{placeholder}
				</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
