import React from "react";
import "./header.styles.scss";
import WishlistIcon from "../wishlist-icon/wishlist-icon.component";
import { connect } from "react-redux";
const Header = () => (
	<div className="header-container">
		<h1 className="title">ARTICLES</h1>
		<WishlistIcon />
	</div>
);

export default connect()(Header);
