import Icon from "@ant-design/icons";
import zLib from "@images/zLib";

const Logo: (props: any) => JSX.Element = (props: any): JSX.Element => {
    const { width, color, className } = props;

    return (
        <Icon
            className={`block ${className}`}
            component={(): JSX.Element => zLib({ width, color })}
        />
    );
};

export default Logo;
