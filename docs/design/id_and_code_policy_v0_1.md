# ID・コード設計方針 v0.1

## 1. この文書の目的

この文書は、Junior Study Trainer における ID・コード・表示名の役割と、データ間の論理制約を整理するための設計メモである。

目的は、現行の JavaScript ファイル運用をすぐに大きく変更することではなく、今後の次の拡張で混乱しないための共通ルールを定義することである。

```text
対象となる拡張
├─ 目的別問題集
├─ 共通 metadata
├─ カタログ参照
├─ 印刷用出力
├─ 図表つき問題
├─ 検証スクリプト
├─ 進捗・履歴管理
└─ 将来のデータベース化
```

この文書は、RDB の物理設計書ではない。

現時点では、`app/question_sets_manifest.js` と `app/data/*.js` を中心にしたファイル運用における「論理制約の設計書」とする。

## 2. 基本方針

```text
基本方針
├─ ID は一意識別のための内部キーとする
├─ コードは分類・順序・学習内容を表す管理記号とする
├─ 表示名はユーザーに見せる名称とする
├─ ID・コード・表示名を混同しない
├─ 既存 ID は互換性維持のため原則変更しない
├─ 新規 ID は意味を持たせすぎない
├─ ただし移行期は人間が追える命名を許容する
├─ アプリ実装は ID の文字列構造に依存しない
├─ 目的別問題集は questionSetId + questionId で問題を参照する
└─ 削除より archived / deprecated による維持を優先する
```

## 3. ID・コード・表示名の違い

### 3.1 ID

ID は、データを一意に識別するための内部キーである。

```text
ID の役割
├─ 参照
├─ 保存
├─ 進捗
├─ 履歴
├─ 目的別問題集
├─ バックアップ
└─ 将来の検証スクリプト
```

ID は原則として変更しない。

ID の文字列にある程度の意味が含まれていてもよいが、アプリ処理やユーザー判断は ID の意味に依存しない。

### 3.2 コード

コードは、人間が分類・順序・学習内容を管理するための記号である。

```text
コードの例
├─ setId
├─ unitCode
├─ sectionCode
├─ catalogCode
└─ purposeType
```

コードは ID よりも変更可能性がある。

ただし、他データから参照されるコードは、変更時に参照元の確認が必要である。

### 3.3 表示名

表示名は、ユーザーに見せるための名称である。

```text
表示名の例
├─ questionSetName
├─ setName
├─ title
├─ displayName
└─ description
```

表示名は日本語で分かりやすくしてよい。

表示名を参照キーとして使ってはいけない。

## 4. 主な項目の定義

## 4.1 questionSetId

教材セットを一意に識別する ID。

現在は `app/question_sets_manifest.js` に定義されている。

```text
例
├─ school_math_jhs1_test1
├─ school_english_jhs1_test1
├─ school_social_history_jhs1_textbook_p24_p27
└─ school_science_jhs1_textbook_s001_s003
```

### 役割

```text
questionSetId の役割
├─ 教材セットの識別
├─ 教材選択
├─ sourceFile との対応
├─ 進捗・履歴の単位
├─ 目的別問題集からの参照
└─ バックアップ対象の単位
```

### 制約

```text
制約
├─ 必須
├─ 全 questionSet で一意
├─ 原則変更不可
├─ 空文字不可
├─ 日本語不可
└─ 表示名として使わない
```

## 4.2 sourceFile

教材セットの実データファイルへの参照。

```text
例
├─ app/data/math_test1.js
├─ app/data/english_test1.js
└─ app/data/social_history_p24_p27.js
```

### 制約

```text
制約
├─ questionSet ごとに必須
├─ 実ファイルとして存在すること
├─ 原則として app/data/ 配下を指すこと
├─ 同一 sourceFile を複数 questionSet で共有する場合は設計上の理由を明記すること
└─ ファイル名変更時は manifest と読み込み処理を確認すること
```

## 4.3 setId

教材ファイル内の小セット・小単元を識別するコード。

```text
例
├─ m001
├─ e001
├─ j001
├─ h001_a
└─ s001
```

### 役割

```text
setId の役割
├─ 教材ファイル内のまとまり
├─ 編集時の管理単位
├─ 表示順の補助
├─ 問題作成時の区切り
└─ 既存 questionId の構成要素
```

### 制約

```text
制約
├─ 教材ファイル内では一意を推奨
├─ アプリが setId の接頭辞を教科判定に使ってはいけない
├─ ユーザー表示には setName を使う
└─ 将来は unitCode / sectionCode と役割を分離する
```

## 4.4 questionId / id

問題を一意に識別する ID。

現行の `app/data/*.js` では、問題オブジェクトの `id` が questionId に相当する。

```text
例
├─ math_test1_m001_q001
├─ english_test1_e001_q001
├─ japanese_test1_j001_q001
└─ h001_a_q001
```

