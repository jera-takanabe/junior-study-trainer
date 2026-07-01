# 図・表・グラフつき問題データ設計 v0.1

## 1. この文書の目的

この文書は、Junior Study Trainer における「図・表・グラフつき問題」のデータ構造を整理するための設計メモである。

対象は、画面表示だけでなく、印刷用問題出力にも対応する問題である。

この文書では、すぐにアプリを改修するのではなく、今後の問題データ設計・印刷用出力設計・目的別問題集設計と矛盾しないように、図表を含む問題の扱いを整理する。

## 2. 現在の前提

現在の Junior Study Trainer は、テキスト中心の一問一答に向いている。

```text
現在向いている問題
├─ 用語確認
├─ 一問一答
├─ 短い計算
├─ 英単語
├─ 漢字の読み
├─ 社会・理科の暗記事項
└─ 選択肢なしの短答問題
```

一方で、今後は次のような問題を扱いたい。

```text
今後扱いたい問題
├─ 数学の図形問題
├─ 数学の座標・グラフ問題
├─ 数検の作図問題
├─ 理科の観察図・実験図
├─ 理科の表・グラフ
├─ 社会の地図・年表・資料
├─ 英検のEメール・長文・面接カード
├─ 英検二次試験のイラスト問題
├─ 漢検の書取欄つき問題
└─ 印刷用の総合問題
```

## 3. 基本方針

```text
基本方針
├─ 図・表・グラフは問題本文と分離して管理する
├─ 画像ファイルを直接本文に埋め込まない
├─ 画面表示用と印刷用でサイズを分けられるようにする
├─ 著作権のある図版はリポジトリに入れない
├─ 自作図・自作表・自作グラフを優先する
├─ 表データは可能なら構造化する
├─ グラフは可能なら元データから再生成できるようにする
├─ 地図・年表は専用属性を持たせる
├─ 英検面接カードのような複合表示にも対応できるようにする
└─ 既存アプリはすぐには変更しない
```

## 4. visual 属性の基本形

問題データには、図表に関する属性として `visual` を持たせる。

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

  hasCoordinatePlane:
    true / false

  assets:
    図表アセットの配列

  display:
    画面表示設定

  print:
    印刷表示設定

  copyright:
    著作権・出典管理
```

## 5. 図表アセットの考え方

1つの問題に、複数の図表が付く場合がある。

```text
例
├─ 英検二次面接カード：パッセージ、イラスト、質問
├─ 理科実験問題：実験図、表、グラフ
├─ 社会資料問題：地図、年表、統計表
└─ 数学図形問題：図形、補助線、作図欄
```

そのため、`assets` は配列として扱う。

```text
assets:
  - assetId:
      fig_001
    assetType:
      image
    role:
      mainFigure
    ref:
      path/to/image.png
    caption:
      図1
    altText:
      図の説明
    displaySize:
      medium
    printSize:
      large
```

## 6. assetType

```text
assetType
├─ image
├─ table
├─ graph
├─ map
├─ timeline
├─ coordinatePlane
├─ geometryFigure
├─ writingGrid
├─ interviewCard
└─ composite
```

## 7. 画像参照の設計

画像ファイルは、原則として問題本文とは分ける。

```text
imageRef:
  localPath:
    .local/assets/...

  publicPath:
    app/assets/...

  sourcePath:
    原本画像または作成元

  generatedFrom:
    SVG / Mermaid / Python / 手描き / スキャン
```

### 7.1 公開リポジトリに入れてよいもの

```text
公開可
├─ 自作図
├─ 自作グラフ
├─ 自作表
├─ 著作権上問題のない素材
├─ 自作の座標平面
├─ 自作の作図用図形
└─ 自作の模式図
```

### 7.2 公開リポジトリに入れないもの

```text
公開不可または要注意
├─ 教科書本文画像
├─ ワークの図版
├─ 公式過去問の図版
├─ 市販問題集の図版
├─ スキャン画像
├─ 配布プリントの画像
└─ 著作権が不明な地図・写真
```

これらは `.local/` で管理する。

## 8. 表データの設計

表は、可能なら画像ではなく構造化データとして持つ。

```text
table:
  columns:
    - name: 時間
      unit: 分
    - name: 温度
      unit: ℃

  rows:
    - [0, 20]
    - [5, 24]
    - [10, 28]

  caption:
    表1

  display:
    showHeader: true
    compact: false

  print:
    writable: false
    size: medium
