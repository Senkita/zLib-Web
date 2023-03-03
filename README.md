![zLib-Web](https://socialify.git.ci/Senkita/zLib-Web/image?description=1&descriptionEditable=%E8%87%AA%E5%86%99%E4%B8%80%E4%B8%AA%20Book-Searcher%20%E7%9A%84%20Web%20UI%E3%80%82&font=KoHo&forks=1&issues=1&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX%2BWbvuWxgl8x%20IiBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci%20IHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cGF0aCBkPSJNMTE2Ljc5LDI0Ljc1SDM5NS40Nm0t%20NTQuMTgsMEwxMTYuMjksNDc0Ljc1aDE1My4xbTIyLjUxLTk5Ljk5djExMi41bTAtMTY4LjR2Mjgu%20MTJtMzQuNDEtODQuNzN2MjI1bTEyLjQxLTEyLjUxYzMxLjA3LDAsNTYuMjUtMjUuMTgsNTYuMjUt%20NTYuMjVzLTI1LjE4LTU2LjI1LTU2LjI1LTU2LjI1IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tl%20OiAjMDAwOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMjVweDsiLz4KPC9z%20dmc%2B&name=1&pattern=Brick%20Wall&pulls=1&stargazers=1&theme=Auto)

## Introduction

自写一个 [book-searcher](https://github.com/book-searcher-org/book-searcher) 的 Web UI。

> 预览: [zLib Searcher](https://zLib.Senkita.cc)

## Features

1. 使用 [AntD v5](https://github.com/ant-design/ant-design) 重写了个类搜索引擎的前端

2. 支持跳转 IPFS 网关节点检测

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

<a href="https://github.com/Senkita/zLib-Web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Senkita/zLib-Web" />
</a>

## License

[MIT](LICENSE) &copy; [Senkita](https://github.com/Senkita)

## References

-   [book-searcher](https://github.com/book-searcher-org/book-searcher)
-   [public-gateway-checker](https://github.com/1kbtool-com/public-gateway-checker)
