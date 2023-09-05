import {
    createBrowserRouter,

} from "react-router-dom";

import Navber from "../../navber/navber";
import Hero from "../../Hero/Hero";
import Home from "../../Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Hero></Hero>,
            },
        ],
    },

]);

export default router;
