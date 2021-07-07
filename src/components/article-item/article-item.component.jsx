import React from "react";
import "./article-item.styles.scss";

export const ArticleItem = (props) => (
	<div className="article-container">
		<img
			alt="article"
			src={props.article.article_image_thumbnail.url}
			width={props.article.article_image_thumbnail.width}
			height={props.article.article_image_thumbnail.height}
		/>
		<h1 className="title"> {props.article.title} </h1>
		<p className="description"> {props.article.introduction}</p>
		<span className="produced"> Escrito por {props.article.author.name}</span>
	</div>
);
