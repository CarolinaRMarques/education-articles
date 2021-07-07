import React from "react";
import "./header.styles.scss";
import Button from "../button/button.component";

const Header = () => (
	<div className="header-container">
		<h1 className="title">ARTICLES</h1>
		<Button className="option" />
	</div>
);

export default Header;
