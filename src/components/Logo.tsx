import Icon from "@ant-design/icons";
import zLib from "@images/zLib";
import { ILogoProps } from "@intf";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * zLib图标, 点击返回首页
 *
 * @param {ILogoProps} props
 * @return {*}  {JSX.Element}
 */
const Logo: (props: ILogoProps) => JSX.Element = (
    props: ILogoProps
): JSX.Element => {
    const { width, color, className } = props;
    const navigate: NavigateFunction = useNavigate();

    return (
        <Icon
            className={`block cursor-pointer ${className}`}
            component={(): JSX.Element => zLib({ width, color })}
            onClick={(): void => navigate("/")}
        />
    );
};

export default Logo;
