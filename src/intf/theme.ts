import { Dispatch } from "react";

/**
 * 主题状态
 *
 * @interface IThemeState
 */
interface IThemeState {
    isLight: boolean;
}

/**
 * 主题上下文类型
 *
 * @interface IThemeCtx
 */
interface IThemeCtx {
    themeState: IThemeState;
    setThemeState: Dispatch<Partial<IThemeState>>;
}

export type { IThemeState, IThemeCtx };
