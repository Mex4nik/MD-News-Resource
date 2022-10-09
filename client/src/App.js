import React, { useState, useEffect } from "react";
import { BrowserRouter  } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from './components/UI/Navbar/Navbar';
// import AppRouter from "./components/AppRouter";
import { AuthContext } from './context/index';
import classes from './App.module.css'
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth: setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <CategoriesList />
        <div className={classes.wrapper}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
