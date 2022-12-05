import { blue } from "@ant-design/colors";
import AdvSearchBox from "@components/AdvSearchBox";
import AdvSearchBtn from "@components/AdvSearchBtn";
import Logo from "@components/Logo";
import ProjTitle from "@components/ProjTitle";
import { Input, Layout, Space } from "antd";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Search } = Input;

const Home: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => {
        document.title = "首页";
    });

    const [keyword, setKeyword] = useState("");

    const navigate: NavigateFunction = useNavigate();

    const onSearch: () => Promise<void> = async (): Promise<void> => {
        const url: string = `/api?query=${keyword}`;
        // Todo: 搜索
        navigate(url);
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
                        <ProjTitle className="max-sm:hidden" />
                    </Space>

                    <AdvSearchBtn />
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

            <AdvSearchBox />
        </>
    );
};

export default Home;
