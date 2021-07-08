export const addArticle = (wishlistItems, articleToAdd) => {
	const existingItem = wishlistItems.find(
		(article) => article.id === articleToAdd.id
	);
	if (existingItem) {
		return;
	}
	return [...wishlistItems, { ...articleToAdd, quantity: 1 }];
};

export const removeArticle = (wishlistItems, articleToRemove) => {
	return wishlistItems.filter((article) => article.id !== articleToRemove.id);
};
