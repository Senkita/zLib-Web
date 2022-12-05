import Copyright from "@components/Copyright";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { minWidth } from "@intf";

/**
 * 根布局页面
 *
 * @return {*}  {JSX.Element}
 */
const RootLayout: () => JSX.Element = (): JSX.Element => {
    return (
        <Layout
            className="h-screen min-h-fit"
            style={{
                minWidth: minWidth,
            }}
        >
            <Outlet />
            <Copyright />
        </Layout>
    );
};

export default RootLayout;
