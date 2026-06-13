# マルチセット対応 設計メモ

## 目的

このメモは、現行アプリを将来的にマルチセット対応するための設計方針を整理する。

現時点では、アプリ本体は変更しない。  
まず、現行運用を壊さずに、どのような順序でマルチセット対応へ移行するかを検討する。

## 現在の構成

現行アプリでは、学習対象の問題セットを `app/questions.js` として読み込む。

問題セットを切り替える場合は、手動で目的の問題セットJSを `app/questions.js` に上書きコピーする。

現在の主な運用は以下である。

1. 現在の進捗をエクスポートする
2. 使用したい問題セットJSを `app/questions.js` にコピーする
3. `app/questions.js` の由来を確認する
4. アプリを起動する
5. 対応する進捗JSONをインポートする
6. 学習する
7. 学習後に進捗をエクスポートする

## 現在の問題セット

| 問題セットID | 表示名 | 主ファイル |
|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` |

## 現行データ形式

各問題セットJSは、現時点では以下の形式である。

- `timed_quiz_trainer_v0_6_set_switching` 互換
- `window.QUIZ_SETS` 形式
- 各問題は `id` を持つ
- 進捗は `questionId` 単位で保存される

## 進捗保存の現状

現行アプリでは、進捗はブラウザの `localStorage` に保存される。

| 項目 | 内容 |
|---|---|
| 保存キー | `timedQuizTrainerProgressV04` |
| 保存単位 | 問題ID（`questionId`）単位 |
| 複数デバイス同期 | なし |
| バックアップ | 手動でJSONエクスポート・インポート |

## 重要な制約

- 現行運用を壊さない
- 既存の問題セットJSをなるべく再生成しない
- 既存の進捗JSONをなるべく無駄にしない
- いきなりクラウド同期に進まない
- まずはローカル運用で安全にマルチセット化する

## マルチセット対応の方向性

最終的には、アプリ内で問題セットを選択できるようにする。

目標イメージ：

1. アプリ起動時に問題セット一覧を表示する
2. 学習したい問題セットを選択する
3. 選択した問題セットの問題だけを読み込む
4. 進捗は問題セットごとに分かれて見える
5. 学習後、問題セットID付きで進捗をエクスポートできる

## 段階的な移行案

### Phase 1: 現行運用の明文化

完了済み。

- 問題セット台帳を作成
- 問題セット切り替え手順を作成
- 進捗バックアップJSONの命名ルールを整理

### Phase 2: 問題セットIDの画面表示

アプリ画面上に、現在読み込まれている問題セット名または問題セットIDを表示する。

目的：

- `app/questions.js` の上書きミスに気づきやすくする
- 進捗JSONの取り違えを減らす
- マルチセット化前の安全性を上げる

この段階では、まだ複数問題セットを同時に読み込まない。

### Phase 3: バックアップJSONへの問題セット情報追加

エクスポートするバックアップJSONに、問題セットIDや問題セット名を含める。

目的：

- 進捗JSONを見ただけで対象問題セットが分かるようにする
- インポート時に、現在の `app/questions.js` と進捗JSONの問題セットが一致するか確認できるようにする

### Phase 4: 問題セット一覧ファイルの導入

複数の問題セットを一覧管理するためのメタデータファイルを導入する。

候補：

- `app/question_sets_manifest.js`
- `app/question_sets_manifest.json`

このファイルには、問題セットID、表示名、教科、範囲、読み込み元ファイルなどを記録する。

### Phase 5: アプリ内問題セット選択

アプリ画面で問題セットを選べるようにする。

この段階で初めて、`app/questions.js` 上書き方式からの脱却を検討する。

### Phase 6: 進捗保存キーの分離

必要に応じて、進捗保存を問題セットID単位に分ける。

候補：

- 現行キーを維持し、内部に問題セットIDを持たせる
- 問題セットごとに `localStorage` キーを分ける

例：

- `timedQuizTrainerProgressV04.school_social_geography_jhs1_textbook_p10_p53`
- `timedQuizTrainerProgressV04.school_science_jhs1_textbook_s001_s003`

### Phase 7: 複数デバイス同期の検討

ローカル運用が安定してから、必要に応じてクラウド同期を検討する。

候補：

- 手動エクスポート・インポートの継続
- Firebase
- AWS Amplify / Cognito / DynamoDB
- Supabase

## 現時点の推奨

現時点では、いきなりマルチセット選択UIを作るよりも、まず以下を優先する。

1. 現在の問題セットIDをアプリ画面に表示する
2. バックアップJSONに問題セット情報を含める
3. インポート時に問題セット不一致を警告する

これにより、現行運用を大きく変えずに、進捗ファイルの取り違えリスクを減らせる。

## 未決事項

- 問題セットIDをどこから取得するか
- 既存の `window.QUIZ_SETS` に問題セット全体のIDを追加するか
- `app/questions.js` の先頭コメントから人間が判断する運用を続けるか
- バックアップJSONの既存形式との互換性をどう保つか
- 歴史の問題ID `h001_a_q001` 形式を将来見直すか


## 既存バックアップ移行方針

### 移行対象

現時点で移行対象にする既存バックアップは、理科 S001-S003 の進捗バックアップのみとする。

| 項目 | 内容 |
|---|---|
| 対象問題セットID | `school_science_jhs1_textbook_s001_s003` |
| 表示名 | 理科 中1 教科書 S001-S003 |
| 対象問題IDの特徴 | `science_textbook_` で始まる |
| 対象範囲 | S001-S003 |
| 移行対象外 | 社会 地理、社会 歴史、漢検 |

### 移行の考え方

既存の理科バックアップJSONは破棄しない。

旧形式のバックアップに問題セットIDが含まれていない場合でも、進捗データ内の問題IDが `science_textbook_` で始まる場合は、理科 S001-S003 の進捗として扱う。

将来バックアップ形式を拡張する場合は、旧形式の理科バックアップを読み込んだうえで、以下のメタ情報を付与した新形式として再エクスポートできるようにする。

| 項目 | 値 |
|---|---|
| `backupVersion` | `2` |
| `questionSetId` | `school_science_jhs1_textbook_s001_s003` |
| `questionSetName` | `理科 中1 教科書 S001-S003` |
| `appProgressKey` | `timedQuizTrainerProgressV04` |

### 移行時の判定ルール

進捗JSON内に含まれる問題IDを確認し、以下の条件を満たす場合は理科バックアップとして扱う。

- 1つ以上の問題IDが `science_textbook_` で始まる
- 既知の理科問題セット `school_science_jhs1_textbook_s001_s003` に対応する
- 他教科の問題IDが混在していない、または混在していても理科のみを抽出できる

### 注意点

- 既存バックアップを直接書き換えない
- 旧形式のまま読み込み、新形式として別名で保存する
- 新形式の保存名は `progress_school_science_jhs1_textbook_s001_s003_<YYYYMMDD>.json` とする
- 社会 地理・社会 歴史のバックアップ移行は今回の対象外とする
