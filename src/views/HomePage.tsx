import { blue } from "@ant-design/colors";
import Logo from "@components/Logo";
import { directSearch, toRepo } from "@utils";
import { Button, Input, Layout, Space, Typography } from "antd";
import { useEffect, useState } from "react";

const { Header, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const HomePage: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => {
        document.title = "首页";
    });
    const [keyword, setKeyword] = useState("");
    const onSearch: (value: string) => void = (value: string): void => {
        directSearch(value);
        setKeyword("");
    };

    const onChange: (event: any) => void = (event: any): void => {
        setKeyword(event.target.value);
    };

    return (
        <>
            <Header>
                <Space className="flex justify-between">
                    <Space>
                        <Logo
                            className="w-7 align-middle"
                            customcolor={blue[0]}
                        />
                        <Title
                            className="table-cell align-baseline max-sm:hidden cursor-pointer"
                            style={{
                                color: blue[0],
                            }}
                            level={2}
                            onClick={toRepo}
                        >
                            zLib Searcher
                        </Title>
                    </Space>

                    <Button type="primary">高级检索</Button>
                </Space>
            </Header>

            <Content className="bg-white flex flex-col justify-center items-center">
                <Logo customcolor={blue.primary} className="w-20 mb-4" />

                <Search
                    className="w-5/6 max-w-xl"
                    type="primary"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    value={keyword}
                    onChange={onChange}
                    onSearch={onSearch}
                />
            </Content>
        </>
    );
};

export default HomePage;
