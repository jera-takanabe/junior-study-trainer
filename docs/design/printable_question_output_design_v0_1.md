# 印刷用問題出力設計 v0.1

## 1. この文書の目的

この文書は、Junior Study Trainer における「印刷用問題出力」の設計方針を整理するための設計メモである。

印刷用問題出力とは、アプリ上で一問一答として解くだけでなく、紙に印刷して使える問題用紙・解答用紙・解答一覧・解説を出力する仕組みを指す。

目的は、すぐにPDF出力機能を実装することではなく、問題データ設計・目的別問題集設計・図表対応・書き問題対応と矛盾しないように、印刷時に必要な要素を整理することである。

## 2. 現在の前提

現在のアプリは、画面上で問題を表示し、解答確認後に手動で正誤を記録する。

```text
現在の主用途
├─ タイマー付き一問一答
├─ 車移動中の口頭確認
├─ スピンバイク中の短時間演習
├─ 用語・暗記の反復
└─ 手動正誤管理
```

一方で、今後は次のような紙演習が必要になる。

```text
印刷が必要な場面
├─ 数学の途中式を書く問題
├─ 算数・数学の文章題
├─ 作図問題
├─ 漢検の書取
├─ 英検ライティング
├─ 英検面接カード風練習
├─ 理科・社会の図表問題
├─ 定期テスト予想問題
├─ 学校提出用の自主学習プリント
└─ 親が採点する確認テスト
```

## 3. 基本方針

```text
基本方針
├─ 印刷用出力は、目的別問題集の一種として扱う
├─ アプリ用問題と印刷用問題を完全には分けない
├─ 同じ問題データから画面用・印刷用の両方を出せるようにする
├─ ただし、印刷専用の属性を問題データに持たせる
├─ 問題用紙と解答用紙と解答一覧を分離できるようにする
├─ 書き込み欄・途中式欄・作図欄を指定できるようにする
├─ 図・表・グラフの扱いを先に考慮する
├─ 著作権上、原本本文や画像の再配布に注意する
└─ 既存アプリはすぐには変更しない
```

## 4. 印刷用出力の種類

印刷用出力は、最低限次の種類に分ける。

```text
印刷用出力
├─ 問題用紙
├─ 解答用紙
├─ 解答一覧
├─ 解答・解説
├─ 採点表
├─ 再テスト用紙
└─ 弱点復習用紙
```

### 4.1 問題用紙

生徒が解くための紙。

```text
問題用紙に含めるもの
├─ タイトル
├─ 対象範囲
├─ 問題番号
├─ 問題文
├─ 選択肢
├─ 図・表・グラフ
├─ 解答欄
├─ 途中式欄
├─ 作図欄
└─ 注意事項
```

### 4.2 解答用紙

問題用紙とは別に、答えだけを書く紙。

```text
解答用紙に含めるもの
├─ タイトル
├─ 氏名欄
├─ 日付欄
├─ 問題番号
├─ 解答欄
├─ 書取欄
├─ 英作文欄
├─ 途中式欄
└─ 採点欄
```

### 4.3 解答一覧

保護者または本人が採点するための答えのみの一覧。

```text
解答一覧に含めるもの
├─ 問題番号
├─ 正答
├─ 別解
├─ 許容表記
├─ 配点
└─ 採点メモ
```

### 4.4 解答・解説

理解を深めるための解説つき資料。

```text
解答・解説に含めるもの
├─ 正答
├─ 解き方
├─ 注意点
├─ よくある誤答
├─ 関連する学習内容
└─ 復習すべきタグ
```

## 5. 出力形式

当面は、Markdown と PDF を想定する。

```text
出力形式
├─ Markdown
│  ├─ 編集しやすい
│  ├─ Git管理しやすい
│  ├─ ChatGPTで作りやすい
│  └─ PDF化の前段階に向く
│
└─ PDF
   ├─ 印刷しやすい
   ├─ レイアウトが崩れにくい
   ├─ 学校提出に向く
   └─ 家庭内配布に向く
```

