import { IAdvSearchCtx } from "@intf";
import { initAdvSearchState } from "@reducers";
import { Context, createContext } from "react";

/**
 * 高级检索弹出框上下文
 *
 *  @type {*}
 */
const advSearchCtx: Context<IAdvSearchCtx> = createContext<IAdvSearchCtx>({
    advSearchState: initAdvSearchState,
    setAdvSearchState: (): never => {
        throw new Error("advSearchCtx未定义");
    },
});

export default advSearchCtx;
