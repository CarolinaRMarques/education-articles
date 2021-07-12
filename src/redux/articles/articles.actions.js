import { ArticlesTypes } from "./articles.types";

export const handleSearch = (searchField) => ({
	type: ArticlesTypes.HANDLE_SEARCH,
	payload: searchField,
});

export const goTo = (currentPage) => ({
	type: ArticlesTypes.GO_TO,
	payload: currentPage,
});

export const fetchCurrentArticles = (currentPage) => ({
	type: ArticlesTypes.CURRENT_ARTICLE,
	payload: currentPage,
});