初期段階では Markdown 出力を優先し、必要に応じてPDF化する。

## 6. レイアウト単位

印刷レイアウトでは、問題ごとに必要なスペースが異なる。

```text
レイアウト単位
├─ 1行問題
├─ 短答問題
├─ 選択問題
├─ 計算問題
├─ 文章題
├─ 書取問題
├─ 英作文問題
├─ 作図問題
├─ 図表問題
├─ グラフ問題
└─ 面接カード風問題
```

## 7. 問題データに必要な印刷属性

問題データには、印刷に関する属性を持たせる。

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

  pageBreakBefore:
    true / false

  keepTogether:
    true / false
```

## 8. 図・表・グラフ属性

図・表・グラフつき問題では、印刷時の扱いを明示する。

```text
visual:
  hasFigure:
    true / false

  hasTable:
    true / false

  hasGraph:
    true / false

  hasMap:
    true / false

  hasCoordinatePlane:
    true / false

  imageRef:
    画像ファイル参照

  caption:
    図表の説明

  altText:
    代替テキスト

  printSize:
    small / medium / large / fullWidth

  writableOnFigure:
    true / false
```

### 8.1 図表の注意点

```text
図表の注意点
├─ 画面表示と印刷では必要サイズが違う
├─ 書き込みが必要な図は大きめにする
├─ 白黒印刷でも分かるようにする
├─ 著作権のある図版はリポジトリに入れない
└─ 自作図またはローカル管理を基本にする
```

## 9. 教科・検定別の印刷要件

### 9.1 数学・数検

```text
数学・数検で必要なもの
├─ 途中式欄
├─ 計算スペース
├─ 図形への書き込み
├─ 作図欄
├─ 座標平面
├─ グラフ用紙
├─ 単位記入欄
├─ 文章題の条件整理欄
└─ 本番形式の時間設定
```

代表的なレイアウト：

```text
計算問題：
  問題文 + 解答欄 + 小さめの途中式欄

文章題：
  問題文 + 条件整理欄 + 途中式欄 + 答え欄

作図問題：
  問題文 + 大きな作図欄 + コンパス・定規指定

グラフ問題：
  問題文 + 座標平面 + 答え欄
```

### 9.2 英語・英検

```text
英語・英検で必要なもの
├─ 選択問題の解答欄
├─ 長文問題の本文欄
├─ Eメール返信欄
├─ 意見英作文欄
├─ リスニングスクリプト
├─ 音声ファイル参照
├─ 面接カード風問題
├─ 音読パッセージ
└─ 採点ルーブリック
```

代表的なレイアウト：

```text
語彙問題：
  短文 + 選択肢 + 解答欄

長文問題：
  本文 + 設問 + 選択肢

Eメール返信：
  メール本文 + 条件 + 返信記入欄

意見英作文：
  質問 + 語数目安 + 作文欄 + チェック欄

面接練習：
  パッセージ + イラスト + 質問 + 回答メモ欄
```

### 9.3 国語・漢検

```text
国語・漢検で必要なもの
├─ 読み問題
├─ 書取欄
├─ 部首欄
├─ 送り仮名欄
├─ 対義語・類義語欄
├─ 四字熟語欄
├─ 誤字訂正欄
├─ 採点欄
└─ 書き直し欄
```

代表的なレイアウト：

```text
読み問題：
  文中の漢字 + 読み欄

書取問題：
  文中のひらがな + 漢字記入欄

部首問題：
  漢字 + 部首欄 + 部首名欄

誤字訂正：
  文 + 誤字欄 + 正しい漢字欄

四字熟語：
  空欄補充 + 意味確認欄
```

### 9.4 理科

```text
理科で必要なもの
├─ 図の読み取り
├─ 実験器具の名称
├─ 観察結果の表
├─ グラフ
├─ 記述欄
├─ 用語欄
└─ 理由説明欄
```

### 9.5 社会

```text
社会で必要なもの
├─ 地図
├─ 年表
├─ 資料
├─ 表
├─ グラフ
├─ 用語欄
├─ 記述欄
└─ 並べ替え欄
```

## 10. 問題用紙の基本テンプレート

```text
# タイトル