### 役割

```text
questionId の役割
├─ 問題の識別
├─ 目的別問題集からの参照
├─ 進捗・履歴の記録
├─ 誤答記録
├─ 印刷用出力での抽出
└─ 将来の検証スクリプト
```

### 制約

```text
制約
├─ 問題ごとに必須
├─ 空文字不可
├─ 同一 questionSetId 内で一意
├─ 将来的には全教材横断で一意を目指す
├─ 原則変更不可
├─ 表示名として使わない
└─ アプリが ID 文字列を分解して分類・順序・目的を判断してはいけない
```

### 目的別問題集での参照

目的別問題集では、questionId 単独ではなく、questionSetId と questionId の組で参照する。

```text
questions:
  - questionSetId: "school_math_jhs1_test1"
    questionId: "math_test1_m001_q001"
```

これにより、将来 questionId の形式が変わっても参照構造を保ちやすくなる。

## 4.5 unitCode

学習内容上の大きな単元を表すコード。

現行データではまだ必須ではない。

```text
例
├─ math_jhs1_signed_numbers
├─ math_jhs1_expressions
├─ science_jhs1_matter
├─ english_jhs1_be_verb
└─ history_jhs1_jomon
```

### 役割

```text
unitCode の役割
├─ 学習内容の分類
├─ カタログとの接続
├─ 目的別問題集の抽出条件
├─ 印刷用出力の範囲指定
└─ GUI での学習内容選択
```

### 制約

```text
制約
├─ 新規 metadata では付与を推奨
├─ 既存問題では必須化しない
├─ 定義済み unitCode への参照を原則とする
├─ 表示名には別途 unitName を使う
└─ 変更時は参照元を確認する
```

## 4.6 sectionCode

unitCode より細かい学習項目を表すコード。

```text
例
├─ math_jhs1_signed_numbers_meaning
├─ math_jhs1_signed_numbers_addition
├─ math_jhs1_signed_numbers_subtraction
└─ math_jhs1_expressions_value
```

### 制約

```text
制約
├─ 新規 metadata では付与を推奨
├─ 既存問題では必須化しない
├─ unitCode の下位項目として扱う
├─ 定義済み sectionCode への参照を原則とする
└─ 変更時は参照元を確認する
```

## 4.7 catalogCode

学校教科カタログ・検定カタログ上の学習項目を表すコード。

```text
例
├─ school_math_jhs1_signed_numbers
├─ suken_g6_number_calculation
├─ suken_g5_equation
├─ eiken_g3_vocab_basic
└─ kanken_g4_reading
```

### 役割

```text
catalogCode の役割
├─ 学校教科カタログとの接続
├─ 検定カタログとの接続
├─ 目的別問題集の抽出条件
├─ 横断的な学習分析
└─ 将来の到達度管理
```

### 制約

```text
制約
├─ catalogRefs から参照される場合は必須
├─ カタログ内で一意
├─ 変更時は参照元を確認する
├─ 表示名には catalogName を使う
└─ 抽出条件方式では重要項目として扱う
```

## 4.8 purposeSetId

目的別問題集を一意に識別する ID。

```text
例
├─ purpose_suken6_light_check_001
├─ purpose_math_test1_final_review_001
├─ purpose_spinbike_40_mixed_001
└─ purpose_eiken3_vocab_review_001
```

### 役割

```text
purposeSetId の役割
├─ 目的別問題集の識別
├─ 目的別問題集の進捗・履歴
├─ GUI の目的別選択
├─ 印刷用出力
└─ バックアップ対象の単位
```

### 制約

```text
制約
├─ 必須
├─ 全 purposeSet で一意
├─ 原則変更不可
├─ 空文字不可
├─ 日本語不可
└─ 表示名として使わない
```

## 5. 命名規則

### 5.1 基本形式

ID とコードは、原則として小文字英数字とアンダースコアで構成する。

```text
OK
├─ school_math_jhs1_test1
├─ math_test1_m001_q001
├─ purpose_suken6_light_check_001
└─ math_jhs1_signed_numbers

NG
├─ 数学_第1回
├─ math test1 q001
├─ math-test1-q001
└─ MathTest1Q001
```

### 5.2 使用文字

```text
使用可能
├─ a-z
├─ 0-9
└─ _

原則使用しない
├─ 日本語
├─ 空白
├─ ハイフン
├─ 記号
└─ 大文字
```

### 5.3 ID 文字列の解釈禁止

ID に意味が含まれていても、実装では ID を分解して判定しない。

```text
避ける実装
├─ questionId が math_ で始まるから数学と判定する
├─ questionId の m001 を見て単元を判定する
├─ questionId の q001 を見て出題順を決める
├─ purposeSetId の文字列から検定級を判定する
└─ ファイル名から教科を判定する
```

