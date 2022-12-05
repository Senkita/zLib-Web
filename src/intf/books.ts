import { Dispatch } from "react";

/**
 * 书籍信息
 *
 * @interface IBook
 */
interface IBook extends IBookState {
    id: number;
    filesize: number;

    year: number;
    pages: number;

    ipfs_cid: string;
}

/**
 * 书籍检索输入状态
 *
 * @interface IBookState
 */
interface IBookState {
    title: string;
    author: string;
    publisher: string;
    extension: string;

    language: string;

    isbn: string;
}

/**
 * 书籍检索输入上下文
 *
 * @interface IBookCtx
 */
interface IBookCtx {
    bookState: IBookState;
    setBookState: Dispatch<Partial<IBookState>>;
}

export type { IBook, IBookState, IBookCtx };
