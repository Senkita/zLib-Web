import { IProjTitleProps } from "@intf";
import { toRepo } from "@utils";
import { Typography } from "antd";

const { Title } = Typography;

/**
 * 项目名, 点击跳转仓库
 *
 * @param {IProjTitleProps} props
 * @return {*}  {JSX.Element}
 */
const ProjTitle: (props: IProjTitleProps) => JSX.Element = (
    props: IProjTitleProps
): JSX.Element => {
    const { className } = props;

    return (
        <Title
            className={`table-cell cursor-pointer ${className}`}
            style={{
                color: "#fff",
                minWidth: "200px",
            }}
            level={2}
            onClick={toRepo}
        >
            zLib Searcher
        </Title>
    );
};

export default ProjTitle;
