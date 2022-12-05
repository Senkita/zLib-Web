import Home from "@views/Home";
import NotFound from "@views/NotFound";
import RootLayout from "@views/RootLayout";
import { RouteObject, useRoutes } from "react-router-dom";

/**
 * 路由表
 *
 *  @type {*}
 */
const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default (): React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
> | null => useRoutes(routes);
