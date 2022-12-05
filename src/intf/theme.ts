import { Dispatch } from "react";

interface IThemeState {
    isLight: boolean;
}

interface IThemeCtx {
    themeState: IThemeState;
    setThemeState: Dispatch<Partial<IThemeState>>;
}

export type { IThemeState, IThemeCtx };
