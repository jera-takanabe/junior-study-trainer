# 問題セット切り替え手順（廃止済み）

> この文書に記載されていた `app/questions.js` の手動上書き方式は廃止済みである。
> 現行手順として使用しない。

現在は、アプリの教材選択画面から教材を選び、`app/data/*.js` の対象ファイルを動的に読み込む。

履歴・進捗・リセットは教材単位で分離され、バックアップは選択中教材1件を対象とする。

新教材の作成・登録には、次の現行手順を使用する。

- `docs/operations/question_set_registration_procedure.md`

現在の教材一覧と運用状態は、次を参照する。

- `app/question_sets_manifest.js`
- `docs/operations/question_sets_inventory.md`

このファイルは、手動切替方式を使用していた時期のファイル名と履歴を残すために保管する。
