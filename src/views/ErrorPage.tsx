import { blue } from "@ant-design/colors";
import Copyright from "@components/Copyright";
import Logo from "@components/Logo";
import { toRepo } from "@utils";
import { Button, Layout, Result, Space, Typography } from "antd";
import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

const { Header, Content } = Layout;
const { Title } = Typography;

/**
 * 异常页
 *
 * @return {*}  {JSX.Element}
 */
const ErrorPage: () => JSX.Element = (): JSX.Element => {
    const error: unknown = useRouteError();

    // Todo: 异常记录

    useEffect((): void => {
        document.title = "Oops!";
    });

    return (
        <Layout
            className="h-screen min-h-fit"
            style={{
                minWidth: "375px",
            }}
        >
            <Header className="max-sm:justify-center max-sm:flex">
                <Space>
                    <Logo className="w-7 align-middle" customcolor={blue[0]} />
                    <Title
                        className="table-cell align-baseline cursor-pointer"
                        style={{
                            color: blue[0],
                        }}
                        level={2}
                        onClick={toRepo}
                    >
                        zLib Searcher
                    </Title>
                </Space>
            </Header>
            <Content className="bg-white">
                <Result
                    status="404"
                    title="Oops!"
                    // @ts-ignore
                    subTitle={error.statusText || error.message}
                    extra={[
                        <Button
                            type="primary"
                            key="Home"
                            style={{
                                background: blue.primary,
                            }}
                        >
                            返回首页
                        </Button>,
                    ]}
                />
            </Content>

            <Copyright />
        </Layout>
    );
};

export default ErrorPage;
