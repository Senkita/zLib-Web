import { blue } from "@ant-design/colors";
import { SearchOutlined } from "@ant-design/icons";
import Logo from "@components/Logo";
import Topbar from "@components/Topbar";
import { advSearchCtx } from "@ctx";
import { IEvent } from "@intf";
import { isHidden } from "@utils";
import { Input, Layout, Tooltip } from "antd";
import { useContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const { Content } = Layout;

/**
 * 搜索主页
 *
 * @return {*}  {JSX.Element}
 */
const Home: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => isHidden("首页"), []);

    const navigate: NavigateFunction = useNavigate();
    const [complexVal, setComplexVal] = useState<string>("");
    const [tipState, setTipState] = useState<boolean>(false);
    const { advSearchState, setAdvSearchState } = useContext(advSearchCtx);

    /**
     * 回车搜索
     * 1. 如果没有关键词, 则弹出提示
     * 2. 存在关键词, 则检查是否非空
     * 3. 如果非空则跳转
     *
     */
    const handleSearch: () => void = (): void => {
        if (complexVal.trim() !== "") {
            setAdvSearchState({
                ...advSearchState,
                keyword: complexVal.trim(),
            });

            navigate("/search");
        } else {
            setComplexVal(complexVal.trim());
            setTipState(true);
        }
    };

    /**
     * 编辑关键词
     *
     * @param {IEvent} event
     */
    const changeKeyword: (event: IEvent) => void = (event: IEvent): void => {
        setTipState(false);
        setComplexVal(event.target.value);
    };

    return (
        <>
            <Topbar page="Home" />

            <Content className="flex flex-col justify-center items-center">
                <Logo className="mb-4" width="6em" color={blue.primary} />

                <Tooltip
                    title="请输入关键词"
                    placement="bottomLeft"
                    open={tipState}
                    onOpenChange={(visible: boolean): void => {
                        if (!visible) {
                            setTipState(visible);
                        }
                    }}
                >
                    <Input
                        className="w-5/6 max-w-xl"
                        type="primary"
                        allowClear
                        size="large"
                        addonBefore={<SearchOutlined />}
                        value={complexVal}
                        onChange={changeKeyword}
                        onPressEnter={handleSearch}
                    />
                </Tooltip>
            </Content>
        </>
    );
};

export default Home;
