from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
APP_DIR = ROOT / "app"

QUESTION_SETS_MANIFEST = APP_DIR / "question_sets_manifest.js"
PURPOSE_SETS_MANIFEST = APP_DIR / "purpose_sets_manifest.js"


def read_text(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"ファイルが存在しません: {path}")
    return path.read_text(encoding="utf-8")


def extract_question_sets(text: str):
    blocks = re.findall(r"\{\s*questionSetId:.*?\n\s*\}", text, flags=re.S)
    result = {}

    for block in blocks:
        qsid = re.search(r'questionSetId:\s*"([^"]+)"', block)
        source = re.search(r'sourceFile:\s*"([^"]+)"', block)
        status = re.search(r'status:\s*"([^"]+)"', block)

        if not qsid:
            continue

        result[qsid.group(1)] = {
            "sourceFile": source.group(1) if source else None,
            "status": status.group(1) if status else None,
        }

    return result


def extract_purpose_sets(text: str):
    purpose_set_ids = re.findall(r'purposeSetId:\s*"([^"]+)"', text)

    purpose_blocks = []
    marker = "purposeSetId:"
    positions = [m.start() for m in re.finditer(marker, text)]

    for index, start in enumerate(positions):
        end = positions[index + 1] if index + 1 < len(positions) else len(text)
        purpose_blocks.append(text[start:end])

    return purpose_set_ids, purpose_blocks


def extract_question_refs(block: str):
    refs = []
    pattern = re.compile(
        r'questionSetId:\s*"([^"]+)"\s*,\s*\n\s*questionId:\s*"([^"]+)"',
        flags=re.S,
    )

    for match in pattern.finditer(block):
        refs.append({
            "questionSetId": match.group(1),
            "questionId": match.group(2),
        })

    return refs


def extract_question_ids_from_data(path: Path):
    text = read_text(path)
    return set(re.findall(r'"id":\s*"([^"]+)"', text))


def main() -> int:
    errors = []

    try:
        question_sets_text = read_text(QUESTION_SETS_MANIFEST)
        purpose_sets_text = read_text(PURPOSE_SETS_MANIFEST)
    except FileNotFoundError as exc:
        print(f"NG: {exc}")
        return 1

    question_sets = extract_question_sets(question_sets_text)
    if not question_sets:
        errors.append("question_sets_manifest.js から questionSetId を取得できません。")

    purpose_set_ids, purpose_blocks = extract_purpose_sets(purpose_sets_text)
    if not purpose_set_ids:
        errors.append("purpose_sets_manifest.js から purposeSetId を取得できません。")

    duplicated_purpose_set_ids = sorted({
        value for value in purpose_set_ids if purpose_set_ids.count(value) > 1
    })
    for purpose_set_id in duplicated_purpose_set_ids:
        errors.append(f"purposeSetId が重複しています: {purpose_set_id}")

    question_id_cache = {}

    for block in purpose_blocks:
        purpose_set_id_match = re.search(r'purposeSetId:\s*"([^"]+)"', block)
        purpose_set_id = purpose_set_id_match.group(1) if purpose_set_id_match else "(不明)"

        selection_mode_match = re.search(r'selectionMode:\s*"([^"]+)"', block)
        selection_mode = selection_mode_match.group(1) if selection_mode_match else None

        if selection_mode != "explicitIds":
            errors.append(f"{purpose_set_id}: selectionMode は explicitIds のみ検証対象です。現在値: {selection_mode}")
            continue

        refs = extract_question_refs(block)
        if not refs:
            errors.append(f"{purpose_set_id}: questions の参照が取得できません。")
            continue

        for ref in refs:
            question_set_id = ref["questionSetId"]
            question_id = ref["questionId"]

            if question_set_id not in question_sets:
                errors.append(f"{purpose_set_id}: 存在しない questionSetId を参照しています: {question_set_id}")
                continue

            source_file = question_sets[question_set_id].get("sourceFile")
            if not source_file:
                errors.append(f"{purpose_set_id}: sourceFile が未定義です: {question_set_id}")
                continue

            source_path = ROOT / source_file
            if not source_path.exists():
                errors.append(f"{purpose_set_id}: sourceFile が存在しません: {source_file}")
                continue

            if source_path not in question_id_cache:
                question_id_cache[source_path] = extract_question_ids_from_data(source_path)

            if question_id not in question_id_cache[source_path]:
                errors.append(
                    f"{purpose_set_id}: questionId が対象教材に存在しません: "
                    f"{question_set_id} / {question_id}"
                )

    if errors:
        print("目的別問題集の検証: NG")
        for error in errors:
            print(f"- {error}")
        return 1

    print("目的別問題集の検証: OK")
    print(f"- questionSet 数: {len(question_sets)}")
    print(f"- purposeSet 数: {len(purpose_set_ids)}")
    print(f"- 検証済み参照数: {sum(len(extract_question_refs(block)) for block in purpose_blocks)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
