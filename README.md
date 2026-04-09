# Aya Ishizeki site template

## まずやること
1. この zip を解凍する
2. `src/App.tsx` を開く
3. ChatGPT キャンバスの完成版サイトコードで **丸ごと置き換える**
4. 必要なら `vite.config.ts` の `base: "/site/"` を、GitHub の repository name に合わせて直す

## その後
```bash
npm install
npm run build
npm run deploy
```

## メモ
- GitHub の repository name を `site` にしたなら、`base: "/site/"` のままでOK
- まだ公開前に確認したいときは `npm run dev`
