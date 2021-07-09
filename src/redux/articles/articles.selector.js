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