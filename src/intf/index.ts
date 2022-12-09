import { EXT_OPT, IAdvSearchCtx, IAdvSearchState } from "./advSearch";
import { IBook, IBookCtx, IBooks, IBookState, IGetBooksParam } from "./books";
import {
    IExtraInfoProps,
    IExtSelectProps,
    ILogoProps,
    IProjTitleProps,
    ITopbarProps,
    IZLibProps,
} from "./props";
import { RESULT_COLS } from "./results";
import { IThemeCtx, IThemeState } from "./theme";

/**
 * 最小宽度
 *
 *  @type {*}
 */
const MIN_WIDTH: string = "375px";

/**
 * event类型
 *
 * @interface IEvent
 */
interface IEvent {
    target: { value: string };
}

/**
 * IPFS服务器域名枚举
 *
 * @enum {number}
 */
enum DomainName {
    Cloudflare = "cloudflare-ipfs.com",
    Dweb = "dweb.link",
    Ipfs = "ipfs.io",
    Pinata = "gateway.pinata.cloud",
}

export { DomainName, EXT_OPT, RESULT_COLS, MIN_WIDTH };
export type {
    IAdvSearchCtx,
    IAdvSearchState,
    IBook,
    IBookCtx,
    IBooks,
    IBookState,
    IGetBooksParam,
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
