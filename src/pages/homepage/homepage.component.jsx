import React, { useEffect, useState } from "react";

import { ArticleList } from "../../components/article-list/article-list.component";
import Header from "../../components/header/header.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import allArticles from "../../data/articles.json";
import { Pagination } from "../../components/pagination/pagination.component";
import "./homepage.styles.scss";

const HomePage = () => {
	const [articles, setArticles] = useState([]);
	const [searchField, setSearchField] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [articlesPerPage] = useState(3);

	useEffect(() => {
		setArticles(allArticles);
	}, []);

	const filteredArticles = articles.filter((article) =>
		article.title.toLowerCase().includes(searchField.toLowerCase())
	);

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

	const currentArticle = filteredArticles.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleChange = (event) => setSearchField(event.target.value);

	return (
		<div className="container">
			<Header />
			<SearchBox placeholder="Search Article" handleChange={handleChange} />
			<ArticleList articles={currentArticle} />
			<Pagination
				articlesPerPage={articlesPerPage}
				totalArticles={articles.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default HomePage;
