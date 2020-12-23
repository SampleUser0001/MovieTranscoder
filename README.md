# MovieTranscoder
MP4動画ファイルをAWSを使ってHLS配信できるファイルに変換する。

## Nodeコマンド

### ライブラリ導入
```
npm install <ライブラリ>
```
```
rm -rf node_modules package-lock.json && npm install
```

### 起動
```
node ./src/index.js
```

## S3パス

| 名前 | S3 | HTML |
| :--: | :-- | :-- |
| HOME | s3://ittimfn-public/HLS/ | https://ittimfn-public.s3-ap-northeast-1.amazonaws.com/HLS/index.html |
| upload | s3://ittimfn-public/HLS/upload/ | 省略 |
| transcoded | s3://ittimfn-public/HLS/transcoded/ | 省略 |

