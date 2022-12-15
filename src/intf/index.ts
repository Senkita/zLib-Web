import { IAdvSearchCtx, IAdvSearchState, IExtOpt } from "./advSearch";
import { IBook, IBookCtx, IBooks, IBookState, IGetBooksParam } from "./books";
import {
    IExtraInfoProps,
    IExtSelectProps,
    ILogoProps,
    IProjTitleProps,
    ITopbarProps,
    IZLibProps,
} from "./props";
import { IThemeCtx, IThemeState } from "./theme";

/**
 * event类型
 *
 * @interface IEvent
 */
interface IEvent {
    target: { value: string };
}

export type {
    IAdvSearchCtx,
    IAdvSearchState,
    IBook,
    IBookCtx,
    IBooks,
    IBookState,
    IGetBooksParam,
    IExtOpt,
    IExtraInfoProps,
    IExtSelectProps,
    ILogoProps,
    IProjTitleProps,
    ITopbarProps,
    IZLibProps,
    IThemeCtx,
    IThemeState,
    IEvent,
};
