import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ArticleList } from "../../components/article-list/article-list.component";
import Header from "../../components/header/header.component";
import Pagination from "../../components/pagination/pagination.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import {
	fetchCurrentArticles,
	handleSearch,
} from "../../redux/articles/articles.actions";
import {
	selectCurrentArticle,
	selectCurrentPage,
	selectFilteredItems,
} from "../../redux/articles/articles.selector";

import "./homepage.styles.scss";

const HomePage = ({
	handleSearch,
	filteredArticles,
	currentArticle,
	currentPage,
	fetchCurrentArticles,
}) => {
	useEffect(() => {
		fetchCurrentArticles(currentPage);
	}, [fetchCurrentArticles, currentPage]);

	const handleChange = (event) => {
		handleSearch(event.target.value);
	};

	return (
		<div className="container">
			<Header />
			<SearchBox placeholder="Search Article" handleChange={handleChange} />
			<ArticleList articles={currentArticle} />
			<p></p>
			<Pagination articlesPerPage="3" totalArticles={filteredArticles.length} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	handleSearch: (searchField) => dispatch(handleSearch(searchField)),
	fetchCurrentArticles: (currentPage) =>
		dispatch(fetchCurrentArticles(currentPage)),
});

const mapStateToProps = createStructuredSelector({
	filteredArticles: selectFilteredItems,
	currentArticle: selectCurrentArticle,
	currentPage: selectCurrentPage,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
