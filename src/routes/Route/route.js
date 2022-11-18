import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Services/Services";

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
            } , 
            {
                path: '/register', 
                element: <Register></Register>
            } ,
            {
                path: "/services", 
                element: <Services></Services> ,
                loader: ()=>{
                    return fetch('http://localhost:5000/services')
                } 
            }
        ]
    }
])
export default routes;