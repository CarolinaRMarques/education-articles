import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";

import wishlistReducer from "./wishlist/wishlist.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["wishlist"],
};

const rootReducer = combineReducers({
	wishlist: wishlistReducer,
});

export default rootReducer;
