import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: () => fetch('https://edu-am10-server.vercel.app')
    }
])