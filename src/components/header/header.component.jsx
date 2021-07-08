import React from "react";
import "./header.styles.scss";
import WishlistIcon from "../wishlist-icon/wishlist-icon.component";
import { selectWishlistHidden } from "../../redux/wishlist/wishlist.selector";
import { connect } from "react-redux";
import WishlistDropdown from "../wishlist-dropdown/wishlist-dropdown.component";
import { createStructuredSelector } from "reselect";
const Header = ({ hidden }) => (
	<div className="header-container">
		<h1 className="title">ARTICLES</h1>
		<WishlistIcon />
		{hidden ? null : <WishlistDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	hidden: selectWishlistHidden,
});

export default connect(mapStateToProps)(Header);
