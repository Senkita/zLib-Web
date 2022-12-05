import { Dispatch } from "react";

/**
 * 扩展名选项类型
 *
 * @interface IExtensionOpt
 */
interface IExtensionOpt {
    value: string;
    label: string;
}

/**
 * 扩展名选项列表
 *
 *  @type {*}
 */
const extensionOpt: Array<IExtensionOpt> = [
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
}

/**
 * 高级检索弹出框上下文
 *
 * @interface IAdvSearchCtx
 */
interface IAdvSearchCtx {
    advSearchState: IAdvSearchState;
    setAdvSearchState: Dispatch<Partial<IAdvSearchState>>;
}

export { extensionOpt };
export type { IAdvSearchState, IAdvSearchCtx };
