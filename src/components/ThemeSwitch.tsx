import DarkIcon from "@components/DarkIcon";
import LightIcon from "@components/LightIcon";
import { themeCtx } from "@ctx";
import { Switch } from "antd";
import { useContext } from "react";

const ThemeSwitch: (props: any) => JSX.Element = (props: any): JSX.Element => {
    const { className } = props;

    const { themeState, setThemeState } = useContext(themeCtx);

    const clickSwitch: (checked: boolean) => void = (
        checked: boolean
    ): void => {
        setThemeState({
            ...themeState,
            isLight: checked,
        });
    };

    return (
        <Switch
            {...className}
            checkedChildren={<LightIcon />}
            unCheckedChildren={<DarkIcon />}
            checked={themeState.isLight}
            onChange={clickSwitch}
        />
    );
};

export default ThemeSwitch;
