import { ArticlesTypes } from "./articles.types";

export const handleSearch = (searchField) => ({
	type: ArticlesTypes.HANDLE_SEARCH,
	payload: searchField,
});
