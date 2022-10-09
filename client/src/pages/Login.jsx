import React, { useContext } from "react";
import LoginService from "../API/LoginService";
import { AuthContext } from "./../context/index";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = async (event) => {
    event.preventDefault();

    const body = {};
    // body.email = event.target[0].value;     // email
    // body.password = event.target[1].value;   // pass
    body.email = 'admin@user.com';     // email
    body.password = '12345';   // pass
    debugger;
    const login = await LoginService.login(body);
    if (login?.success === false) {
      alert(login?.message)
    } else {
      setIsAuth(true)
      localStorage.setItem('auth', login.data.token)  
    }
  };

  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
      </form>
    </div>
  );
}
