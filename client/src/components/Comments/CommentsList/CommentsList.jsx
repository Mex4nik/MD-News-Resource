import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import classes from './CommentsList.module.css'

const CommentsList = ({ comments }) => {
	return (
		<div className={classes.comments}>
			{comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default CommentsList;
