# 新規教材セット登録手順

対象リポジトリ: `junior-study-trainer`

推奨配置先: `docs/operations/question_set_registration_procedure.md`

## 目的

新規教材セットを追加するときに、問題データ、教材一覧、アプリ側の教材判定、進捗・履歴・バックアップ確認までを同じ手順で進めるための手順書。

今回の重要な前提は、通常 `app/questions.js` を直接置き換えないこと。新規教材は `app/data/*.js` として追加し、`app/question_sets_manifest.js` から読み込む。

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

## 3. 問題データファイルを作る

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
duplicate_ids = [k for k, v in Counter(q["id"] for q in questions).items() if v > 1]
bad_set_refs = sorted(question_set_ids - set_ids)

print("sets", len(sets))
print("questions", len(questions))
print("by_set", dict(Counter(q["setId"] for q in questions)))
print("duplicate_ids", duplicate_ids)
print("bad_set_refs", bad_set_refs)
print("first_id", questions[0]["id"] if questions else None)
print("count_ok", len(questions) == question_count)
print("prefix_ok", all(q["id"].startswith(question_id_prefix) for q in questions))

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
- `duplicate_ids []`
- `bad_set_refs []`
- `count_ok True`
- `prefix_ok True`
- manifest の各項目が `True`
- index 側の教材判定が必要な場合、各項目が `True`

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

## 9. コミット

データ・manifest・docs の追加:

```bash
git add app/data/<教材名>.js \
  app/question_sets_manifest.js \
  docs/operations/question_sets_inventory.md \
  docs/operations/question_sets_manifest_draft.md

git commit -m "feat: add <教材名> question set"
```

`app/index.html` の教材判定を追加した場合:

```bash
git add app/index.html
git commit -m "fix: detect <教材名> question set"
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

## 避けるミス

- `app/questions.js` を前提に進める
- `question_sets_manifest.js` に登録しただけで完了扱いにする
- 出題確認だけで終わり、進捗・履歴・バックアップを確認しない
- `questionSetId` と問題ID prefix の対応を曖昧にする
- `app/index.html` の教材判定追加をステージし忘れる
- 既存教材の進捗・履歴と混ざる状態で保存する
