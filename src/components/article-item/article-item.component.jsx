import React from "react";
import "./article-item.styles.scss";
import {
	addArticle,
	removeArticle,
} from "../../redux/wishlist/wishlist.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selector";

const ArticleItem = ({ article, dispatch, wishlistItems }) => {
	const handleClassName = (item) => {
		if (wishlistItems.find((article) => article.id === item.id)) {
			return "wishlist-added";
		}
		return "wishlist-not-added";
	};

	const handleClick = (item) => {
		if (wishlistItems.find((article) => article.id === item.id)) {
			return dispatch(removeArticle(article));
		}
		return dispatch(addArticle(article));
	};

	return (
		<div className="article-container">
			<button
				type="button"
				className={handleClassName(article)}
				onClick={() => handleClick(article)}
			></button>
			<img alt="article" src={article.article_image_thumbnail.url} />
			<h1 className="title"> {article.title} </h1>
			<p className="description"> {article.introduction}</p>
			<span className="produced"> Escrito por {article.author.name}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	wishlistItems: selectWishlistItems,
});
export default connect(mapStateToProps)(ArticleItem);
