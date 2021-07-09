import React from "react";
import "./pagination.styles.scss";

export const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<div className="pagination">
				{pageNumbers.map((number) => (
					<a
						className="item"
						key={number}
						onClick={() => paginate(number)}
						href={`#${number}`}
					>
						{number}
					</a>
				))}
			</div>
		</nav>
	);
};
