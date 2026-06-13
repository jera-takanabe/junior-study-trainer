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

完了済み。

複数の教材全体を一覧管理するためのメタデータファイルとして、以下を作成した。

- `app/question_sets_manifest.js`

このファイルには、教材全体ID、表示名、教科、学年、範囲、問題数、読み込み元ファイルなどを記録する。

ただし、この段階ではまだ `index.html` から読み込ませていない。  
そのため、現行の `app/questions.js` 上書き方式には影響しない。

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

問題セット一覧ファイルの導入まで完了した。

次の検討候補は、アプリ内問題セット選択である。

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

### 現時点の結論

Phase 4 は完了済み。

完了済み：

1. `docs/operations/question_sets_manifest_draft.md` の作成
2. 教材一覧・問題数・主ファイルパスの整理
3. `app/question_sets_manifest.js` の作成
4. ただし、`app/question_sets_manifest.js` はまだ `index.html` から読み込ませていない

次は Phase 5 として、アプリ内問題セット選択に向けた最小実装方針を検討する。


## Phase 5 詳細設計: アプリ内問題セット選択

### 目的

アプリ画面上で教材全体を選択できるようにする。

現在は、学習したい教材に応じて `app/questions.js` を手動で上書きしている。  
Phase 5 では、この手動上書き運用から将来的に脱却するため、教材選択UIと読み込み方式を検討する。

### 前提

Phase 4 で以下を作成済み。

- `app/question_sets_manifest.js`

ただし、現時点ではまだ `index.html` から読み込ませていない。

また、各教材JSファイルは現在 docs 配下にあり、`app/questions.js` 上書き方式で利用している。

### 最小実装方針

Phase 5 は一気に完成形を目指さない。

最初の実装候補は、以下の順序とする。

1. `index.html` で `app/question_sets_manifest.js` を読み込む
2. 設定画面に教材一覧を表示する
3. ただし、最初は選択しても教材切り替えは行わない
4. 現在読み込まれている教材と manifest 上の教材を照合して表示する
5. その後、教材切り替え方法を検討する

### 最初にやらないこと

Phase 5 の初期段階では、以下はまだ行わない。

- 複数教材JSの動的読み込み
- `app/questions.js` 上書き方式の廃止
- 教材ごとの進捗保存キー分離
- 履歴の教材別分離
- 既存進捗データの移行
- クラウド同期

### UIの初期案

設定画面に、以下のような表示を追加する。

- 利用可能な教材一覧
- 現在読み込まれている教材
- manifest 登録済みかどうか
- 問題数

最初は「選択ボタン」ではなく、「一覧表示」だけにする。

### 安全性

この段階では、`window.QUIZ_QUESTIONS` の内容は変更しない。

そのため、現在の学習画面・出題・採点・バックアップ機能には影響を与えない想定とする。

### 次の判断ポイント

Phase 5 の最初の実装前に、以下を確認する。

1. `app/question_sets_manifest.js` を `index.html` から読み込ませても既存動作に影響がないか
2. manifest の `questionSetId` と、現在の `QUESTION_SET_PROFILE.questionSetId` を照合できるか
3. 設定画面に教材一覧を表示する位置
4. 教材切り替えを実装する前に、一覧表示だけで十分か

### 現時点の推奨

まずは、`app/question_sets_manifest.js` を `index.html` から読み込ませるだけにする。

そのうえで、画面にはまだ表示せず、ブラウザコンソールまたは簡単な確認表示で `window.QUESTION_SETS_MANIFEST` が存在することを確認する。

その後、設定画面への一覧表示に進む。

## Phase 5 実装メモ: manifest 読み込みと一覧表示

### 完了済み

Phase 5 の最小実装として、以下を完了した。

1. `app/question_sets_manifest.js` を `index.html` から読み込む
2. 設定画面に manifest 登録済み教材一覧を表示する
3. 現在読み込まれている教材に「現在の教材」と表示する

### 現時点でできること

設定画面で以下を確認できる。

- 登録教材数
- 教材名
- 教材全体ID
- 問題数
- 現在読み込まれている教材かどうか

### 現時点でまだやらないこと

この段階では、以下はまだ実装していない。

- 教材一覧からの教材切り替え
- 複数教材JSの動的読み込み
- `app/questions.js` 上書き方式の廃止
- 教材別の進捗保存キー分離
- 教材別の履歴分離

### 安全性確認

`app/question_sets_manifest.js` は読み込むが、`window.QUIZ_QUESTIONS` は変更していない。

そのため、出題対象・採点・履歴・バックアップJSONの基本動作は、従来どおり `app/questions.js` に読み込まれている教材を対象とする。

### 次の検討候補

次に進む場合は、すぐに教材切り替えを実装するのではなく、以下のどちらかを検討する。

1. 教材一覧の表示を折りたたみ式にする
2. 「教材切り替えは未対応」と明示する注意文を追加する

