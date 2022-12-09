import { blue } from "@ant-design/colors";
import { Button } from "antd";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * 返回首页按钮
 *
 * @return {*}  {JSX.Element}
 */
const ToHomeBtn: () => JSX.Element = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const toHome: () => void = (): void => {
        navigate("/");
    };

    return (
        <Button
            type="primary"
            style={{
                background: blue.primary,
            }}
            onClick={toHome}
        >
            返回首页
        </Button>
    );
};

export default ToHomeBtn;
