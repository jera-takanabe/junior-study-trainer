# カタログ横断と問題データ設計への反映 v0.1

## 1. この文書の目的

この文書は、これまで作成した学校教科カタログと検定カタログを、今後の Junior Study Trainer の問題データ設計へどう反映するかを整理するための設計メモである。

対象は次のカタログ群である。

```text
学校教科カタログ
├─ school_science_jhs1_catalog_v0_1.md
├─ school_math_jhs1_catalog_v0_1.md
├─ school_geography_jhs1_catalog_v0_1.md
├─ school_history_jhs1_catalog_v0_1.md
└─ school_english_jhs1_catalog_v0_1.md

検定カタログ
├─ certification_catalog_policy_v0_1.md
├─ suken_grade6_catalog_v0_1.md
├─ suken_grade5_catalog_v0_1.md
├─ eiken_grade3_catalog_v0_1.md
└─ kanken_grade4_catalog_v0_1.md
```

この文書では、すぐにアプリを改修するのではなく、次の段階で何を変更すべきかを明確にする。

## 2. 現在の前提

現在の Junior Study Trainer は、教材単位の一問一答アプリとして機能している。

```text
現在できていること
├─ 教材選択
├─ 問題データの動的読み込み
├─ タイマー付き一問一答
├─ 手動正誤
├─ 教材単位の履歴・進捗
└─ 選択教材単位のバックアップ
```

一方で、今後の課題は、教材ファイルを増やすだけでなく、学習内容・目的・出典・問題形式を分離して扱えるようにすることである。

## 3. 基本方針

今後の問題データ設計では、次の考え方を採用する。

```text
基本方針
├─ 教材セットと学習内容を分離する
├─ 学校教科と検定を同じ仕組みで扱う
├─ 問題には複数のタグを持たせる
├─ 目的別問題集はタグまたは明示IDで作れるようにする
├─ 出典・ページ範囲・公式範囲を追跡できるようにする
├─ 図・表・グラフつき問題を将来扱えるようにする
├─ 印刷用出力を妨げない構造にする
├─ 英語の音声再生・スピーキング評価を将来扱えるようにする
└─ 既存問題データは一気に移行しない
```

## 4. カタログの役割

カタログは、問題データそのものではなく、問題を整理するための基準である。

```text
カタログの役割
├─ 学習内容の一覧
├─ 分割単位の基準
├─ タグ設計の基準
├─ 問題セット作成時の網羅チェック
├─ 目的別問題集の抽出条件
├─ 先取り・復習・検定対策の対応表
└─ 不足問題の発見
```

カタログを正本として使うことで、問題が増えても「何のための問題か」が追跡しやすくなる。

## 5. 学校教科と検定の違い

学校教科と検定では、作成単位が異なる。

```text
学校教科：
  教科 × 学年
  例：中1数学、中1英語、中1理科

検定：
  検定 × 級
  例：数検5級、英検3級、漢検4級
```

ただし、問題データ上は共通の属性で扱う。

## 6. 問題データに追加したい共通属性

将来的な問題データでは、次のような属性を持たせる。

```text
id:
  問題ID

questionSetId:
  現在の教材セットID

catalogRefs:
  対応するカタログ上の学習内容

subject:
  学校教科の場合の教科
  例：math, english, science, social, japanese

schoolStage:
  学校教科の場合の学年・段階
  例：jhs1

certification:
  検定の場合の検定種別
  例：suken, eiken, kanken

grade:
  検定の場合の級
  例：5級, 3級, 4級

domainTags:
  大きな領域
  例：数と式、reading、書き、図形、歴史年表

questionTypeTags:
  問題形式
  例：計算、空所補充、書取、内容一致、図形、グラフ

knowledgeTags:
  知識項目
  例：正負の数、一次方程式、受け身、四字熟語

skillTags:
  使う技能
  例：読む、書く、計算する、聞き取る、説明する、比較する

source:
  出典・教材・公式範囲

sourceRange:
  ページ・章・単元・公式範囲

difficulty:
  目安難度

purposeTags:
  目的
  例：定期テスト、先取り、復習、検定対策、弱点補強

print:
  印刷用出力に関する属性

visual:
  図・表・グラフに関する属性

audio:
  音声再生に関する属性

speaking:
  音声入力・スピーキング評価に関する属性
```

