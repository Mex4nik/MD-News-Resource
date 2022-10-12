import OneArticle from "../components/Articles/OneArticle/OneArticle";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import Login from "../pages/Login"

export const privateRoutes = [
    {path: '/articles', element: <Articles/>, exact: true},
    {path: '/articles/:id', element: <OneArticle/>, exact: true},
    {path: '/create-article', element: <CreateArticle/>, exact: true}
];

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '/articles', element: <Articles/>, exact: true},
    {path: '/articles/:id', element: <OneArticle/>, exact: true},
]