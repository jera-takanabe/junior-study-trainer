// =========================================================
// Purpose Sets Manifest
// 目的別問題集の一覧
//
// 注意：このManifestは、目的別問題集の明示ID方式プロトタイプである。
// 現時点では app/index.html からは読み込まない。
// 既存の教材選択・進捗・履歴には影響させない。
// =========================================================

window.PURPOSE_SETS_MANIFEST = [
  {
    purposeSetId: "purpose_math_test1_basic_check_001",
    title: "数学 第1回定期テスト 基本確認",
    description: "数学第1回定期テスト範囲から、正負の数の基本を短時間で確認するためのドラフト目的別問題集。",
    purposeType: "定期テスト対策",
    selectionMode: "explicitIds",
    questionSetScope: [
      "school_math_jhs1_test1"
    ],
    ordering: "fixed",
    randomization: false,
    limit: 15,
    timer: {
      questionSeconds: 20,
      answerSeconds: 5
    },
    progressScope: "purposeSet",
    status: "active",
    questions: [
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m001_q001"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m001_q002"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m001_q003"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m001_q004"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m001_q005"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m002_q001"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m002_q002"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m002_q003"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m002_q004"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m002_q005"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m003_q001"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m003_q002"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m003_q003"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m003_q004"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m003_q005"
      }
    ]
  }
];
