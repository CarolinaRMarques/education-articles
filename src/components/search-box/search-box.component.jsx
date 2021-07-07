import React from "react";
import "./search-box.styles.scss";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

export const SearchBox = ({ placeholder, handleChange }) => (
	<div className="search-container">
		<SearchIcon className="searchIcon" />
		<input
			className="search"
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	</div>
);
