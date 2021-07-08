import React from "react";
import { clearWishlist } from "../../redux/wishlist/wishlist.actions";
import "./wishlist-item.styles.scss";
import { connect } from "react-redux";

const WishlistItem = ({ item, clearWishlist }) => (
	<div className="wishlist-item">
		<img src={item.article_image_thumbnail.url} alt="item" />
		<div className="item-details">
			<span className="name">{item.title}</span>
			<div className="remove-button" onClick={() => clearWishlist(item)}>
				&#10005;
			</div>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	clearWishlist: (item) => dispatch(clearWishlist(item)),
});

export default connect(null, mapDispatchToProps)(WishlistItem);
