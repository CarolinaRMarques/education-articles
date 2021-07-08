export const addArticle = (wishlistItems, articleToAdd) => {
	const existingItem = wishlistItems.find(
		(article) => article.id === articleToAdd.id
	);
	if (existingItem) {
		return [...wishlistItems];
	}
	return [...wishlistItems, { ...articleToAdd }];
};

export const removeArticle = (wishlistItems, articleToRemove) => {
	return wishlistItems.filter((article) => article.id !== articleToRemove.id);
};
