import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            } , 
            {
                path: '*', 
                element: <Error></Error>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
export default routes;