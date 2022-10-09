import React from "react";
import { useNavigate } from "react-router-dom";
import { APIHost } from "../../../API/APISettings";
import classes from "./ArticleItem.module.css";

const ArticleItem = ({ article, category }) => {
	const navigate = useNavigate();

	return (
		<div className={classes.item} onClick={() => navigate(`/articles/${article.id}`)}>
			<h3 className={classes.title}>
        <span>{article.title}</span>
        <span className={classes.categoryName}>{category?.name || ''}</span>
      </h3>
			<span className={classes.content}>{article.content}</span>
			<img
				src={`${APIHost}/${article.image}`}
				alt={article.title}
				className={classes.image}
			/>
		</div>
	);
};

export default ArticleItem;
