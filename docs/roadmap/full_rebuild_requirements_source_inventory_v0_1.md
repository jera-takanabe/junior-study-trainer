# Junior Study Trainer 完成版要求 抽出元資料一覧 v0.1

## 1. 目的

完成版要求定義書を作成するために、
既存文書を次の3区分へ分類する。

1. 要求抽出の主対象
2. 補助資料
3. 原則除外資料

既存文書は完成版の正式仕様としてそのまま採用しない。

各文書から、現行試作の実装方法ではなく、
完成版に必要な要求、制約、運用上の知識を抽出する。

## 2. 要求抽出の主対象

### 2.1 学習内容・教材・問題モデル

- `docs/design/learning_content_model_v0_8.md`
- `docs/design/question_metadata_schema_design_v0_1.md`
- `docs/design/catalog_to_question_data_design_v0_1.md`
- `docs/design/id_and_code_policy_v0_1.md`

主な抽出対象:

- 学校教科と検定の共通管理
- 学習内容カタログ
- 教材、問題、問題集の関係
- 学習分類と出典分類の分離
- 問題、解答、解説の分離
- 問題形式
- メタデータ
- ID、コード、表示名
- 一意性、必須性、参照整合性
- 教材作成、登録、検証
- 著作権、出典管理

### 2.2 学習実行・履歴・進捗・定着

- `docs/design/purpose_based_question_sets_design_v0_1.md`
- `docs/design/purpose_set_runtime_design_v0_1.md`
- `docs/design/progress_design.md`
- `docs/design/progress_model_motivation.md`

主な抽出対象:

- 通常学習
- 目的別問題集
- 周回練習
- 弱点練習
- 定着確認
- 未着手問題
- ランダム出題
- 学習途中の再開
- 学習セッション
- 回答イベント
- 問題別進捗
- 定着状態
- 忘却リスク
- リセット単位
- 学習履歴と進捗表示

旧保存キー、旧データ構造、旧版互換に関する記述は採用しない。

### 2.3 画面・操作導線

- `docs/design/gui_structure_design_v0_1.md`

主な抽出対象:

- 子ども用画面
- 管理用画面
- 教材から選ぶ導線
- 目的から選ぶ導線
- 今日のおすすめ
- 前回の続き
- 定期テスト対策
- 検定対策
- 弱点補強
- 車移動・スピンバイク向け画面
- 進捗・履歴表示
- 印刷導線
- メディア問題の操作

現行画面構成や既存HTMLへの追加手順は採用しない。

### 2.4 画像・表・グラフ・地図・年表

- `docs/design/visual_question_data_design_v0_1.md`

主な抽出対象:

- 画像
- 表
- グラフ
- 座標平面
- 図形
- 地図
- 年表
- 面接カード
- 代替テキスト
- 画面表示と印刷表示の差
- アセット管理
- 著作権・出典管理

既存JavaScript形式や既存ファイル配置は採用しない。

### 2.5 印刷

- `docs/design/printable_question_output_design_v0_1.md`

主な抽出対象:

- 問題用紙
- 解答用紙
- 解答一覧
- 解答・解説
- 採点欄
- 記述欄
- 英作文欄
- 漢字書取欄
- 作図欄
- 表・グラフ欄
- 教科・検定別印刷要件
- 出力パック
- ファイル名
- 著作権表示

旧アプリ外スクリプトや段階的な旧実装方法は採用しない。

## 3. 補助資料

### 3.1 プロジェクトと分類方針

- `docs/concept/project_overview.md`
- `docs/concept/category_policy.md`

参照対象:

- プロジェクト目的
- 対象分野
- 学校教科、検定、拡張領域の分類
- 運用上の基本方針

現行実装の説明は採用しない。

### 3.2 カタログ資料

- `docs/design/catalogs/`

参照対象:

- 学校教科と検定の構造差
- カタログ階層
- 単元・分野・技能の表現
- 教材とカタログの対応
- 網羅性確認

個別カタログの内容を完成版の固定スキーマとはしない。

### 3.3 教材作成・登録・検証

- `docs/operations/question_set_registration_procedure.md`

参照対象:

- 原本と作成物の分離
- 教材IDの決定
- メタデータ付与
- カタログ参照
- 機械検証
- 画面確認
- 完了条件
- 誤登録防止
- 著作権保護
- 非公開原本の管理

現行manifest、JavaScriptファイル、既存アプリ確認手順は採用しない。

### 3.4 複数教材・複数端末に関する要求確認

- `docs/operations/multi_set_support_design.md`

参照対象を次に限定する。

- 複数教材の管理
- 教材選択
- 教材ごとの学習状態
- 複数端末利用
- データ同期の必要性

現行試作のPhase別実装履歴、保存キー、JavaScript読込方式、
既存バックアップ移行は採用しない。

## 4. 原則除外資料

### 4.1 現行試作の改修計画

- `docs/design/app_refactoring_plan_v0_1.md`
- `docs/design/metadata_migration_plan_v0_1.md`

除外理由:

- 現行アプリを改修して完成版にしないため
- 旧データ形式との互換を維持しないため
- 旧データの段階的移行を行わないため

ただし、要求漏れ確認のために必要箇所だけ参照できる。

### 4.2 現行試作の永続化方式

- `docs/design/persistence_policy.md`

原則除外する内容:

- localStorage
- 旧CSV
- 旧バックアップJSON
- GitHub Pages固有の保存方法
- ローカル版と公開版の差

抽出してよい要求:

