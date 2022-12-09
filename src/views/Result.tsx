import ResultTable from "@components/ResultTable";
import Topbar from "@components/Topbar";
import { isHidden } from "@utils";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";

const Result: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => {
        isHidden("zLib Searcher");
    }, []);

    return (
        <>
            <Topbar page="Result" />

            <Content className="px-4 pt-4">
                <ResultTable />
            </Content>
        </>
    );
};

export default Result;
