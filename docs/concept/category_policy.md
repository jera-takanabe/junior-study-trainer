# Category Policy

## 1. 目的

この文書は、Junior Study Trainer で扱う教材カテゴリの分類方針を定義する。

漢検5級は最初のプロトタイプ教材だが、プロジェクト全体は漢検専用ではない。

## 2. 大分類

教材カテゴリは、まず以下の3系統に分ける。

- school
- certifications
- extensions

## 3. school

学校教科を扱う。

対象例：

- school/japanese
- school/math
- school/science
- school/social_studies
- school/english

具体例：

- 中1数学 正負の数
- 中1理科 植物
- 中1英語 基本文法
- 国語 語句・漢字・文法
- 社会 地理・歴史

## 4. certifications

外部検定を扱う。

対象例：

- certifications/kanken
- certifications/eiken
- certifications/suken

具体例：

- 漢検5級
- 英検4級
- 数検5級

現在のプロトタイプ教材：

- certifications/kanken/grade5

## 5. extensions

学校教科や検定に直接分類しにくい拡張教材を扱う。

対象例：

- extensions/weak_points
- extensions/periodic_tests
- extensions/parent_child_learning
- extensions/sports_life

具体例：

- 苦手克服
- 定期テスト対策
- 親子学習
- スピンバイク学習
- 移動中学習
- スポーツ・生活習慣関連

## 6. 今後の注意

教材追加時は、アプリ本体を教材専用に変更しない。

問題データ側の category、level、questionType、targets で教材差を表現する。

漢検5級は本採用教材であると同時に、汎用アプリ設計を検証するためのプロトタイプ教材として扱う。

