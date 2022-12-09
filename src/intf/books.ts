import { Dispatch } from "react";

/**
 * 高级检索书籍状态
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
 * 接口返回数据类型
 *
 * @interface IBooks
 */
interface IBooks {
    books: Array<IBook>;
}

/**
 * 高级检索书籍上下文类型
 *
 * @interface IBookCtx
 */
interface IBookCtx {
    bookState: IBookState;
    setBookState: Dispatch<Partial<IBookState>>;
}

/**
 * getBooks参数类型
 *
 * @interface IGetBooksParam
 */
interface IGetBooksParam {
    queryKey: [
        string,
        {
            keyword: string;
        }
    ];
}

export type { IBook, IBookCtx, IBooks, IBookState, IGetBooksParam };
