import React from "react";
import "./button.styles.scss";
import { ReactComponent as Wishlist } from "../../assets/wishlist.svg";
const Button = () => (
	<div>
		<Wishlist className="button-icon" />
	</div>
);

export default Button;
