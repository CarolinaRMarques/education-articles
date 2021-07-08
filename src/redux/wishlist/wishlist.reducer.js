import { addArticle, removeArticle } from "./wishlist.utils";
import WishlistActionTypes from "./wishlist.types";

const INITIAL_STATE = {
	hidden: true,
	wishlistItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WishlistActionTypes.TOGGLE_WISHLIST_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case WishlistActionTypes.ADD_ARTICLE:
			debugger;
			return {
				...state,
				wishlistItems: addArticle(state.wishlistItems, action.payload),
			};

		case WishlistActionTypes.REMOVE_ARTICLE:
			return {
				...state,
				wishlistItems: removeArticle(state.wishlistItems, action.payload),
			};

		case WishlistActionTypes.CLEAR_WISHLIST:
			return {
				...state,
				wishlistItems: [],
			};
		default:
			return state;
	}
};

export default wishlistReducer;
