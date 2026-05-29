# Junior Study Trainer

Junior Study Trainer は、中学生向けのタイマー付き一問一答・反復学習アプリです。

学校教科、漢検、英検、数検、その他の拡張教材を、同じアプリ構造・同じ問題データ形式で扱えることを目指します。

現在は、プロトタイプ教材として **漢検5級** を実装しています。

---

## 1. プロジェクトの目的

このプロジェクトの目的は、子どもが短時間で反復学習できる一問一答アプリを作ることです。

想定する利用場面は以下です。

* 移動中の学習
* スピンバイク中の学習
* 家庭学習
* 書き取り前の確認
* 検定対策
* 苦手分野の反復練習

最初の教材として漢検5級を作成していますが、アプリ本体は漢検専用にはしません。

将来的には、以下の教材を追加できる構成を目指します。

* 学校教科

  * 国語
  * 数学
  * 理科
  * 社会
  * 英語
* 外部検定

  * 漢検
  * 英検
  * 数検
* 拡張教材

  * 苦手克服
  * 定期テスト対策
  * 親子学習
  * スポーツ・生活習慣関連

---

## 2. 現在の実装状況

現在は、ローカルHTML + JavaScriptで動作するプロトタイプです。

実装済みの主な機能は以下です。

* タイマー付き一問一答
* 問題セット切替
* 漢検5級 Set001〜Set010 対応
* 合計438問の表示確認
* localStorage による進捗保存
* JSONバックアップ
* CSV出力
* セット別の問題データ管理
* 統合版 questions.js によるアプリ実行

現在の確認済み状態は以下です。

* タイトル表示：確認済み
* Set001〜Set010 表示：確認済み
* 全セット合計438問表示：確認済み
* Set010 44問表示：確認済み
* 出題開始：確認済み

---

## 3. 起動方法

### 公開版

GitHub Pagesで公開しているアプリは以下から利用できます。

https://jera-takanabe.github.io/junior-study-trainer/

進捗は、端末・ブラウザごとの `localStorage` に保存されます。
端末間で進捗を移行する場合は、JSONバックアップ／復元を利用します。

### ローカル版

ローカル環境で以下のファイルをブラウザで開きます。

```text
app/index.html
```

Git Bash から開く場合は、プロジェクト直下で以下を実行します。

```bash
start app/index.html
```

アプリは、同じ `app` フォルダ内の `questions.js` を読み込みます。

```text
app/index.html
app/questions.js
```

---

## 4. 現在の教材

現在の教材は以下です。

```text
漢検5級
Set001〜Set010
合計438問
```

問題数の内訳は以下です。

```text
Set001: 42問
Set002: 44問
Set003: 44問
Set004: 44問
Set005: 44問
Set006: 44問
Set007: 44問
Set008: 44問
Set009: 44問
Set010: 44問
```

現在の Set001〜Set010 は、50セット構成ロードマップ上では以下に位置づけています。

```text
基本熟語・日常語シリーズ：Set001〜Set010
```

---

## 5. ディレクトリ構成

主なディレクトリ構成は以下です。

```text
junior-study-trainer/
├─ app/
│  ├─ index.html
│  └─ questions.js
├─ data/
│  └─ certifications/
│     └─ kanken/
│        └─ grade5/
│           ├─ sets/
│           │  ├─ s001.js
│           │  ├─ s002.js
│           │  ├─ s003.js
│           │  ├─ s004.js
│           │  ├─ s005.js
│           │  ├─ s006.js
│           │  ├─ s007.js
│           │  ├─ s008.js
│           │  ├─ s009.js
│           │  └─ s010.js
│           └─ bundled/
│              └─ questions_kanken5_s001_s010.js
├─ docs/
│  ├─ concept/
│  ├─ design/
│  └─ materials/
│     └─ certifications/
│        └─ kanken/
│           └─ grade5/
├─ README.md
└─ TODO.md
```

---

## 6. ドキュメント

### コンセプト

```text
docs/concept/project_overview.md
docs/concept/category_policy.md
```

プロジェクト全体の目的、教材カテゴリ、漢検5級の位置づけを管理します。

### 汎用設計

```text
docs/design/progress_design.md
docs/design/progress_model_motivation.md
docs/design/persistence_policy.md
```

進捗管理、モチベーション設計、保存・バックアップ方針を管理します。

### 漢検5級教材設計

```text
docs/materials/certifications/kanken/grade5/
```

漢検5級の教材設計を管理します。

主なファイルは以下です。

```text
README.md
kanken_5_50_set_roadmap.md
kanken_5_authoring_rule.md
set001_definition.md
set002_definition.md
set003_definition.md
set004_definition.md
set005_definition.md
set006_definition.md
set007_definition.md
set008_definition.md
set009_definition.md
set010_definition.md
```

---

## 7. データ管理方針

現在は、以下の2種類の問題データを管理しています。

### セット別データ

```text
data/certifications/kanken/grade5/sets/
```

Set001〜Set010を個別ファイルとして管理します。

### 統合版データ

```text
data/certifications/kanken/grade5/bundled/questions_kanken5_s001_s010.js
```

Set001〜Set010を統合した保管用データです。

### アプリ実行用データ

```text
app/questions.js
```

アプリが実際に読み込む実行用データです。

当面は `app/questions.js` を1本運用します。
将来的には、教材カテゴリ・級・セット単位での分割読み込みを検討します。

---

## 8. 現在の運用方針

当面は、以下の方針で進めます。

* ローカルHTML + JavaScriptで運用する
* 漢検5級 Set001〜Set010 をプロトタイプ教材として使う
* 問題データは Git で管理する
* 途中の気づきや後回し事項は `TODO.md` に記録する
* アプリ本体は漢検専用にしない
* 学校教科・英検・数検・拡張教材を追加できる構成を維持する

---

## 9. 今後の予定

今後の主な検討事項は以下です。

* `docs/design` 配下の設計書を現行 v0.6 実装に合わせて見直す
* `set002_definition.md` からセット定義テンプレートを分離する
* 漢検5級 Set011〜Set050 を追加する
* 数学カテゴリの追加方針を決める
* 理科カテゴリの追加方針を決める
* 英検カテゴリの追加方針を決める
* 数検カテゴリの追加方針を決める
* localStorage からサーバー保存へ移行するか検討する
* Webサーバー配置方式を検討する
* AWS配置方式を検討する

詳細な作業メモは `TODO.md` で管理します。
