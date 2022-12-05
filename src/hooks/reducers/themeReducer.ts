import { IThemeState } from "@intf";

/**
 * 主题初始值
 *
 * @type {*}
 */
const initThemeState: IThemeState = {
    isLight: true,
};

/**
 * 主题Reducer
 *
 * @param {IThemeState} prevState
 * @param {Partial<IThemeState>} updatedProp
 * @return {*}  {IThemeState}
 */
const themeReducer: (
    prevState: IThemeState,
    updatedProp: Partial<IThemeState>
) => IThemeState = (
    prevState: IThemeState,
    updatedProp: Partial<IThemeState>
): IThemeState => ({
    ...prevState,
    ...updatedProp,
});

export { initThemeState, themeReducer };
