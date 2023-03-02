import downloadBook from "./downloadBook";
import getBooks from "./getBooks";
import sorterFn from "./sorterFn";

/**
 * 监听网页是否被切后台
 *
 */
const isHidden: (customTitle: string) => void = (customTitle: string): void => {
    document.title = customTitle;
    document.addEventListener("visibilitychange", (): void => {
        switch (document.visibilityState) {
            case "hidden":
                document.title = "zLib Searcher";
                break;
            default:
                document.title = customTitle;
        }
    });
};

/**
 * 打开zLib Searcher仓库页面
 */
const toRepo: () => void = (): void => {
    window.open("https://github.com/book-searcher-org/book-searcher");
};

export { downloadBook, getBooks, sorterFn, isHidden, toRepo };
