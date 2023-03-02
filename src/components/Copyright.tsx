import { Divider, Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text, Link } = Typography;

/**
 * 底部栏, 放置版权声明
 *
 * @return {*}  {JSX.Element}
 */
const Copyright: () => JSX.Element = (): JSX.Element => {
    const year: number = new Date().getFullYear();

    return (
        <Footer className="text-center">
            <Text type="secondary">
                Copyright &copy; 2022 - {year}
                <Divider type="vertical" />
                Powered by{" "}
                <Link href="https://github.com/Senkita" target="_blank">
                    Senkita
                </Link>
            </Text>
            <Text className="block">
                后端源码由
                <Link href="https://github.com/zu1k" target="_blank">
                    zu1k
                </Link>
                提供
            </Text>
        </Footer>
    );
};

export default Copyright;
