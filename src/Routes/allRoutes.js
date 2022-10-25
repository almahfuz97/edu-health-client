import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllCourse from "../Pages/Courses/AllCourse/AllCourse";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                path: '/courses',
                element: <AllCourse />,
            },
        ]
    },

])