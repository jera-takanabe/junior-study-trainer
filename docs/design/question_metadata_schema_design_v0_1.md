# 問題データ共通メタデータ設計 v0.1

## 1. この文書の目的

この文書は、Junior Study Trainer における問題データの共通メタデータを整理するための設計メモである。

目的は、すぐに既存の `app/data/*.js` を移行することではなく、今後作成する問題データが、次の設計と矛盾しないように共通属性を定義することである。

```text
関連設計
├─ 学校教科カタログ
├─ 検定カタログ
├─ カタログ横断と問題データ設計
├─ 目的別問題集設計
├─ 印刷用問題出力設計
├─ 図・表・グラフつき問題データ設計
└─ GUI構造・画面導線設計
```

この文書は v0.1 であり、実装用スキーマの確定版ではない。

## 2. 現在の前提

現在の問題データは、教材セット単位で読み込まれる。

```text
現在の中心
├─ questionSetId
├─ 問題文
├─ 解答
├─ 解説
├─ カテゴリ
└─ 教材単位の進捗
```

今後は、次のような使い方を支えるために、共通メタデータが必要になる。

```text
今後支えたいこと
├─ 教材から選ぶ
├─ 目的から選ぶ
├─ 検定対策
├─ 定期テスト対策
├─ 弱点補強
├─ 先取り
├─ 復習
├─ 印刷用出力
├─ 図表つき問題
├─ 音声再生
└─ スピーキング練習
```

## 3. 基本方針

```text
基本方針
├─ 既存問題データをすぐ壊さない
├─ 新規問題から段階的にメタデータを増やす
├─ 学校教科と検定を同じ枠組みで扱う
├─ 問題1つに複数タグを持たせる
├─ GUIで使う項目を優先する
├─ 目的別問題集の抽出に使えるようにする
├─ 印刷・図表・音声・スピーキングを将来拡張として含める
└─ 必須属性と任意属性を分ける
```

## 4. 問題データの大枠

将来的な問題データは、次のような構造を想定する。

```text
question:
  id:
  questionSetId:
  title:
  question:
  answer:
  choices:
  explanation:
  metadata:
    ...
```

この文書では、主に `metadata` の中身を整理する。

## 5. 最小必須メタデータ

新規問題で最低限持たせたい属性は次である。

```text
metadata:
  id:
    問題ID

  questionSetId:
    所属する教材セットID

  displayTitle:
    画面表示用の短い名前

  subjectType:
    school / certification / mixed

  domainTags:
    大きな領域

  questionTypeTags:
    問題形式

  knowledgeTags:
    知識項目

  skillTags:
    必要技能

  source:
    出典情報

  status:
    draft / active / archived
```

## 6. id

問題を一意に識別するID。

```text
id:
  math_test1_M001_Q001
  suken_g5_signed_numbers_Q001
  eiken_g3_vocab_Q001
  kanken_g4_writing_Q001
```

方針：

```text
id の方針
├─ 一意である
├─ 人間がある程度読める
├─ 教材・検定・単元が推測できる
├─ 後から変更しない
└─ 進捗・履歴のキーとして使える
```

## 7. questionSetId

現在の教材セットID。

```text
questionSetId:
  science_textbook_jhs1
  social_geography_jhs1
  social_history_jhs1
  japanese_test1
  english_test1
  math_test1
  suken_grade5
  eiken_grade3
  kanken_grade4
```

既存アプリとの互換性のため、当面は重要なキーである。

## 8. purposeSetIds

目的別問題集に属する場合に持つID。

```text
purposeSetIds:
  - suken_grade5_primary_exam
  - suken_grade5_signed_numbers
  - spinbike_40_math_mental
```

方針：

```text
purposeSetIds の方針
├─ 1問が複数の目的別問題集に属してよい
├─ 明示ID方式で使う
├─ 抽出条件方式では必須ではない
└─ 固定セットや直前対策で有効
```

## 9. catalogRefs

カタログ上の学習内容への参照。

```text
catalogRefs:
  - school_math_jhs1:positive_negative_numbers:addition
  - suken_grade5:primary_exam:signed_numbers
  - eiken_grade3:reading:short_text_gap_fill
  - kanken_grade4:writing:homophones
```

方針：

