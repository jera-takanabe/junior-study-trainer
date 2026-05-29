# タイムアタック一問一答 v0.4 進捗モデル設計

## 1. 目的

v0.4 では、これまでの「習得管理」中心の進捗モデルを、子どものモチベーションを維持しやすい形に見直す。

従来は、問題を1回解いても `学習中` になるだけで、前に進んだ実感が弱かった。
今後は、以下の考え方にする。

```text
1回でもやったら前進
間違いは失敗ではなく復習ポイント
再挑戦して正解すれば復習ポイントが減る
習得済みは少し厳しめに判定する
```

---

## 2. 基本方針

進捗を以下の3つに分ける。

```text
進捗 = やった量
復習ポイント = 復習が必要な量
習得 = 安定してできる状態
```

これにより、以下を両立する。

```text
・1回やっただけでも未着手が減る
・間違えても復習ポイントとして前向きに扱える
・何度か正解しないと習得済みにはしない
```

---

## 3. 画面表示の考え方

### 3.1 従来表示

```text
未出題
学習中
苦手
習得済み
```

### 3.2 v0.4 表示

```text
未着手
着手済み
復習ポイント
習得済み
```

「苦手」という言葉は、子どもには少しネガティブなので、画面上は原則として使わない。
内部的に `weak` を持つ必要がある場合でも、表示は `復習ポイントあり` とする。

---

## 4. 進捗データ構造

v0.4 の問題別進捗データは以下を基本とする。

```javascript
{
  questionId: "kanken5-s001-write-001",
  seenCount: 3,
  correctCount: 2,
  wrongCount: 1,
  passCount: 0,
  consecutiveCorrect: 2,

  mistakePoints: 0,
  progressStatus: "started",
  masteryStatus: "learning",

  lastJudgement: "correct",
  lastAnsweredAt: "2026-05-26T10:00:00.000Z"
}
```

---

## 5. progressStatus

`progressStatus` は、学習量としての進捗を表す。

```text
new       : 未着手
started   : 着手済み
mastered  : 習得済み
```

### 5.1 状態遷移

```text
初期状態        : new
1回でも回答     : started
習得条件を満たす : mastered
mastered後に不正解 : started に戻す
```

---

## 6. mistakePoints

`mistakePoints` は、復習の必要度を表す。

### 6.1 更新ルール

```text
正解   : -1
不正解 : +2
パス   : +1
最低値 : 0
```

例：

```text
1回目：不正解 → mistakePoints = 2
2回目：正解   → mistakePoints = 1
3回目：正解   → mistakePoints = 0
```

### 6.2 意味づけ

```text
mistakePoints = 0 : 復習ポイントなし
mistakePoints > 0 : 復習ポイントあり
```

「苦手」ではなく「復習ポイント」として見せる。

---

## 7. masteryStatus

`masteryStatus` は、内部的な習熟状態を表す。

```text
new        : 未着手
learning   : 学習中
review     : 復習中
mastered   : 習得済み
```

画面上では、主に `progressStatus` と `mistakePoints` を表示する。

---

## 8. 習得済み判定

習得済みになる条件は以下。

```text
mistakePoints = 0
かつ
必要連続正解数を満たす
```

### 8.1 必要連続正解数

```text
read        : 2回
write       : 3回
choice系     : 3回
meaning     : 3回
antonym     : 3回
synonym     : 3回
homophone   : 3回
idiom       : 3回
calculation : 3回
spelling    : 3回
その他       : 3回
```

### 8.2 初回正解の扱い

1回目に正解しても、すぐには習得済みにしない。

```text
1回正解 → 着手済み
2〜3回連続正解 → 習得済み
```

---

## 9. 判定ごとの処理

### 9.1 正解

```text
seenCount +1
correctCount +1
consecutiveCorrect +1
mistakePoints -1
progressStatus = started または mastered
```

### 9.2 不正解

```text
seenCount +1
wrongCount +1
consecutiveCorrect = 0
mistakePoints +2
progressStatus = started
masteryStatus = review
```

### 9.3 パス

```text
seenCount +1
passCount +1
consecutiveCorrect = 0
mistakePoints +1
progressStatus = started
masteryStatus = review
```

パスは不正解ではないが、復習対象には入れる。

---

## 10. 進捗サマリー

v0.4 の設定画面では、以下を表示する。

```text
総問題
未着手
着手済み
習得済み
復習ポイント
```

例：

```text
総問題：42
未着手：30
着手済み：11
習得済み：1
復習ポイント：5
```

### 10.1 着手済みの数え方

`着手済み` は、以下を含む。

```text
seenCount > 0 かつ progressStatus !== mastered
```

つまり、習得済みは別枠で表示する。

---

## 11. 出題モード

v0.4 では、出題モードの表示名を変更する。

### 11.1 旧表示

```text
全部から出題
未出題だけ
習得済みを除く
苦手だけ
過去に不正解がある問題だけ
```

### 11.2 新表示

```text
全部から出題
未着手だけ
習得済みを除く
復習ポイントあり
過去に不正解あり
```

### 11.3 内部値

```text
all
new
not_mastered
review_points
wrong_before
```

---

## 12. 進捗CSV

進捗CSVには以下を追加する。

```text
mistake_points
progress_status
mastery_status
```

CSV列案：

```text
question_id
domain
exam
category
level
unit
question_type
question
answer
seen_count
correct_count
wrong_count
pass_count
consecutive_correct
mistake_points
progress_status
last_judgement
last_answered_at
mastery_status
tags
targets
```

---

## 13. 既存v0.3データとの互換性

v0.4 では、v0.3 の localStorage データに `mistakePoints` や `progressStatus` がない場合がある。

その場合は、読み込み時に補完する。

```text
mistakePoints がない → wrongCount * 2 + passCount として初期化
progressStatus がない → seenCount > 0 なら started、0なら new
masteryStatus が mastered → progressStatus も mastered
```

ただし、正式な Set 001 へ切り替えた直後は、進捗リセットして使う方が安全。

---

## 14. v0.4 実装内容

v0.4 で実装すること：

```text
1. mistakePoints を追加
2. progressStatus を追加
3. サマリー表示を未着手・着手済み・習得済み・復習ポイントに変更
4. 出題モード「苦手だけ」を「復習ポイントあり」に変更
5. 正解・不正解・パスごとのポイント更新
6. 進捗一覧に復習ポイントを表示
7. 進捗CSVに mistake_points / progress_status を追加
```

---

## 15. 今後の拡張候補

v0.5以降で検討すること：

```text
・復習ポイントが高い順に出題
・復習ポイントを子ども向けにゲージ表示
・今日の達成数を表示
・連続学習日数を表示
・Set別進捗表示
・targets別進捗表示
```

まずは v0.4 で、やった量が見えることを優先する。

