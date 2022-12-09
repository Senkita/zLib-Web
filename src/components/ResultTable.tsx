import ExtraInfo from "@components/ExtraInfo";
import { advSearchCtx } from "@ctx";
import { IBook, RESULT_COLS } from "@intf";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@utils";
import { Table } from "antd";
import { useContext } from "react";

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

    return (
        <Table
            expandRowByClick
            rowKey={(record: IBook): number => record.id}
            columns={RESULT_COLS}
            loading={isFetching}
            dataSource={data?.books}
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
