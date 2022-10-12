import React, { useContext } from "react";
import LoginService from "../API/LoginService";
import UsersService from "../API/UsersService";
import Input from "../components/UI/Input/Input";
import { AuthContext } from "./../context/index";
import classes from './../components/Login/Login.module.css'
import Button from "../components/UI/Button/Button";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = async (event) => {
    event.preventDefault();

    const body = {
      email: event.target[0].value,     // email
      password: event.target[1].value   // pass
    };
    // body.email = 'admin@user.com';     // email
    // body.password = '12345';   // pass
    const login = await LoginService.login(body);
    if (login?.success === false) {
      alert(login?.message)
    } else {
      const token = login.data.token;
      const user = await UsersService.getUserByEmail(token, body.email);
      localStorage.setItem('username', user.data.username);
      localStorage.setItem('email', body.email);
      setIsAuth(true)
      localStorage.setItem('auth', token)  
    }
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Login</h1>
      <form onSubmit={login}>
        <Input type="text" label="Login" id="login-input" />
        <Input type="password" label="Password" id="password-input" />
        <div className={classes.controls}>
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
}
