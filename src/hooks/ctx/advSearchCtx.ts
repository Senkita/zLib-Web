import { IAdvSearchCtx } from "@intf";
import { initAdvSearchState } from "@reducers";
import { Context, createContext } from "react";

const advSearchCtx: Context<IAdvSearchCtx> = createContext<IAdvSearchCtx>({
    advSearchState: initAdvSearchState,
    setAdvSearchState: (): never => {
        throw new Error("advSearchCtx未定义");
    },
});

export default advSearchCtx;
