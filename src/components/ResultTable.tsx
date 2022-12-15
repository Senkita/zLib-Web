import { ProTable } from "@ant-design/pro-components";
import { RESULT_COLS } from "@consts";
import { advSearchCtx } from "@ctx";
import { IBook } from "@intf";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@utils";
import { useContext, useMemo } from "react";
import ExtraInfo from "./ExtraInfo";

/**
 * 结果表格
 *
 * @return {*}  {JSX.Element}
 */
const ResultTable: () => JSX.Element = (): JSX.Element => {
    const { advSearchState } = useContext(advSearchCtx);
    const { isFetching, data } = useQuery(
        ["books", { keyword: advSearchState.keyword }],
        getBooks
    );

    let dataSrc: Array<IBook> = [];

    useMemo((): void => {
        const result: Array<IBook> | undefined = data?.books;
        if (result) {
            dataSrc = result;
        }
    }, [dataSrc]);

    return (
        <ProTable<IBook>
            expandRowByClick
            rowKey="id"
            columns={RESULT_COLS}
            loading={isFetching}
            search={false}
            dataSource={dataSrc}
            pagination={{
                showQuickJumper: true,
            }}
            options={{ reload: false }}
            expandable={{
                showExpandColumn: false,
                expandedRowRender: (record: IBook): JSX.Element => (
                    <ExtraInfo record={record} />
                ),
            }}
        />
    );
};

export default ResultTable;