その後、教材JSの配置方針を決めてから、教材切り替え機能を検討する。

## Phase 5 実装メモ: 教材一覧の読み取り専用表示

### 完了済み

設定画面の登録教材一覧に、以下の注意文を追加した。

- 教材切り替えはまだ未対応
- 現在の学習対象は、上の「教材」に表示されているもの

### 目的

登録教材一覧が表示されることで、利用者が「ここから教材を選択できる」と誤解する可能性がある。

そのため、現時点では教材一覧が参照用であり、教材切り替え機能ではないことを画面上で明示した。

### 現時点の状態

現在できること：

- manifest 登録済み教材を確認する
- 現在読み込まれている教材を確認する
- 教材一覧が参照用であることを確認する

まだできないこと：

- 教材一覧から教材を選ぶ
- クリックして教材を切り替える
- 複数教材JSを動的に読み込む

### 次の検討候補

次に進む場合は、以下のどちらかを検討する。

1. 教材一覧を折りたたみ式にして画面をすっきりさせる
2. 教材切り替え機能の設計に進む

ただし、教材切り替え機能に進む前に、教材JSファイルを `docs/` 配下のまま参照するか、`app/data/` 配下へ集約するかを決める。

## Phase 5 設計メモ: 教材JSファイルの配置方針

### 背景

教材切り替え機能を実装するには、アプリが教材JSファイルを安定して読み込める必要がある。

現在、教材JSファイルは `docs/materials/` 配下に保存されている。  
これは教材作成・保管・レビュー用の場所としては適切だが、アプリから直接読み込むファイル置き場としては、やや分かりにくい。

### 現在の配置

現在の主ファイルは以下である。

- `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js`
- `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js`
- `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js`

### 課題

`docs/` 配下の教材JSを直接アプリから読み込む場合、以下の課題がある。

- アプリ用ファイルと資料用ファイルの境界が分かりにくい
- GitHub Pages 上の参照パスを慎重に扱う必要がある
- 将来、教材を追加したときにアプリ用ファイルの一覧性が下がる
- `app/question_sets_manifest.js` の `sourceFile` が長くなりやすい

### 配置方針の候補

候補は以下の2つとする。

#### 候補A: docs 配下の教材JSをそのまま参照する

メリット：

- ファイルの重複がない
- 既存ファイルを移動しなくてよい
- 教材作成時の成果物をそのまま使える

デメリット：

- アプリ用の読み込みファイルとしてはパスが長い
- 資料保管場所とアプリ実行用ファイルが混在する
- 将来の教材切り替え実装が分かりにくくなる可能性がある

#### 候補B: app/data 配下に教材JSをコピーする

メリット：

- アプリが読み込む教材ファイルを `app/` 配下に集約できる
- manifest の `sourceFile` が短くなる
- 教材切り替え実装時の見通しがよい
- GitHub Pages 上での静的配信対象として分かりやすい

デメリット：

- docs 配下と app/data 配下で教材JSが二重管理になる
- 教材を修正した場合、コピー先も更新する必要がある
- コピー元とコピー先の不一致確認が必要になる

### 現時点の推奨

現時点では、候補Bを優先する。

つまり、教材切り替え機能に進む前に、まず `app/data/` 配下へ教材JSをコピーする。

ただし、`docs/materials/` 配下の教材JSは原本として残す。  
`app/data/` 配下は、アプリ実行用のコピーとして扱う。

### 初期コピー候補

初期コピー候補は以下とする。

| 教材 | コピー元 | コピー先 |
|---|---|---|
| 理科 S001-S003 | `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js` | `app/data/science_textbook_s001_s003.js` |
| 社会 地理 p10-p53 | `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js` | `app/data/social_geography_p10_p53.js` |
| 社会 歴史 p24-p27 | `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js` | `app/data/social_history_p24_p27.js` |

### 注意点

この段階では、まだ教材切り替えは実装しない。

まずは以下を行う。

1. `app/data/` ディレクトリを作成する
2. 3教材JSをコピーする
3. `app/question_sets_manifest.js` の `sourceFile` を `app/data/` 配下へ更新する
4. ただし、`index.html` はまだ `app/data/` の教材JSを読み込まない

### 次の作業候補

次は、`app/data/` 配下への教材JSコピーを行う。

その後、コピー元とコピー先の問題数・先頭ID・末尾IDが一致することを確認する。

## Phase 5 実装メモ: app/data 配下への教材JSコピー

### 完了済み

教材切り替え機能の準備として、アプリ実行用の教材JSを `app/data/` 配下へコピーした。

追加済みファイル：

- `app/data/science_textbook_s001_s003.js`
- `app/data/social_geography_p10_p53.js`
- `app/data/social_history_p24_p27.js`

### コピー元

コピー元は以下である。

- `docs/materials/school/science/jhs1/textbook/science_textbook_s001_s003_app_questions.js`
- `docs/materials/school/social/geography/p10_p53/social_geography_p10_p53_questions.js`
- `docs/materials/school/social/history/p24_p27/history_p24_p27_questions.js`

