# 新規教材セット登録手順

対象リポジトリ: `junior-study-trainer`

推奨配置先: `docs/operations/question_set_registration_procedure.md`

## 目的

新規教材セットを追加するときに、問題データ、教材一覧、アプリ側の教材判定、進捗・履歴・バックアップ確認までを同じ手順で進めるための手順書。

今回の重要な前提は、通常 `app/questions.js` を直接置き換えないこと。新規教材は `app/data/*.js` として追加し、`app/question_sets_manifest.js` から読み込む。

この手順書では、従来の教材登録に加えて、今後の設計で追加された次の観点も確認する。

```text
追加確認観点
├─ 共通メタデータ
├─ カタログ参照
├─ 目的別問題集
├─ 印刷用出力
├─ 図表つき問題
├─ 音声・スピーキング
└─ 既存形式との互換性
```

関連設計:

```text
docs/design/catalog_to_question_data_design_v0_1.md
docs/design/purpose_based_question_sets_design_v0_1.md
docs/design/printable_question_output_design_v0_1.md
docs/design/visual_question_data_design_v0_1.md
docs/design/gui_structure_design_v0_1.md
docs/design/question_metadata_schema_design_v0_1.md
docs/design/metadata_migration_plan_v0_1.md
```

## 0. 移行期の基本方針

現時点では、既存の `app/data/*.js` を一括移行しない。

```text
基本方針
├─ 既存教材は従来形式のまま動かす
├─ 新規教材から metadata を任意追加する
├─ metadata がなくてもアプリが動く状態を維持する
├─ 目的別問題集は最初は明示ID方式を優先する
├─ 印刷出力はアプリ外生成から始める
├─ 図表つき問題は自作画像から始める
└─ 音声・スピーキングは後期対応とする
```

この手順書で `metadata` を扱う場合も、当面は「追加できるなら追加する」位置づけであり、すべての既存教材に必須化しない。

## 1. 作業前確認

```bash
git status
git log --oneline --decorate -5
```

`working tree clean` であることを確認する。

必要に応じて、現在の読み込み方式も確認する。

```bash
grep -n "QUESTION_SETS_MANIFEST\|sourceFile\|loadQuestionDataScript\|identifyCurrentQuestionSet" app/index.html
```

確認するポイント:

- `app/index.html` が `question_sets_manifest.js` を読み込んでいる
- 教材選択後、manifest の `sourceFile` をもとに `app/data/*.js` を動的に読み込む
- 進捗・履歴・バックアップで使う教材ID判定がある

## 2. 教材IDを先に決める

作成前に次を決める。

| 項目 | 例 |
|---|---|
| `questionSetId` | `school_japanese_jhs1_test1` |
| `questionSetName` | `国語 第1回定期テスト` |
| `sourceFile` | `app/data/japanese_test1.js` |
| 問題ID prefix | `japanese_test1_` |
| セットID | `j001`, `j002` |
| 問題数 | `112` |

注意:

- `questionSetId` は教材単位の進捗・履歴・バックアップのキーになる。
- 問題ID prefix は `app/index.html` の教材判定で使う場合がある。
- 途中でIDを変えると、保存済み進捗との対応が崩れる可能性がある。

## 2.5 メタデータ方針を決める

新規教材を作る前に、メタデータをどの程度付けるかを決める。

```text
判断項目
├─ 学校教科か、検定か
├─ カタログ参照を持たせるか
├─ 目的別問題集に入れる予定があるか
├─ 印刷用に使う予定があるか
├─ 図表つき問題を含むか
├─ 音声問題を含むか
├─ スピーキング練習を含むか
└─ 既存形式だけで十分か
```

移行期の推奨は次の通り。

```text
通常の新規教材:
  従来形式 + 簡易 metadata

短期の定期テスト対策:
  従来形式優先
  必要に応じて source / purposeTags 程度

検定対策:
  metadata をやや厚めにする
  certification / domainTags / questionTypeTags を優先

印刷予定の教材:
  print 属性または印刷対象メモを付ける

図表つき教材:
  visual 属性または画像参照方針を先に決める
```

## 3. 問題データファイルを作る

### 3.1 原本と作成過程資料を分ける

教科書、ワーク、配布プリント、単元テストなどの原本PDFや、本文のまとまった引用は、公開リポジトリへ格納しない。

問題作成の根拠や中間成果物は、派生情報として次の場所に整理する。

