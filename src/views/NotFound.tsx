import { blue } from "@ant-design/colors";
import Copyright from "@components/Copyright";
import Logo from "@components/Logo";
import ProjTitle from "@components/ProjTitle";
import ToHomeBtn from "@components/ToHomeBtn";
import { minWidth } from "@intf";
import { Layout, Result, Space } from "antd";
import { useEffect } from "react";

const { Header, Content } = Layout;

/**
 * 未定义路由
 *
 * @return {*}  {JSX.Element}
 */
const NotFound: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => {
        document.title = "Oops!";
    });

    return (
        <Layout
            className="h-screen min-h-fit"
            style={{
                minWidth: minWidth,
            }}
        >
            <Header className="max-sm:justify-center max-sm:flex">
                <Space>
                    <Logo className="w-7 align-middle" customcolor={blue[0]} />
                    <ProjTitle />
                </Space>
            </Header>
            <Content className="bg-white">
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
