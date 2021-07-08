import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Wishlist } from "../../assets/wishlist.svg";
import { toggleWishlistHidden } from "../../redux/wishlist/wishlist.actions";
import { selectWishlistItemsCount } from "../../redux/wishlist/wishlist.selector";

import "./wishlist-icon.styles.scss";

const WishlistIcon = ({ toggleWishlistHidden, itemCount }) => (
	<div className="icon" onClick={toggleWishlistHidden}>
		<Wishlist className="wishlist-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleWishlistHidden: () => dispatch(toggleWishlistHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectWishlistItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon);
