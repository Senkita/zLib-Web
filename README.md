# zLib-Web

## Introduction

自写一个[book-searcher](https://github.com/book-searcher-org/book-searcher)的 Web UI。

> 预览: [zLib Searcher](https://zLib.Senkita.cc)

## Features

1. 重新设计 Logo
 <center>
    <img src="assets/images/zLib.svg" width="128" height="128"/>
 </center>

2. 使用[AntD v5](https://github.com/ant-design/ant-design)重写了个类搜索引擎的前端

## Installation

1. 打包

    ```bash
    npm i && npm run build
    ```

2. 替换
   i. 将打包好的`dist/`替换掉[原仓库](https://github.com/book-searcher-org/book-searcher)`frontend/`下的内容
   ii. 替换[Dockerfile](Dockerfile)

3. 部署

    ```bash
    docker build . -t zlib-searcher --no-cache

    docker run -d -p 7070:7070 -v "/data/index:/index:Z" --restart=always --name "zLib-Searcher" zlib-searcher
    ```

4. 解压索引文件压缩包到`/data/index/`

## Maintainers

[Senkita](https://github.com/Senkita)

## License

[MIT](LICENSE) &copy; [Senkita](https://github.com/Senkita)

## References

-   [book-searcher](https://github.com/book-searcher-org/book-searcher)
-   [public-gateway-checker](https://github.com/1kbtool-com/public-gateway-checker)
