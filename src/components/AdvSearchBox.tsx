import {
    BankOutlined,
    BookOutlined,
    BorderlessTableOutlined,
    TranslationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import ExtSelect from "@components/ExtSelect";
import { advSearchCtx, bookCtx } from "@ctx";
import { minWidth } from "@intf";
import { Col, Input, Modal, Row } from "antd";
import { useContext } from "react";

/**
 * 高级检索弹出框
 *
 * @return {*}  {JSX.Element}
 */
const AdvSearchBox: () => JSX.Element = (): JSX.Element => {
    const { bookState, setBookState } = useContext(bookCtx);

    const { advSearchState, setAdvSearchState } = useContext(advSearchCtx);

    /**
     * 点击搜索按钮
     *
     */
    const clickSearch: () => void = (): void => {
        setAdvSearchState({ visible: false });
        console.log(bookState);
    };

    /**
     * 点击取消按钮
     *
     */
    const clickCancel: () => void = (): void => {
        setAdvSearchState({ visible: false });
    };

    /**
     * 当输入框值被修改
     *
     * @param {*} event
     * @param {string} propName
     * @return {*}  {void}
     */
    const handleChangeVal: (event: any, propName: string) => void = (
        event: any,
        propName: string
    ): void => {
        switch (propName) {
            case "title":
                setBookState({
                    ...bookState,
                    title: event.target.value,
                });
                return;
            case "author":
                setBookState({
                    ...bookState,
                    author: event.target.value,
                });
                return;
            case "publisher":
                setBookState({
                    ...bookState,
                    publisher: event.target.value,
                });
                return;
            case "language":
                setBookState({
                    ...bookState,
                    language: event.target.value,
                });
                return;
            case "isbn":
                setBookState({
                    ...bookState,
                    isbn: event.target.value,
                });
                return;
            default:
                // Todo:
                console.error(`没有属性: ${propName}`);
        }
    };

    return (
        <Modal
            style={{
                minWidth: minWidth,
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
            <Row gutter={[8, 16]}>
                <Col span={24}>
                    <Input
                        placeholder="书名"
                        prefix={<BookOutlined />}
                        value={bookState.title}
                        onChange={(event: any): void =>
                            handleChangeVal(event, "title")
                        }
                        addonAfter={<ExtSelect />}
                    />
                </Col>

                <Col span={12}>
                    <Input
                        placeholder="作者名"
                        prefix={<UserOutlined />}
                        value={bookState.author}
                        onChange={(event: any): void =>
                            handleChangeVal(event, "author")
                        }
                    />
                </Col>
                <Col span={12}>
                    <Input
                        placeholder="出版社"
                        prefix={<BankOutlined />}
                        value={bookState.publisher}
                        onChange={(event: any): void =>
                            handleChangeVal(event, "publisher")
                        }
                    />
                </Col>

                <Col span={12}>
                    <Input
                        placeholder="语言"
                        prefix={<TranslationOutlined />}
                        value={bookState.language}
                        onChange={(event: any): void =>
                            handleChangeVal(event, "language")
                        }
                    />
                </Col>
                <Col span={12}>
                    <Input
                        placeholder="ISBN"
                        prefix={<BorderlessTableOutlined />}
                        value={bookState.isbn}
                        onChange={(event: any): void =>
                            handleChangeVal(event, "isbn")
                        }
                    />
                </Col>
            </Row>
        </Modal>
    );
};

export default AdvSearchBox;
