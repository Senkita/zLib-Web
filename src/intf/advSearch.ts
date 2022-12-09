import { Dispatch } from "react";

/**
 * 扩展名选项类型
 *
 * @interface IExtensionOpt
 */
interface IExtOpt {
    value: string;
    label: string;
}

/**
 * 扩展名选项列表
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
 * 高级检索弹出框状态
 *
 * @interface IAdvSearchState
 */
interface IAdvSearchState {
    visible: boolean;
    keyword: string;
}

/**
 * 高级检索弹出框上下文类型
 *
 * @interface IAdvSearchCtx
 */
interface IAdvSearchCtx {
    advSearchState: IAdvSearchState;
    setAdvSearchState: Dispatch<Partial<IAdvSearchState>>;
}

export { EXT_OPT };
export type { IAdvSearchCtx, IAdvSearchState };