- データ消失防止
- バックアップ
- 復元
- エクスポート
- 複数端末利用
- 永続保存

### 4.3 教材固有の作成物

- `docs/materials/`

原則として完成版の共通要求抽出には使用しない。

ただし、次の確認に限り代表資料を参照できる。

- 教科別問題形式
- 検定別問題形式
- 長文、記述、作文、漢字、数式などの実例
- 教材作成・レビュー工程
- 出典範囲管理

## 5. 抽出時の判断基準

各記述を次の観点で判断する。

### 5.1 採用候補

- 利用者が必要とする機能
- 学習運用に必要な機能
- 教材作成者・管理者に必要な機能
- データの正確性を保つ制約
- セキュリティ、可用性、保守性に関する要求
- 著作権や出典を守るための要求
- 複数端末利用に必要な要求

### 5.2 再検討

- 現行試作で便宜的に決めた仕様
- 数値や条件の根拠が十分でないもの
- 特定教科や特定検定に偏ったもの
- データ構造や実装方法まで固定しているもの
- 初期リリースに必要か判断できないもの

### 5.3 除外

- 旧JavaScriptデータ形式
- localStorageのキー
- 旧バックアップ形式
- 旧データ移行
- 既存HTMLへの追加方法
- 現行試作の関数名・変数名
- GitHub Pagesだけで完結する方式
- 現行試作との互換処理
- 完了済み実装の作業記録

## 6. 要求定義書での分類

抽出した要求は最終的に次へ分類する。

1. 初期リリース必須
2. 初期リリース後
3. 将来候補

分類時には、機能の重要度だけでなく、
完成版の縦方向経路を成立させるために必要かどうかを判断する。

## 7. 確認状況

### 7.1 要求抽出の主対象

次の資料は、完成版要求の抽出対象として確認済みである。

- `docs/design/learning_content_model_v0_8.md`
- `docs/design/question_metadata_schema_design_v0_1.md`
- `docs/design/catalog_to_question_data_design_v0_1.md`
- `docs/design/id_and_code_policy_v0_1.md`
- `docs/design/purpose_based_question_sets_design_v0_1.md`
- `docs/design/purpose_set_runtime_design_v0_1.md`
- `docs/design/progress_design.md`
- `docs/design/progress_model_motivation.md`
- `docs/design/gui_structure_design_v0_1.md`
- `docs/design/visual_question_data_design_v0_1.md`
- `docs/design/printable_question_output_design_v0_1.md`

確認済みとは、
文書全体を完成版仕様として採用したことを意味しない。

完成版に必要な要求を抽出し、
現行試作固有の実装方法、旧データ形式、
旧画面構造、旧保存方式は除外済みである。

### 7.2 補助資料

次の補助資料は確認済みである。

- `docs/concept/project_overview.md`
- `docs/concept/category_policy.md`
- `docs/design/catalogs/`
- `docs/operations/question_set_registration_procedure.md`
- `docs/operations/multi_set_support_design.md`

カタログ資料については、
学校教科と検定の代表資料に加え、
理科、地理、歴史、英語、漢検、数検の構造差を確認した。

個別単元や特定検定級の内容は、
完成版の共通要求として固定していない。

### 7.3 原則除外資料の確認状況

`docs/design/persistence_policy.md` は、
永続保存、保存状態、バックアップ、復元、
可搬性、複数端末利用に関する要求漏れ確認のために参照済みである。

次の資料は、
要求抽出の主対象としては扱わない。

- `docs/design/app_refactoring_plan_v0_1.md`
- `docs/design/metadata_migration_plan_v0_1.md`
- `docs/materials/`

`app_refactoring_plan_v0_1.md` と
`metadata_migration_plan_v0_1.md` は、
要求漏れの最終確認を完了した。

責務分離、拡張性、進捗保護、
バックアップ、画面の複雑化防止、
著作権資料の混入防止に関する内容は、
既存要求でカバー済みである。

旧試作のファイル分割方法、段階的移行手順、
既存進捗形式、旧バックアップ互換、
旧タグ導入順序は完成版要求へ採用しない。

`docs/materials/` は、
教科・検定固有の代表資料による
要求漏れの最終確認を完了した。

確認した主な実例は次のとおりである。

- 英検ライティングの問題、模範解答、解答の型
- 漢検の教材作成規則、セット定義、網羅性管理
- 学校英語・数学の問題設計と生成後レビュー
- 理科・社会教材の構成と採用レビュー

この確認から、
教材の網羅性、機械検証と内容レビューの分離、
問題間の依存関係、ヒント・模範解答・段階的支援に関する
共通要求を追加した。

個別教材の問題数、セット番号、学習順、
試験固有の語数や時間などは
完成版の共通要求として固定していない。

### 7.4 現在の要求抽出結果

現時点で、
完成版要求インベントリには次が整理されている。

- 560件の要求
- 103セクション
- 重複した要求IDなし
- セクション番号の欠番なし

対象文書：

- `docs/requirements/full_rebuild_requirements_inventory_v0_1.md`

### 7.5 要求抽出フェーズの残作業

原則除外資料からの要求漏れ確認は完了した。

今後の残作業は次とする。

1. 要求インベントリ全体の重複・矛盾・粒度差を点検する
2. 初期リリース必須、初期リリース後、将来候補の妥当性を再確認する
3. 要求間の依存関係を整理する
4. 完成版要求定義書へ統合する

新たな資料が見つからない限り、
既存資料からの要求抽出は完了とする。
