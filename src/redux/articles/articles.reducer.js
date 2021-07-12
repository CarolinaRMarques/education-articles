import articles from "../../data/articles.json";
import { ArticlesTypes } from "./articles.types";
import { filterArticles } from "./articles.utils";

const INITIAL_STATE = {
	items: articles,
	filteredArticles: articles,
	searchField: "",
	currentPage: 1,
	currentArticle: [],
};

const ArticleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ArticlesTypes.HANDLE_SEARCH:
			return {
				...state,
				searchField: action.payload,
				filteredArticles: filterArticles(state.items, action.payload),
				currentPage: 1,
			};

		case ArticlesTypes.GO_TO:
			return {
				...state,
				currentPage: action.payload,
			};

		default:
			return state;
	}
};

export default ArticleReducer;
