import { IBookState } from "@intf";

/**
 * 书籍检索输入初始值
 *
 * @type {*}
 */
const initBookState: IBookState = {
    title: "",
    extension: "",
    author: "",
    publisher: "",
    language: "",
    isbn: "",
};

/**
 * 书籍检索输入Reducer
 *
 * @param {IBookState} prevState
 * @param {Partial<IBookState>} updatedProp
 * @return {*}  {IBookState}
 */
const bookReducer: (
    prevState: IBookState,
    updatedProp: Partial<IBookState>
) => IBookState = (
    prevState: IBookState,
    updatedProp: Partial<IBookState>
): IBookState => ({
    ...prevState,
    ...updatedProp,
});

export { initBookState, bookReducer };
