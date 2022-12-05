import { FileTextOutlined } from "@ant-design/icons";
import { bookCtx } from "@ctx";
import { extensionOpt } from "@intf";
import { Select } from "antd";
import { useContext } from "react";

/**
 * 文件后缀名
 *
 * @return {*}  {JSX.Element}
 */
const ExtSelect: () => JSX.Element = (): JSX.Element => {
    const { bookState, setBookState } = useContext(bookCtx);

    /**
     * 选项被选择时
     *
     * @param {string} value
     */
    const selectOpt: (value: string) => void = (value: string): void => {
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
            options={extensionOpt}
            onSelect={selectOpt}
            onClear={clearSelect}
        />
    );
};

export default ExtSelect;
