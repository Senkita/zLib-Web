import { IBooksResultAction, IBooksResultState } from "@intf";

/**
 * 书籍检索结果初始值
 *
 * @type {*}
 */
const initBooksResultState: IBooksResultState = {
    books: [],
};

/**
 * 书籍检索结果Reducer
 *
 * @param {IBooksResultState} state
 * @param {IBooksResultAction} action
 * @return {*}  {IBooksResultState}
 */
const booksResultReducer: (
    state: IBooksResultState,
    action: IBooksResultAction
) => IBooksResultState = (
    state: IBooksResultState,
    action: IBooksResultAction
): IBooksResultState => {
    switch (action.type) {
        case "set":
            return { books: state.books };
        default:
            throw new Error();
    }
};

export { initBooksResultState, booksResultReducer };
