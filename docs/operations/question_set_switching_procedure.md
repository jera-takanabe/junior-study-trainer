# 問題セット切り替え手順

## 目的

この手順書は、現行アプリの構成を変えずに、問題セットを安全に切り替えて学習するための手順を整理する。

現時点では、アプリ本体はマルチセットを自動切り替えしない。  
そのため、学習したい問題セットのJSファイルを `app/questions.js` に上書きコピーし、対応する進捗JSONを手動でインポート・エクスポートする。

## 前提

- アプリ本体は変更しない
- 問題セットは `app/questions.js` として読み込まれる
- 進捗はブラウザの `localStorage` に保存される
- 進捗のバックアップJSONは手動で管理する
- 問題セットと進捗JSONの対応はファイル名で判断する

## 対象の問題セット

| 問題セットID | 表示名 | コピー元ファイル |
|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` |

## 基本手順

### 1. 現在の進捗をエクスポートする

問題セットを切り替える前に、現在の学習進捗を必ずバックアップJSONとしてエクスポートする。

推奨ファイル名：

progress_<問題セットID>_<YYYYMMDD>.json

例：

- progress_school_social_geography_jhs1_textbook_p10_p53_20260613.json

同じ日に複数回保存する場合は、末尾に連番または時刻を付ける。

例：

- progress_school_social_geography_jhs1_textbook_p10_p53_20260613_01.json
- progress_school_social_geography_jhs1_textbook_p10_p53_20260613_2130.json

### 2. 使用したい問題セットを app/questions.js にコピーする

コピー元ファイルを確認し、`app/questions.js` に上書きする。

例：社会 地理 p10-p53 を使う場合

cp docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js app/questions.js

例：理科 S001-S003 を使う場合

cp docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js app/questions.js

例：社会 歴史 p24-p27 を使う場合

cp docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js app/questions.js

### 3. app/questions.js の由来を確認する

コピー後、先頭コメントを確認する。

head -n 20 app/questions.js

想定した問題セット名になっていることを確認する。

### 4. アプリを起動する

通常どおりアプリを起動する。

### 5. 対応する進捗JSONをインポートする

その問題セットに対応する進捗JSONがある場合は、アプリ画面からインポートする。

対応する進捗JSONがない場合は、新規進捗として学習を開始する。

### 6. 学習する

通常どおり学習する。

### 7. 学習後に進捗をエクスポートする

学習終了後、必ず進捗をバックアップJSONとしてエクスポートする。

ファイル名には、問題セットIDと日付を含める。

## 注意点

- 問題セットを切り替える前に、進捗をエクスポートする
- 進捗JSONのファイル名に問題セットIDを含める
- `app/questions.js` を上書きした後は、先頭コメントで問題セットを確認する
- 進捗の保存キーは全問題セットで共通のため、進捗JSONの取り違えに注意する
- 現時点では、複数デバイス同期は行わない

## 将来の改善候補

- アプリ内で問題セットを選択できるようにする
- 問題セットIDをアプリ画面に表示する
- バックアップJSONに問題セットIDを埋め込む
- 問題セットごとに進捗保存キーを分ける
- クラウド同期を検討する
