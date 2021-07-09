import { combineReducers } from "redux";
import ArticleReducer from "./articles/articles.reducer";

import wishlistReducer from "./wishlist/wishlist.reducer";

const rootReducer = combineReducers({
	wishlist: wishlistReducer,
	articles: ArticleReducer,
});

export default rootReducer;