分類・順序・目的は metadata または manifest の明示項目を使う。

## 6. 一意制約

### 6.1 questionSetId

```text
制約
├─ 全 questionSet で一意
└─ 重複不可
```

### 6.2 sourceFile

```text
制約
├─ 原則として questionSet ごとに一意
├─ 共有する場合は設計上の理由を明記
└─ 実ファイルが存在すること
```

### 6.3 questionId

```text
制約
├─ 最低条件：同一 questionSetId 内で一意
├─ 推奨条件：全教材横断で一意
└─ 目的別問題集では questionSetId + questionId を複合キーとして扱う
```

### 6.4 purposeSetId

```text
制約
├─ 全 purposeSet で一意
└─ 重複不可
```

### 6.5 catalogCode / unitCode / sectionCode

```text
制約
├─ 定義ファイル内で一意
├─ 表示名とは分離
└─ 変更時は参照元を確認
```

## 7. not null 制約

### 7.1 questionSet

```text
必須
├─ questionSetId
├─ questionSetName
├─ subject
├─ questionCount
├─ sourceFile
└─ status

任意または段階導入
├─ grade
├─ range
├─ description
└─ catalogRefs
```

### 7.2 question

```text
必須
├─ id
├─ question
└─ answer

既存データでは実質必須に近い
├─ setId
├─ choices
└─ explanation

移行期は任意
├─ metadata
├─ visual
├─ audio
├─ speaking
└─ print
```

### 7.3 purposeSet

```text
必須
├─ purposeSetId
├─ title
├─ selectionMode
├─ status
└─ questions または conditions

selectionMode による必須
├─ explicitIds: questions 必須
├─ query: conditions 必須
└─ mixed: questions と conditions の少なくとも一方が必須
```

## 8. 参照整合性制約

### 8.1 manifest と sourceFile

```text
制約
├─ manifest の sourceFile は実ファイルとして存在すること
├─ sourceFile 内の問題数は questionCount と一致すること
└─ sourceFile 読み込み後に window.QUIZ_SETS が定義されること
```

### 8.2 purposeSet から questionSet への参照

```text
制約
├─ purposeSet.questions[].questionSetId は manifest に存在すること
└─ 存在しない questionSetId を参照してはいけない
```

### 8.3 purposeSet から question への参照

```text
制約
├─ purposeSet.questions[].questionId は対象 sourceFile 内に存在すること
├─ questionSetId + questionId の組で一意に問題が決まること
└─ archived / deprecated 問題を含める場合は意図を明記すること
```

### 8.4 metadata から catalog への参照

```text
制約
├─ catalogRefs がある場合、参照先 catalogCode が存在すること
├─ 存在しない catalogCode を参照しないこと
└─ 移行期は catalogRefs 未設定を許容する
```

### 8.5 metadata から unit / section への参照

```text
制約
├─ unitCode がある場合、定義済み unitCode を参照すること
├─ sectionCode がある場合、定義済み sectionCode を参照すること
├─ sectionCode は原則として unitCode の下位項目であること
└─ 移行期は unitCode / sectionCode 未設定を許容する
```

## 9. 変更不可・変更注意項目

### 9.1 原則変更不可

```text
原則変更不可
├─ questionSetId
├─ questionId
├─ purposeSetId
└─ catalogCode
```

理由：

```text
理由
├─ 進捗・履歴から参照される
├─ 目的別問題集から参照される
├─ バックアップに含まれる可能性がある
└─ 変更すると過去データとの整合性が崩れる
```

### 9.2 注意して変更

```text
注意して変更
├─ sourceFile
├─ setId
├─ unitCode
├─ sectionCode
├─ questionCount
└─ status
```

変更時には、参照元とチェック手順を確認する。

### 9.3 変更してよい

```text
変更してよい
├─ questionSetName
├─ setName
├─ title
├─ description
├─ explanation
├─ displayName
├─ tags
└─ order
```

ただし、学習済みユーザーへの影響が大きい場合は変更理由を残す。

## 10. 削除・廃止・修正方針

### 10.1 削除より archived を優先

公開済みデータは、原則として物理削除しない。

```text
方針
├─ 不要になった教材セットは status: archived
├─ 不要になった目的別問題集は status: archived
├─ 誤問は status: deprecated または fixed
├─ 完全削除は参照元がないことを確認してから行う
└─ 進捗・履歴に影響する削除は避ける
```

### 10.2 status の候補

```text
status
├─ draft
├─ active
├─ registered
├─ fixed
├─ deprecated
└─ archived
```

### 10.3 誤問対応

```text
誤問対応
├─ 軽微な誤字は同一 questionId のまま修正してよい
├─ 問題の意味が変わる修正は変更理由を残す
├─ 別問題になる場合は新しい questionId を発行する
└─ 古い問題は deprecated にする
```

## 11. 既存データの扱い

