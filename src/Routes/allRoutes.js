import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import AllCourse from "../Pages/Courses/AllCourse/AllCourse";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/blog',
                element: <Register />,
            },
            {
                path: '/faq',
                element: <Register />,
            },
            {
                path: '/courses',
                element: <AllCourse />,
                loader: () => fetch('https://edu-am10-server.vercel.app'),
            },
            {
                path: '/course/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://edu-am10-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/premium/course/:id',
                element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>
            },
            {
                path: '*',
                element: <div>NotFound</div>
            }
        ]
    },

])