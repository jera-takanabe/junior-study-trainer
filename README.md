# Junior Study Trainer

Junior Study Trainerは、中学生向けのタイマー付き一問一答・反復学習アプリです。

学校教科や検定教材を同じアプリで扱い、移動中、スピンバイク中、家庭学習などの短時間学習に利用します。

## 現在の実装

- GitHub Pagesによる静的公開
- タイマー付き一問一答
- 教材選択と動的読込み
- ページ再読込みなしの教材切替
- 教材別の履歴・問題別進捗・リセット
- 選択中教材単位のJSONバックアップ・復元
- 履歴・進捗のCSV出力
- `localStorage`による端末内保存

公開版:

https://jera-takanabe.github.io/junior-study-trainer/

## 登録教材

| 教材 | 問題数 |
|---|---:|
| 理科 中1 教科書 S001-S003 | 222 |
| 社会 地理 p10-p53 | 347 |
| 社会 歴史 p24-p27 | 97 |
| 国語 第1回定期テスト | 112 |
| 英語 第1回定期テスト | 273 |
| 数学 第1回定期テスト | 292 |
| 合計 | 1,343 |

正式な教材一覧は `app/question_sets_manifest.js` で管理します。

## 起動方法

### 公開版

上記のGitHub Pagesをブラウザで開きます。

### ローカル版

プロジェクト直下から次を実行します。

```bash
start app/index.html
```

## データ構成

```text
app/
├─ index.html
├─ question_sets_manifest.js
├─ data/
│  ├─ science_textbook_s001_s003.js
│  ├─ social_geography_p10_p53.js
│  ├─ social_history_p24_p27.js
│  ├─ japanese_test1.js
│  ├─ english_test1.js
│  └─ math_test1.js
└─ questions.js
```

- `question_sets_manifest.js`：教材一覧と読込み元
- `data/*.js`：アプリが動的に読み込む教材データ
- `questions.js`：旧方式との互換・参照用

新教材の通常登録では `app/questions.js` を変更しません。

## 保存とバックアップ

履歴と進捗は、教材の `questionSetId` ごとに別の保存キーへ保存します。

- 履歴：教材単位
- 問題別進捗：教材単位
- 履歴削除・進捗リセット：選択中教材単位
- JSONバックアップ：選択中教材1件
- 全教材一括バックアップ：未実装

保存先は利用端末・ブラウザの `localStorage` です。複数端末間の自動同期は行いません。

## ドキュメント

- 現行設計の入口：`docs/design/README.md`
- 学習内容モデル：`docs/design/learning_content_model_v0_8.md`
- 新教材登録手順：`docs/operations/question_set_registration_procedure.md`
- 教材台帳：`docs/operations/question_sets_inventory.md`
- 残課題と再開地点：`TODO.md`

v0.6以前の設計書や旧運用手順は、設計判断の履歴資料として残しています。現行仕様と異なる場合は、上記の現行資料を優先します。

## 教材原本の扱い

教科書、ワーク、配布プリント、過去問などの原本は公開リポジトリへ登録しません。

ローカル専用資料は `.local/` などのGit管理対象外領域で扱います。リポジトリには、家庭学習用に作成した問題データ、確認資料、作成方針だけを登録します。

## 今後の作業

今後の設計課題と着手順は `TODO.md` を参照してください。