```text
docs/materials/<区分>/<教科>/<学年・範囲>/
```

推奨する資料:

- `README.md`: 教材の目的と著作権上の扱い
- `source_scope.md`: 対象範囲と参照資料
- `question_design.md`: セット構成と出題方針
- `generation_review.md`: 問題数、機械チェック、レビュー結果

教科や教材によって既存のファイル名がある場合は、それを維持してよい。

重要なのは、アプリ用問題だけでなく、作成根拠・設計・レビューを追跡できる状態にすることである。

アプリが実際に読み込む問題データは、次へ配置する。

配置先:

```text
app/data/<教材名>.js
```

基本形式:

```javascript
window.QUIZ_SETS = [
  {
    setId: "j001",
    setName: "国語 第1回定期テスト J001 朝のリレー",
    seriesName: "中1国語・第1回定期テスト一問一答",
    order: 1,
    description: "詩『朝のリレー』の作者、題名、内容、表現、音読。"
  }
];

window.QUIZ_QUESTIONS = [
  {
    id: "japanese_test1_j001_q001",
    setId: "j001",
    type: "short",
    n: 1,
    category: "中1国語・第1回定期テスト対策",
    level: "基本",
    unit: "朝のリレー",
    questionType: "short_answer",
    question: "「朝のリレー」の作者はだれか。",
    answer: "谷川俊太郎",
    note: "解答は「谷川俊太郎」です。復習: 教科書 p.6〜p.10 を確認する。",
    targets: ["谷川俊太郎"],
    tags: ["中1国語", "第1回定期テスト", "朝のリレー"],
    sourcePage: "教科書 p.6〜p.10",
    sourceQuestion: "朝のリレー",
    idBase: "japanese_test1_j001_q001",
    topic: "朝のリレー",
    subSet: "japanese_test1_j001a",
    reviewHint: "教科書 p.6〜p.10 を確認する。"
  }
];
```

最低限そろえる項目:

- `id`
- `setId`
- `question`
- `answer`
- `note`
- `targets`
- `tags`
- `sourcePage`
- `sourceQuestion`

### 3.2 新規教材で metadata を付ける場合

移行期は、既存形式を残したまま `metadata` を追加する。

```javascript
{
  id: "suken5_integer_q001",
  setId: "suken5_integer",
  type: "short",
  n: 1,
  category: "数検5級",
  level: "基本",
  unit: "正負の数",
  questionType: "short_answer",
  question: "−3 + 5 を計算しなさい。",
  answer: "2",
  note: "負の数と正の数の加法を確認する。",
  targets: ["2"],
  tags: ["数検5級", "正負の数", "加法"],

  metadata: {
    subjectType: "certification",
    certification: {
      exam: "suken",
      grade: "5"
    },
    domainTags: ["math.integer.positive_negative"],
    questionTypeTags: ["calculation"],
    knowledgeTags: ["addition.negative_number"],
    skillTags: ["calculate"],
    purposeTags: ["suken5", "review", "bike"],
    source: {
      type: "original",
      repositoryAllowed: true
    },
    status: {
      draft: false,
      reviewed: true
    }
  }
}
```

metadata の初期推奨項目:

```text
metadata
├─ subjectType
├─ school または certification
├─ domainTags
├─ questionTypeTags
├─ knowledgeTags
├─ skillTags
├─ purposeTags
├─ source
└─ status
```

ただし、短期作成の教材では無理に全部埋めない。

### 3.3 カタログ参照を付ける場合

学校教科・検定カタログと対応させたい場合は、`catalogRefs` を使う。

```javascript
metadata: {
  catalogRefs: [
    {
      catalogId: "school_math_jhs1",
      nodeId: "math_jhs1_positive_negative"
    }
  ]
}
```

検定の場合の例:

```javascript
metadata: {
  catalogRefs: [
    {
      catalogId: "suken_grade5",
      nodeId: "suken5_positive_negative_numbers"
    }
  ]
}
```

カタログ参照を付ける目安:

```text
付ける
├─ 目的別問題集に使う
├─ 先取り・復習の横断に使う
├─ 検定範囲と学校範囲を対応させたい
└─ 将来の弱点分析に使いたい

付けないでもよい
├─ 短期の定期テスト直前プリント
├─ 使い捨ての確認問題
└─ まだカタログ側が未整理の範囲
```

## 4. Manifestと運用資料を更新する