対象：
日付：
氏名：
制限時間：
問題数：

## 注意
- 指示に従って答えなさい。
- 必要な途中式や考え方も書きなさい。

## 問題

1. 問題文
   解答欄：

2. 問題文
   解答欄：
```

## 11. 解答用紙の基本テンプレート

```text
# 解答用紙

タイトル：
日付：
氏名：

| 問題 | 解答 | 採点 |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
```

記述式・書取・英作文では表形式ではなく、広い欄を用意する。

## 12. 解答一覧の基本テンプレート

```text
# 解答一覧

| 問題 | 正答 | 備考 |
|---|---|---|
| 1 | 正答 | 別解・許容表記 |
| 2 | 正答 |  |
```

## 13. 解答・解説の基本テンプレート

```text
# 解答・解説

## 1
正答：
解説：
注意点：
関連タグ：

## 2
正答：
解説：
注意点：
関連タグ：
```

## 14. 採点欄・チェック欄

印刷用出力では、保護者または本人が採点しやすいようにする。

```text
採点欄
├─ ○ / ×
├─ 点数
├─ やり直しチェック
├─ 再テスト対象
├─ 苦手タグ
└─ コメント欄
```

チェック欄の例：

```text
□ 正解
□ 自力で解けた
□ 途中でヒントを見た
□ もう一度解く
□ アプリで復習する
```

## 15. 余白設計

紙では、余白が学習の質に影響する。

```text
余白が必要な問題
├─ 数学の途中式
├─ 文章題の条件整理
├─ 作図
├─ 英作文
├─ 漢字の書き直し
├─ 理科の理由説明
└─ 社会の記述問題
```

属性例：

```text
space:
  answerLines:
    1 / 2 / 3 / more

  blankHeight:
    small / medium / large

  grid:
    none / square / graph / genkouyoushi

  memoSpace:
    true / false
```

## 16. 原稿用紙・英作文欄

英作文や国語の記述では、専用欄が必要になる。

```text
composition:
  language:
    japanese / english

  targetWords:
    25-35 / 50-80 / free

  lineCount:
    3 / 5 / 8 / 10

  showWordCountBox:
    true / false

  showChecklist:
    true / false
```

英検3級では、Eメール返信と意見英作文に対応する。

## 17. 漢字書取欄

漢検・国語では、漢字を書く欄が必要になる。

```text
kanjiWriting:
  cells:
    true / false

  cellCount:
    1 / 2 / 4 / 8

  retryCells:
    true / false

  showReading:
    true / false

  showOkurigana:
    true / false
```

書取は、アプリで確認した後に紙で書かせる運用がよい。

## 18. 作図欄

数学・数検では作図欄が必要になる。

```text
drawing:
  enabled:
    true / false

  drawingArea:
    small / medium / large / fullWidth

  rulerCompass:
    true / false

  baseFigureRef:
    既存図

  writableOnFigure:
    true / false
```

作図問題は、画面上の一問一答よりも紙のほうが適している。

## 19. 表・グラフ欄

理科・社会・数学・英語では、表やグラフを使う問題がある。

```text
tableGraph:
  table:
    true / false

  graph:
    true / false

  coordinatePlane:
    true / false

  histogram:
    true / false

  writable:
    true / false

  printSize:
    small / medium / large
```

## 20. 面接カード風出力

英検3級の二次試験では、面接カード風の印刷出力が有効である。

```text
interviewCard:
  passage:
    true / false

  illustration:
    true / false

  questions:
    true / false

  answerMemo:
    true / false

  rubric:
    true / false

  examinerScript:
    true / false
```

最初は紙の面接カードで練習し、将来的に音声入力・AI評価へ接続する。

## 21. 目的別問題集との関係

印刷用出力は、目的別問題集の出力形式の一つとして扱う。

```text
purposeSet:
  purposeType:
    印刷用

  output:
    print

  printMode:
    problemOnly / answerSheet / answerList / explanation / fullPack