```text
catalogRefs の方針
├─ 学習内容の正本と紐づける
├─ 網羅率確認に使う
├─ 目的別問題集の抽出にも使える
├─ 学校教科と検定の重なりを表せる
└─ v0.1では厳密なID体系は未確定
```

## 10. subjectType

問題が学校教科か、検定か、混合かを示す。

```text
subjectType:
  school
  certification
  mixed
```

例：

```text
school:
  学校定期テスト用

certification:
  数検・英検・漢検用

mixed:
  学校数学にも数検5級にも使う問題
```

## 11. 学校教科用メタデータ

学校教科の場合に使う。

```text
school:
  subject:
    math / english / japanese / science / social

  schoolStage:
    jhs1 / jhs2 / jhs3

  grade:
    中1 / 中2 / 中3

  textbook:
    教科書名または教材名

  unit:
    単元名

  pageRange:
    ページ範囲

  testScope:
    定期テスト範囲情報
```

例：

```text
school:
  subject: math
  schoolStage: jhs1
  grade: 中1
  unit: 正負の数
  pageRange: p.10-p.25
  testScope: 第1回定期テスト
```

## 12. 検定用メタデータ

検定の場合に使う。

```text
certification:
  name:
    suken / eiken / kanken

  grade:
    6級 / 5級 / 3級 / 4級

  examPart:
    1次 / 2次 / reading / writing / listening / speaking / 総合

  officialScope:
    公式範囲上の位置づけ

  examFormat:
    出題形式

  targetExamDate:
    受験予定日
```

例：

```text
certification:
  name: suken
  grade: 5級
  examPart: 1次計算技能
  officialScope: 正の数・負の数
  examFormat: 計算
```

## 13. domainTags

大きな領域を表すタグ。

```text
domainTags:
  数と式
  方程式
  図形
  関数
  データの活用
  reading
  writing
  listening
  speaking
  読み
  書き
  部首
  地理
  歴史
  理科用語
```

GUIでは、分野別選択や進捗表示に使う。

## 14. questionTypeTags

問題形式を表すタグ。

```text
questionTypeTags:
  一問一答
  計算
  選択
  穴埋め
  書取
  読み
  文章題
  長文読解
  内容一致
  英作文
  Eメール返信
  リスニング
  スピーキング
  作図
  図形
  表
  グラフ
  地図
  年表
  誤字訂正
  四字熟語
```

目的別問題集の抽出条件として重要である。

## 15. knowledgeTags

知識項目を表すタグ。

```text
knowledgeTags:
  正負の数
  一次方程式
  比例
  反比例
  受け身
  不定詞
  英検3級語彙
  漢検4級新出漢字
  四字熟語
  火山
  地震
  世界の気候
  縄文時代
```

同じ問題に複数の知識タグを持たせてよい。

## 16. skillTags

問題を解くために必要な技能を表すタグ。

```text
skillTags:
  読む
  書く
  計算する
  式にする
  聞き取る
  話す
  説明する
  比較する
  分類する
  図を読む
  表を読む
  グラフを読む
  条件を整理する
  文脈で判断する
```

弱点補強では、知識タグだけでなく技能タグも使う。

## 17. purposeTags

学習目的を表すタグ。

```text
purposeTags:
  定期テスト
  検定対策
  弱点補強
  先取り
  復習
  本番形式
  スピンバイク
  車移動
  印刷用
  書き練習
  音声練習
```

同じ問題が複数の目的を持ってよい。

## 18. difficulty

難度の目安。

```text
difficulty:
  level:
    basic / standard / advanced / exam

  numeric:
    1 / 2 / 3 / 4 / 5

  note:
    難度メモ
```

当面は厳密な数値化をしない。GUI表示では「基本」「標準」「応用」「本番」程度でよい。

## 19. source

出典情報。

```text
source:
  sourceType:
    textbook / workbook / print / official / pastPaper / selfMade / generated

  name:
    教材名・公式名

  range:
    ページ・章・問題番号

  localOnly:
    true / false

  repositoryAllowed:
    true / false

  note:
    出典メモ
```

著作権管理のため、`localOnly` と `repositoryAllowed` を持たせる。

## 20. answerPolicy

採点や許容解答に関する情報。

