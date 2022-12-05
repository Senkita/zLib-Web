import { toRepo } from "@utils";
import { Typography } from "antd";

const { Title } = Typography;

const ProjTitle: (props: any) => JSX.Element = (props: any): JSX.Element => {
    const { className } = props;

    return (
        <Title
            className={`table-cell cursor-pointer ${className}`}
            style={{
                color: "#fff",
            }}
            level={2}
            onClick={toRepo}
        >
            zLib Searcher
        </Title>
    );
};

export default ProjTitle;
