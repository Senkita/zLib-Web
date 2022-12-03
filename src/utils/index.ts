import { booksResultReducer, initBooksResultState } from "@stores";
import { useReducer } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * 打开zLib Searcher仓库页面
 */
const toRepo: () => void = (): void => {
    window.open("https://github.com/zu1k/zlib-searcher");
};

/**
 * 直接关键词搜索
 *
 * @param {string} keyword
 */
const directSearch: (keyword: string) => void = (keyword: string): void => {
    const url: string = `/search?query=${keyword}`;
    fetch(url).then(async (res: Response): Promise<void> => {
        const [_, setBooksResult] = useReducer(
            booksResultReducer,
            initBooksResultState
        );

        setBooksResult(await res.json());

        const naviagate: NavigateFunction = useNavigate();

        naviagate("/result");
    });
};

export { toRepo, directSearch };
