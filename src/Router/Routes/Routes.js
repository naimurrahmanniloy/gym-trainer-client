import Main from "../../Layout/Main";
import Allservices from "../../Pages/Allservices/Allservices";
import Blogs from "../../Pages/Blogs/Blogs";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import DisplayReview from "../../Pages/DisplayReview/DisplayReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><DisplayReview></DisplayReview></PrivateRoute>
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;