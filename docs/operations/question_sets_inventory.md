# 問題セット台帳

## 目的

このファイルは、現在存在する問題セット、アプリ投入用ファイル、補助資料、進捗ファイルの対応関係を整理するための台帳である。

## 現在の運用

1. 使用する問題セットファイルを探す
2. その内容を `app/questions.js` に上書きコピーする
3. アプリを起動する
4. その問題セットの進捗があればインポートする
5. 学習する
6. 学習終了後に進捗をエクスポートする

## 今回の整理対象

| ID候補 | 表示名 | 主ファイル | 種別 | 教科 | 範囲 | アプリ投入可 | 対応進捗 | 備考 |
|---|---|---|---|---|---|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` | 学校教科 | 理科 | S001-S003 | yes | 未整理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` | 学校教科 | 社会 | p10-p53 | yes | 未整理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` | 学校教科 | 社会 | p24-p27 | yes | 未整理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式 |
| `school_japanese_jhs1_test1` | 国語 第1回定期テスト | `app/data/japanese_test1.js` | 学校教科 | 国語 | 第1回定期テスト | yes | 未整理 | `timed_quiz_trainer_v0_6_set_switching` 互換。`window.QUIZ_SETS` 形式。作成過程資料は `docs/materials/school/japanese/jhs1/test1/` |

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

## 今回はいったん対象外

| 表示名 | 理由 | 備考 |
|---|---|---|
| 漢検5級 | 検定試験終了のため | 必要になったら再整理する |
| `.local/` 配下 | 作業用・退避用のため | 正式台帳の対象外 |
| クラウド同期 | まだ設計前のため | AWS等は後で検討 |
| アプリ本体改修 | まず棚卸しを優先するため | 現行運用を壊さない |

## 次に確認すること

1. 進捗ファイルとの対応方針を決める
2. 現在の `app/questions.js` がどの問題セット由来か確認する
3. 現行運用を壊さない改善案を検討する

## 現在の app/questions.js

2026-06-13 時点の `app/questions.js` は、以下の問題セット由来である。

| 項目 | 内容 |
|---|---|
| 問題セットID | `school_social_geography_jhs1_textbook_p10_p53` |
| 表示名 | 社会 地理 p10-p53 |
| コピー元ファイル | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` |
| 形式 | `timed_quiz_trainer_v0_6_set_switching` 互換、`window.QUIZ_SETS` 形式 |

## 進捗保存の現状メモ

現行アプリでは、進捗はブラウザの `localStorage` に保存される。

| 項目 | 内容 |
|---|---|
| 保存キー | `timedQuizTrainerProgressV04` |
| 保存単位 | 問題ID（`questionId`）単位 |
| 保存場所 | ブラウザ内の `localStorage` |
| 複数デバイス同期 | なし |
| 現行運用 | 学習前に進捗をインポートし、学習後にバックアップJSONをエクスポートする |

## 問題ID衝突リスク

| 問題セットID | 問題ID例 | 現時点の判断 |
|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | `science_textbook_s001_q001` | 接頭辞付きのため、衝突リスクは低い |
| `school_social_geography_jhs1_textbook_p10_p53` | `social_geography_s001_q001` | 接頭辞付きのため、衝突リスクは低い |
| `school_social_history_jhs1_textbook_p24_p27` | `h001_a_q001` | 現時点では衝突なし。ただし将来拡張時は、より明示的な接頭辞を検討する |

## 進捗バックアップJSONの命名ルール案

現行運用では、問題セットを切り替えるたびに、対応する進捗JSONを手動でインポート・エクスポートする。

進捗ファイルと問題セットの対応を分かりやすくするため、バックアップJSONは以下の命名を推奨する。

推奨形式：

progress_<問題セットID>_<YYYYMMDD>.json

例：

- progress_school_science_jhs1_textbook_s001_s003_20260613.json
- progress_school_social_geography_jhs1_textbook_p10_p53_20260613.json
- progress_school_social_history_jhs1_textbook_p24_p27_20260613.json

同じ日に複数回保存する場合は、末尾に連番または時刻を付ける。

例：

- progress_school_social_geography_jhs1_textbook_p10_p53_20260613_01.json
- progress_school_social_geography_jhs1_textbook_p10_p53_20260613_2130.json

この命名ルールにより、現行アプリを改修しなくても、問題セットと進捗ファイルの対応関係を人間が判断しやすくなる。
