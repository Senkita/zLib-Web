import { IBookCtx } from "@intf";
import { initBookState } from "@reducers";
import { Context, createContext } from "react";

const bookCtx: Context<IBookCtx> = createContext<IBookCtx>({
    bookState: initBookState,
    setBookState: (): never => {
        throw new Error("bookCtx未定义");
    },
});

export default bookCtx;
