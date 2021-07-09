import React from "react";
import { connect } from "react-redux";

import { removeArticle } from "../../redux/wishlist/wishlist.actions";

import "./wishlist-item.styles.scss";

const WishlistItem = ({ item, removeArticle }) => (
	<div className="wishlist-item">
		<img src={item.article_image_thumbnail.url} alt="item" />
		<div className="item-details">
			<span className="name">{item.title}</span>
			<div className="remove-button" onClick={() => removeArticle(item)}>
				&#10005;
			</div>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	removeArticle: (item) => dispatch(removeArticle(item)),
});

export default connect(null, mapDispatchToProps)(WishlistItem);
