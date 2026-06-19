# Junior Study Trainer 設計概要 v0.6

> この文書はv0.6時点の履歴資料であり、現行実装の説明ではない。
> 現行設計の入口は `docs/design/README.md` を参照する。

## 1. この文書の目的

この文書は、Junior Study Trainer の現行 v0.6 時点の設計概要を整理する。

既存の設計書には、v0.3、v0.4、v0.5 時点の設計メモが含まれている。

それらは過去の判断履歴として残しつつ、現在の実装状態と今後の見直し方針をこの文書で整理する。

---

## 2. 現行バージョン

現行アプリは以下を基本とする。

- アプリ名：タイムアタック一問一答
- 現行バージョン：v0.6
- 公開方式：GitHub Pages
- 実行ファイル：app/index.html
- 問題データ：app/questions.js

---

## 3. 現在の実装状態

v0.6 時点で、以下を確認済みである。

- タイトル表示：確認済み
- Set001〜Set010 表示：確認済み
- 全セット合計438問表示：確認済み
- Set010 44問表示：確認済み
- 出題開始：確認済み
- GitHub Pages公開：確認済み

現在の公開URLは以下である。

https://jera-takanabe.github.io/junior-study-trainer/

---

## 4. 設計書の位置づけ

docs/design 配下の既存設計書は、以下のように扱う。

- progress_design.md
  - v0.3 時点の進捗管理・汎用データ構造の設計メモ

- progress_model_motivation.md
  - v0.4 時点のモチベーション重視の進捗モデル設計

- persistence_policy.md
  - v0.5 時点の保存・バックアップ方針
  - GitHub Pages公開時の localStorage 運用方針を追記済み

これらは古いから削除するのではなく、設計判断の履歴として残す。

ただし、現行 v0.6 実装と矛盾する記述や、すでに完了した内容が「今後作るもの」として残っている箇所は、今後段階的に見直す。

---

## 5. 現在のアプリ構成

現行の実行構成は以下である。

- app/index.html
- app/questions.js

app/index.html は画面・進捗管理・出題制御を担当する。

app/questions.js は、現在の実行用問題データを提供する。

問題データの保管用構成は以下である。

- data/certifications/kanken/grade5/sets/
- data/certifications/kanken/grade5/bundled/

---

## 6. 進捗保存方針

現行 v0.6 では、進捗保存に localStorage を利用する。

GitHub Pages公開後も、進捗保存先はGitHubではなく、利用端末のブラウザ内である。

進捗保存単位は以下である。

- 端末
- ブラウザ
- サイトURL

端末間の自動同期は行わない。

端末間で進捗を移行する場合は、JSONバックアップ／復元を利用する。

---

## 7. 現在の教材

現在の教材は以下である。

- 漢検5級
- Set001〜Set010
- 合計438問

Set001〜Set010 は、漢検5級50セット構成ロードマップ上では以下に位置づける。

- 基本熟語・日常語シリーズ：Set001〜Set010

---

## 8. 汎用設計として維持するもの

Junior Study Trainer は漢検専用アプリにはしない。

以下は汎用設計として維持する。

- domain
- exam
- category
- level
- questionType
- targets
- tags
- setId
- setName
- seriesName

これにより、将来的に以下の教材を追加できる構成を維持する。

- 学校教科
- 漢検
- 英検
- 数検
- 拡張教材

---

## 9. 今後の見直し方針

今後、docs/design 配下では以下を順に見直す。

1. progress_design.md の v0.3 表記を、現行 v0.6 との関係が分かるように整理する
2. progress_model_motivation.md の v0.4 表記を、現行 v0.6 との関係が分かるように整理する
3. persistence_policy.md の v0.5 表記を、現行 v0.6 + GitHub Pages運用との関係が分かるように整理する
4. 必要に応じて、進捗モデル・保存方針・教材データ形式を分割整理する

---

## 10. 現時点で変更しないもの

現時点では、以下は変更しない。

- localStorage保存
- app/questions.js の1本運用
- GitHub Pagesによる静的公開
- 漢検5級 Set001〜Set010 の問題データ

これらは、実運用しながら課題が見えた段階で見直す。