```

例：

```text
漢検4級 書取プリント：
  purposeType: 印刷用
  output: print
  printMode: problemOnly + answerList

数検5級 方程式文章題：
  purposeType: 印刷用
  output: print
  printMode: problemOnly + explanation

英検3級 英作文：
  purposeType: 印刷用
  output: print
  printMode: answerSheet + rubric
```

## 22. 出力パック

印刷では、複数ファイルをまとめて出すことがある。

```text
fullPack:
  問題用紙
  解答用紙
  解答一覧
  解答・解説
  採点表
```

用途例：

```text
定期テスト予想問題：
  fullPack

漢検書取練習：
  問題用紙 + 解答一覧

英検ライティング：
  問題用紙 + 解答用紙 + ルーブリック

数検本番形式：
  問題用紙 + 解答用紙 + 解答・解説
```

## 23. ファイル名規則

印刷用出力では、ファイル名に目的と日付を含める。

```text
例：
  math_test1_final_review_questions_20260701.md
  math_test1_final_review_answers_20260701.md
  suken_grade5_linear_equations_print_20260701.md
  eiken_grade3_writing_answer_sheet_20260701.md
  kanken_grade4_writing_practice_20260701.md
```

PDF化する場合も同じ命名規則を使う。

## 24. 著作権・ローカル管理

教科書・ワーク・過去問・公式問題の本文や図版を扱う場合は、著作権に注意する。

```text
方針
├─ 原本PDFはリポジトリに入れない
├─ 著作権のある本文を大量に転載しない
├─ 画像・図版はローカル管理を基本にする
├─ 自作問題はリポジトリ登録可能
├─ 出典情報は記録する
└─ 家庭内利用と公開リポジトリを分ける
```

既存方針どおり、`.local/` を活用する。

## 25. 実装段階の分け方

### 25.1 段階1：Markdown出力

```text
段階1
├─ 問題用紙Markdown
├─ 解答一覧Markdown
├─ 解答・解説Markdown
└─ 手動でPDF化
```

### 25.2 段階2：テンプレート化

```text
段階2
├─ 問題タイプ別テンプレート
├─ 教科別テンプレート
├─ 検定別テンプレート
└─ 出力パックの定義
```

### 25.3 段階3：アプリ外スクリプト

```text
段階3
├─ Node.js または Python で出力
├─ app/data/*.js から読み取り
├─ Markdown生成
├─ PDF生成
└─ ローカル実行
```

### 25.4 段階4：アプリUI連携

```text
段階4
├─ 目的別問題集から印刷
├─ 問題数指定
├─ 解答別紙指定
├─ PDFダウンロード
└─ 履歴との連携
```

## 26. 既存アプリとの関係

現時点では、既存アプリを変更しない。

```text
現時点で行わないこと
├─ app/index.html の変更
├─ app/data/*.js の変更
├─ question_sets_manifest.js の変更
├─ PDF生成機能の実装
├─ 画像表示機能の実装
├─ 印刷ボタンの追加
└─ 既存問題データの一括移行
```

まずは設計を保存し、新規教材・新規問題作成時に印刷属性を意識する。

## 27. 次に作るべき設計文書

次に作る文書は、図・表・グラフつき問題のデータ構造である。

```text
次候補：
  visual_question_data_design_v0_1.md
```

理由：

```text
図・表・グラフ設計を整理すると、
├─ 印刷用出力
├─ 数学・理科・社会
├─ 数検
├─ 英検二次面接カード
└─ 地図・年表
の扱いが明確になる。
```

## 28. まとめ

印刷用出力は、Junior Study Trainer を画面上の一問一答アプリから、家庭学習全体を支える教材生成ツールへ広げるための重要機能である。

```text
アプリ：
  反復・暗記・短時間演習

印刷：
  書く・考える・作図する・本番形式で解く

両者の接続：
  同じ問題データ
  目的別問題集
  印刷属性
  進捗・弱点管理
```

当面は Markdown 出力と設計整理を優先し、PDF生成やアプリUI連携は後続フェーズで扱う。
