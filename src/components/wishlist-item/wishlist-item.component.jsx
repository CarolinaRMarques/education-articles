import React from "react";

import "./wishlist-item.styles.scss";

export const WishlistItem = ({ item: { imageUrl, name } }) => (
	<div className="wishlist-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
		</div>
	</div>
);
