# 問題セット台帳

## 目的

このファイルは、現在存在する問題セット、アプリ投入用ファイル、補助資料、進捗ファイルの対応関係を整理するための台帳である。

## 現在の運用

1. 教材データを `app/data/*.js` に配置する
2. `app/question_sets_manifest.js` に教材を登録する
3. 必要に応じて `app/index.html` に問題ID prefixによる教材判定を追加する
4. アプリの教材選択画面から使用する教材を選ぶ
5. 教材ごとに分離された進捗・履歴を使って学習する
6. 必要に応じて選択中教材分のバックアップJSONをエクスポートする

通常、新教材の登録で `app/questions.js` は変更しない。

## 今回の整理対象

| ID候補 | 表示名 | 主ファイル | 種別 | 教科 | 範囲 | アプリ投入可 | 対応進捗 | 備考 |
|---|---|---|---|---|---|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | `app/data/science_textbook_s001_s003.js` | 学校教科 | 理科 | S001-S003 | yes | 教材別管理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | `app/data/social_geography_p10_p53.js` | 学校教科 | 社会 | p10-p53 | yes | 教材別管理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | `app/data/social_history_p24_p27.js` | 学校教科 | 社会 | p24-p27 | yes | 教材別管理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_japanese_jhs1_test1` | 国語 第1回定期テスト | `app/data/japanese_test1.js` | 学校教科 | 国語 | 第1回定期テスト | yes | 教材別管理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式。作成過程資料は `docs/materials/school/japanese/jhs1/test1/` |
| `school_english_jhs1_test1` | 英語 第1回定期テスト | `app/data/english_test1.js` | 学校教科 | 英語 | 第1回定期テスト | yes | 教材別管理 | 273問。作成過程資料は `docs/materials/school/english/jhs1/test1/` |
| `school_math_jhs1_test1` | 数学 第1回定期テスト | `app/data/math_test1.js` | 学校教科 | 数学 | 教科書 p.12-p.65 / 自主学習 p.4-p.39 | yes | 教材別管理 | 292問。作成過程資料は `docs/materials/school/math/jhs1/test1/` |

## 補助資料・確認資料

| 関連ID候補 | ファイル | 扱い | 備考 |
|---|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_questions.js` | 元データ候補 | アプリ投入用の `science_textbook_s001_s003_app_questions.js` とは別ファイル |
| `school_science_jhs1_textbook_s001_s003` | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_questions.json` | JSON形式データ | 将来のデータ変換元候補 |
| `school_science_jhs1_textbook_s001_s003` | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_review.md` | レビュー記録 | 問題作成・確認時のレビュー内容 |
| `school_social_geography_jhs1_textbook_p10_p53` | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_complete_qa.md` | 確認資料 | 完成Q&A確認用 |
| `school_social_geography_jhs1_textbook_p10_p53` | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_adopted_review.md` | レビュー反映記録 | 採用した修正内容の記録 |
| `school_social_geography_jhs1_textbook_p10_p53` | `docs/materials/school/social/geography/p10_p53/README.md` | README | 当該問題セットの説明 |
| `school_social_history_jhs1_textbook_p24_p27` | `docs/materials/school/social/history/p24_p27/history_p24_p27_complete_qa.md` | 確認資料 | 完成Q&A確認用 |
| `school_social_history_jhs1_textbook_p24_p27` | `docs/materials/school/social/history/p24_p27/README.md` | README | 当該問題セットの説明 |
| `school_japanese_jhs1_test1` | `docs/materials/school/japanese/jhs1/test1/kokugo_test1_ichimon_itto_review.md` | 確認資料 | 一問一答の正式確認用Markdown |
| `school_english_jhs1_test1` | `docs/materials/school/english/jhs1/test1/README.md` | README | 教材作成メモと著作権上の扱い |
| `school_english_jhs1_test1` | `docs/materials/school/english/jhs1/test1/source_scope.md` | 対象範囲 | 出題範囲と原本の扱い |
| `school_english_jhs1_test1` | `docs/materials/school/english/jhs1/test1/question_design.md` | 設計資料 | セット構成と出題形式 |
| `school_english_jhs1_test1` | `docs/materials/school/english/jhs1/test1/generation_review.md` | レビュー記録 | 問題数と機械チェック結果 |
| `school_math_jhs1_test1` | `docs/materials/school/math/jhs1/test1/README.md` | README | 教材目的と原本の扱い |
| `school_math_jhs1_test1` | `docs/materials/school/math/jhs1/test1/source_scope.md` | 対象範囲 | 出題範囲と参照資料 |
| `school_math_jhs1_test1` | `docs/materials/school/math/jhs1/test1/question_design.md` | 設計資料 | セット構成と出題方針 |
| `school_math_jhs1_test1` | `docs/materials/school/math/jhs1/test1/generation_review.md` | レビュー記録 | 問題数と機械チェック結果 |
| `school_math_jhs1_test1` | `docs/materials/school/math/jhs1/test1/math_test1_questions_review.md` | 確認資料 | 全問題・解答・解説の確認用 |

## 今回はいったん対象外

| 表示名 | 理由 | 備考 |
|---|---|---|
| 漢検5級 | 検定試験終了のため | 必要になったら再整理する |
| `.local/` 配下 | 作業用・退避用のため | 正式台帳の対象外 |
| クラウド同期 | まだ設計前のため | AWS等は後で検討 |

## 継続して確認すること

新教材を登録するときは、次の対応関係を確認する。

- `app/data/*.js` の問題数とManifestの `questionCount`
- `sourceFile` と実際のファイルパス
- 問題ID prefixと `questionSetId`
- `app/index.html` の教材単位判定
- `docs/materials/` 配下の作成過程資料
- 教材選択、進捗、履歴、バックアップの動作

## app/questions.js の位置づけ

`app/questions.js` は旧方式との互換・参照用として残している。

現在の新教材登録では、通常は変更しない。
教材データは `app/data/*.js` に配置し、Manifestから動的に読み込む。

## 進捗・履歴・バックアップ

| 項目 | 現在の扱い |
|---|---|
| 進捗 | 教材の `questionSetId` ごとに分離して管理する |
| 履歴 | 教材の `questionSetId` ごとに表示・管理する |
| 進捗リセット | 選択中の教材を対象とする |
| バックアップ | 選択中教材1件の進捗・履歴を扱う。全教材一括は未実装 |
| 保存場所 | ブラウザの `localStorage` |
| 複数デバイス同期 | なし。必要に応じてバックアップJSONを移動する |

## 問題ID prefix

| 問題セットID | 問題ID prefix |
|---|---|
| `school_science_jhs1_textbook_s001_s003` | `science_textbook_` |
| `school_social_geography_jhs1_textbook_p10_p53` | `social_geography_` |
| `school_social_history_jhs1_textbook_p24_p27` | `h001_` |
| `school_japanese_jhs1_test1` | `japanese_test1_` |
| `school_english_jhs1_test1` | `english_test1_` |
| `school_math_jhs1_test1` | `math_test1_` |

問題IDは教材間で重複させない。
新教材では、教材内容を判別できる固有のprefixを使用する。
