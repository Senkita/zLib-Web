import { advSearchCtx } from "@ctx";
import { Button } from "antd";
import { useContext } from "react";

/**
 * 高级检索按钮
 *
 * @return {*}  {JSX.Element}
 */
const AdvSearchBtn: () => JSX.Element = (): JSX.Element => {
    const { setAdvSearchState } = useContext(advSearchCtx);

    /**
     * 点击高级检索按钮
     *
     */
    const openAdvSearch: () => void = (): void => {
        setAdvSearchState({ visible: true });
    };

    return (
        <Button type="primary" onClick={openAdvSearch}>
            高级检索
        </Button>
    );
};

export default AdvSearchBtn;
