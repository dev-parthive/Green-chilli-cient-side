import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
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
                element: <h2 className="text-4xl">Tumi tow vul route a chole asco</h2> 
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
export default routes;