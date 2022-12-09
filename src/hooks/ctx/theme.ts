import { IThemeCtx } from "@intf";
import { initThemeState } from "@reducers";
import { Context, createContext } from "react";

/**
 * 主题上下文
 *
 *  @type {*}
 */
const themeCtx: Context<IThemeCtx> = createContext<IThemeCtx>({
    themeState: initThemeState,
    setThemeState: (): never => {
        throw new Error("themeCtx未定义");
    },
});

export default themeCtx;
