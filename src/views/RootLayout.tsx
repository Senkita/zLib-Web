import Copyright from "@components/Copyright";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

/**
 * 根布局页面
 *
 * @return {*}  {JSX.Element}
 */
const Root: () => JSX.Element = (): JSX.Element => {
    return (
        <Layout
            className="h-screen min-h-fit"
            style={{
                minWidth: "375px",
            }}
        >
            <Outlet />
            <Copyright />
        </Layout>
    );
};

export default Root;
