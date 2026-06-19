# 設計文書ガイド

## 現行設計の基準

現在の学習内容モデルは `learning_content_model_v0_8.md` を基準とする。

問題データ項目の設計経緯は `question_data_architecture_v0_7.md` を参照する。

## 現行実装

2026-06-19時点の実装は次のとおり。

- `app/question_sets_manifest.js` を教材一覧の正式なManifestとして使用する
- 教材データは `app/data/*.js` から選択中教材だけを動的に読み込む
- 登録教材は6件、合計1,343問
- 履歴・進捗・リセットは `questionSetId` 単位で分離する
- バックアップは選択中教材1件を対象とする
- `app/questions.js` は旧方式との互換・参照用として残す

全6教材について、問題数、必須項目、ファイル内参照、問題ID重複を横断確認済みである。

## 現行モデルと既存データ

現行データは将来モデルへの移行前の互換形式である。

- 問題の `id` は将来の `questionId` に対応する
- ファイル内の `setId` と `subSet` は `learningThemeId` への移行元とする
- Manifestの `questionSetId` は、現時点では `dataPackageId` と `collectionId` を兼ねる
- 既存問題IDは進捗互換性のため原則変更しない

詳細は `learning_content_model_v0_8.md` を参照する。

## 次の設計作業

次は、目的別問題集を次のどちらで構成するかを検討する。

1. 明示的な問題ID一覧
2. 学習テーマ、教科書ページ、タグなどの抽出条件

学習テーマの分割基準と、1問に設定する主テーマの扱いは決定済みである。

## 履歴資料

- `design_overview_v0_6.md`：v0.6時点の実装概要
- `progress_design.md`：初期の進捗管理設計
- `progress_model_motivation.md`：モチベーション重視の進捗モデル
- `persistence_policy.md`：初期の保存方針
- `science_local_prototype_policy_v0_1.md`：理科プロトタイプ時のローカル資料方針

履歴資料の記述と現行実装が異なる場合は、このREADMEと現行設計書を優先する。
