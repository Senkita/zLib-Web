import { IAdvSearchState } from "@intf";

/**
 * 高级检索弹出框初始值
 *
 * @type {*}
 */
const initAdvSearchState: IAdvSearchState = {
    visible: false,
};

/**
 * 高级检索弹出框Reducer
 *
 * @param {IAdvSearchState} prevState
 * @param {Partial<IAdvSearchState>} updatedProp
 * @return {*}  {IAdvSearchState}
 */
const advSearchReducer: (
    prevState: IAdvSearchState,
    updatedProp: Partial<IAdvSearchState>
) => IAdvSearchState = (
    prevState: IAdvSearchState,
    updatedProp: Partial<IAdvSearchState>
): IAdvSearchState => ({
    ...prevState,
    ...updatedProp,
});

export { initAdvSearchState, advSearchReducer };