### 確認済み

コピー直後に、コピー元とコピー先が一致していることを確認した。

確認結果：

- science: OK
- geography: OK
- history: OK

### manifest の更新

`app/question_sets_manifest.js` の `sourceFile` を、`app/data/` 配下のファイルへ更新した。

更新後：

- `app/data/science_textbook_s001_s003.js`
- `app/data/social_geography_p10_p53.js`
- `app/data/social_history_p24_p27.js`

### 現時点の状態

`app/data/` 配下に教材JSは存在するが、まだ `index.html` から教材JSとして動的読み込みはしていない。

現在の出題対象は、引き続き `app/questions.js` に読み込まれている教材である。

### 次の検討候補

次に進む場合は、以下を検討する。

1. manifest の `sourceFile` が画面上または内部確認で参照できるようにする
2. 教材切り替え機能の設計に進む
3. 教材JSを動的に読み込む方式を検討する

ただし、教材切り替えを実装する前に、進捗保存キー・履歴保存キーを教材別に分けるかどうかを検討する必要がある。

## Phase 5 設計メモ: 教材別の進捗・履歴保存方針

### 背景

今後、アプリ内で教材切り替えを実装する場合、進捗と履歴の保存単位をどうするかを決める必要がある。

現在は、教材に関係なく以下の localStorage キーを使っている。

- `timedQuizTrainerProgressV04`
- `timedQuizTrainerHistoryV04`

このまま教材切り替えを実装すると、別教材の進捗・履歴が同じ保存領域に混在する可能性がある。

### 現在の状態

現時点では、アプリの出題対象は `app/questions.js` に読み込まれている1教材のみである。

そのため、現行の手動上書き運用では、以下を前提としている。

- 教材を切り替える前に、必要ならバックアップJSONを書き出す
- 教材ごとの進捗JSONを手動で管理する
- アプリ内部では教材別の保存領域をまだ持たない

### 課題

教材切り替え機能を追加する場合、次の問題が起きる。

- 理科の進捗と地理の進捗が同じキーに混在する
- 履歴画面に複数教材の履歴が混ざる
- バックアップJSONの対象教材と、現在選択中の教材が分かりにくくなる
- 教材を切り替えたときに、過去の正誤情報が別教材に影響する可能性がある

### 方針候補

#### 候補A: 現行キーを維持する

保存キーは現在のままにする。

メリット：

- 実装が最も簡単
- 既存データ移行が不要
- 現在のバックアップJSONと互換性が高い

デメリット：

- 教材切り替え時に進捗・履歴が混在する
- 教材別の復習や集計が難しい
- 将来の不具合原因になりやすい

#### 候補B: 教材IDつき保存キーへ分離する

教材全体IDごとに保存キーを分ける。

例：

- `timedQuizTrainerProgressV04__school_social_geography_jhs1_textbook_p10_p53`
- `timedQuizTrainerHistoryV04__school_social_geography_jhs1_textbook_p10_p53`

メリット：

- 教材ごとに進捗・履歴を分離できる
- 教材切り替え時の混在を防げる
- 将来の教材別集計や復習に向いている

デメリット：

- 実装変更が大きい
- 既存バックアップJSONとの扱いを決める必要がある
- 既存localStorageデータの移行方針が必要になる

#### 候補C: 1つの保存キーの中で教材IDごとに分ける

保存キーは1つのままにし、JSON内部で教材IDごとに分ける。

例：

- `timedQuizTrainerProgressV05`
- `timedQuizTrainerHistoryV05`

内部構造で教材IDをキーにする。

メリット：

- 保存キーの数が増えすぎない
- 全教材のバックアップを1ファイルにまとめやすい
- 将来の全体集計に向いている

デメリット：

- データ構造の変更が大きい
- 既存バックアップJSONとの互換性対応が必要
- 実装ミス時の影響範囲が広い

### 現時点の推奨

教材切り替え機能に進む前に、候補Bを基本方針として検討する。

理由：

- 教材ごとの分離が明確
- 現在のバックアップJSONの考え方と近い
- 1教材ずつ安全に移行しやすい
- 問題が起きた場合に、対象教材の保存キーだけを確認できる

### ただし、すぐには実装しない

現時点では、まだ保存キー分離を実装しない。

まずは以下を行う。

1. 保存キー分離の方針を設計する
2. 既存バックアップJSONとの関係を整理する
3. 教材切り替え時の進捗読み込み・保存の流れを設計する
4. その後、必要最小限の実装に進む

### バックアップJSONとの関係

教材別保存キーを導入した場合でも、バックアップJSONには引き続き以下を含める。

- `questionSetId`
- `questionSetName`
- `history`
- `progress`

ただし、バックアップJSONは原則として「1教材分の進捗・履歴」を扱う方針とする。