更新対象:

```text
app/question_sets_manifest.js
docs/operations/question_sets_inventory.md
docs/operations/question_sets_manifest_draft.md
```

`app/question_sets_manifest.js` には次の形式で追加する。

```javascript
{
  questionSetId: "school_japanese_jhs1_test1",
  questionSetName: "国語 第1回定期テスト",
  subject: "国語",
  grade: "中1",
  range: "第1回定期テスト",
  questionCount: 112,
  sourceFile: "app/data/japanese_test1.js",
  status: "registered"
}
```

注意:

- `sourceFile` は `app/data/*.js` にする。
- 通常 `app/questions.js` は新規教材登録では触らない。

### 4.1 目的別問題集に入れるか確認する

新規教材を作成したら、目的別問題集に入れるかを確認する。

```text
確認する目的
├─ 今日やる
├─ 前回の続き
├─ スピンバイク40問
├─ 車移動用
├─ 定期テスト直前
├─ 検定直前
├─ 弱点補強
├─ 先取り
└─ 復習
```

移行初期は、目的別問題集を明示ID方式で管理する。

```text
明示ID方式
purposeSetId:
  suken6_light_check

questionIds:
  - suken6_fraction_q001
  - suken6_ratio_q003
  - suken6_speed_q002
```

この段階では、抽出条件方式を無理に実装しない。

### 4.2 印刷対象か確認する

印刷用に使う教材・問題は、作成時点で分かる範囲だけ印刷向きかを確認する。

```text
印刷向き
├─ 書いて解く問題
├─ 計算過程が必要な問題
├─ 文章題
├─ 漢字書取
├─ 英作文
└─ 図形・作図

アプリ向き
├─ 一問一答
├─ 語句確認
├─ 暗記確認
├─ 短時間反復
└─ 音声つき練習
```

必要に応じて `metadata.print` を付ける。

```javascript
metadata: {
  print: {
    printable: true,
    answerSpace: "short",
    includeExplanation: true
  }
}
```

### 4.3 図表対象か確認する

図表つき問題を含む場合は、画像の扱いを先に決める。

```text
確認すること
├─ 自作画像か
├─ 公開リポジトリに置けるか
├─ .local/ 限定か
├─ アプリ表示が必要か
├─ 印刷出力が必要か
└─ 代替テキストが必要か
```

公開リポジトリへ置ける自作画像は、将来的に次へ配置する。

```text
app/assets/visuals/
```

原本PDFから切り出した画像、教科書・ワークの図表は、原則として公開リポジトリに置かない。

### 4.4 音声・スピーキング対象か確認する

音声・スピーキングは後期対応のため、現時点では対象かどうかだけ記録する。

```text
音声対象
├─ 英検リスニング
├─ 英単語音声
├─ 音読
└─ シャドーイング

スピーキング対象
├─ 英検二次試験
├─ 音読
├─ 質問応答
└─ イラスト描写
```

この時点でアプリ実装は必須ではない。

## 5. 教材単位判定を確認する

`app/index.html` の `identifyCurrentQuestionSet` 周辺を確認する。

```bash
grep -n "identifyCurrentQuestionSet\|startsWith" app/index.html
```

新教材の問題ID prefix から `questionSetId` を判定できない場合は、判定ブロックを追加する。

例:

```javascript
if (firstQuestionId.startsWith("japanese_test1_")) {
  return {
    questionSetId: "school_japanese_jhs1_test1",
    questionSetName: "国語 第1回定期テスト",
    source: "questionId",
    totalQuestionCount
  };
}
```

この確認を省くと、出題はできても、進捗・履歴・バックアップが教材単位で正しく扱われない可能性がある。

注意:

- metadata を追加しても、当面は既存の教材単位判定を壊さない。
- 進捗・履歴のキーは引き続き `questionSetId` を基本とする。
- 目的別問題集を実装するまでは、`purposeSetId` を進捗キーに使わない。

## 6. 機械チェック

Node.js が使えない環境もあるため、Pythonで確認する。