```

表を構造化すると、画面表示・印刷・グラフ生成・アクセシビリティ・再利用に強くなる。

## 9. グラフデータの設計

グラフは、可能なら元データとグラフ種類を持つ。

```text
graph:
  graphType:
    line / bar / circle / histogram / scatter / proportional / inverseProportional

  xAxis:
    label: 時間
    unit: 分

  yAxis:
    label: 温度
    unit: ℃

  data:
    - x: 0
      y: 20
    - x: 5
      y: 24
    - x: 10
      y: 28

  display:
    grid: true
    showPoints: true

  print:
    writable: true
    size: large
```

当面は画像グラフでもよいが、将来的には構造化データから再生成できる形を目指す。

## 10. 座標平面の設計

```text
coordinatePlane:
  xRange:
    min: -6
    max: 6

  yRange:
    min: -6
    max: 6

  grid:
    true

  axis:
    true

  points:
    - label: A
      x: 2
      y: 3

  lines:
    - equation: y = 2x
      label: l

  writable:
    true

  printSize:
    large
```

## 11. 図形データの設計

```text
geometryFigure:
  figureType:
    triangle / quadrilateral / circle / sector / prism / cylinder / solid / construction

  labels:
    - A
    - B
    - C

  measurements:
    - target: AB
      value: 6
      unit: cm

    - target: angleA
      value: 60
      unit: degree

  writable:
    true

  drawingRequired:
    true / false

  rulerCompass:
    true / false

  printSize:
    medium / large
```

## 12. 地図データの設計

```text
map:
  mapType:
    world / japan / region / historical / thematic

  region:
    世界 / 日本 / アジア / ヨーロッパ / 近畿地方

  layers:
    - countryBorders
    - rivers
    - mountains
    - cities
    - tradeRoutes
    - historicalEvents

  labels:
    visible / hidden / partial

  writable:
    true / false

  printSize:
    large
```

地図は著作権に注意する。自作の簡略地図や利用条件を確認した白地図を優先し、教科書地図は公開リポジトリに入れない。

## 13. 年表データの設計

```text
timeline:
  timelineType:
    japanese / world / parallel / thematic

  range:
    startYear: -10000
    endYear: 1600

  events:
    - year: -10000
      label: 縄文時代の始まり
      region: 日本
      category: 生活

    - year: -3000
      label: エジプト文明
      region: 世界
      category: 文明

  display:
    parallelRows: true
    alignByYear: true

  print:
    size: fullWidth
    writable: true
```

既存の歴史年表・地図設計とは整合させる。

## 14. 英検面接カードの設計

英検3級の二次試験では、パッセージとイラストを組み合わせる。

```text
interviewCard:
  passage:
    title: タイトル
    textRef: passage_001
    wordCount: 30

  illustration:
    assetId: illustration_001
    writable: false

  questions:
    - questionId: q1
      type: passageQuestion

    - questionId: q2
      type: illustrationQuestion

    - questionId: q3
      type: personalQuestion

  print:
    cardStyle: true
    examinerScript: true
    answerMemo: true
```

面接カードは、将来の音声入力・AI評価とも接続する。

## 15. 画面表示と印刷表示の違い

同じ図表でも、画面と紙では必要な設定が違う。

```text
画面表示
├─ 小さめでも拡大できる
├─ スクロールできる
├─ タップで拡大できる
├─ 色を使いやすい
└─ 1問ずつ表示する

印刷表示
├─ 白黒でも分かる必要がある
├─ 書き込みスペースが必要
├─ 図が小さいと使いづらい
├─ ページまたぎを避ける必要がある
└─ 複数問を一覧表示する
```

そのため、`display` と `print` を分ける。

```text
display:
  size: small / medium / large
  zoomable: true / false
  placement: beforeQuestion / afterQuestion / inline

print:
  size: small / medium / large / fullWidth
  placement: beforeQuestion / afterQuestion / inline
  keepTogether: true / false
  pageBreakBefore: true / false
  writable: true / false
```

## 16. 代替テキスト

図表には、可能な範囲で代替テキストを持たせる。

```text
altText:
  図表の内容を文章で説明する
```

用途：

```text
代替テキストの用途
├─ アクセシビリティ
├─ 印刷できない場合の説明
├─ AIによる問題生成・解説
├─ 検索
└─ 図表なしでも内容確認するため
```

## 17. 問題タイプ別の visual 設定例

### 17.1 数検5級 作図問題

```text
visual:
  enabled: true
  visualType: geometryFigure
  assets:
    - assetType: geometryFigure
      role: baseFigure
      writable: true
      rulerCompass: true
  print:
    size: large
    keepTogether: true
