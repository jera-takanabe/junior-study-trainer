// =========================================================
// 漢検5級 Set 008：基本熟語・日常語 08 v1 qq形式
// file: questions_kanken5_s008_basic_daily_words_v1_qq_format.js
//
// 前提：統合版 questions.js 側で以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s008 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 008 対象漢字 20字：
// 位・置・方・向・道・路・通・過・移・動
// 到・着・出・発・周・囲・中・央・地・域
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 008：基本熟語・日常語 08 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s008", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『位置』", answer: "いち", note: "意味：ものがある場所。例：ボールの位置を確認する。", targets: ["位", "置", "位置"] }),
  qq({ setId: "s008", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『方向』", answer: "ほうこう", note: "意味：向き。例：走る方向を変える。", targets: ["方", "向", "方向"] }),
  qq({ setId: "s008", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『道路』", answer: "どうろ", note: "意味：人や車が通る道。例：道路を横断する。", targets: ["道", "路", "道路"] }),
  qq({ setId: "s008", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『通過』", answer: "つうか", note: "意味：ある場所を通り過ぎること。例：駅を通過する。", targets: ["通", "過", "通過"] }),
  qq({ setId: "s008", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『移動』", answer: "いどう", note: "意味：場所を移ること。例：別の場所へ移動する。", targets: ["移", "動", "移動"] }),
  qq({ setId: "s008", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『到着』", answer: "とうちゃく", note: "意味：目的地に着くこと。例：駅に到着する。", targets: ["到", "着", "到着"] }),
  qq({ setId: "s008", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『出発』", answer: "しゅっぱつ", note: "意味：出かけること、出始めること。例：朝に出発する。", targets: ["出", "発", "出発"] }),
  qq({ setId: "s008", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『周囲』", answer: "しゅうい", note: "意味：まわり。例：周囲を確認する。", targets: ["周", "囲", "周囲"] }),
  qq({ setId: "s008", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『中央』", answer: "ちゅうおう", note: "意味：まんなか。例：グラウンドの中央。", targets: ["中", "央", "中央"] }),
  qq({ setId: "s008", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『地域』", answer: "ちいき", note: "意味：ある範囲の土地や場所。例：地域の行事。", targets: ["地", "域", "地域"] }),

  // 意味 6問
  qq({ setId: "s008", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『位置』の意味として正しいものは？\n\nA. ものがある場所\nB. 時間の長さ\nC. 数や量\nD. 強く心に決めること", answer: "A. ものがある場所", note: "例：人の位置、ボールの位置。", targets: ["位", "置", "位置"] }),
  qq({ setId: "s008", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『方向』の意味として正しいものは？\n\nA. 向き\nB. まんなか\nC. 気持ち\nD. 終わること", answer: "A. 向き", note: "例：右の方向、進む方向。", targets: ["方", "向", "方向"] }),
  qq({ setId: "s008", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『通過』の意味として正しいものは？\n\nA. ある場所を通り過ぎること\nB. 目的地に着くこと\nC. 前もって決めること\nD. 十分だと感じること", answer: "A. ある場所を通り過ぎること", note: "例：駅を通過する、ラインを通過する。", targets: ["通", "過", "通過"] }),
  qq({ setId: "s008", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『到着』の意味として正しいものは？\n\nA. 目的地に着くこと\nB. 場所を移ること\nC. まわりを見ること\nD. 意見を言うこと", answer: "A. 目的地に着くこと", note: "出発して、目的地に着くことを到着という。", targets: ["到", "着", "到着"] }),
  qq({ setId: "s008", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『周囲』の意味として正しいものは？\n\nA. まわり\nB. まんなか\nC. 出かけること\nD. 道を通り過ぎること", answer: "A. まわり", note: "例：周囲の安全を確認する。", targets: ["周", "囲", "周囲"] }),
  qq({ setId: "s008", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『地域』の意味として正しいものは？\n\nA. ある範囲の土地や場所\nB. いくつかの数をならした値\nC. 十分でないと感じること\nD. 順番を決めること", answer: "A. ある範囲の土地や場所", note: "例：地域の人、地域の行事。", targets: ["地", "域", "地域"] }),

  // 対義語・類義語 5問
  qq({ setId: "s008", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『出発』の対義語として正しいものは？\n\nA. 到着\nB. 周囲\nC. 中央\nD. 方向", answer: "A. 到着", note: "出発 ⇔ 到着。", targets: ["出", "発", "出発", "到着"] }),
  qq({ setId: "s008", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『中央』の反対に近い言葉は？\n\nA. 周囲\nB. 到着\nC. 道路\nD. 移動", answer: "A. 周囲", note: "中央はまんなか、周囲はまわり。", targets: ["中", "央", "中央", "周囲"] }),
  qq({ setId: "s008", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『位置』に近い意味の言葉は？\n\nA. 場所\nB. 気持ち\nC. 時間\nD. 数量", answer: "A. 場所", note: "位置は、ものがある場所のこと。", targets: ["位", "置", "位置", "場所"] }),
  qq({ setId: "s008", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『方向』に近い意味の言葉は？\n\nA. 向き\nB. 予定\nC. 反省\nD. 割合", answer: "A. 向き", note: "方向は、向きのこと。", targets: ["方", "向", "方向", "向き"] }),
  qq({ setId: "s008", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『周囲』に近い意味の言葉は？\n\nA. まわり\nB. まんなか\nC. 出発\nD. 道路", answer: "A. まわり", note: "周囲は、まわりのこと。", targets: ["周", "囲", "周囲", "まわり"] }),

  // 同音異字 3問
  qq({ setId: "s008", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nボールのイチを確認する。\n\nA. 位置\nB. 位地\nC. 一置\nD. 位置き", answer: "A. 位置", note: "位置：ものがある場所。", targets: ["位", "置", "位置", "位地"] }),
  qq({ setId: "s008", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n駅にトウチャクする。\n\nA. 到着\nB. 到着く\nC. 当着\nD. 到著", answer: "A. 到着", note: "到着：目的地に着くこと。", targets: ["到", "着", "到着", "当着"] }),
  qq({ setId: "s008", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nチイキの行事に参加する。\n\nA. 地域\nB. 地域き\nC. 知域\nD. 地或", answer: "A. 地域", note: "地域：ある範囲の土地や場所。", targets: ["地", "域", "地域", "知域"] }),

  // 書き取り 14問
  qq({ setId: "s008", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nボールのイチを確認する。", answer: "位置", note: "位：くらい、場所。置：おく。", targets: ["位", "置", "位置"] }),
  qq({ setId: "s008", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n走るホウコウを変える。", answer: "方向", note: "方：むき、方法。向：むかう。", targets: ["方", "向", "方向"] }),
  qq({ setId: "s008", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nドウロを横断する。", answer: "道路", note: "道：みち。路：みち。", targets: ["道", "路", "道路"] }),
  qq({ setId: "s008", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n駅をツウカする。", answer: "通過", note: "通：とおる。過：すぎる。", targets: ["通", "過", "通過"] }),
  qq({ setId: "s008", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n別の場所へイドウする。", answer: "移動", note: "移：うつる。動：うごく。", targets: ["移", "動", "移動"] }),
  qq({ setId: "s008", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n駅にトウチャクする。", answer: "到着", note: "到：いたる。着：つく。", targets: ["到", "着", "到着"] }),
  qq({ setId: "s008", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n朝にシュッパツする。", answer: "出発", note: "出：でる。発：はつ、出発。", targets: ["出", "発", "出発"] }),
  qq({ setId: "s008", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nシュウイを確認する。", answer: "周囲", note: "周：まわり。囲：かこむ、まわり。", targets: ["周", "囲", "周囲"] }),
  qq({ setId: "s008", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nグラウンドのチュウオウに立つ。", answer: "中央", note: "中：なか。央：まんなか。", targets: ["中", "央", "中央"] }),
  qq({ setId: "s008", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nチイキの行事に参加する。", answer: "地域", note: "地：土地。域：範囲。", targets: ["地", "域", "地域"] }),
  qq({ setId: "s008", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n荷物をオく。", answer: "置く", note: "送り仮名は『置く』。位置の『置』。", targets: ["置", "置く"] }),
  qq({ setId: "s008", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nゴールにムかう。", answer: "向かう", note: "送り仮名は『向かう』。方向の『向』。", targets: ["向", "向かう"] }),
  qq({ setId: "s008", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n道をトオる。", answer: "通る", note: "送り仮名は『通る』。通過の『通』。", targets: ["通", "通る"] }),
  qq({ setId: "s008", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n時間がスぎる。", answer: "過ぎる", note: "送り仮名は『過ぎる』。通過の『過』。", targets: ["過", "過ぎる"] }),

  // 送り仮名 3問
  qq({ setId: "s008", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nおく", answer: "置く", note: "『置る』ではなく『置く』。", targets: ["置", "置く"] }),
  qq({ setId: "s008", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nむかう", answer: "向かう", note: "『向う』ではなく『向かう』。", targets: ["向", "向かう"] }),
  qq({ setId: "s008", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nすぎる", answer: "過ぎる", note: "『過る』ではなく『過ぎる』。", targets: ["過", "過ぎる"] }),

  // 誤字訂正 3問
  qq({ setId: "s008", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\nボールの位地を確認する。", answer: "位置", note: "位置：ものがある場所。『位地』ではない。", targets: ["位", "置", "位置", "位地"] }),
  qq({ setId: "s008", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n駅に当着する。", answer: "到着", note: "到着：目的地に着くこと。『当着』ではない。", targets: ["到", "着", "到着", "当着"] }),
  qq({ setId: "s008", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n知域の行事に参加する。", answer: "地域", note: "地域：ある範囲の土地や場所。『知域』ではない。", targets: ["地", "域", "地域", "知域"] })
