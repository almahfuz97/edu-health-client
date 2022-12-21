import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import AllCourse from "../Pages/Courses/AllCourse/AllCourse";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: () => fetch('https://edu-am10-server.vercel.app'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: () => fetch("https://edu-am10-server.vercel.app/blog")
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/courses',
                element: <AllCourse />,
                loader: () => fetch('https://edu-am10-server.vercel.app'),
            },
            {
                path: '/course/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://edu-am10-server.vercel.app/course/${params.id}`),
                errorElement: <ErroPage />
            },
            {
                path: '/premium/course/:id',
                element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://edu-am10-server.vercel.app/premium/course/${params.id}`)
            },
            {
                path: '*',
                element: <ErroPage />
            }
        ],
    },

])