複数教材をまとめたバックアップJSONは、現時点では対象外とする。

### 次の作業候補

次は、教材別保存キーを導入する場合の具体的なキー名と、既存キーからの移行方針を設計する。

## Phase 5 設計メモ: 教材別保存キーの具体案と移行方針

### 採用候補

教材別保存キーは、候補Bの方式を基本とする。

つまり、現在の保存キーに `questionSetId` を付けたキーを使う。

### 具体的なキー名

進捗保存キー：

- `timedQuizTrainerProgressV04__{questionSetId}`

履歴保存キー：

- `timedQuizTrainerHistoryV04__{questionSetId}`

例：

- `timedQuizTrainerProgressV04__school_science_jhs1_textbook_s001_s003`
- `timedQuizTrainerHistoryV04__school_science_jhs1_textbook_s001_s003`
- `timedQuizTrainerProgressV04__school_social_geography_jhs1_textbook_p10_p53`
- `timedQuizTrainerHistoryV04__school_social_geography_jhs1_textbook_p10_p53`
- `timedQuizTrainerProgressV04__school_social_history_jhs1_textbook_p24_p27`
- `timedQuizTrainerHistoryV04__school_social_history_jhs1_textbook_p24_p27`

### 既存キー

現在の既存キーは以下である。

- `timedQuizTrainerProgressV04`
- `timedQuizTrainerHistoryV04`

これらは、教材別保存キー導入後は「旧キー」として扱う。

### 移行方針

初回実装では、自動移行は行わない。

理由：

- 現在の既存キーには、過去の複数教材の履歴が混在している可能性がある
- 自動移行すると、誤った教材に進捗や履歴を紐づける危険がある
- 既にバックアップJSONに `questionSetId` を含める設計になっているため、必要なデータは手動で退避できる

### 既存キーの扱い

教材別保存キー導入後も、旧キーはすぐには削除しない。

ただし、アプリが通常利用で読み書きするキーは、教材別保存キーへ切り替える。

旧キーは以下の扱いにする。

- 読み込み対象にはしない
- 書き込み対象にはしない
- 手動確認・手動退避のために残す
- 必要なら将来の整理作業で削除を検討する

### バックアップJSONの扱い

バックアップJSONは、引き続き1教材分の進捗・履歴を保存する。

バックアップ対象は、現在選択中の教材の教材別保存キーから読み込んだデータとする。

インポート時は、バックアップJSON内の `questionSetId` と現在の教材IDを比較する。

- 一致する場合：通常インポート
- 不一致の場合：警告を出す
- 不一致でもユーザーが明示的に続行した場合のみインポートを許可する

### 実装時の最小変更方針

保存キー分離を実装する場合、まずは以下の最小変更にする。

1. 現在の `QUESTION_SET_PROFILE.questionSetId` を使って保存キーを組み立てる
2. 進捗読み込み・保存を教材別保存キーへ変更する
3. 履歴読み込み・保存を教材別保存キーへ変更する
4. バックアップJSONの出力対象を教材別保存キーのデータにする
5. 既存キーからの自動移行は行わない

### 注意点

保存キーを教材別に分けると、導入直後は現在の画面上で進捗・履歴が空に見える可能性がある。

これは、旧キーに保存されていたデータを自動移行しないためである。

必要な場合は、旧バックアップJSONからインポートする運用にする。

### 次の作業候補

次は、アプリ本体で保存キーを組み立てている箇所を確認し、変更対象を洗い出す。

## Phase 5 実装メモ: 教材別保存キーの導入完了

### 完了済み

進捗・履歴の保存キーを、教材IDつきのキーへ分離した。

変更前：

- `timedQuizTrainerProgressV04`
- `timedQuizTrainerHistoryV04`

変更後：

- `timedQuizTrainerProgressV04__{questionSetId}`
- `timedQuizTrainerHistoryV04__{questionSetId}`

### 実装内容

`app/index.html` で、保存キーを固定文字列ではなく、現在の教材IDから組み立てるように変更した。

基本形：

- `HISTORY_KEY_BASE`
- `PROGRESS_KEY_BASE`
- `buildStorageKey(baseKey)`

現在の教材が `school_social_geography_jhs1_textbook_p10_p53` の場合、保存キーは以下になる。

- `timedQuizTrainerHistoryV04__school_social_geography_jhs1_textbook_p10_p53`
- `timedQuizTrainerProgressV04__school_social_geography_jhs1_textbook_p10_p53`

### 確認済み

ブラウザで以下を確認した。

- アプリが開く
- 保存状態の表示に教材IDつき保存キーが出る
- クイズ開始ができる
- 1問解答後に履歴が保存される
- 進捗が保存される
- 履歴が 0 セッションから 1 セッションになる
- 進捗が 0 問分から 1 問分になる

### 旧キーの扱い

旧キーからの自動移行は行っていない。

そのため、導入直後は旧キーに残っていた履歴・進捗は画面上に表示されない。

