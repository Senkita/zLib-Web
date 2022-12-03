interface IBookInfo {
    id: number;
    title: string;
    author: string;
    publisher: string;
    extension: string;
    filesize: number;
    language: string;
    year: number;
    pages: number;
    isbn: string;
    ipfs_cid: string;
}

interface IBooksResultState {
    books: Array<IBookInfo>;
}

interface IBooksResultAction extends IBooksResultState {
    type: string;
}

export type { IBookInfo, IBooksResultState, IBooksResultAction };