## 7. catalogRefs の考え方

`catalogRefs` は、問題がどの学習内容に対応しているかを示す。

例：

```text
数学・学校教科の場合
catalogRefs:
  - school_math_jhs1:positive_negative_numbers:addition_subtraction

数検5級の場合
catalogRefs:
  - suken_grade5:primary_exam:signed_numbers
  - suken_grade5:primary_exam:linear_equations

英検3級の場合
catalogRefs:
  - eiken_grade3:reading:short_text_gap_fill
  - eiken_grade3:writing:email_reply

漢検4級の場合
catalogRefs:
  - kanken_grade4:writing:homophones
  - kanken_grade4:vocabulary:yojijukugo
```

ID体系はまだ確定しない。まずは人間が読める安定した名前を仮置きし、実装時に正式化する。

## 8. 目的別問題集の作り方

目的別問題集には、2つの作り方がある。

### 8.1 明示ID方式

問題IDを直接並べる方式。

```text
メリット：
  意図どおりの問題集を作りやすい
  問題順を完全に制御できる
  定期テスト直前対策に向く

デメリット：
  問題追加時に手作業で更新が必要
```

### 8.2 抽出条件方式

タグ条件で問題を抽出する方式。

```text
メリット：
  問題追加に強い
  弱点補強・検定対策・復習に向く
  カタログとの相性がよい

デメリット：
  条件設計が甘いと意図しない問題が混ざる
```

### 8.3 推奨方針

当面は両方を使える設計にする。

```text
定期テスト対策：
  明示ID方式を優先

検定対策：
  抽出条件方式を優先

弱点補強：
  抽出条件方式を優先

本番形式演習：
  明示ID方式または固定セット

総復習：
  抽出条件方式
```

## 9. 学校教科カタログからの反映

学校教科カタログは、主に次の目的で使う。

```text
学校教科カタログの利用
├─ 教科書単元ごとの問題作成
├─ 定期テスト範囲の切り出し
├─ 学年全体の網羅確認
├─ 先取り・復習の管理
├─ 学校ワークとの対応
└─ 検定カタログとの接続
```

例：

```text
中1数学：
  学校定期テスト
  数検5級
  数検6級からの橋渡し

中1英語：
  学校定期テスト
  英検3級
  英検準2級への橋渡し

中1国語：
  学校定期テスト
  漢検4級
  語彙・読解・作文への接続
```

## 10. 検定カタログからの反映

検定カタログは、主に次の目的で使う。

```text
検定カタログの利用
├─ 公式範囲の網羅確認
├─ 級ごとの出題形式整理
├─ 学校範囲との重なり確認
├─ 先取り学習の計画
├─ 本番形式問題セットの作成
└─ 下位級・上位級との接続
```

直近では次のように扱う。

```text
数検6級：
  小学校算数の薄い総点検

数検5級：
  中1数学の先取り
  1次計算技能と2次数理技能を分離

英検3級：
  Reading / Writing / Listening / Speaking を分離
  音声再生とスピーキング評価を将来機能として保持

漢検4級：
  学校国語とは別に漢字先取り
  読み・書き・語彙・部首・四字熟語を分離
```

## 11. 図・表・グラフつき問題への対応

今後、数学・理科・社会・英語・数検・英検で、図・表・グラフつき問題が必要になる。

問題データには、最低限次の属性を想定する。

```text
visual:
  hasFigure: true / false
  hasTable: true / false
  hasGraph: true / false
  hasMap: true / false
  hasCoordinatePlane: true / false
  imageRef: 画像ファイル参照
  caption: 図表の説明
  altText: 代替テキスト
```

現時点では画像表示の実装は行わない。ただし、設計上は妨げないようにする。

## 12. 印刷用出力への対応

印刷用問題一覧・解答一覧は、近い将来の優先課題とする。

