import { createSelector } from "reselect";
import { findCurrentArticle } from "./articles.utils";

const selectState = (state) => state.articles;

export const selectSearchField = createSelector(
	[selectState],
	(state) => state.searchField
);

export const selectFilteredItems = createSelector(
	[selectState],
	(state) => state.filteredArticles
);

export const selectCurrentPage = createSelector(
	[selectState],
	(state) => state.currentPage
);

export const selectCurrentArticle = createSelector(
	[selectFilteredItems, selectCurrentPage],
	(filteredItems, currentPage) => findCurrentArticle(filteredItems, currentPage)
);
