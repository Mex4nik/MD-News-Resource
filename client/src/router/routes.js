import OneArticle from "../components/Articles/OneArticle/OneArticle";
import About from "../pages/About"
import Articles from "../pages/Articles";
import Login from "../pages/Login"

export const privateRoutes = [
    {path: '/articles', element: <Articles/>, exact: true},
    {path: '/articles/:id', element: <OneArticle/>, exact: true},
    {path: '/about', element: <About/>, exact: true},
];

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '/articles', element: <Articles/>, exact: true},
    {path: '/articles/:id', element: <OneArticle/>, exact: true},
    {path: '/about', element: <About/>, exact: true},
]