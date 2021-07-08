import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selector";
import { WishlistItem } from "../wishlist-item/wishlist-item.component";

const WishlistDropdown = ({ wishlistItems }) => (
	<div className="wishlist-dropdown">
		<div className="items">
			{wishlistItems.length ? (
				wishlistItems.map((article) => (
					<WishlistItem key={article.id} item={article} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	wishlistItems: selectWishlistItems,
});

export default connect(mapStateToProps)(WishlistDropdown);