これは設計通りである。

旧キーは削除せず、必要に応じて手動確認・手動退避する。

### 現時点の状態

保存領域は教材別に分離された。

ただし、教材切り替え機能そのものはまだ未実装である。

現在の学習対象は、引き続き `app/questions.js` に読み込まれている教材である。

### 次の作業候補

次は、教材切り替え機能の実装前に、以下を検討する。

1. 画面上で教材を選択するUIをどうするか
2. 教材JSを動的に読み込む方式にするか
3. `app/questions.js` 手動差し替え運用を残すか
4. 教材切り替え時に画面を再読み込みする方式にするか

## Phase 6 設計メモ: 教材切り替えUIと読み込み方式

### 目的

次の段階では、アプリ上で教材を切り替えられるようにする。

ただし、いきなり完全な動的切り替えを行うのではなく、安全に確認できる最小構成から進める。

### 現在の状態

現時点では、以下の状態である。

- `app/question_sets_manifest.js` に3教材が登録されている
- `app/data/` 配下に3教材JSが存在する
- 保存キーは教材IDごとに分離済み
- ただし、実際の出題対象は `app/questions.js` に読み込まれている1教材のみである
- 登録教材一覧は表示されるが、教材切り替えはまだできない

### 検討する方式

#### 方式A: `app/questions.js` 手動差し替えを継続する

教材切り替えはアプリ上では行わず、従来通り `app/questions.js` を手動で置き換える。

メリット：

- 実装が最も安全
- 既存の動作を壊しにくい
- トラブル時の原因が分かりやすい

デメリット：

- 教材切り替えのたびにファイル操作が必要
- アプリ上の登録教材一覧と実際の教材切り替えが連動しない

#### 方式B: 教材選択後にページ再読み込みする

画面上で教材を選び、選択した教材JSを読み込むためにページを再読み込みする。

候補イメージ：

- 教材選択欄を追加する
- 選択した `questionSetId` を localStorage に保存する
- ページ読み込み時に、選択済み教材の `sourceFile` を読み込む
- 読み込み後に `window.QUIZ_QUESTIONS` を使って起動する

メリット：

- 動的切り替えより安全
- ページ再読み込みにより初期化が明確
- 保存キー分離と相性がよい

デメリット：

- 読み込み順序の設計が必要
- 現在の `questions.js` 読み込み方式を見直す必要がある

#### 方式C: ページを再読み込みせずに動的切り替えする

教材選択時に、JavaScriptで教材JSを動的に読み込み、画面を再構成する。

メリット：

- 操作感がよい
- 将来的な教材切り替えUIとして自然

デメリット：

- 実装が複雑
- 既存の状態管理、履歴、進捗表示、選択欄の再初期化が必要
- 不具合時の切り分けが難しい

### 現時点の推奨

Phase 6 では、方式Bを第一候補とする。

理由：

- 教材別保存キーをすでに導入しているため、教材切り替えとの整合性が取りやすい
- ページ再読み込みにより、現在のグローバル変数初期化の流れを大きく壊さずに済む
- 方式Cより安全に段階実装できる
- 将来的に方式Cへ発展させる余地もある

### Phase 6 の最小実装候補

まずは以下の小さい段階に分ける。

#### Phase 6-1: 選択中教材IDの保存だけ

- 教材一覧に「この教材を選択」操作を追加する
- 選択した `questionSetId` を localStorage に保存する
- ただし、まだ教材JSの読み込みは切り替えない
- 画面上に「選択中教材」と「現在読み込み中教材」を分けて表示する

目的：

- UI操作と localStorage 保存だけを安全に確認する

#### Phase 6-2: 読み込み方式の整理

- `app/questions.js` の役割を整理する
- `app/data/*.js` を読み込む方法を検討する
- `question_sets_manifest.js` の `sourceFile` を読み込み対象として使う

#### Phase 6-3: ページ再読み込み方式で教材を反映する

- 選択中教材IDをもとに、該当教材JSを読み込む
- 読み込み後にページを初期化する
- 保存状態表示で現在の教材IDと保存キーを確認する

### 注意点

教材切り替えを実装すると、読み込み中教材と選択中教材のずれが一時的に起きる可能性がある。

そのため、初期段階では以下を画面に明示する。

- 現在読み込み中の教材
- 選択中の教材
- 教材切り替えはページ再読み込み後に反映されること

### 次の作業候補

次は、Phase 6-1 として、教材選択UIだけを追加するかどうかを判断する。

この段階では、実際の教材JS読み込み切り替えはまだ行わない。

## Phase 6-1 実装メモ: 選択中教材IDの保存

### 完了済み

教材一覧に「この教材を選択」ボタンを追加し、選択した教材IDを localStorage に保存できるようにした。

保存キー：

- `timedQuizTrainerSelectedQuestionSetId`

### 実装内容

