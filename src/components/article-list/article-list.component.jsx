import "./article-list.styles.scss";
import ArticleItem from "../article-item/article-item.component";
import { connect } from "react-redux";

const ArticleList = (props) => (
	<div className="article-list">
		{props.articles.map((article) => (
			<ArticleItem key={article.id} article={article} />
		))}
	</div>
);

export default connect()(ArticleList);
