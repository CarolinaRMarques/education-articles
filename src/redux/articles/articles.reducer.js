import allArticles from "../../data/articles.json";
import { ArticlesTypes } from "./articles.types";
import { filterArticles } from "./articles.utils";

const INITIAL_STATE = {
	filteredArticles: allArticles,
	searchField: "",
};

const ArticleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ArticlesTypes.HANDLE_SEARCH:
			return {
				...state,
				searchField: action.payload,
				filteredArticles: filterArticles(
					state.filteredArticles,
					action.payload
				),
			};

		default:
			return state;
	}
};

export default ArticleReducer;