`app/index.html` の登録教材一覧表示で、各教材に選択ボタンを表示するようにした。

選択時には以下を行う。

1. 選択した `questionSetId` を localStorage に保存する
2. 登録教材一覧を再描画する
3. 画面上の「選択中」表示を更新する

### 画面表示

登録教材一覧には、以下を分けて表示する。

- 現在読み込み中の教材
- 選択中の教材

現時点では、教材を選択しても実際の出題教材は切り替わらない。

そのため、画面上にも以下の注意文を表示している。

- この段階では、教材を選択しても実際の出題教材はまだ切り替わりません。

### 確認済み

ブラウザで以下を確認した。

- 初期表示では、選択中教材が未選択になる
- 理科を選択すると、選択中教材が「理科 中1 教科書 S001-S003」になる
- 現在読み込み中教材は「社会 地理 p10-p53」のままである
- 保存キーも現在読み込み中教材に対応したままである
- クイズ開始はこれまで通りできる

### 現時点の状態

Phase 6-1 では、教材選択UIと選択中教材IDの保存だけを実装した。

教材JSの読み込み切り替えはまだ未実装である。

### 次の作業候補

次は、Phase 6-2 として、教材JSの読み込み方式を整理する。

特に以下を確認する。

1. `app/questions.js` を今後どう扱うか
2. `app/data/*.js` をどのタイミングで読み込むか
3. 選択中教材IDと実際に読み込まれる教材をどう一致させるか
4. ページ再読み込み方式で安全に切り替えられるか

## Phase 6-2 設計メモ: 教材JSの読み込み方式

### 目的

Phase 6-2 では、選択中教材IDを実際の出題教材へ反映するために、教材JSの読み込み方式を整理する。

### 現在の読み込み方式

現在は `app/index.html` で、以下の順に JavaScript を読み込んでいる。

1. `question_sets_manifest.js`
2. `questions.js`

`questions.js` が `window.QUIZ_QUESTIONS` を定義し、`index.html` 内の処理がそれを読み取って `QUESTIONS` を作成する。

つまり、現時点では実際の出題教材は `app/questions.js` に固定されている。

### 目標

将来的には、`timedQuizTrainerSelectedQuestionSetId` に保存された教材IDをもとに、manifest の `sourceFile` を参照し、該当する `app/data/*.js` を読み込むようにする。

ただし、いきなり完全に切り替えず、段階的に安全確認する。

### 読み込み方式の候補

#### 候補A: `questions.js` を継続して使う

従来通り、`app/questions.js` を実際の出題教材として使う。

メリット：

- 実装変更が少ない
- 現在の安定動作を維持できる
- 手動差し替え運用を残せる

デメリット：

- 画面上で選んだ教材と、実際の出題教材が連動しない
- `app/data/` 配下の教材JSを活用できない

#### 候補B: HTMLで全教材JSを事前読み込みする

`index.html` で3教材すべての `app/data/*.js` を読み込む。

メリット：

- 動的読み込みが不要
- ブラウザ上の挙動が比較的単純
- 選択中教材IDに応じて、読み込み済みデータから選べる

デメリット：

- 教材が増えるたびに読み込み量が増える
- 各教材JSが同じ `window.QUIZ_QUESTIONS` を上書きする形式だと、そのままでは使えない
- 教材JS側の形式変更が必要になる可能性がある

#### 候補C: 選択中教材のJSだけを動的に読み込む

ページ読み込み時に、選択中教材IDに対応する `sourceFile` を manifest から探し、そのJSだけを読み込む。

メリット：

- 選択中教材だけを読み込める
- 教材が増えても読み込み量が増えにくい
- manifest の `sourceFile` を自然に使える

デメリット：

- 現在の `index.html` の初期化順序を変更する必要がある
- 教材JS読み込み完了後にアプリ初期化する設計が必要
- 実装ミス時に画面が起動しない可能性がある

### 現時点の推奨

Phase 6-2 時点では、候補Cを最終候補とする。

ただし、いきなり実装せず、まずは以下を確認する。

1. `app/data/*.js` が現在どのグローバル変数を定義しているか
2. `app/questions.js` と `app/data/*.js` の形式が完全に同じか
3. 教材JS読み込み後に `window.QUIZ_QUESTIONS` が正しく定義されるか
4. `index.html` の初期化処理を、教材JS読み込み完了後に移動できるか

### 重要な注意点

現在の `app/data/*.js` が `window.QUIZ_QUESTIONS` を定義する形式であれば、複数教材を同時に読み込むと後から読み込んだ教材で上書きされる。

そのため、Phase 6 では「全教材を同時読み込み」ではなく、「選択中教材だけを読み込む」方式を基本にする。

### Phase 6-2 の次の確認作業

次は、以下のファイルの先頭と末尾を確認し、教材JSの形式を整理する。

- `app/questions.js`
- `app/data/science_textbook_s001_s003.js`
- `app/data/social_geography_p10_p53.js`
- `app/data/social_history_p24_p27.js`

