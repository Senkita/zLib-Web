import { FileTextOutlined } from "@ant-design/icons";
import { EXT_OPT } from "@consts";
import { bookCtx } from "@ctx";
import { IExtSelectProps } from "@intf";
import { Select } from "antd";
import { useContext } from "react";

/**
 * 文件后缀名选择
 *
 * @param {*} props
 * @return {*}  {JSX.Element}
 */
const ExtSelect: (props: IExtSelectProps) => JSX.Element = (
    props: IExtSelectProps
): JSX.Element => {
    const { closeTip } = props;
    const { bookState, setBookState } = useContext(bookCtx);

    /**
     * 选项被选择时
     *
     * @param {string} value
     */
    const selectOpt: (value: string) => void = (value: string): void => {
        closeTip();
        setBookState({
            ...bookState,
            extension: value,
        });
    };

    /**
     * 点击清除时
     *
     */
    const clearSelect: () => void = (): void => {
        setBookState({
            ...bookState,
            extension: "",
        });
    };

    return (
        <Select
            className="w-28"
            allowClear
            dropdownMatchSelectWidth={false}
            placeholder={
                <>
                    <FileTextOutlined /> 扩展名
                </>
            }
            options={EXT_OPT}
            onSelect={selectOpt}
            onClear={clearSelect}
        />
    );
};

export default ExtSelect;
