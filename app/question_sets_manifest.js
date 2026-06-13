// =========================================================
// Question Sets Manifest
// 教材全体の一覧
//
// 注意：現時点ではアプリ本体からは読み込まない。
// Phase 5 以降で、教材選択UIや読み込み処理と接続する。
// =========================================================

window.QUESTION_SETS_MANIFEST = [
  {
    questionSetId: "school_science_jhs1_textbook_s001_s003",
    questionSetName: "理科 中1 教科書 S001-S003",
    subject: "理科",
    grade: "中1",
    range: "S001-S003",
    questionCount: 222,
    sourceFile: "app/data/science_textbook_s001_s003.js",
    status: "registered"
  },
  {
    questionSetId: "school_social_geography_jhs1_textbook_p10_p53",
    questionSetName: "社会 地理 p10-p53",
    subject: "社会",
    grade: "中1",
    range: "地理 p10-p53",
    questionCount: 347,
    sourceFile: "app/data/social_geography_p10_p53.js",
    status: "registered"
  },
  {
    questionSetId: "school_social_history_jhs1_textbook_p24_p27",
    questionSetName: "社会 歴史 p24-p27",
    subject: "社会",
    grade: "中1",
    range: "歴史 p24-p27",
    questionCount: 97,
    sourceFile: "app/data/social_history_p24_p27.js",
    status: "registered"
  }
];
