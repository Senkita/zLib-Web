import ErrorPage from "@views/ErrorPage";
import HomePage from "@views/HomePage";
import RootLayout from "@views/RootLayout";
import { useRoutes } from "react-router-dom";

/**
 * 路由表
 *
 * @return {*}  {(React.ReactElement<
 *     any,
 *     string | React.JSXElementConstructor<any>
 * > | null)}
 */
const RouteTable: () => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
> | null = (): React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
> | null => {
    return useRoutes([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
            ],
        },
    ]);
};

export default RouteTable;
