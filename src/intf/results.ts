import { IBook } from "@intf";
import { sorterFn } from "@utils";
import { ColumnsType } from "antd/es/table";

/**
 * 扩展名过滤器类型
 *
 * @interface IExtFilters
 */
interface IExtFilters {
    text: string;
    value: string;
}

/**
 * 扩展名过滤器列表
 *
 *  @type {*}
 */
const EXT_FILTERS: Array<IExtFilters> = [
    { text: ".awz3", value: "azw3" },
    { text: ".epub", value: "epub" },
    { text: ".mobi", value: "mobi" },
    { text: ".pdf", value: "pdf" },
    { text: ".txt", value: "txt" },
];

/**
 * 表头设置
 *
 * @type {*}
 */
const RESULT_COLS: ColumnsType<IBook> = [
    {
        title: "书名",
        dataIndex: "title",
        key: "title",
        width: 160,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("title", { a, b }),
    },
    {
        title: "作者",
        dataIndex: "author",
        key: "author",
        width: 80,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("author", { a, b }),
    },
    {
        title: "出版社",
        dataIndex: "publisher",
        key: "publisher",
        width: 80,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("publisher", { a, b }),
    },
    {
        title: "扩展名",
        dataIndex: "extension",
        key: "extension",
        width: 80,
        ellipsis: true,
        filters: EXT_FILTERS,
        onFilter: (value: any, record: IBook): boolean =>
            record.extension.includes(value),
        sorter: (a: IBook, b: IBook): number => sorterFn("extension", { a, b }),
    },
    {
        title: "语言",
        dataIndex: "language",
        key: "language",
        width: 80,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("language", { a, b }),
    },
    {
        title: "年份",
        dataIndex: "year",
        key: "year",
        width: 80,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("year", { a, b }),
    },
    {
        title: "页数",
        dataIndex: "pages",
        key: "pages",
        width: 80,
        ellipsis: true,
        sorter: (a: IBook, b: IBook): number => sorterFn("pages", { a, b }),
    },
];

export { RESULT_COLS };
