import { EXT_FILTERS, EXT_OPT } from "./extension";
import { RESULT_COLS } from "./results";

/**
 * 最小宽度
 *
 *  @type {*}
 */
const MIN_WIDTH: string = "480px";

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

export { RESULT_COLS, DomainName, EXT_OPT, MIN_WIDTH, EXT_FILTERS };
