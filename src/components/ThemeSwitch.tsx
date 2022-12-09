import DarkIcon from "@components/DarkIcon";
import LightIcon from "@components/LightIcon";
import { themeCtx } from "@ctx";
import { Switch } from "antd";
import { useContext, useEffect } from "react";

/**
 * 主题切换开关
 *
 * @return {*}  {JSX.Element}
 */
const ThemeSwitch: () => JSX.Element = (): JSX.Element => {
    const { themeState, setThemeState } = useContext(themeCtx);

    useEffect((): void => {
        const theme: string | null = localStorage.getItem("theme");

        switch (theme) {
            case "light":
                setThemeState({
                    isLight: true,
                });
                break;
            case "dark":
                setThemeState({
                    isLight: false,
                });
                break;
            default:
                localStorage.setItem("theme", "light");
        }
    }, []);

    /**
     * 切换主题
     *
     * @param {boolean} checked
     */
    const clickSwitch: (checked: boolean) => void = (
        checked: boolean
    ): void => {
        if (checked) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        setThemeState({
            isLight: checked,
        });
    };

    return (
        <Switch
            checkedChildren={<LightIcon />}
            unCheckedChildren={<DarkIcon />}
            checked={themeState.isLight}
            onChange={clickSwitch}
        />
    );
};

export default ThemeSwitch;