確認したい点：

- `window.QUIZ_QUESTIONS` の定義形式
- `window.QUIZ_SETS` の有無
- ファイル末尾の閉じ方
- 3教材の形式差分

## Phase 6-2 調査メモ: 教材JS形式の確認

### 確認対象

以下の教材JSを確認した。

- `app/questions.js`
- `app/data/science_textbook_s001_s003.js`
- `app/data/social_geography_p10_p53.js`
- `app/data/social_history_p24_p27.js`

### 確認結果

4ファイルとも、基本的には以下の形式である。

- `window.QUIZ_SETS = [...]`
- `window.QUIZ_QUESTIONS = [...]`

### app/questions.js

現在の `app/questions.js` は、社会 地理 p10-p53 の教材である。

確認結果：

- `window.QUIZ_SETS` あり
- `window.QUIZ_QUESTIONS` あり
- 収録問題数は 347問

### app/data/science_textbook_s001_s003.js

理科教材JS。

確認結果：

- `window.QUIZ_SETS` あり
- `window.QUIZ_QUESTIONS` あり
- 互換用エイリアスあり
  - `window.questions`
  - `window.QUESTIONS`
  - `window.questionSets`
  - `window.QUESTION_SETS`
- `module.exports` あり

### app/data/social_geography_p10_p53.js

社会 地理教材JS。

確認結果：

- `window.QUIZ_SETS` あり
- `window.QUIZ_QUESTIONS` あり

### app/data/social_history_p24_p27.js

社会 歴史教材JS。

確認結果：

- `window.QUIZ_SETS` あり
- `window.QUIZ_QUESTIONS` あり

### 判断

3教材とも、選択中教材だけを読み込めば `window.QUIZ_SETS` と `window.QUIZ_QUESTIONS` を使ってアプリを初期化できる形式である。

ただし、各教材JSはいずれも同じグローバル変数を定義する。

そのため、複数教材JSを同時に読み込むと、後から読み込んだ教材で `window.QUIZ_SETS` と `window.QUIZ_QUESTIONS` が上書きされる。

### 方針

Phase 6 では、全教材JSを同時読み込みする方式は採用しない。

選択中教材IDに対応する `sourceFile` を manifest から取得し、その教材JSだけを読み込む方式を基本とする。

### 次の作業候補

次は、`index.html` の読み込み順序を確認し、教材JSを動的に読み込む場合の最小変更範囲を整理する。

## Phase 6-2 調査メモ: index.html の読み込み順序と初期化位置

### 確認結果

現在の `app/index.html` では、以下の順で JavaScript を読み込んでいる。

1. `question_sets_manifest.js`
2. `questions.js`
3. `index.html` 内のインラインスクリプト

インラインスクリプト内では、以下が即時実行されている。

- `QUESTIONS` の作成
- `SETS` の作成
- `QUESTION_SET_PROFILE` の作成
- `initialize()` の実行

現在の該当箇所：

- `question_sets_manifest.js` 読み込み
- `questions.js` 読み込み
- `const QUESTIONS = ...`
- `const SETS = buildSetManifest();`
- `const QUESTION_SET_PROFILE = buildQuestionSetProfile();`
- `initialize();`

### 判断

現在の構造では、`questions.js` が読み込まれた後に、すぐ `QUESTIONS` / `SETS` / `QUESTION_SET_PROFILE` が作られる。

そのため、選択中教材IDに応じて教材JSを切り替えるには、`QUESTIONS` を作る前に、対象教材JSの読み込みを完了させる必要がある。

### 変更が必要になる箇所

教材JSの動的読み込みを実装する場合、主に以下の見直しが必要になる。

1. `questions.js` の固定読み込みをどう扱うか
2. 選択中教材IDから manifest の `sourceFile` を取得する処理
3. 対象教材JSを読み込む処理
4. 教材JS読み込み完了後に `QUESTIONS` / `SETS` / `QUESTION_SET_PROFILE` を作る流れ
5. `initialize()` を教材JS読み込み完了後に実行する流れ

### 最小変更の方向性

Phase 6-3 では、以下の方向で検討する。

- `question_sets_manifest.js` は従来通り先に読み込む
- `questions.js` の固定読み込みは段階的に外す
- 選択中教材IDがある場合は、manifest の `sourceFile` を使って教材JSを読み込む
- 選択中教材IDがない場合は、現在の `questions.js` 相当の既定教材を読み込む
- 教材JS読み込み完了後に、アプリ初期化を実行する

### 注意点

`QUESTIONS` / `SETS` / `QUESTION_SET_PROFILE` は現在 `const` で定義されている。

教材JS読み込み完了後に値を決める構造へ変更する場合、これらを `let` にする、または初期化処理全体を教材読み込み後に実行する必要がある。

### 次の作業候補

次は、Phase 6-3 の前に、実装方針をさらに小さく分ける。

