// =========================================================
// Question Sets Manifest
// 教材全体の一覧
//
// 注意：このManifestはアプリ本体から読み込まれ、教材選択と教材データの動的読み込みに使用する。
// 教材の追加・変更時は、運用資料および実際の教材データと内容を一致させる。
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
  },
  {
    questionSetId: "school_japanese_jhs1_test1",
    questionSetName: "国語 第1回定期テスト",
    subject: "国語",
    grade: "中1",
    range: "第1回定期テスト",
    questionCount: 112,
    sourceFile: "app/data/japanese_test1.js",
    status: "registered"
  },
  {
    questionSetId: "school_english_jhs1_test1",
    questionSetName: "英語 第1回定期テスト",
    subject: "英語",
    grade: "中1",
    range: "第1回定期テスト: 教科書 p.39 まで / めきめき p.2-p.45 / 単元テスト PROGRAM 1 & 2",
    questionCount: 273,
    sourceFile: "app/data/english_test1.js",
    status: "registered"
  },
  {
    questionSetId: "school_math_jhs1_test1",
    questionSetName: "数学 第1回定期テスト",
    subject: "数学",
    grade: "中1",
    range: "第1回定期テスト: 教科書 p.12-p.65 / 自主学習 p.4-p.39",
    questionCount: 292,
    sourceFile: "app/data/math_test1.js",
    status: "registered"
  }
];
