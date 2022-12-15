import { DomainName } from "@consts";
import { IBook } from "@intf";

/**
 * 下载书籍
 *
 * @param {DomainName} domainName
 * @param {IBook} record
 */
const downloadBook: (domainName: DomainName, record: IBook) => void = (
    domainName: DomainName,
    record: IBook
): void => {
    const { ipfs_cid, title, author, publisher, extension } = record;

    window.open(
        `https://${domainName}/ipfs/${ipfs_cid}?filename=${title}-${author}-${publisher}.${extension}`
    );
};

export default downloadBook;
