# 要求依存関係 正式成果物完了記録 v0.1

## 1. 目的

完成版再開発の要求定義で整理した依存関係を、
後続の設計・実装・変更影響分析から機械的に参照できる
正式な正本CSVとして保存する。

## 2. 正式成果物

- 依存関係正本CSV:
  `docs/requirements/full_rebuild_requirement_dependencies_v0_1.csv`
- 本完了記録:
  `docs/requirements/full_rebuild_requirement_dependencies_completion_v0_1.md`

個別領域ごとの作業用統合成果物は `.local/` に保持されるが、
正式な依存関係明細の正本は上記CSVとする。

## 3. CSVの1行の意味

1行は、次の向きの要求依存関係を表す。

`source_requirement_id --relation_type--> target_requirement_id`

- `source_requirement_id`: 前提を必要とする依存元要求
- `relation_type`: 依存関係の種別
- `target_requirement_id`: 依存元が前提とする要求

## 4. CSV列

- `source_requirement_id`
  - 依存元要求ID
- `relation_type`
  - 依存関係種別
- `target_requirement_id`
  - 前提となる依存先要求ID
- `reason`
  - 統合成果物から取得できた依存理由
- `primary_source_file`
  - 正本行の代表出典となった統合成果物名
- `primary_source_line`
  - 代表出典内の行番号
- `primary_source_format`
  - 出典形式。`TABLE` または `ARROW`
- `all_source_files`
  - 同じ依存線が記録されていた全統合成果物
- `source_occurrence_count`
  - 正本統合成果物間での出現数

## 5. 全体集計

- 要求総数: 557
- 有効依存線数: 1368
- 依存元として登場した要求数: 536
- 前提として登場した要求数: 349
- 依存関係へ登場した要求数: 554
- 一度も依存関係へ登場しない要求数: 3
- 依存元を持たない要求数: 21
- 複数成果物に記録されていた依存線数: 532
- 理由を正規化CSVへ取得できなかった依存線数: 232

理由未取得の依存線も、依存元・関係種別・依存先および
出典ファイル・行番号は保存されている。

## 6. 関係種別別集計

- CONCEPT: 163本
- DATA: 280本
- FUNCTION: 213本
- PRESENTATION: 63本
- REFERENCE: 234本
- STRUCTURE: 293本
- VALIDATION: 122本

## 7. 意図的に直接依存関係を持たない要求

- `REQ-CATALOG-AUTHORITY-002`
- `REQ-ID-002`
- `REQ-ID-008`

これら3件は漏れではなく、要求の役割上、
直接の依存線を持たないものとして確認済みである。

## 8. 除外した解決記録

次の線は統合成果物中に削除済みの逆向き依存として
説明目的で残っていたため、正本CSVには含めていない。

- `REQ-DATA-OUTPUT-004 --FUNCTION--> REQ-BACKUP-001`

採用された正方向は次である。

- `REQ-BACKUP-001 --FUNCTION--> REQ-DATA-OUTPUT-004`

## 9. 検証結果

- 正本統合成果物数: 45
- 有効依存線数: 1,368
- 不明要求ID: 0
- 自己依存: 0
- 重複依存線: 0
- 循環依存: 0
- リリース区分逆転: 0
- 想定外の未参照要求: 0
- 検証エラー: 0

関係種別別件数、依存元要求数、前提要求数、
登場要求数は、最終依存関係監査の正式集計値と一致した。

## 10. 利用方針

後続工程では本CSVを次の用途に使用する。

- 要求から設計要素への展開順序の検討
- 変更要求の影響範囲分析
- 実装・試験計画の前提関係確認
- 要求削除・統合時の参照先確認
- リリース区分間の依存方向検査

個別の作業用Markdownを直接集計せず、
正式な依存関係の参照には本CSVを使用する。

## 11. 完了判定

要求依存関係の詳細明細は正式成果物として保存され、
依存関係分析工程は後続工程へ引き渡せる状態となった。
