import { ProSchemaValueEnumObj } from "@ant-design/pro-components";
import { IExtOpt } from "@intf";

/**
 * 高级检索弹出框扩展名选项列表
 *
 *  @type {*}
 */
const EXT_OPT: Array<IExtOpt> = [
    {
        value: "azw3",
        label: ".azw3",
    },
    {
        value: "epub",
        label: ".epub",
    },
    {
        value: "mobi",
        label: ".mobi",
    },
    {
        value: "pdf",
        label: ".pdf",
    },
    {
        value: "txt",
        label: ".txt",
    },
];

/**
 * 表格扩展名选项列表
 *
 *  @type {*}
 */
const EXT_FILTERS: ProSchemaValueEnumObj = {
    azw3: {
        text: ".azw3",
    },
    epub: {
        text: ".epub",
    },
    mobi: {
        text: ".mobi",
    },
    pdf: {
        text: ".pdf",
    },
    txt: {
        text: ".txt",
    },
};

export { EXT_FILTERS, EXT_OPT };