理由：

```text
印刷が必要な場面
├─ 学校提出用
├─ 書き取り練習
├─ 作図練習
├─ 途中式が必要な数学
├─ 英作文
├─ 面接カード練習
├─ 本番形式演習
└─ 親が採点・確認する場面
```

問題データには、次の属性を想定する。

```text
print:
  printable: true / false
  answerSheet: true / false
  workingSpace: none / optional / recommended / required
  writingSpace: none / optional / required
  graphPaper: true / false
  rulerCompass: true / false
  scriptPrintable: true / false
  rubricPrintable: true / false
  scoringBox: true / false
```

## 13. 音声再生への対応

英検3級を中心に、音声再生が必要になる。

```text
audio:
  enabled: true / false
  type: word / sentence / dialogue / passage / instruction
  source: official / generated / recorded / self-made
  fileRef: 音声ファイル参照
  transcriptRef: 文字起こし参照
  playbackMode: once / repeat / shadowing
```

現時点では実装しない。問題データ設計だけ先に考慮する。

## 14. スピーキング評価への対応

英検3級の二次試験対策として、将来的に音声入力とAI評価を扱う。

```text
speaking:
  enabled: true / false
  promptType: read_aloud / answer_question / speech / interview
  expectedText: 模範文または参考文
  evaluationCriteria:
    - pronunciation
    - fluency
    - accuracy
    - content
    - grammar
    - vocabulary
    - attitude
```

現時点では実装しない。まずは、スピーキング練習問題を紙または通常問題として扱えるようにする。

## 15. 既存問題データの扱い

既存の `app/data/*.js` は、すぐには移行しない。

```text
既存問題データの扱い
├─ 現行アプリの動作を優先
├─ 既存形式を壊さない
├─ 新属性は設計だけ先に整理
├─ 新教材作成時に徐々にタグを入れる
├─ 既存教材へのタグ付けは後回し
└─ 移行は別フェーズで行う
```

既存問題に一括でタグを付けると作業量が大きくなるため、新規問題から段階的に反映する。

## 16. 近い将来の実装優先順位

```text
優先順位1：
  目的別問題集の設計
  明示ID方式と抽出条件方式の整理

優先順位2：
  印刷用問題一覧・解答一覧の設計

優先順位3：
  図・表・グラフつき問題のデータ構造

優先順位4：
  問題データの共通メタデータ拡張

優先順位5：
  音声再生

優先順位6：
  音声入力・AIスピーキング評価
```

印刷用出力は、図・表・グラフ対応と関係が深いため、完全に切り離さずに設計する。

## 17. 次に作るべき設計文書

次に作る文書は、次のどちらかである。

```text
候補A：
  purpose_based_question_sets_design_v0_1.md
  目的別問題集の設計

候補B：
  printable_question_output_design_v0_1.md
  印刷用問題一覧・解答一覧の設計
```

推奨は候補Aである。

理由：

```text
目的別問題集を先に整理すると、
├─ 検定対策
├─ 定期テスト対策
├─ 弱点補強
├─ 先取り
├─ 復習
└─ 本番形式演習
を同じ考え方で扱えるため。
```

## 18. 現時点で行わないこと

```text
現時点で行わないこと
├─ app/index.html の変更
├─ app/data/*.js の変更
├─ question_sets_manifest.js の変更
├─ 既存問題データの移行
├─ JSONスキーマの確定
├─ 画像表示機能の実装
├─ 印刷PDF生成機能の実装
├─ 音声再生機能の実装
└─ スピーキングAI評価機能の実装
```

## 19. まとめ

学校教科カタログと検定カタログは、今後の問題データ設計の上位概念として扱う。

```text
カタログ：
  学習内容と出題範囲の正本

問題データ：
  実際に出題する単位

問題セット：
  学習目的に応じて問題を束ねたもの

目的別問題集：
  明示IDまたは抽出条件で作る問題集合

進捗：
  教材単位だけでなく、将来的には目的別問題集単位でも管理する
```

この文書により、次の設計作業は「目的別問題集の設計」に進められる。
