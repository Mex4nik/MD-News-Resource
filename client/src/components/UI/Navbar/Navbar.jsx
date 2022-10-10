import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "./../../../context/index";
import classes from './Navbar.module.css'
import Span from "../Span/Span";

export default function Navbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	const getUsername = () => {
		return localStorage.getItem('username') || '';
	}

	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__links}>
				<Link to="/articles">Home</Link>
				{/* <Link to="/about">About site</Link> */}
			</div>
			<div className={classes.navbar__controls}>
				{isAuth
					? <div>
						<Span>{getUsername()}</Span>
						<Button onClick={logout}>Logout</Button>
					</div>
					: <Link to="/login">Login</Link>
				}
			</div>
		</div>
	);
}
