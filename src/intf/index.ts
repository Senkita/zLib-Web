import { extensionOpt, IAdvSearchCtx, IAdvSearchState } from "./advSearch";
import { IBook, IBookCtx, IBookState } from "./books";
import { IThemeCtx, IThemeState } from "./theme";

const minWidth: string = "375px";

export { extensionOpt, minWidth };
export type {
    IAdvSearchState,
    IAdvSearchCtx,
    IBook,
    IBookState,
    IBookCtx,
    IThemeState,
    IThemeCtx,
};
