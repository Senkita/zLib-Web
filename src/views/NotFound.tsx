import Copyright from "@components/Copyright";
import Logo from "@components/Logo";
import ProjTitle from "@components/ProjTitle";
import ThemeSwitch from "@components/ThemeSwitch";
import ToHomeBtn from "@components/ToHomeBtn";
import { minWidth } from "@intf";
import { isHidden } from "@utils";
import { Layout, Result, Space } from "antd";
import { useEffect } from "react";

const { Header, Content } = Layout;

/**
 * 未定义路由
 *
 * @return {*}  {JSX.Element}
 */
const NotFound: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => isHidden("Oops!"));

    return (
        <Layout
            className="h-screen min-h-fit"
            style={{
                minWidth: minWidth,
            }}
        >
            <Header className="max-sm:justify-center max-sm:flex">
                <Space>
                    <Logo width="1.75rem" color="#fff" />
                    <ProjTitle />

                    <ThemeSwitch />
                </Space>
            </Header>

            <Content>
                <Result
                    status="404"
                    title="Oops!"
                    extra={[<ToHomeBtn key="toHome" />]}
                />
            </Content>

            <Copyright />
        </Layout>
    );
};

export default NotFound;
