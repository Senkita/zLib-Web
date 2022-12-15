import { ProColumns } from "@ant-design/pro-components";
import { EXT_FILTERS } from "@consts";
import { IBook } from "@intf";
import { sorterFn } from "@utils";

/**
 * 表头设置
 *
 * @type {*}
 */
const RESULT_COLS: ProColumns<IBook, "text">[] = [
    {
        title: "书名",
        dataIndex: "title",
        key: "title",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("title", { a, b }),
        disable: true,
    },
    {
        title: "作者",
        dataIndex: "author",
        key: "author",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("author", { a, b }),
        disable: true,
    },
    {
        title: "出版社",
        dataIndex: "publisher",
        key: "publisher",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("publisher", { a, b }),
    },
    {
        title: "扩展名",
        dataIndex: "extension",
        key: "extension",
        ellipsis: true,
        filters: true,
        onFilter: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("extension", { a, b }),
        disable: true,
        valueEnum: EXT_FILTERS,
    },
    {
        title: "语言",
        dataIndex: "language",
        key: "language",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("language", { a, b }),
    },
    {
        title: "年份",
        dataIndex: "year",
        key: "year",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("year", { a, b }),
    },
    {
        title: "页数",
        dataIndex: "pages",
        key: "pages",
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("pages", { a, b }),
    },
];

export { RESULT_COLS };
