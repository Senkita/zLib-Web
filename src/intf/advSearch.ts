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

export type { IAdvSearchCtx, IAdvSearchState, IExtOpt };
