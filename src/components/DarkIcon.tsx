import Icon from "@ant-design/icons";
import moon from "@images/moon";

const DarkIcon: (props: any) => JSX.Element = (props: any): JSX.Element => (
    <Icon component={moon} {...props} />
);

export default DarkIcon;
