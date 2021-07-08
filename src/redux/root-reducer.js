import { combineReducers } from "redux";

import wishlistReducer from "./wishlist/wishlist.reducer";

const rootReducer = combineReducers({
	wishlist: wishlistReducer,
});

export default rootReducer;
