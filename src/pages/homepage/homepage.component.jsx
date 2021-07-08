import React from "react";
import { ArticleList } from "../../components/article-list/article-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import articles from "../../data/articles.json";
import Header from "../../components/header/header.component";
import "./homepage.styles.scss";
class HomePage extends React.Component {
	constructor() {
		super();

		this.state = {
			articles: articles,
			searchField: "",
		};
	}

	handleChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { articles, searchField } = this.state;

		const filteredArticles = articles.filter((article) =>
			article.title.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="container">
				<Header />
				<SearchBox
					placeholder="Search Article"
					handleChange={this.handleChange}
				/>
				<ArticleList articles={filteredArticles} />
			</div>
		);
	}
}

export default HomePage;
