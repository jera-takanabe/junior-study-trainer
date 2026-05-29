// =========================================================
// 漢検5級 Set 010：基本熟語・日常語 10 v1 qq形式
// file: questions_kanken5_s010_basic_daily_words_v1_qq_format.js
//
// 前提：統合版 questions.js 側で以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s010 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 010 対象漢字 20字：
// 自・然・環・境・安・全・危・険・健・康
// 栄・養・衛・生・災・害・防・止・保・護
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 010：基本熟語・日常語 10 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s010", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『自然』", answer: "しぜん", note: "意味：人の手が加わっていないものや、山・川・海など。例：自然を大切にする。", targets: ["自", "然", "自然"] }),
  qq({ setId: "s010", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『環境』", answer: "かんきょう", note: "意味：人や生き物のまわりの状態。例：生活環境、自然環境。", targets: ["環", "境", "環境"] }),
  qq({ setId: "s010", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『安全』", answer: "あんぜん", note: "意味：危険が少なく安心できること。例：安全を確認する。", targets: ["安", "全", "安全"] }),
  qq({ setId: "s010", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『危険』", answer: "きけん", note: "意味：あぶないこと。例：危険な場所に近づかない。", targets: ["危", "険", "危険"] }),
  qq({ setId: "s010", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『健康』", answer: "けんこう", note: "意味：体や心の調子がよいこと。例：健康な体。", targets: ["健", "康", "健康"] }),
  qq({ setId: "s010", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『栄養』", answer: "えいよう", note: "意味：体を作ったり動かしたりするために必要な成分。例：栄養をとる。", targets: ["栄", "養", "栄養"] }),
  qq({ setId: "s010", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『衛生』", answer: "えいせい", note: "意味：健康を守るために清潔にすること。例：衛生に気をつける。", targets: ["衛", "生", "衛生"] }),
  qq({ setId: "s010", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『災害』", answer: "さいがい", note: "意味：地震・台風・大雨などによる大きな被害。例：災害に備える。", targets: ["災", "害", "災害"] }),
  qq({ setId: "s010", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『防止』", answer: "ぼうし", note: "意味：悪いことが起こらないように防ぐこと。例：けがを防止する。", targets: ["防", "止", "防止"] }),
  qq({ setId: "s010", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『保護』", answer: "ほご", note: "意味：守ること。例：自然を保護する。", targets: ["保", "護", "保護"] }),

  // 意味 6問
  qq({ setId: "s010", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『環境』の意味として正しいものは？\n\nA. 人や生き物のまわりの状態\nB. 目的地に着くこと\nC. いくつかの数をならした値\nD. ありがたいと思う気持ち", answer: "A. 人や生き物のまわりの状態", note: "例：自然環境、学習環境。", targets: ["環", "境", "環境"] }),
  qq({ setId: "s010", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『安全』の意味として正しいものは？\n\nA. 危険が少なく安心できること\nB. あぶないこと\nC. 数や量がふえること\nD. 順番を決めること", answer: "A. 危険が少なく安心できること", note: "例：安全を確認する。", targets: ["安", "全", "安全"] }),
  qq({ setId: "s010", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『危険』の意味として正しいものは？\n\nA. あぶないこと\nB. 健康を守ること\nC. みんなで協力すること\nD. 自分の考え", answer: "A. あぶないこと", note: "危険な場所には近づかない。", targets: ["危", "険", "危険"] }),
  qq({ setId: "s010", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『衛生』の意味として正しいものは？\n\nA. 健康を守るために清潔にすること\nB. 自然を観察すること\nC. 代表を決めること\nD. 場所を移ること", answer: "A. 健康を守るために清潔にすること", note: "例：手洗い、清潔な環境。", targets: ["衛", "生", "衛生"] }),
  qq({ setId: "s010", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『防止』の意味として正しいものは？\n\nA. 悪いことが起こらないように防ぐこと\nB. 途中で休むこと\nC. 心に強く決めること\nD. ものがある場所", answer: "A. 悪いことが起こらないように防ぐこと", note: "例：事故を防止する、けがを防止する。", targets: ["防", "止", "防止"] }),
  qq({ setId: "s010", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『保護』の意味として正しいものは？\n\nA. 守ること\nB. 出発すること\nC. 反対すること\nD. 記録すること", answer: "A. 守ること", note: "例：自然を保護する、子どもを保護する。", targets: ["保", "護", "保護"] }),

  // 対義語・類義語 5問
  qq({ setId: "s010", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『安全』の対義語として正しいものは？\n\nA. 危険\nB. 健康\nC. 自然\nD. 保護", answer: "A. 危険", note: "安全 ⇔ 危険。", targets: ["安", "全", "安全", "危険"] }),
  qq({ setId: "s010", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『健康』の反対に近い言葉は？\n\nA. 不健康\nB. 栄養\nC. 衛生\nD. 環境", answer: "A. 不健康", note: "健康ではない状態を不健康という。", targets: ["健", "康", "健康", "不健康"] }),
  qq({ setId: "s010", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『危険』に近い意味の言葉は？\n\nA. あぶないこと\nB. 守ること\nC. 清潔にすること\nD. ありがたいこと", answer: "A. あぶないこと", note: "危険は、あぶないこと。", targets: ["危", "険", "危険"] }),
  qq({ setId: "s010", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『保護』に近い意味の言葉は？\n\nA. 守ること\nB. 失敗すること\nC. 始めること\nD. 比べること", answer: "A. 守ること", note: "保護は、守ること。", targets: ["保", "護", "保護", "守る"] }),
  qq({ setId: "s010", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『防止』に近い意味の言葉は？\n\nA. 防ぐこと\nB. 増えること\nC. 到着すること\nD. 意見を言うこと", answer: "A. 防ぐこと", note: "防止は、悪いことが起こらないように防ぐこと。", targets: ["防", "止", "防止", "防ぐ"] }),

  // 同音異字 3問
  qq({ setId: "s010", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n安全をカクニンする。\n\nA. 確認\nB. 各認\nC. 格認\nD. 確任", answer: "A. 確認", note: "Set005の復習。確認：たしかめること。", targets: ["確", "認", "確認"] }),
  qq({ setId: "s010", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nキケンな場所に近づかない。\n\nA. 危険\nB. 危検\nC. 気険\nD. 危験", answer: "A. 危険", note: "危険：あぶないこと。", targets: ["危", "険", "危険", "危検"] }),
  qq({ setId: "s010", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n自然をホゴする。\n\nA. 保護\nB. 保語\nC. 補護\nD. 保後", answer: "A. 保護", note: "保護：守ること。", targets: ["保", "護", "保護", "保語"] }),

  // 書き取り 14問
  qq({ setId: "s010", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nシゼンを大切にする。", answer: "自然", note: "自：みずから。然：そのようである。", targets: ["自", "然", "自然"] }),
  qq({ setId: "s010", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n生活カンキョウを整える。", answer: "環境", note: "環：めぐる、輪。境：さかい、場所。", targets: ["環", "境", "環境"] }),
  qq({ setId: "s010", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nアンゼンを確認する。", answer: "安全", note: "安：やすらか。全：すべて、まったく。", targets: ["安", "全", "安全"] }),
  qq({ setId: "s010", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nキケンな場所に近づかない。", answer: "危険", note: "危：あぶない。険：けわしい、あぶない。", targets: ["危", "険", "危険"] }),
  qq({ setId: "s010", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nケンコウな体を作る。", answer: "健康", note: "健：すこやか。康：やすらか。", targets: ["健", "康", "健康"] }),
  qq({ setId: "s010", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nエイヨウをとる。", answer: "栄養", note: "栄：さかえる。養：やしなう。", targets: ["栄", "養", "栄養"] }),
  qq({ setId: "s010", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nエイセイに気をつける。", answer: "衛生", note: "衛：まもる。生：いきる、うまれる。", targets: ["衛", "生", "衛生"] }),
  qq({ setId: "s010", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nサイガイに備える。", answer: "災害", note: "災：わざわい。害：そこなう、害。", targets: ["災", "害", "災害"] }),
  qq({ setId: "s010", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nけがをボウシする。", answer: "防止", note: "防：ふせぐ。止：とめる。", targets: ["防", "止", "防止"] }),
  qq({ setId: "s010", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n自然をホゴする。", answer: "保護", note: "保：たもつ、守る。護：まもる。", targets: ["保", "護", "保護"] }),
  qq({ setId: "s010", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nジブンで考える。", answer: "自分", note: "Set010では『自』の使い方を確認する問題。", targets: ["自", "自分"] }),
  qq({ setId: "s010", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nアブない場所に近づかない。", answer: "危ない", note: "送り仮名は『危ない』。危険の『危』。", targets: ["危", "危ない"] }),
  qq({ setId: "s010", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n体をヤシナう。", answer: "養う", note: "送り仮名は『養う』。栄養の『養』。", targets: ["養", "養う"] }),
  qq({ setId: "s010", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n事故をフセぐ。", answer: "防ぐ", note: "送り仮名は『防ぐ』。防止の『防』。", targets: ["防", "防ぐ"] }),

  // 送り仮名 3問
  qq({ setId: "s010", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nあぶない", answer: "危ない", note: "『危い』ではなく『危ない』。", targets: ["危", "危ない"] }),
  qq({ setId: "s010", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nやしなう", answer: "養う", note: "『養なう』ではなく『養う』。", targets: ["養", "養う"] }),
  qq({ setId: "s010", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nふせぐ", answer: "防ぐ", note: "『防せぐ』ではなく『防ぐ』。", targets: ["防", "防ぐ"] }),

  // 誤字訂正 3問
  qq({ setId: "s010", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n危検な場所に近づかない。", answer: "危険", note: "危険：あぶないこと。『危検』ではない。", targets: ["危", "険", "危険", "危検"] }),
  qq({ setId: "s010", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n自然を保語する。", answer: "保護", note: "保護：守ること。『保語』ではない。", targets: ["保", "護", "保護", "保語"] }),
  qq({ setId: "s010", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n生活環鏡を整える。", answer: "環境", note: "環境：人や生き物のまわりの状態。『環鏡』ではない。", targets: ["環", "境", "環境", "環鏡"] })
