import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import { Results, News, NotFound } from "./components/body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Results />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  }
]);

export default router;
