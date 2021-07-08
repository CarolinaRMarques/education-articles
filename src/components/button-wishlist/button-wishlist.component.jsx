import React from "react";
import "./button-wishlist.styles.scss";
import { connect } from "react-redux";

const ButtonWishlist = ({ isInArticle }) => {
	const name = isInArticle ? "button-icon-wishlist" : "button-icon";
	return <button type="button" className={name} />;
};

export default connect()(ButtonWishlist);
