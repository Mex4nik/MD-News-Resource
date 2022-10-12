import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ArticleService from "../API/ArticlesService";
import UsersService from "../API/UsersService";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import Select from "../components/UI/Select/Select";
import Textarea from "../components/UI/Textarea/Textarea";
import classes from "./../components/CreateArticle/CreateArticle.module.css";

const CreateArticle = () => {
	const [categories, setCategories] = useState([]);

	const prepareCategories = async () => {
		const response = await ArticleService.getAllCategories();
		const allCategories = response.data.map((cat) => {
			return {
				name: cat.name,
				value: cat.id,
			};
		});
		setCategories(allCategories);
	};

	useEffect(() => {
		prepareCategories();
	}, []);

	const submitArticle = async (event) => {
		event.preventDefault();

		debugger;
		let body = new FormData();
		body.set("title", event.target[0].value);
		body.set("content", event.target[1].value);
		body.set("categoryId", +event.target[2].value);
		body.set("image", event.target[3].files[0]);

		const token = localStorage.getItem("auth");

		const userEmail = localStorage.getItem("email");
		const userID = await UsersService.getUserByEmail(token, userEmail);
		body.set("userId", userID.data.id);

		const response = await ArticleService.createArticle(token, body);
		event.target.reset();

		if (response?.data?.id) {
			alert("Article was successfully created.");
			return;
		}

		alert("Unxpected error. Please try again.");
		return;
	};

	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>New Article</h1>
			<form onSubmit={submitArticle}>
				<Input type="text" label="Title" id="title-input" />
				<Textarea type="text" label="Content" id="content-textarea" />
				<Select
					mainLabel="Category"
					label="Category"
					selectedValue=""
					selectedName="None"
					options={categories}
				/>
				<Input type="file" label="Image" id="image-input" />
				<div className={classes.controls}>
					<Button>Create</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateArticle;
