import { IBooks, IGetBooksParam } from "@intf";

/**
 * 搜索书籍
 *
 * @param {IGetBooksParam} {
 *     queryKey,
 * }
 * @return {*}  {Promise<IBooks>}
 */
const getBooks: ({ queryKey }: IGetBooksParam) => Promise<IBooks> = async ({
    queryKey,
}: IGetBooksParam): Promise<IBooks> => {
    const [_key, { keyword }] = queryKey;

    const url: string = `/api?limit=100000&query=${keyword}`;

    const res: Response = await fetch(url);

    return await res.json();
};

export default getBooks;
