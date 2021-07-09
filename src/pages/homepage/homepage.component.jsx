import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ArticleList } from "../../components/article-list/article-list.component";
import Header from "../../components/header/header.component";
import { Pagination } from "../../components/pagination/pagination.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import { handleSearch } from "../../redux/articles/articles.actions";
import {
	selectFilteredItems,
	selectSearchField,
} from "../../redux/articles/articles.selector";

import "./homepage.styles.scss";

const HomePage = ({ handleSearch, searchField, filteredArticles }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 3;
	const handleChange = (event) => {
		handleSearch(event.target.value);
	};

	console.log("Search filtered: ", filteredArticles);

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

	const currentArticle = filteredArticles.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="container">
			<Header />
			<SearchBox placeholder="Search Article" handleChange={handleChange} />
			<ArticleList articles={currentArticle} />
			<Pagination
				articlesPerPage={articlesPerPage}
				totalArticles={filteredArticles.length}
				paginate={paginate}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	handleSearch: (searchField) => dispatch(handleSearch(searchField)),
});

const mapStateToProps = createStructuredSelector({
	searchField: selectSearchField,
	filteredArticles: selectFilteredItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
