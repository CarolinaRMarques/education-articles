import { createSelector } from "reselect";

const selectWishlist = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
	[selectWishlist],
	(wishlist) => wishlist.wishlistItems
);

export const selectWishlistHidden = createSelector(
	[selectWishlist],
	(wishlist) => wishlist.hidden
);

export const selectWishlistItemsCount = createSelector(
	[selectWishlist],
	(wishlistItems) =>
		wishlistItems.reduce(
			(accumulatedQuantity, article) => accumulatedQuantity + article.quantity,
			0
		)
);