### 11.1 既存 ID は変更しない

既存の questionId は、互換性維持のため変更しない。

```text
既存 questionId 例
├─ math_test1_m001_q001
├─ english_test1_e001_q001
├─ japanese_test1_j001_q001
└─ h001_a_q001
```

### 11.2 既存 metadata は必須化しない

移行期において、既存全問題に metadata を一括付与しない。

```text
方針
├─ 既存問題は現行形式のまま動かす
├─ 新規問題から metadata を任意追加する
├─ 目的別問題集は既存 questionId を参照できるようにする
└─ 抽出条件方式は metadata がそろってから導入する
```

## 12. 新規データの扱い

### 12.1 新規 questionId

新規 questionId は、次の方針とする。

```text
方針
├─ 教材内で一意
├─ できれば全体でも一意
├─ 小文字英数字とアンダースコア
├─ 人間が追える程度の意味は許容
├─ ただし意味を持たせすぎない
└─ 分類・順序・目的は metadata に持たせる
```

例：

```text
例
├─ math_test2_q0001
├─ science_matter_q0001
├─ suken6_light_q0001
└─ eiken3_vocab_q0001
```

### 12.2 新規 metadata

新規問題では、可能な範囲で metadata を付与する。

```text
優先 metadata
├─ questionSetId
├─ domainTags
├─ questionTypeTags
├─ unitCode
├─ sectionCode
├─ purposeTags
├─ source
└─ status
```

ただし、初期段階ではすべてを必須にしない。

## 13. 目的別問題集での参照ルール

目的別問題集の明示ID方式では、次の形式を基本とする。

```text
questions:
  - questionSetId: "school_math_jhs1_test1"
    questionId: "math_test1_m001_q001"

  - questionSetId: "school_social_history_jhs1_textbook_p24_p27"
    questionId: "h001_a_q001"
```

### 13.1 参照ルール

```text
参照ルール
├─ questionSetId は manifest に存在すること
├─ questionId は対象 sourceFile 内に存在すること
├─ questionId 単独では参照しない
├─ 表示順は questions の並び順または ordering で指定する
└─ ID 文字列から順序を推測しない
```

### 13.2 進捗への影響

目的別問題集の導入初期では、既存教材単位の進捗を壊さない。

```text
方針
├─ 既存 questionSetId 単位の進捗は維持
├─ 目的別問題集の進捗は別キーにする
├─ 初期プロトタイプでは目的別進捗を未実装でもよい
└─ 既存バックアップ形式を大幅変更しない
```

## 14. バリデーション方針

### 14.1 段階的な導入

```text
段階
├─ v0.1: 文書上の論理制約として定義
├─ v0.2: 新規教材登録手順にチェック項目を追加
├─ v0.3: ローカル検証スクリプトを追加
├─ v0.4: CI または手動コマンドで検証
└─ 将来: データ生成処理またはアプリで強制
```

### 14.2 最初に検証したい項目

```text
初期チェック候補
├─ manifest の questionSetId 重複
├─ manifest の sourceFile 存在確認
├─ sourceFile 内の questionId 重複
├─ questionCount と実問題数の一致
├─ purposeSet の questionSetId 参照確認
├─ purposeSet の questionId 参照確認
└─ ID の形式チェック
```

## 15. アプリ実装で避けること

```text
避けること
├─ ID の prefix で教科を判定する
├─ ID の中の m001 / e001 / h001 を単元判定に使う
├─ questionId の q001 を出題順に使う
├─ 表示名を参照キーにする
├─ sourceFile 名から教材種別を判定する
├─ metadata が必ず存在すると仮定する
├─ archived / deprecated を無視して削除する
└─ 目的別問題集の参照を questionId 単独にする
```

## 16. 今後の関連文書への反映

この文書の方針は、次の文書に順次反映する。

```text
反映候補
├─ question_metadata_schema_design_v0_1.md
├─ purpose_based_question_sets_design_v0_1.md
├─ metadata_migration_plan_v0_1.md
├─ question_set_registration_procedure.md
└─ question_sets_inventory.md
```

ただし、一度にすべてを変更しない。

まずはこの文書を基準として追加し、その後、目的別問題集の明示ID方式プロトタイプに進む。

## 17. v0.1 で決めたこと

```text
v0.1 の決定事項
├─ ID は内部キー
├─ コードは分類・順序・学習内容の管理記号
├─ 表示名はユーザー向け名称
├─ 既存 ID は変更しない
├─ 新規 ID は意味を持たせすぎない
├─ questionId は最低でも questionSetId 内で一意
├─ 目的別問題集は questionSetId + questionId で参照
├─ metadata は移行期なので既存問題には必須化しない
├─ questionSetId / questionId / purposeSetId は原則変更不可
├─ 削除より archived / deprecated を優先
└─ 制約はまず文書上の論理制約として定義する
```
