# Question Sets Manifest Draft

## 目的

このファイルは、教材全体の一覧を整理するためのドラフトである。

現時点では、アプリ本体からは読み込まない。  
運用確認用の一覧として作成し、その内容をもとに `app/question_sets_manifest.js` を作成済み。

## 前提

現在のアプリは、`app/questions.js` に1教材分の問題データを配置して動作する。

このドラフトでは、以下を区別する。

- 教材全体：理科 S001-S003、社会 地理 p10-p53 など
- ファイル内セット：教材ファイル内の小単元・章・範囲
- 問題：個別の一問一答

## 教材一覧

| 教材全体ID | 教材名 | 教科 | 学年 | 範囲 | 問題数 | 主ファイル | 状態 |
|---|---|---|---|---|---:|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | 理科 | 中1 | S001-S003 | 222 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` | 登録済み |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | 社会 | 中1 | 地理 p10-p53 | 347 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` | 登録済み |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | 社会 | 中1 | 歴史 p24-p27 | 97 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` | 登録済み |

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
- 問題数は各教材JSファイル冒頭の収録問題数をもとに記録する
- `sourceFile` は現時点ではリポジトリ内の相対パスで記録する
- GitHub Pages で直接読み込むパスにするかは、Phase 5 以降で判断する

## 未決事項

1. manifest の正式配置先を `app/` にするか
2. manifest を `.js` にするか `.json` にするか
3. 教材JSファイルを将来 `app/data/` 配下へ移すか
4. 教材ごとに進捗保存キーを分離する時期
5. 教材切り替えUIを作る時期

## Phase 4 判断メモ

### manifest の位置づけ

現時点では、`question_sets_manifest_draft.md` は運用資料であり、アプリ本体からは読み込まない。

`app/question_sets_manifest.js` は作成済み。

ただし、まだ `index.html` からは読み込ませていない。

### manifest 形式の暫定判断

当面は `.js` 形式を優先する。

理由：

- 既存アプリが `window.QUIZ_SETS` / `window.QUIZ_QUESTIONS` を使っている
- GitHub Pages 上で静的ファイルとして扱いやすい
- 追加の fetch 処理なしで `<script>` として読み込める
- JSON よりも既存構成との接続が簡単

### 教材JSファイルの配置方針

現時点では、既存の教材JSファイルは移動しない。

理由：

- すでに docs 配下で教材別に整理されている
- `app/questions.js` 上書き方式がまだ現役である
- 移動すると、既存手順書・台帳・参照パスを一斉に更新する必要がある
- Phase 4 の目的は、ファイル移動ではなく、教材一覧の整理である

### 将来の配置候補

将来、アプリ内で複数教材を直接選択する段階では、教材JSを `app/data/` 配下にコピーまたは移動する案を検討する。

候補：

- `app/data/science_textbook_s001_s003.js`
- `app/data/social_geography_p10_p53.js`
- `app/data/social_history_p24_p27.js`

ただし、この移動は Phase 5 以降の検討事項とする。

### sourceFile の扱い

現時点の manifest ドラフトでは、`sourceFile` はリポジトリ内の相対パスとして記録する。

将来 `app/question_sets_manifest.js` に移行する場合は、以下のどちらかを判断する。

1. 現在の docs 配下パスをそのまま参照する
2. アプリ用に `app/data/` 配下へ教材JSを集約して参照する

### 現時点の結論

Phase 4 では、以下までを完了範囲とし、完了済みとする。

1. 教材全体IDの一覧化
2. 教材名・教科・学年・範囲・問題数の整理
3. 主ファイルパスの整理
4. manifest 正式化前の判断事項の記録
5. `app/question_sets_manifest.js` の作成

アプリが manifest を読み込む実装は、Phase 5 以降とする。
