import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Textarea from "../../UI/Textarea/Textarea";
import classes from "./CreateComment.module.css";
import UsersService from "../../../API/UsersService";
import CommentsService from "../../../API/CommentsService";

const CreateComment = ({callback}) => {
	const location = useLocation();

	const submitComment = async (event) => {
		event.preventDefault();
        const articleId = +location.pathname.split("/").pop();
        debugger;

		const token = localStorage.getItem("auth");
		const userEmail = localStorage.getItem("email");
		const userID = await UsersService.getUserByEmail(token, userEmail);

		const body = {
			content: event.target[0].value,
			articleId: articleId,
			userId: userID.data.id,
		};

		const response = await CommentsService.createComment(token, body);
		event.target.reset();

		if (response?.data?.id) {
            callback(articleId);
            return;
        }

		alert("Unxpected error. Please try again.");
		return;
	};

	return (
		<div className={classes.wrapper}>
			<form onSubmit={submitComment}>
				<Textarea type="text" label="Add your comment" id="content-textarea" />
				<div className={classes.controls}>
					<Button>Post</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateComment;
