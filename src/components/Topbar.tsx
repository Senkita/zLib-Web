import AdvSearchBox from "@components/AdvSearchBox";
import AdvSearchBtn from "@components/AdvSearchBtn";
import Logo from "@components/Logo";
import ProjTitle from "@components/ProjTitle";
import ThemeSwitch from "@components/ThemeSwitch";
import { advSearchCtx } from "@ctx";
import { IEvent, ITopbarProps, MIN_WIDTH } from "@intf";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { getBooks } from "@utils";
import { Input, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useContext, useEffect, useMemo, useState } from "react";

const { Search } = Input;

/**
 * 顶部栏, 实现根据不同页面, 显示不同组件
 *
 * @param {ITopbarProps} props
 * @return {*}  {JSX.Element}
 */
const Topbar: (props: ITopbarProps) => JSX.Element = (
    props: ITopbarProps
): JSX.Element => {
    const { page } = props;
    const [keyword, setKeyword] = useState<string>("");
    const { advSearchState, setAdvSearchState } = useContext(advSearchCtx);

    useEffect((): void => {
        setKeyword(advSearchState.keyword);
    }, []);

    useMemo((): void => {
        setKeyword(advSearchState.keyword);
    }, [advSearchState.keyword]);

    const queryCli: QueryClient = useQueryClient();

    /**
     * 直接搜索
     *
     */
    const handleSearch: () => void = (): void => {
        setAdvSearchState({
            ...advSearchState,
            keyword,
        });

        queryCli.fetchQuery(["books", { keyword }], getBooks);

        queryCli.invalidateQueries(["books"]); // 缓存失效
    };

    /**
     * 修改关键词
     *
     * @param {*} event
     */
    const changeKeyword: (event: IEvent) => void = (event: IEvent): void => {
        setKeyword(event.target.value);
    };

    return (
        <>
            <Header
                className={
                    page === "NotFound"
                        ? "max-sm:justify-center max-sm:flex"
                        : ""
                }
            >
                <Space
                    className={
                        page === "NotFound" ? "" : "flex justify-between"
                    }
                >
                    <Space>
                        <Logo width="2.15em" color="#fff" />
                        {page === "Result" ? (
                            <Search
                                className="block"
                                style={{
                                    minWidth: MIN_WIDTH,
                                }}
                                allowClear
                                size="large"
                                value={keyword}
                                onChange={changeKeyword}
                                onSearch={handleSearch}
                            />
                        ) : (
                            <ProjTitle
                                className={
                                    page === "Home" ? "max-sm:hidden" : ""
                                }
                            />
                        )}

                        <ThemeSwitch />
                    </Space>

                    {page === "NotFound" ? "" : <AdvSearchBtn />}
                </Space>
            </Header>

            <AdvSearchBox />
        </>
    );
};

export default Topbar;
