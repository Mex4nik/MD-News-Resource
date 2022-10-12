import React from "react";
import { convertDateToLocal } from "../../../utils/convertDate";
import classes from "./CommentItem.module.css";

const CommentItem = ({ comment }) => {
	return (
		<div key={comment.id} className={classes.comment__wrapper}>
			<div className={classes.comment__wrapper__userdata}>
				<span className={classes.comment__wrapper__userdata__username}>
					{comment.author.username}
				</span>
				<span className={classes.comment__wrapper__userdata__date}>
					{convertDateToLocal(comment.updatedAt)}
				</span>
			</div>
			<span className={classes.comment__wrapper__content}>{comment.content}</span>
		</div>
	);
};

export default CommentItem;
