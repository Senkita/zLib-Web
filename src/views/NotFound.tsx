import ToHomeBtn from "@components/ToHomeBtn";
import Topbar from "@components/Topbar";
import { isHidden } from "@utils";
import { Layout, Result } from "antd";
import { useEffect } from "react";

const { Content } = Layout;

/**
 * 未定义路由
 *
 * @return {*}  {JSX.Element}
 */
const NotFound: () => JSX.Element = (): JSX.Element => {
    useEffect((): void => isHidden("Oops!"), []);

    return (
        <>
            <Topbar page="NotFound" />

            <Content>
                <Result
                    status="404"
                    title="Oops!"
                    extra={[<ToHomeBtn key="toHome" />]}
                />
            </Content>
        </>
    );
};

export default NotFound;
