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

    const BACNEND_URL: string = import.meta.env.PROD
        ? `${import.meta.env.VITE_BACKEND_URL}`
        : "/api";

    let url: string = `${BACNEND_URL}?limit=100000`;

    try {
        keyword.split("&").forEach((item: string): void => {
            const key: string = item.split("=")[0];
            if (
                ![
                    "title",
                    "extension",
                    "author",
                    "publisher",
                    "language",
                    "isbn",
                ].includes(key)
            ) {
                throw Error();
            }
        });

        url = `${url}&${keyword}`;
    } catch (e) {
        url = `${url}&query=${keyword}`;
    } finally {
        const res: Response = await fetch(url);

        return await res.json();
    }
};

export default getBooks;
