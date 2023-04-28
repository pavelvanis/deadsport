import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import NotFound from "./Components/Body/NotFound";
import Home from "./components/body/Results";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "*",
                element: <NotFound />
            },
            /* {
                path: "chat",
                element: <ChatLayout />
            }, */
        ]
    }
])

export default router;