```bash
python - <<'PY'
from pathlib import Path
import json
import re
from collections import Counter

data_file = "app/data/<教材名>.js"
question_set_id = "<questionSetId>"
question_set_name = "<questionSetName>"
question_count = <問題数>
source_file = data_file
question_id_prefix = "<問題ID prefix>"

s = Path(data_file).read_text(encoding="utf-8")
m_sets = re.search(r"window\.QUIZ_SETS = (\[.*?\]);\s*window\.QUIZ_QUESTIONS =", s, re.S)
m_questions = re.search(r"window\.QUIZ_QUESTIONS = (\[.*\]);\s*$", s, re.S)
if not m_sets or not m_questions:
    raise SystemExit("QUIZ arrays not found")

sets = json.loads(m_sets.group(1))
questions = json.loads(m_questions.group(1))
set_ids = {x["setId"] for x in sets}
question_set_ids = {x["setId"] for x in questions}
duplicate_set_ids = [k for k, v in Counter(x["setId"] for x in sets).items() if v > 1]
duplicate_ids = [k for k, v in Counter(q["id"] for q in questions).items() if v > 1]
bad_set_refs = sorted(question_set_ids - set_ids)

required = [
    "id",
    "setId",
    "question",
    "answer",
    "note",
    "targets",
    "tags",
    "sourcePage",
    "sourceQuestion",
]
missing_required = []
for q in questions:
    missing = [k for k in required if k not in q or q[k] in ("", [], None)]
    if missing:
        missing_required.append((q.get("id"), missing))

print("sets", len(sets))
print("questions", len(questions))
print("by_set", dict(Counter(q["setId"] for q in questions)))
print("duplicate_set_ids", duplicate_set_ids)
print("duplicate_ids", duplicate_ids)
print("bad_set_refs", bad_set_refs)
print("first_id", questions[0]["id"] if questions else None)
print("last_id", questions[-1]["id"] if questions else None)
print("count_ok", len(questions) == question_count)
print("prefix_ok", all(q["id"].startswith(question_id_prefix) for q in questions))
print("missing_required_count", len(missing_required))
print("sample_missing_required", missing_required[:3])

manifest_text = Path("app/question_sets_manifest.js").read_text(encoding="utf-8")
for token in [
    f'questionSetId: "{question_set_id}"',
    f'questionSetName: "{question_set_name}"',
    f'questionCount: {question_count}',
    f'sourceFile: "{source_file}"',
]:
    print("manifest_has", token, token in manifest_text)

index_text = Path("app/index.html").read_text(encoding="utf-8")
for token in [
    f'firstQuestionId.startsWith("{question_id_prefix}")',
    f'questionSetId: "{question_set_id}"',
    f'questionSetName: "{question_set_name}"',
]:
    print("index_has", token, token in index_text)
PY
```

確認する結果:

- `questions` が想定数
- `duplicate_set_ids []`
- `duplicate_ids []`
- `bad_set_refs []`
- `count_ok True`
- `prefix_ok True`
- `missing_required_count 0`
- manifest の各項目が `True`
- index 側の教材判定が必要な場合、各項目が `True`

### 6.1 metadata を付けた場合の追加チェック

metadata を付けた場合は、最低限の構造も確認する。

```bash
python - <<'PY'
from pathlib import Path
import json
import re
from collections import Counter

data_file = "app/data/<教材名>.js"

s = Path(data_file).read_text(encoding="utf-8")
m_questions = re.search(r"window\.QUIZ_QUESTIONS = (\[.*\]);\s*$", s, re.S)
if not m_questions:
    raise SystemExit("QUIZ_QUESTIONS not found")

questions = json.loads(m_questions.group(1))

with_metadata = [q for q in questions if "metadata" in q]
print("questions", len(questions))
print("with_metadata", len(with_metadata))

metadata_required_when_present = [
    "subjectType",
    "domainTags",
    "questionTypeTags",
    "source",
    "status",
]

missing = []
for q in with_metadata:
    md = q.get("metadata") or {}
    miss = [k for k in metadata_required_when_present if k not in md or md[k] in ("", [], None)]
    if miss:
        missing.append((q.get("id"), miss))

print("metadata_missing_count", len(missing))
print("metadata_missing_sample", missing[:5])

subject_types = Counter((q.get("metadata") or {}).get("subjectType") for q in with_metadata)
print("subject_types", dict(subject_types))

purpose_tags = Counter()
for q in with_metadata:
    for tag in (q.get("metadata") or {}).get("purposeTags", []):
        purpose_tags[tag] += 1

print("purpose_tags", dict(purpose_tags))
PY
```

確認する結果:

- `with_metadata` が想定通り
- `metadata_missing_count 0` が望ましい
- `subjectType` が `school` または `certification`
- `purposeTags` が使いすぎ・ばらつきすぎになっていない

