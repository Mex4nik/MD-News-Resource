import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import classes from './ArticlesList.module.css'

const ArticlesList = ({ articles, categories }) => {
	if (!articles.length) {
		return <h1 style={{ textAlign: "center" }}>articles not found!</h1>;
	}

    const currentArticleCategory = (articleId, categories) => {
        const category = categories.find(el => el.id === articleId);
        return category;
    }

	return (
		<div className={classes.list}>
			{articles.map((article) => (
				<ArticleItem key={article.id} article={article} category={currentArticleCategory(article.category.id, categories)} />
			))}
		</div>
	);
};

export default ArticlesList;
