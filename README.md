## プラグイン置き場

https://elysion-pre.github.io/MisskeyPlugins/

## ローカルでの動作確認方法

### Dockerを使う場合

1. このリポジトリをクローンする
2. 以下のコマンドを実行してコンテナを起動する
    ```sh
    docker run --rm --volume="$PWD:/srv/jekyll" -it -p 4000:4000 jekyll/jekyll bash
    ```
3. コンテナ内で以下のコマンドを実行して依存パッケージをインストールする
    ```sh
    bundle install
    ```
4. コンテナ内で以下のコマンドを実行してサーバーを起動する
    ```sh
    bundle exec jekyll serve --host 0.0.0.0
    ```
5. ブラウザで http://localhost:4000/ にアクセスする

### Dockerを使わない場合

1. Rubyをインストールする
2. このリポジトリをクローンする
3. 以下のコマンドを実行して依存パッケージをインストールする
    ```sh
    bundle install
    ```
4. 以下のコマンドを実行してサーバーを起動する
    ```sh
    bundle exec jekyll serve
    ```
5. ブラウザで http://localhost:4000/ にアクセスする
