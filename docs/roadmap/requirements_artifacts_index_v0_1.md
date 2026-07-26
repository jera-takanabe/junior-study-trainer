# 要求定義フェーズ正式成果物索引 v0.1

## 1. 文書の目的

Junior Study Trainer 完成版再開発の後続工程から、
要求定義フェーズの正式成果物を参照しやすくするため、
成果物の所在と用途を区分別に示す。

本書は各成果物を置き換えず、要求内容を再定義しない。
要求の原文、分類、レビュー判断、依存関係および引き継ぎ方針は、
それぞれの正式成果物を参照する。

## 2. 要求定義フェーズの完了状態

完成版再開発の要求定義フェーズは完了している。
現在は、作業環境整備および設計開始準備の段階である。

- 要求総数: 557件
- 有効依存線数: 1,368本
- 詳細要求レビュー未解決数: 0件
- 循環依存数: 0件

設計または技術選定で決める事項は、
要求定義上の未解決要求ではなく、後続工程の判断対象である。

## 3. 正式成果物

### 3.1 システム全体構造

- `docs/requirements/full_rebuild_system_overview_v0_1.md`
  - 完成版の目的、利用役割、学習運用サイクルおよび全体領域を俯瞰するためのシステム概要。

### 3.2 要求正本・要求収集記録

- `docs/requirements/full_rebuild_requirements_inventory_v0_1.md`
  - 既存文書から抽出した要求の原文、要求ID、由来およびリリース区分を確認するための要求棚卸し文書。

### 3.3 ドメイン分類

- `docs/requirements/full_rebuild_requirement_domain_assignment_v0_1.csv`
  - 全557要求の主担当ドメインと関連ドメインを機械的に参照するための分類データ。
- `docs/requirements/full_rebuild_requirement_domain_assignment_v0_1.md`
  - ドメイン分類の方針、集計および確認結果を参照するための文書。

### 3.4 要求種類分類

- `docs/requirements/full_rebuild_requirement_type_classification_v0_1.csv`
  - 全557要求の主分類と補助分類を機械的に参照するための分類データ。
- `docs/requirements/full_rebuild_requirement_type_classification_completion_v0_1.md`
  - `FUNC`、`DATA`、`RULE`、`OPS`、`QUAL`、`SCOPE`による分類の完了状態と集計を確認するための文書。

### 3.5 詳細要求レビュー

- `docs/requirements/full_rebuild_detailed_requirement_review_decisions_v0_1.csv`
  - 詳細要求レビューの候補ごとの判断を機械的に参照するための決定記録。
- `docs/requirements/full_rebuild_detailed_requirement_review_completion_v0_1.md`
  - 詳細要求レビューの実施結果と未解決数0件を確認するための完了記録。

### 3.6 要求依存関係

- `docs/requirements/full_rebuild_requirement_dependencies_v0_1.csv`
  - 1,368本の有効な要求依存線を参照するための正式な依存関係正本CSV。
- `docs/requirements/full_rebuild_requirement_dependencies_completion_v0_1.md`
  - 依存関係CSVの構造、集計、検証結果および利用方針を確認するための完了記録。
- `docs/requirements/full_rebuild_requirements_dependency_analysis_completion_v0_2.md`
  - 要求依存関係の最終分析結果を確認するための完了記録。

### 3.7 要求定義フェーズ完了・引き継ぎ

- `docs/requirements/full_rebuild_requirements_phase_completion_v0_1.md`
  - 要求定義フェーズ全体の完了状態、正式成果物および後続工程への入力条件を確認するための記録。
- `docs/roadmap/requirements_to_design_handoff_v0_1.md`
  - 要求定義から作業環境整備および設計開始準備へ移行する際の方針と参照順序を確認するための引き継ぎ文書。

## 4. 後続工程での参照方針

- 正式成果物は、原則として `docs/` 配下を参照する。
- `.local/` 配下は分析、比較、監査、変換等のためのローカル作業用成果物であり、正式成果物ではない。
- `.local/` と `docs/` の内容が矛盾する場合は、`docs/` 配下を正とする。
- 要求依存関係の参照には、`docs/requirements/full_rebuild_requirement_dependencies_v0_1.csv` を使用する。
- 個別の作業用Markdownを正式な依存関係の参照元として使用しない。
- 設計判断は関連する要求IDへ追跡可能にし、要求内容と設計判断を混同しない。
