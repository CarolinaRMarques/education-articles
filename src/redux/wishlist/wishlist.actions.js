import WishlistActionTypes from "./wishlist.types";

export const toggleWishlistHidden = () => ({
	type: WishlistActionTypes.TOGGLE_WISHLIST_HIDDEN,
});

export const addArticle = (article) => ({
	type: WishlistActionTypes.ADD_ARTICLE,
	payload: article,
});

export const removeArticle = (article) => ({
	type: WishlistActionTypes.REMOVE_ARTICLE,
	payload: article,
});

export const clearWishlist = () => ({
	type: WishlistActionTypes.CLEAR_WISHLIST,
});