候補：

1. まず `questions.js` 固定読み込みを維持したまま、既定教材の sourceFile を画面に表示する
2. 次に、教材JSを動的読み込みする小さな関数だけを追加する
3. 最後に、選択中教材IDに応じて読み込み対象を切り替える

## Phase 6-3 設計メモ: 動的読み込み実装の分割計画

### 目的

Phase 6-3 では、選択中教材IDに対応する教材JSを読み込み、実際の出題教材へ反映する。

ただし、いきなり完全な教材切り替えを実装すると影響範囲が大きいため、さらに小さい段階に分けて進める。

### 現在の前提

現時点では、以下が完了している。

- `app/question_sets_manifest.js` に教材一覧がある
- manifest の `sourceFile` は `app/data/*.js` を指している
- `app/data/*.js` は `window.QUIZ_SETS` と `window.QUIZ_QUESTIONS` を定義する
- 選択中教材IDは `timedQuizTrainerSelectedQuestionSetId` に保存できる
- 進捗・履歴保存キーは教材IDごとに分離済み

### 実装方針

教材JSは、選択中教材IDに対応する `sourceFile` を manifest から取得し、その1ファイルだけを読み込む。

全教材JSを同時読み込みする方式は採用しない。

理由：

- 各教材JSが同じ `window.QUIZ_SETS` と `window.QUIZ_QUESTIONS` を定義するため
- 複数読み込むと後から読み込んだ教材で上書きされるため
- 選択中教材だけを読み込む方が、保存キー分離との対応が明確なため

### 分割計画

#### Phase 6-3a: sourceFile 表示だけ

まずは、現在読み込み中教材と選択中教材について、manifest 上の `sourceFile` を画面に表示する。

この段階では、教材JSの読み込み切り替えはまだ行わない。

目的：

- 選択中教材IDから manifest 項目を正しく取得できるか確認する
- `sourceFile` の値が想定通り `app/data/*.js` になっているか確認する
- 実際の読み込み処理を入れる前に、参照先を画面で確認できるようにする

#### Phase 6-3b: 教材JS読み込み関数だけ追加

次に、指定された `sourceFile` のJSを読み込む関数を追加する。

ただし、この段階ではまだアプリ初期化には使わない。

目的：

- script タグを使って指定JSを読み込めるか確認する
- 読み込み成功・失敗を検出できるようにする
- 既存の出題処理を壊さずに、読み込み関数単体を確認する

#### Phase 6-3c: 初期化順序の変更準備

次に、`QUESTIONS` / `SETS` / `QUESTION_SET_PROFILE` を、教材JS読み込み後に決定できる構造へ変更する。

候補：

- `const QUESTIONS` を `let QUESTIONS` にする
- `const SETS` を `let SETS` にする
- `const QUESTION_SET_PROFILE` を `let QUESTION_SET_PROFILE` にする
- `initialize()` を即時実行せず、教材JS読み込み完了後に実行する

目的：

- 教材JS読み込み後にアプリを初期化できる形へ近づける
- 変更範囲を把握する

#### Phase 6-3d: 選択中教材IDに応じた読み込み

最後に、選択中教材IDをもとに教材JSを読み込み、読み込み完了後にアプリを初期化する。

想定フロー：

1. `question_sets_manifest.js` を読み込む
2. `timedQuizTrainerSelectedQuestionSetId` を読む
3. 未選択なら既定教材IDを使う
4. manifest から対象教材の `sourceFile` を取得する
5. 対象教材JSを読み込む
6. `window.QUIZ_SETS` / `window.QUIZ_QUESTIONS` をもとにアプリを初期化する

### 既定教材

選択中教材IDが未設定の場合は、当面は社会 地理 p10-p53 を既定教材とする。

理由：

- 現在の `app/questions.js` と同じ教材である
- 既存動作との差分を小さくできる
- 動作確認しやすい

既定教材ID：

- `school_social_geography_jhs1_textbook_p10_p53`

### `app/questions.js` の扱い

Phase 6-3 の途中では、`app/questions.js` をすぐには削除しない。

段階的に以下の扱いへ移行する。

1. 当面は残す
2. 動的読み込みが安定したら、固定読み込み対象から外す
3. 必要ならフォールバック用または手動運用用として残す
4. 最終的な扱いは別途判断する

### 確認観点

Phase 6-3 実装時は、各段階で以下を確認する。

- 初期表示でアプリが開く
- 登録教材一覧が表示される
- 現在読み込み中教材が分かる
- 選択中教材が分かる
- 保存キーが読み込み中教材に対応する
- クイズ開始ができる
- 1問解答後に履歴・進捗が保存される
- ページ再読み込み後も選択中教材が保持される

### 次の作業候補

次は Phase 6-3a として、現在読み込み中教材と選択中教材の `sourceFile` を画面に表示する。

この段階では、実際の教材JS読み込み切り替えはまだ行わない。
