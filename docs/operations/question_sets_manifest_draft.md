# Question Sets Manifest Draft

## 目的

このファイルは、教材全体の一覧を整理するためのドラフトである。

現時点では、アプリ本体からは読み込まない。  
将来 `app/question_sets_manifest.js` を作成する前の、運用確認用の一覧として使う。

## 前提

現在のアプリは、`app/questions.js` に1教材分の問題データを配置して動作する。

このドラフトでは、以下を区別する。

- 教材全体：理科 S001-S003、社会 地理 p10-p53 など
- ファイル内セット：教材ファイル内の小単元・章・範囲
- 問題：個別の一問一答

## 教材一覧

| 教材全体ID | 教材名 | 教科 | 学年 | 範囲 | 問題数 | 主ファイル | 状態 |
|---|---|---|---|---|---:|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | 理科 | 中1 | S001-S003 | 未確認 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` | 登録済み |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | 社会 | 中1 | 地理 p10-p53 | 347 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` | 登録済み |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | 社会 | 中1 | 歴史 p24-p27 | 未確認 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` | 登録済み |

## 将来の manifest JS 形式案

将来 `app/question_sets_manifest.js` に移行する場合は、以下のような形式を想定する。

- `questionSetId`
- `questionSetName`
- `subject`
- `grade`
- `range`
- `questionCount`
- `sourceFile`
- `status`

## 注意点

- このファイルはドラフトであり、アプリ本体からは読み込まない
- `app/questions.js` 上書き方式はまだ継続する
- 問題数が未確認の教材は、後で実ファイルから確認する
- `sourceFile` は現時点ではリポジトリ内の相対パスで記録する
- GitHub Pages で直接読み込むパスにするかは、Phase 5 以降で判断する

## 未決事項

1. manifest の正式配置先を `app/` にするか
2. manifest を `.js` にするか `.json` にするか
3. 教材JSファイルを将来 `app/data/` 配下へ移すか
4. 教材ごとに進捗保存キーを分離する時期
5. 教材切り替えUIを作る時期
