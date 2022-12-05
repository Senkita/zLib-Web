import { IThemeCtx } from "@intf";
import { initThemeState } from "@reducers";
import { Context, createContext } from "react";

const themeCtx: Context<IThemeCtx> = createContext<IThemeCtx>({
    themeState: initThemeState,
    setThemeState: (): never => {
        throw new Error("themeCtx未定义");
    },
});

export default themeCtx;
