import { IBook } from "@intf";

/**
 * 下载书籍
 *
 * @param {IBook} record
 */
const downloadBook: (record: IBook) => void = (record: IBook): void => {
    const { ipfs_cid, title, author, publisher, extension } = record;

    window.open(
        `https://ipfs-checker.1kbtool.com/${ipfs_cid}?filename=${title}-${author}-${publisher}.${extension}`
    );
};

export default downloadBook;
