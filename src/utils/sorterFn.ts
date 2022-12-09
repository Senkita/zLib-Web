import { IBook } from "@intf";

/**
 * 表头排序
 *
 * @param {keyof IBook} prop
 * @param {{ a: IBook; b: IBook }} { a, b }
 * @return {*}  {number}
 */
const sorterFn: (
    prop: keyof IBook,
    { a, b }: { a: IBook; b: IBook }
) => number = (prop: keyof IBook, { a, b }: { a: IBook; b: IBook }): number => {
    let compResult: number;
    switch (prop) {
        case "year":
            compResult = a[prop] - b[prop];
            break;
        case "pages":
            compResult = a[prop] - b[prop];
            break;
        default:
            compResult =
                (a[prop] as string).codePointAt(0)! -
                (b[prop] as string).codePointAt(0)!;
    }

    return compResult;
};

export default sorterFn;