metadata がない教材では、この追加チェックは不要。

## 7. アプリ動作確認

```bash
start app/index.html
```

確認すること:

- アプリが起動する
- 新教材を選択できる
- 問題が表示される
- 解答表示できる
- 正解・復習・スキップ等が動く
- 1セッション終了後、履歴が増える
- 別教材に切り替えて進捗・履歴が混ざらない
- 新教材に戻って進捗が保持されている
- バックアップに新教材の `questionSetId` の進捗・履歴が含まれる

追加で確認すること:

- metadata を追加した問題でも、従来通り出題できる
- metadata が画面表示を壊していない
- 図表参照を含む場合、画像がなくても致命的エラーにならない
- 目的別問題集をまだ実装していない場合、通常教材選択に影響しない

## 8. 保存前確認

```bash
git status --short
git diff --stat
git diff -- app/question_sets_manifest.js | sed -n '1,160p'
git diff -- app/index.html | sed -n '1,160p'
```

確認すること:

- 意図しないファイルが変更されていない
- `app/data/<教材名>.js` が追加されている
- manifest と運用資料が更新されている
- `app/index.html` を変更した場合、ステージ漏れしない
- 原本PDFや `.local/` 配下のファイルが含まれていない
- metadata を追加した場合、既存項目を削っていない

## 9. コミット

データ・Manifest・運用資料の追加:

```bash
git add app/data/<教材名>.js \
  app/question_sets_manifest.js \
  docs/operations/question_sets_inventory.md \
  docs/operations/question_sets_manifest_draft.md

git commit -m "feat: add <教材名> question set"
```

作成過程資料を新規作成・更新した場合は、内容を確認してから別途追加する。

```bash
git add docs/materials/<対象ディレクトリ>/
```

原本PDF、教科書・ワーク本文のまとまった転載、`.local/` 配下の一時ファイルはステージしない。

`app/index.html` の教材判定を追加した場合:

```bash
git add app/index.html
git commit -m "fix: detect <教材名> question set"
```

目的別問題集、印刷出力、図表素材などを別ファイルで追加した場合は、通常の教材追加とはコミットを分ける。

```bash
git commit -m "feat: add <目的名> purpose question set"
git commit -m "feat: add printable output for <教材名>"
git commit -m "feat: add visual assets for <教材名>"
```

送信:

```bash
git push origin main

git status
git log --oneline --decorate -5
```

## 10. 完了条件

完了条件:

- 新教材がアプリで選択できる
- 出題と解答表示ができる
- セッション履歴が残る
- 別教材と進捗・履歴が混ざらない
- バックアップに新教材の進捗・履歴が含まれる
- `git status` が `working tree clean`
- 最新コミットが `origin/main` に送信済み

metadata を付けた場合の追加完了条件:

- metadata が既存表示を壊していない
- subjectType が設定されている
- domainTags / questionTypeTags が最低限設定されている
- source の著作権方針が矛盾していない
- status が draft / reviewed の状態を表している

目的別問題集に入れる場合の追加完了条件:

- 対象 questionId が存在する
- 重複IDがない
- 目的別セット名が子どもにも分かる
- 既存の教材単位進捗と混ざらない

印刷対象の場合の追加完了条件:

- 問題用紙と解答を分けられる
- 解答欄の要否が分かる
- 著作権上公開できない本文・画像を含めていない

図表対象の場合の追加完了条件:

- 画像の置き場所が決まっている
- 自作画像かローカル限定かが分かる
- 代替テキストまたは説明がある

## 避けるミス

- `app/questions.js` を前提に進める
- `question_sets_manifest.js` に登録しただけで完了扱いにする
- 出題確認だけで終わり、進捗・履歴・バックアップを確認しない
- `questionSetId` と問題ID prefix の対応を曖昧にする
- `app/index.html` の教材判定追加をステージし忘れる
- 作成過程資料を更新したのにステージし忘れる
- 原本PDFや `.local/` 配下の一時ファイルを登録する
- 既存教材の進捗・履歴と混ざる状態で保存する
- metadata を追加するために既存項目を削る
- タグを増やしすぎて運用できなくする
- 目的別問題集を抽出条件方式から始めて複雑化する
- 教科書・ワークの図表をそのまま公開リポジトリに入れる
- 印刷用問題に著作権上公開できない本文を含める
