import Icon from "@ant-design/icons";
import zLib from "@images/zLib";

const Logo: (props: any) => JSX.Element = (props: any): JSX.Element => {
    const { customcolor } = props;

    return <Icon component={(): JSX.Element => zLib(customcolor)} {...props} />;
};

export default Logo;
