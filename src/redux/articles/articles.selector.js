import { createSelector } from "reselect";

const selectState = (state) => state.articles;

export const selectSearchField = createSelector(
	[selectState],
	(state) => state.searchField
);

export const selectFilteredItems = createSelector(
	[selectState],
	(state) => state.filteredArticles
);

export const selectCurrentArticle = createSelector(
	[selectState],
	(state) => state.currentArticle
);

export const selectCurrentPage = createSelector(
	[selectState],
	(state) => state.currentPage
);
