# タイムアタック一問一答 v0.3 設計メモ

## 0. 現行v0.6における位置づけ

この文書は v0.3 時点の進捗管理・汎用データ構造の設計メモである。

現行v0.6時点の設計入口は、以下の文書とする。

- docs/design/design_overview_v0_6.md

この文書は削除せず、過去の設計判断・実装判断の履歴として保持する。

現行実装と矛盾する箇所や、すでに完了した内容が「今後作るもの」として残っている箇所は、今後段階的に見直す。

---

## 1. 目的

この設計メモは、現在の `index.html + questions.js` 版を、漢検5級専用ではなく、将来的に以下のカテゴリへ拡張できるように整理する。

- 漢検5級
- 中学数学
- 中学理科
- 英検4級
- 英単語
- 国語語句
- 社会
- その他の一問一答

v0.3 では、AWS化の前に、ブラウザ内保存 `localStorage` を使って「問題ごとの進捗管理」を実装する。

---

## 2. 基本方針

### 2.1 漢検に特化しすぎない

漢検5級では「1026字を身につける」という大きな目標があるが、アプリ本体は漢検専用にしない。

アプリ本体は以下のように汎用化する。

```text
問題を出す
↓
回答を見る
↓
親が正誤判定する
↓
問題ごとの進捗を記録する
↓
未出題・苦手・習得済みなどで再出題する
```

この流れは、数学・理科・英検にも使える。

---

## 3. 共通データ構造

### 3.1 問題データ

今後の `questions.js` は、以下の形式を基本とする。

```javascript
{
  id: "kanken5-write-001",
  domain: "kanken",
  exam: "漢検5級",
  category: "漢検5級・書き練習",
  level: "書き取り",
  unit: "小6漢字",
  questionType: "write",
  question: "次のカタカナを漢字で書きなさい。\n\n計画をショウニンする。",
  answer: "承認",
  note: "承認：よいと認めること。",
  tags: ["漢検5級", "書き取り", "同音異字"],
  targets: ["承", "認"]
}
```

### 3.2 必須項目

最小限、以下は必須とする。

```text
id
category
level
question
answer
```

### 3.3 推奨項目

将来の分析や再出題のため、以下を推奨する。

```text
domain       : kanken / math / science / english / eiken / japanese / social
exam         : 漢検5級 / 英検4級 など
unit         : 正負の数 / 植物 / be動詞 など
questionType : read / write / choice / meaning / calculation / oral / spelling など
tags         : 横断的な分類
targets      : 習得対象。漢字、単語、単元、公式など
```

---

## 4. domain の考え方

`domain` は、将来的な大分類として使う。

```text
kanken   : 漢検・漢字
math     : 数学
science  : 理科
english  : 学校英語
eiken    : 英検
japanese : 国語
social   : 社会
other    : その他
```

アプリ本体は `domain` を知らなくても動くようにする。
ただし、集計・分析では `domain` を使えるようにしておく。

---

## 5. questionType の考え方

`questionType` は、問題の性質を表す。

例：

```text
read        : 読み
write       : 書き取り
choice      : 選択問題
meaning     : 意味
antonym     : 対義語
synonym     : 類義語
homophone   : 同音異字
idiom       : 四字熟語
calculation : 計算
formula     : 公式
oral        : 口頭回答
spelling    : 英単語スペル
translation : 和訳・英訳
```

漢検固有の `読み` や `書き取り` も、内部的には `read` / `write` として扱える。

---

## 6. targets の考え方

`targets` は、「この問題で何を身につけたいか」を表す。

### 6.1 漢検の例

```javascript
targets: ["承", "認"]
```

この場合、問題ID単位だけでなく、漢字単位でも進捗を集計できる。

### 6.2 英検の例

```javascript
targets: ["go", "went"]
```

### 6.3 数学の例

```javascript
targets: ["正負の数", "加法"]
```

### 6.4 理科の例

```javascript
targets: ["光合成", "植物"]
```

---

## 7. 学習記録データ

v0.3 では、問題ごとの累積成績を保存する。

```javascript
{
  questionId: "kanken5-write-001",
  seenCount: 5,
  correctCount: 3,
  wrongCount: 2,
  passCount: 0,
  consecutiveCorrect: 2,
  lastJudgement: "correct",
  lastAnsweredAt: "2026-05-26T10:00:00.000Z",
  masteryStatus: "learning"
}
```

