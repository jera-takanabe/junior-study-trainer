# Question Sets Manifest 確認資料

## 目的

このファイルは、`app/question_sets_manifest.js` の内容を人が確認しやすい表形式で記録する運用資料である。

正式なManifestは `app/question_sets_manifest.js` であり、アプリの教材選択と教材データの動的読み込みに使用する。

## 教材データの構成

次の三つを区別する。

- 教材全体: Manifestの `questionSetId` で識別する単位
- ファイル内セット: `window.QUIZ_SETS` に定義する小単元
- 問題: `window.QUIZ_QUESTIONS` に定義する個別問題

教材データは `app/data/*.js` に配置する。

## 教材一覧

| 教材全体ID | 教材名 | 教科 | 学年 | 範囲 | 問題数 | sourceFile | 状態 |
|---|---|---|---|---|---:|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | 理科 | 中1 | S001-S003 | 222 | `app/data/science_textbook_s001_s003.js` | 登録済み |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | 社会 | 中1 | 地理 p10-p53 | 347 | `app/data/social_geography_p10_p53.js` | 登録済み |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | 社会 | 中1 | 歴史 p24-p27 | 97 | `app/data/social_history_p24_p27.js` | 登録済み |
| `school_japanese_jhs1_test1` | 国語 第1回定期テスト | 国語 | 中1 | 第1回定期テスト | 112 | `app/data/japanese_test1.js` | 登録済み |
| `school_english_jhs1_test1` | 英語 第1回定期テスト | 英語 | 中1 | 第1回定期テスト | 273 | `app/data/english_test1.js` | 登録済み |

## Manifestの項目

各教材には次の項目を定義する。

- `questionSetId`
- `questionSetName`
- `subject`
- `grade`
- `range`
- `questionCount`
- `sourceFile`
- `status`

## 登録時の確認事項

- `questionSetId` が他教材と重複していない
- `sourceFile` が `app/data/*.js` を指している
- `questionCount` が実際の問題数と一致している
- 問題ID prefixが他教材と重複していない
- `app/index.html` が教材を正しい `questionSetId` として判定できる
- 教材選択画面から読み込みと出題ができる
- 進捗・履歴が別教材と混ざらない
- バックアップに教材単位のデータが含まれる

## 更新ルール

新教材の登録や問題数・表示名・ファイルパスの変更時は、次を同時に更新する。

1. `app/question_sets_manifest.js`
2. この確認資料
3. `docs/operations/question_sets_inventory.md`
4. 必要に応じて `app/index.html`
