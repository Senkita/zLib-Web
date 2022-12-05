/**
 * 打开zLib Searcher仓库页面
 */
const toRepo: () => void = (): void => {
    window.open("https://github.com/zu1k/zlib-searcher");
};

/**
 * 监听网页是否被切后台
 *
 */
const isHidden: (customTitle: string) => void = (customTitle: string): void => {
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

export { toRepo, isHidden };
