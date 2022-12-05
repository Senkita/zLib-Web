import Icon from "@ant-design/icons";
import sun from "@images/sun";

const LightIcon: (props: any) => JSX.Element = (props: any): JSX.Element => (
    <Icon component={sun} {...props} />
);

export default LightIcon;
