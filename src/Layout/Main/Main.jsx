import {
    createBrowserRouter,

} from "react-router-dom";

import Navber from "../../navber/navber";
import Hero from "../../Hero/Hero";
import Home from "../../Home/Home";
import FontGroupModal from "../../FontGroupModal";
import FontManagement from "../../FontManagement";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/', // Change this path
                element: <Hero></Hero>,
            },
            {
                path: '/', // Change this path
                element: <FontGroupModal></FontGroupModal>,
            },
            {
                path: '/', // Change this path
                element: <FontManagement></FontManagement>
            },
        ],
    },
]);

export default router;
