import { IBookCtx } from "@intf";
import { initBookState } from "@reducers";
import { Context, createContext } from "react";

/**
 * 高级检索书籍上下文
 *
 *  @type {*}
 */
const bookCtx: Context<IBookCtx> = createContext<IBookCtx>({
    bookState: initBookState,
    setBookState: (): never => {
        throw new Error("bookCtx未定义");
    },
});

export default bookCtx;
