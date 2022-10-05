import React from "react";
import { Link } from "react-router-dom";
// import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "./../../../context/index";

export default function Navbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	return (
		<div className="navbar">
			<button onClick={logout}>Log out</button>
			<div className="navbar__links">
				<Link to="/about">About site</Link>
				<Link to="/posts">Posts</Link>
			</div>
		</div>
	);
}
