import { blue } from "@ant-design/colors";
import AdvSearchBox from "@components/AdvSearchBox";
import AdvSearchBtn from "@components/AdvSearchBtn";
import Logo from "@components/Logo";
import ProjTitle from "@components/ProjTitle";
import ThemeSwitch from "@components/ThemeSwitch";
import { isHidden } from "@utils";
import { Input, Layout, Space } from "antd";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Search } = Input;

const Home: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => isHidden("首页"));

    const [keyword, setKeyword] = useState("");

    const navigate: NavigateFunction = useNavigate();

    const onSearch: () => void = (): void => {
        const url: string = `/api?limit=3000&query=${keyword}`;
        fetch(url).then((res: Response): void => console.log(res.json()));
        // Todo: 搜索
        // navigate(url);
    };

    const onChange: (event: any) => void = (event: any): void => {
        setKeyword(event.target.value);
    };

    return (
        <>
            <Header>
                <Space className="flex justify-between">
                    <Space>
                        <Logo width="1.75rem" color="#fff" />
                        <ProjTitle className="max-sm:hidden" />

                        <ThemeSwitch />
                    </Space>

                    <AdvSearchBtn />
                </Space>
            </Header>

            <Content className="flex flex-col justify-center items-center">
                <Logo className="mb-4" width="5rem" color={blue.primary} />

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
