export const filterArticles = (articles, searchField) => {
	console.log("cheguei");
	return articles.filter((article) =>
		article.title.toLowerCase().includes(searchField.toLowerCase())
	);
};
