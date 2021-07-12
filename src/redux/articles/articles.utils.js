export const filterArticles = (articles, searchField) => {
	return articles.filter((article) =>
		article.title.toLowerCase().includes(searchField.toLowerCase())
	);
};

export const findCurrentArticle = (filteredArticles, currentPage) => {
	const articlesPerPage = 3;

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	return filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
};
