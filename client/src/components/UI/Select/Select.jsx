import React from "react";
import classes from "./Select.module.css";

const Select = (props) => {
	const selectElement = (
		<select
			className={classes.select}
			aria-label={props.label}
			onChange={props.onChange}
		>
			{props.options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);

	return (
		<div>
			{props.mainLabel ? (
				<div className={classes['second-wrapper']}>
					<label className={classes.label}>{props.mainLabel}</label>
					{selectElement}
				</div>
			) : (
				selectElement
			)}
		</div>
	);
};

export default Select;
