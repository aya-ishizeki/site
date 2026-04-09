# Aya Ishizeki site (GitHub Actions version)

このセットは、PC に Node.js を入れずに GitHub 側で build / deploy するためのものです。

## 使い方
1. 既存のファイルをこの内容で上書きアップロード
2. GitHub の Settings → Pages → Build and deployment で Source を `GitHub Actions` にする
3. main に push されると自動で公開される

## メモ
- repository name が `site` なので `vite.config.ts` の base は `/site/`
- 公開URLは通常 `https://aya-ishizeki.github.io/site/`