---

## 8. masteryStatus

習得状態は、全カテゴリ共通で以下を使う。

```text
new        : 未出題
learning   : 学習中
weak       : 苦手
review     : 復習対象
mastered   : 習得済み
```

### 8.1 初期ルール

まずは単純なルールでよい。

```text
未出題            → new
1回出題された      → learning
不正解がある       → weak
3回連続正解        → mastered
mastered後に不正解 → weak
パス               → passCountだけ増やし、習得判定は変えない
```

### 8.2 将来の特化ルール

将来的には questionType ごとに変える。

```text
read        : 2回連続正解で mastered
write       : 3回連続正解で mastered
choice      : 3回連続正解で mastered
calculation : 3回連続正解で mastered
spelling    : 3回連続正解で mastered
```

---

## 9. 出題モード

v0.3 で追加する出題モード。

```text
all              : 全部から出題
new              : 未出題だけ
not_mastered     : 習得済みを除く
weak             : 苦手だけ
wrong_before     : 過去に不正解がある問題だけ
review           : 復習対象
```

最初は以下の4つで十分。

```text
全部から出題
未出題だけ
習得済みを除く
苦手だけ
```

---

## 10. 画面に追加するもの

### 10.1 設定画面

現在の設定画面に追加する。

```text
出題モード：
[全部から出題]
[未出題だけ]
[習得済みを除く]
[苦手だけ]
```

### 10.2 進捗表示

設定画面または履歴画面に表示する。

```text
全体進捗

総問題数：1026問
未出題：820問
学習中：130問
苦手：50問
習得済み：26問
```

カテゴリや出題タイプを選んだ場合は、その条件での進捗を表示する。

```text
漢検5級・書き練習 / 書き取り

総問題数：300問
未出題：240問
学習中：40問
苦手：15問
習得済み：5問
```

---

## 11. CSV出力

CSVは2種類に分ける。

### 11.1 セッション履歴CSV

今まで通り、毎回の実施履歴を出す。

```text
session_id
finished_at
category_setting
level_setting
question_id
judgement
answer_trigger
question_time_sec_actual
```

### 11.2 問題別進捗CSV

v0.3 で追加する。

```text
question_id
category
level
domain
unit
question_type
seen_count
correct_count
wrong_count
pass_count
consecutive_correct
last_judgement
last_answered_at
mastery_status
```

---

## 12. 汎化と特化の分離

### 12.1 汎化するもの

アプリ本体に入れる。

```text
問題表示
回答表示
タイマー
正誤判定
履歴保存
問題別進捗保存
出題モード
CSV出力
```

### 12.2 特化するもの

問題データ側に持たせる。

```text
漢検5級かどうか
英検4級かどうか
数学のどの単元か
書き問題か、読み問題か、計算問題か
習得対象が漢字か、英単語か、数学単元か
```

つまり、アプリ本体は「学習エンジン」、`questions.js` は「教材」として分離する。

---

## 13. AWS化する前に固めること

AWS化の前に、以下をローカル版で検証する。

```text
問題IDの運用
問題別進捗の保存内容
習得済み判定
苦手問題の再出題
CSV出力内容
1026問規模でも操作が重くないか
```

これらが固まったら、AWSでは以下を検討する。

```text
静的配信：Amplify Hosting または S3 + CloudFront
API：API Gateway + Lambda
DB：DynamoDB
認証：Cognito
```

---

## 14. v0.3 実装範囲

v0.3 では以下を実装する。

```text
1. 問題ごとの累積成績を localStorage に保存
2. 出題モードを追加
3. 進捗サマリーを表示
4. 問題別進捗CSVを出力
5. localStorageの進捗リセット
```

v0.3 ではまだAWS化しない。

---

## 15. 今後のバージョン案

### v0.3

```text
ローカル版の問題別進捗管理
```

### v0.4

```text
問題データの大規模化
漢検5級の問題追加
出題モードの改善
```

### v0.5

```text
カテゴリ別ダッシュボード
苦手ランキング
習得済み一覧
```

### v1.0

```text
AWS化
複数端末対応
認証
クラウド保存
```

