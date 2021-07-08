import React from "react";
import "./article-item.styles.scss";
import { addArticle } from "../../redux/wishlist/wishlist.actions";
import ButtonWishlist from "../button-wishlist/button-wishlist.component";
import { connect } from "react-redux";

const ArticleItem = ({ article, dispatch }) => (
	<div className="article-container">
		<button
			type="button"
			className="wishlist"
			onClick={() => dispatch(addArticle(article))}
		></button>
		<img alt="article" src={article.article_image_thumbnail.url} />
		<h1 className="title"> {article.title} </h1>
		<p className="description"> {article.introduction}</p>
		<span className="produced"> Escrito por {article.author.name}</span>
	</div>
);

export default connect()(ArticleItem);
