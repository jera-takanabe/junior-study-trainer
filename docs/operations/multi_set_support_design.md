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

完了済み。

アプリ画面上に、現在読み込まれている教材全体IDと教材名を表示するようにした。

表示内容：

- 教材名
- 教材全体ID
- 問題数

目的：

- `app/questions.js` の上書きミスに気づきやすくする
- 進捗JSONの取り違えを減らす
- マルチセット化前の安全性を上げる

この段階では、まだ複数問題セットを同時に読み込まない。

### Phase 3: バックアップJSONへの問題セット情報追加

完了済み。

エクスポートするバックアップJSONに、教材全体IDや教材名を含めるようにした。

追加済み項目：

- `backupVersion`
- `questionSetId`
- `questionSetName`
- `questionSetSource`

また、バックアップJSON読込時に、現在の教材IDとバックアップ内の教材IDが不一致の場合は警告を出すようにした。

旧形式バックアップのように `questionSetId` がない場合は、従来どおり読込可能とする。

目的：

- 進捗JSONを見ただけで対象教材が分かるようにする
- インポート時に、現在の `app/questions.js` と進捗JSONの教材が一致するか確認できるようにする

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

現時点では、Phase 2 と Phase 3 まで完了している。

完了済み：

1. 現在の教材全体IDをアプリ画面に表示する
2. バックアップJSONに教材情報を含める
3. インポート時に教材不一致を警告する

これにより、現行運用を大きく変えずに、進捗ファイルの取り違えリスクを減らせるようになった。

次の検討候補は、問題セット一覧ファイルの導入、またはアプリ内問題セット選択である。

## 未決事項

- 問題セットIDをどこから取得するか
- 既存の `window.QUIZ_SETS` に問題セット全体のIDを追加するか
- `app/questions.js` の先頭コメントから人間が判断する運用を続けるか
- バックアップJSONの既存形式との互換性をどう保つか
- 歴史の問題ID `h001_a_q001` 形式を将来見直すか

## 既存進捗データの移行方針

### 現時点の判断

既存の理科進捗は、バックアップJSONではなく進捗CSVとして保存されていた。

進捗CSVから問題別進捗を復元すること自体は可能だが、CSVからバックアップJSONへ変換する処理や、CSVインポート機能の追加が必要になる。

現時点では、工数を増やさないため、理科進捗CSVからの復元は行わない。

### 方針

- 既存の理科進捗CSVは参考資料として残す
- CSVからの復元機能は今回の対象外とする
- バックアップJSON読込時の教材不一致警告を優先する
- 今後の進捗保存は、教材情報付きバックアップJSONを正式な保存形式とする

### 今後の運用

今後は、学習後にバックアップJSONを出力する。

バックアップJSONには以下を含める。

| 項目 | 内容 |
|---|---|
| `backupVersion` | `2` |
| `questionSetId` | 教材全体ID |
| `questionSetName` | 教材名 |
| `questionSetSource` | 教材判定方法 |
| `sets` | ファイル内セット一覧 |
| `questionIds` | 対象問題ID一覧 |
| `history` | 学習履歴 |
| `progress` | 問題別進捗 |

### 対象外

- 理科進捗CSVからの自動復元
- 漢検・数学など過去教材の進捗移行
- 複数教材の履歴分離
- クラウド同期


## Phase 4 詳細設計: 問題セット一覧ファイルの導入

### 目的

複数の教材ファイルを、アプリ側で一覧管理できるようにする。

現時点では、問題セットを切り替えるたびに `app/questions.js` を手動で上書きしている。  
Phase 4 では、この手動運用をすぐに廃止するのではなく、まず教材全体の一覧情報を機械的に扱える形で整理する。

### 位置づけ

Phase 4 は、アプリ内問題セット選択に進む前の準備段階とする。

この段階では、まだ複数の教材JSを同時に読み込まない。  
まず、どの教材が存在し、それぞれどのファイルから読み込むべきかを一覧化する。

### 候補ファイル

候補は以下のどちらかとする。

- `app/question_sets_manifest.js`
- `app/question_sets_manifest.json`

GitHub Pages 上で静的に扱いやすく、既存アプリとの相性がよいため、当面は `.js` 形式を優先候補とする。

### 想定する形式

`app/question_sets_manifest.js` に、以下のような配列を定義する。

- `questionSetId`
- `questionSetName`
- `subject`
- `grade`
- `range`
- `sourceFile`
- `questionCount`
- `status`

### 初期登録対象

初期登録対象は、現在台帳化済みの3教材とする。

| 教材全体ID | 教材名 | sourceFile |
|---|---|---|
| `school_science_jhs1_textbook_s001_s003` | 理科 中1 教科書 S001-S003 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` |
| `school_social_geography_jhs1_textbook_p10_p53` | 社会 地理 p10-p53 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` |
| `school_social_history_jhs1_textbook_p24_p27` | 社会 歴史 p24-p27 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` |

### 注意点

- Phase 4 では、`app/questions.js` 上書き方式はまだ残す
- manifest は最初は参照用・設計用として作成する
- アプリ内で manifest を読み込む実装は、Phase 5 以降で検討する
- 既存の `window.QUIZ_SETS` と混同しない
- `window.QUIZ_SETS` は教材ファイル内の小単元セット
- `question_sets_manifest` は教材全体の一覧

### 判断ポイント

Phase 4 で実装するかどうかを判断する前に、以下を決める。

1. manifest を `app/` に置くか、`docs/operations/` に置くか
2. 最初からアプリが読む形式にするか、まずは運用資料として作るか
3. sourceFile を GitHub Pages から直接読めるパスにするか、リポジトリ内の相対パスにするか
4. 将来、教材JSを `app/data/` 配下へ移すか

### 現時点の推奨

まずは `docs/operations/question_sets_manifest_draft.md` として、運用資料ベースのドラフトを作る。

その後、内容が固まったら `app/question_sets_manifest.js` へ移行する。

