# Redirect Checker

Playwrightを使用してURLのリダイレクトをチェックします。
ファイルからURLを読み込み、各URLにアクセスしてリダイレクトが発生したかどうかを確認します。


## 使用方法

1. インストール

```sh
npm i
```

2. スクリプトと同じディレクトリに`urls.txt`という名前のファイルを作成し、確認したいURLを1行ずつ記載します。

```sh
touch urls.txt
```

記載例

```
https://www.yahoo.co.jp/
https://www.yahoo.co.jp/abcedefg
```

3. 実行

```sh
npm start
```

記載例で実行すると以下のログを返します

```
[not redirected]リダイレクトなし
[redirected]リダイレクトしました
https://www.yahoo.co.jp/abcedefg -> https://www.yahoo.co.jp/
```

