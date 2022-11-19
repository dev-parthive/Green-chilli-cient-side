import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddReviews from "../../pages/AddReviews/AddReviews";
import AddServices from "../../pages/AddServices/AddServices";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import ProductDetails from "../../pages/Home/ProductDetails";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviews from "../../pages/Reviews/Reviews";
import Services from "../../pages/Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

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
            } ,{
                path: "/service/:id",
                element: <ProductDetails></ProductDetails>
            } , 
            {
                path: "/register",
                element: <Register></Register>
            } , 
            {
                path: "/login", 
                element: <Login></Login>
            }, 
            {
                path: '/reviews', 
                element:<PrivateRoute> <Reviews></Reviews></PrivateRoute>
            } , 
            {
                path: '/addServices', 
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            } , 
            {
                path: '/add-review/:id', 
                element: <AddReviews></AddReviews>
            }
           
        ]
    }
])
export default routes;