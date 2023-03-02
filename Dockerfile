FROM rust:latest

ENV RUSTUP_DIST_SERVER="https://rsproxy.cn"
ENV RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"

RUN echo "[source.crates-io]\nreplace-with = 'rsproxy'\n\n[source.rsproxy]\nregistry = 'https://rsproxy.cn/crates.io-index'\n[source.rsproxy-sparse]\nregistry = 'sparse+https://rsproxy.cn/index/'\n\n[registries.rsproxy]\nindex = 'https://rsproxy.cn/crates.io-index'\n\n[net]\ngit-fetch-with-cli = true" > /usr/local/cargo/config

COPY . /source
RUN cd /source && cargo build --release -p book-searcher && mv /source/target/release/book-searcher /

CMD ["/book-searcher", "run", "-b", "0.0.0.0:7070"]