```text
answerPolicy:
  answerType:
    exact / multipleAccepted / numeric / freeText / selfCheck / rubric

  acceptedAnswers:
    許容解答リスト

  caseSensitive:
    true / false

  allowKana:
    true / false

  allowKanji:
    true / false

  unitRequired:
    true / false

  manualScoring:
    true / false
```

例：

```text
漢字の読み：
  allowKana: true

数学：
  unitRequired: true

英作文：
  manualScoring: true
  answerType: rubric
```

## 21. timing

タイマーに関する推奨設定。

```text
timing:
  recommendedQuestionSeconds:
    10 / 20 / 30 / 60 / 300

  recommendedAnswerSeconds:
    5 / 10 / 30

  timerMode:
    normal / quick / noTimer / exam
```

GUIでは目的別問題集側の設定を優先し、問題ごとの timing は補助情報として扱う。

## 22. print

印刷用属性。

```text
print:
  printable:
    true / false

  layoutType:
    shortAnswer / multipleChoice / calculation / writing / composition / drawing / tableGraph / interviewCard

  answerSheet:
    true / false

  workingSpace:
    none / optional / recommended / required

  writingSpace:
    none / optional / required

  drawingSpace:
    none / optional / required

  graphPaper:
    true / false

  rulerCompass:
    true / false

  scoringBox:
    true / false

  explanationPrintable:
    true / false
```

印刷用問題出力設計と対応する。

## 23. visual

図・表・グラフに関する属性。

```text
visual:
  enabled:
    true / false

  visualType:
    image / table / graph / map / timeline / coordinatePlane / geometryFigure / interviewCard / mixed

  hasFigure:
    true / false

  hasTable:
    true / false

  hasGraph:
    true / false

  hasMap:
    true / false

  hasTimeline:
    true / false

  assets:
    図表アセット配列

  display:
    画面表示設定

  print:
    印刷表示設定
```

図・表・グラフつき問題データ設計と対応する。

## 24. audio

音声再生に関する属性。

```text
audio:
  enabled:
    true / false

  type:
    word / sentence / dialogue / passage / instruction

  source:
    official / generated / recorded / selfMade

  fileRef:
    音声ファイル参照

  transcriptRef:
    文字起こし参照

  playbackMode:
    once / repeat / shadowing
```

英検3級の listening、音読練習で使う。

## 25. speaking

スピーキング練習に関する属性。

```text
speaking:
  enabled:
    true / false

  promptType:
    read_aloud / answer_question / speech / interview

  expectedText:
    模範文または参考文

  evaluationCriteria:
    - pronunciation
    - fluency
    - accuracy
    - content
    - grammar
    - vocabulary
    - attitude

  aiFeedback:
    future
```

現時点では実装しないが、英検3級以降の設計上は保持する。

## 26. gui

GUI表示に関する補助情報。

```text
gui:
  displayName:
    画面に出す短い名前

  shortLabel:
    ボタンや一覧に出す短縮名

  iconType:
    math / english / kanji / science / social / exam / print / audio

  recommendedMode:
    normal / quick / print / exam / speaking

  childVisible:
    true / false

  parentOnly:
    true / false
```

GUI構造設計で確認した「子ども用」と「親用」の分離に対応する。

## 27. progress

進捗管理に関する属性。

```text
progress:
  trackable:
    true / false

  progressScope:
    questionSet / purposeSet / question / catalogItem

  masteryTarget:
    correctOnce / correctStreak3 / correctRate80 / manualComplete

  review:
    enabled: true / false
    intervalDays: 7 / 14 / 30
```

当面は既存の教材単位進捗を維持する。

## 28. status

問題データの状態。

```text
status:
  draft
  active
  archived
  deprecated
```

用途：

```text
draft:
  作成中

active:
  通常利用

archived:
  現在は使わないが保持

deprecated:
  置き換え済み
```

## 29. 完全形の例

### 29.1 数検5級 正負の数

