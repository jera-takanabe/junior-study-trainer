// =========================================================
// Purpose Sets Manifest
// 目的別問題集の一覧
//
// 注意：このManifestは、目的別問題集の明示ID方式プロトタイプである。
// app/index.html から読み込み、目的別問題集パネルに表示する。
// 初期実装では保存なし実行とし、通常教材の進捗・履歴には記録しない。
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
  },
  {
    purposeSetId: "purpose_math_test1_word_problems_001",
    title: "数学 第1回定期テスト 文章題確認",
    description: "数学第1回定期テスト範囲から、文字式で数量を表す文章題、代金、割合、速さ・時間・道のりを確認する目的別問題集。",
    purposeType: "定期テスト対策",
    selectionMode: "explicitIds",
    questionSetScope: [
      "school_math_jhs1_test1"
    ],
    ordering: "fixed",
    randomization: false,
    limit: 16,
    timer: {
      questionSeconds: 30,
      answerSeconds: 5
    },
    progressScope: "purposeSet",
    status: "active",
    questions: [
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q012"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q014"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q017"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q021"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q022"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q023"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q025"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q028"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q029"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q030"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q031"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q032"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q036"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q037"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q038"
      },
      {
        questionSetId: "school_math_jhs1_test1",
        questionId: "math_test1_m013_q039"
      }
    ]
  }
];
