import {
    BankOutlined,
    BookOutlined,
    BorderlessTableOutlined,
    TranslationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import ExtSelect from "@components/ExtSelect";
import { MIN_WIDTH } from "@consts";
import { advSearchCtx, bookCtx } from "@ctx";
import { IBookState, IEvent } from "@intf";
import { Col, Input, Modal, Row, Tooltip } from "antd";
import { useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * 高级检索弹出框
 *
 * @return {*}  {JSX.Element}
 */
const AdvSearchBox: () => JSX.Element = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const { bookState, setBookState } = useContext(bookCtx);
    const { advSearchState, setAdvSearchState } = useContext(advSearchCtx);
    const [tipState, setTipState] = useState<boolean>(false);

    /**
     * 点击搜索按钮
     * 1. 遍历输入框的值组合关键词
     * 2. 如果没有输入, 则弹出提示
     */
    const clickSearch: () => void = (): void => {
        let obj: { [key: string]: string } = {};

        for (const [key, value] of Object.entries(bookState)) {
            if (value !== "") {
                obj[key] = value;
            }
        }

        let keyword: string = Object.keys(obj)
            .map((key: string): string => key + "=" + obj[key])
            .join("&");

        if (keyword !== "") {
            setAdvSearchState({
                visible: false,
                keyword: keyword.trim(),
            });

            // Fixed: 直接使用initBookState出现author: "y"
            setBookState({
                title: "",
                extension: "",
                author: "",
                publisher: "",
                language: "",
                isbn: "",
            });

            navigate("/search");
        } else {
            setTipState(true);
        }
    };

    /**
     * 点击取消按钮
     *
     */
    const clickCancel: () => void = (): void => {
        setTipState(false);

        setBookState({
            title: "",
            extension: "",
            author: "",
            publisher: "",
            language: "",
            isbn: "",
        });

        setAdvSearchState({ visible: false });
    };

    /**
     * 修改输入值
     *
     * @param {IEvent} event
     * @param {keyof IBookState} propName
     */
    const changeVal: (event: IEvent, propName: keyof IBookState) => void = (
        event: IEvent,
        propName: keyof IBookState
    ): void => {
        setTipState(false);

        const state: IBookState = bookState;
        state[propName] = event.target.value;

        setBookState(state);
    };

    return (
        <Modal
            style={{
                minWidth: MIN_WIDTH,
            }}
            centered
            destroyOnClose
            okText="搜索"
            cancelText="取消"
            title="高级检索"
            open={advSearchState.visible}
            onOk={clickSearch}
            onCancel={clickCancel}
        >
            <Tooltip
                title="请输入关键词"
                placement="topRight"
                open={tipState}
                onOpenChange={(visible: boolean): void => {
                    if (!visible) {
                        setTipState(visible);
                    }
                }}
            >
                <Row gutter={[8, 16]}>
                    <Col span={24}>
                        <Input
                            allowClear
                            placeholder="书名"
                            prefix={<BookOutlined />}
                            value={bookState.title}
                            onChange={(event: IEvent): void =>
                                changeVal(event, "title")
                            }
                            addonAfter={
                                <ExtSelect
                                    closeTip={(): void => setTipState(false)}
                                />
                            }
                        />
                    </Col>

                    <Col span={12}>
                        <Input
                            allowClear
                            placeholder="作者名"
                            prefix={<UserOutlined />}
                            value={bookState.author}
                            onChange={(event: IEvent): void =>
                                changeVal(event, "author")
                            }
                        />
                    </Col>
                    <Col span={12}>
                        <Input
                            allowClear
                            placeholder="出版社"
                            prefix={<BankOutlined />}
                            value={bookState.publisher}
                            onChange={(event: IEvent): void =>
                                changeVal(event, "publisher")
                            }
                        />
                    </Col>

                    <Col span={12}>
                        <Input
                            allowClear
                            placeholder="语言"
                            prefix={<TranslationOutlined />}
                            value={bookState.language}
                            onChange={(event: IEvent): void =>
                                changeVal(event, "language")
                            }
                        />
                    </Col>
                    <Col span={12}>
                        <Input
                            allowClear
                            placeholder="ISBN"
                            prefix={<BorderlessTableOutlined />}
                            value={bookState.isbn}
                            onChange={(event: IEvent): void =>
                                changeVal(event, "isbn")
                            }
                        />
                    </Col>
                </Row>
            </Tooltip>
        </Modal>
    );
};

export default AdvSearchBox;