```text
metadata:
  id: suken_g5_signed_numbers_Q001
  questionSetId: suken_grade5
  subjectType: certification

  certification:
    name: suken
    grade: 5級
    examPart: 1次計算技能
    officialScope: 正の数・負の数

  catalogRefs:
    - suken_grade5:primary_exam:signed_numbers

  domainTags:
    - 数と式

  questionTypeTags:
    - 計算

  knowledgeTags:
    - 正負の数
    - 加法

  skillTags:
    - 計算する
    - 符号を判断する

  purposeTags:
    - 検定対策
    - 先取り

  difficulty:
    level: basic

  print:
    printable: true
    layoutType: calculation
    workingSpace: optional

  visual:
    enabled: false

  audio:
    enabled: false

  speaking:
    enabled: false

  status: active
```

### 29.2 英検3級 リスニング

```text
metadata:
  id: eiken_g3_listening_dialogue_Q001
  questionSetId: eiken_grade3
  subjectType: certification

  certification:
    name: eiken
    grade: 3級
    examPart: listening
    officialScope: 会話の応答文選択

  catalogRefs:
    - eiken_grade3:listening:response_selection

  domainTags:
    - listening

  questionTypeTags:
    - リスニング
    - 応答選択

  knowledgeTags:
    - 会話表現
    - 依頼
    - 応答

  skillTags:
    - 聞き取る
    - 場面を判断する

  purposeTags:
    - 検定対策
    - 音声練習

  audio:
    enabled: true
    type: dialogue
    playbackMode: once

  speaking:
    enabled: false

  print:
    printable: true
    scriptPrintable: true

  status: draft
```

### 29.3 漢検4級 書取

```text
metadata:
  id: kanken_g4_writing_Q001
  questionSetId: kanken_grade4
  subjectType: certification

  certification:
    name: kanken
    grade: 4級
    examPart: 書取

  catalogRefs:
    - kanken_grade4:writing:new_kanji

  domainTags:
    - 書き

  questionTypeTags:
    - 書取

  knowledgeTags:
    - 漢検4級新出漢字
    - 同音異字

  skillTags:
    - 書く
    - 文脈で判断する

  purposeTags:
    - 検定対策
    - 書き練習
    - 印刷用

  answerPolicy:
    answerType: exact
    manualScoring: true

  print:
    printable: true
    layoutType: writing
    writingSpace: required
    scoringBox: true

  status: active
```

## 30. 既存データへの適用方針

既存の `app/data/*.js` は、すぐには移行しない。

```text
既存データへの方針
├─ 現行アプリを壊さない
├─ 新規教材から段階的に導入
├─ 既存教材は必要なものからタグ追加
├─ 目的別問題集を作るタイミングで補完
├─ 図表・印刷・音声は別フェーズで対応
└─ 一括移行は行わない
```

## 31. 実装段階の分け方

```text
段階1：
  設計のみ
  既存アプリ変更なし

段階2：
  新規問題に metadata を任意追加
  アプリ側は無視してもよい

段階3：
  目的別問題集で一部 metadata を利用
  domainTags / questionTypeTags / purposeTags から開始

段階4：
  印刷出力で print を利用

段階5：
  図表つき問題で visual を利用

段階6：
  英検で audio / speaking を利用

段階7：
  進捗・弱点補強で progress と履歴を利用
```

## 32. 現時点で行わないこと

```text
現時点で行わないこと
├─ app/index.html の変更
├─ app/data/*.js の一括変更
├─ question_sets_manifest.js の変更
├─ JSON Schema の確定
├─ 既存問題への全タグ付け
├─ 目的別問題集UIの実装
├─ 印刷機能の実装
├─ 図表表示の実装
├─ 音声再生の実装
└─ スピーキングAI評価の実装
```

## 33. 次に作るべき設計文書

次に作る文書は、実装移行計画である。

```text
次候補：
  metadata_migration_plan_v0_1.md
```

理由：

```text
共通メタデータを定義した後は、
├─ 既存データをどう壊さず扱うか
├─ 新規教材でどこまで使うか
├─ 目的別問題集をどこから試すか
├─ 印刷・図表・音声の順序をどうするか
を整理する必要がある。
```

## 34. まとめ

問題データ共通メタデータは、Junior Study Trainer を次の段階へ進めるための土台である。

```text
現行：
  教材セット単位の一問一答

次段階：
  目的別問題集
  検定対策
  印刷用出力
  図表つき問題

将来：
  音声再生
  スピーキング評価
  弱点自動抽出
  カタログ単位の習熟度管理
```

当面は、既存アプリを壊さず、新規問題から段階的にメタデータを付与する。
