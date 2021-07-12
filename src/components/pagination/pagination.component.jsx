import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as PreviousIcon } from "../../assets/arrow-left.svg";
import { ReactComponent as NextIcon } from "../../assets/arrow-right.svg";
import { goTo } from "../../redux/articles/articles.actions";
import { selectCurrentPage } from "../../redux/articles/articles.selector";

import "./pagination.styles.scss";

const Pagination = ({ articlesPerPage, totalArticles, currentPage, goTo }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<div className="pagination">
				<button
					className="previous-icon"
					onClick={() => {
						currentPage === 1 ? goTo(currentPage) : goTo(currentPage - 1);
					}}
				>
					<PreviousIcon className="icon" />
				</button>
				{pageNumbers.map((number) => (
					<button
						className="item"
						key={number}
						onClick={() => {
							goTo(number);
						}}
					>
						{number}
					</button>
				))}
				<button
					className="next-icon"
					onClick={() =>
						currentPage === pageNumbers.length
							? goTo(currentPage)
							: goTo(currentPage + 1)
					}
				>
					<NextIcon className="icon" />
				</button>
			</div>
		</nav>
	);
};

const mapDispatchToProps = (dispatch) => ({
	goTo: (pageNumber) => dispatch(goTo(pageNumber)),
});
const mapStateToProps = createStructuredSelector({
	currentPage: selectCurrentPage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