```

### 17.2 数学 比例グラフ問題

```text
visual:
  enabled: true
  visualType: coordinatePlane
  assets:
    - assetType: coordinatePlane
      writable: true
      graphPaper: true
  print:
    size: large
```

### 17.3 理科 実験結果の表

```text
visual:
  enabled: true
  visualType: table
  assets:
    - assetType: table
      role: experimentResult
      writable: false
  print:
    size: medium
```

### 17.4 社会 地図問題

```text
visual:
  enabled: true
  visualType: map
  assets:
    - assetType: map
      role: questionMap
      writable: true
  print:
    size: large
```

### 17.5 歴史 年表問題

```text
visual:
  enabled: true
  visualType: timeline
  assets:
    - assetType: timeline
      role: parallelTimeline
      writable: true
  print:
    size: fullWidth
```

### 17.6 英検3級 面接カード

```text
visual:
  enabled: true
  visualType: interviewCard
  assets:
    - assetType: image
      role: illustration
      writable: false
  print:
    size: fullWidth
```

## 18. ファイル配置

図表アセットは、公開可能なものとローカル専用を分ける。

```text
公開可能：
  app/assets/visuals/
  docs/assets/visuals/

ローカル専用：
  .local/assets/visuals/
  .local/source_materials/
```

推奨ディレクトリ：

```text
app/assets/visuals/
├─ math/
├─ science/
├─ social/
├─ english/
├─ suken/
├─ eiken/
└─ kanken/

.local/assets/visuals/
├─ textbook/
├─ workbook/
├─ official_past_papers/
├─ scans/
└─ drafts/
```

現時点ではディレクトリ作成は行わない。設計のみとする。

## 19. 著作権・出典管理

図表には、出典情報を持たせる。

```text
copyright:
  sourceType:
    selfMade / official / textbook / workbook / publicDomain / licensed / unknown

  sourceName:
    出典名

  sourceRange:
    ページ・問題番号など

  repositoryAllowed:
    true / false

  localOnly:
    true / false

  notes:
    注意事項
```

原則：

```text
原則
├─ repositoryAllowed が false のものは公開リポジトリに入れない
├─ localOnly が true のものは .local/ に置く
├─ 問題データには参照だけ持たせる
└─ 自作に置き換えられるものは自作する
```

## 20. 既存問題データとの関係

既存の `app/data/*.js` は、すぐには変更しない。

```text
既存問題データの扱い
├─ 現行アプリを壊さない
├─ 新属性は設計だけ先に整理する
├─ 新規問題作成時に visual 属性を意識する
├─ 既存問題への一括適用は後回し
└─ 図表つき問題は別プロトタイプで試す
```

## 21. 実装段階の分け方

```text
段階1：設計のみ
  この文書を作成し、visual 属性を整理する。

段階2：画像1枚つき問題の試作
  自作画像を1枚表示し、問題データから参照する。

段階3：印刷用Markdownへの画像出力
  Markdownに画像を出力し、PDF化を確認する。

段階4：表・グラフの構造化
  table、graph、coordinatePlane を扱う。

段階5：地図・年表・面接カード
  map、timeline、interviewCard、composite を扱う。
```

## 22. 現時点で行わないこと

```text
現時点で行わないこと
├─ app/index.html の変更
├─ app/data/*.js の変更
├─ question_sets_manifest.js の変更
├─ 画像表示機能の実装
├─ 画像ファイルの追加
├─ 表・グラフ描画機能の実装
├─ PDF出力機能の実装
├─ 既存問題データの移行
└─ 著作権資料のリポジトリ登録
```

## 23. 次に作るべき設計文書

次に作る文書は、問題データ共通メタデータの設計である。

```text
次候補：
  question_metadata_schema_design_v0_1.md
```

理由：

```text
ここまでで、
├─ カタログ
├─ 目的別問題集
├─ 印刷
└─ 図表
が整理できたため、次は実際の問題データに持たせる共通メタデータを整理する段階に入れる。
```

## 24. まとめ

図・表・グラフつき問題は、今後の Junior Study Trainer を本格的な学校教科・検定対策に広げるための重要要素である。

```text
テキスト問題：
  現行アプリで扱いやすい

図表つき問題：
  数学・理科・社会・英検・数検で必要

印刷用出力：
  図表問題と強く関係する

著作権管理：
  公開リポジトリと .local/ を分ける

実装方針：
  まずは設計
  次に自作画像1枚のプロトタイプ
```

当面は、既存アプリを壊さず、図表つき問題の設計と新規問題作成時の属性意識から始める。
