import { DomainName } from "@consts";
import { IExtraInfoProps } from "@intf";
import { downloadBook } from "@utils";
import { Button, Descriptions } from "antd";

const { Item } = Descriptions;

/**
 * 展开信息
 *
 * @param {IExtraInfoProps} props
 * @return {*}  {JSX.Element}
 */
const ExtraInfo: (props: IExtraInfoProps) => JSX.Element = (
    props: IExtraInfoProps
): JSX.Element => {
    const { record } = props;
    const { id, filesize, isbn, ipfs_cid } = record;

    const fileSize: number = filesize / 1024 / 1024;

    return (
        <Descriptions bordered size="small">
            <Item label="ID">{id}</Item>
            <Item label="文件大小">
                {fileSize < 0.01
                    ? `${(filesize / 1024).toFixed(2)} KB`
                    : `${fileSize.toFixed(2)} MB`}
            </Item>
            <Item label="ISBN">{isbn}</Item>
            <Item label="IPFS CID">{ipfs_cid}</Item>
            <Item label="下载链接">
                <Button
                    onClick={(): void =>
                        downloadBook(DomainName.Cloudflare, record)
                    }
                >
                    cloudflare-ipfs.com
                </Button>
                <Button
                    onClick={(): void => downloadBook(DomainName.Dweb, record)}
                >
                    dweb.link
                </Button>
                <Button
                    onClick={(): void => downloadBook(DomainName.Ipfs, record)}
                >
                    ipfs.io
                </Button>
                <Button
                    onClick={(): void =>
                        downloadBook(DomainName.Pinata, record)
                    }
                >
                    gateway.pinata.cloud
                </Button>
            </Item>
        </Descriptions>
    );
};

export default ExtraInfo;
