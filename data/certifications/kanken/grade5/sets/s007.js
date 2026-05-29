// =========================================================
// 漢検5級 Set 007：基本熟語・日常語 07 v1 qq形式
// file: questions_kanken5_s007_basic_daily_words_v1_qq_format.js
//
// 前提：統合版 questions.js 側で以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s007 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 007 対象漢字 20字：
// 感・情・謝・反・省・賛・成・対・意・見
// 思・決・満・足・不・満・喜・怒・悲・楽
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 007：基本熟語・日常語 07 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s007", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『感情』", answer: "かんじょう", note: "意味：うれしい、悲しい、怒るなどの気持ち。例：感情を言葉にする。", targets: ["感", "情", "感情"] }),
  qq({ setId: "s007", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『感謝』", answer: "かんしゃ", note: "意味：ありがたいと思う気持ち。例：家族に感謝する。", targets: ["感", "謝", "感謝"] }),
  qq({ setId: "s007", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『反省』", answer: "はんせい", note: "意味：自分の行動をふり返って考えること。例：失敗を反省する。", targets: ["反", "省", "反省"] }),
  qq({ setId: "s007", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『賛成』", answer: "さんせい", note: "意味：よいと思って同意すること。例：意見に賛成する。", targets: ["賛", "成", "賛成"] }),
  qq({ setId: "s007", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『反対』", answer: "はんたい", note: "意味：逆の立場をとること。例：計画に反対する。", targets: ["反", "対", "反対"] }),
  qq({ setId: "s007", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『意見』", answer: "いけん", note: "意味：あることについての考え。例：自分の意見を言う。", targets: ["意", "見", "意見"] }),
  qq({ setId: "s007", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『意思』", answer: "いし", note: "意味：考えや思い。例：本人の意思を確認する。", targets: ["意", "思", "意思"] }),
  qq({ setId: "s007", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『決意』", answer: "けつい", note: "意味：強く心に決めること。例：続ける決意をする。", targets: ["決", "意", "決意"] }),
  qq({ setId: "s007", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『満足』", answer: "まんぞく", note: "意味：十分だと感じること。例：結果に満足する。", targets: ["満", "足", "満足"] }),
  qq({ setId: "s007", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『不満』", answer: "ふまん", note: "意味：十分でないと感じること。例：不満を言葉にする。", targets: ["不", "満", "不満"] }),

  // 意味 6問
  qq({ setId: "s007", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『感情』の意味として正しいものは？\n\nA. うれしい、悲しい、怒るなどの気持ち\nB. 物の数量を表す言葉\nC. 予定を確認すること\nD. 何かを比べること", answer: "A. うれしい、悲しい、怒るなどの気持ち", note: "感情は、気持ちを表す言葉。", targets: ["感", "情", "感情"] }),
  qq({ setId: "s007", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『感謝』の意味として正しいものは？\n\nA. ありがたいと思う気持ち\nB. 逆の立場をとること\nC. 数が少なくなること\nD. 順番を決めること", answer: "A. ありがたいと思う気持ち", note: "例：支えてくれた人に感謝する。", targets: ["感", "謝", "感謝"] }),
  qq({ setId: "s007", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『反省』の意味として正しいものは？\n\nA. 自分の行動をふり返って考えること\nB. とても楽しいこと\nC. 前もって予定すること\nD. 物を整えること", answer: "A. 自分の行動をふり返って考えること", note: "責めるためではなく、次に生かすために使う言葉。", targets: ["反", "省", "反省"] }),
  qq({ setId: "s007", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『意見』の意味として正しいものは？\n\nA. あることについての考え\nB. いくつかの数をならした値\nC. 物事が終わること\nD. 体の状態が変わること", answer: "A. あることについての考え", note: "例：自分の意見を持つ。", targets: ["意", "見", "意見"] }),
  qq({ setId: "s007", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『決意』の意味として正しいものは？\n\nA. 強く心に決めること\nB. 数や量がふえること\nC. 途中で休むこと\nD. 物をくらべること", answer: "A. 強く心に決めること", note: "例：毎日続ける決意をする。", targets: ["決", "意", "決意"] }),
  qq({ setId: "s007", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『不満』の意味として正しいものは？\n\nA. 十分でないと感じること\nB. ありがたいと思うこと\nC. よいと思って同意すること\nD. 予定を立てること", answer: "A. 十分でないと感じること", note: "不満は、理由と一緒に言葉にすると改善につながる。", targets: ["不", "満", "不満"] }),

  // 対義語・類義語 5問
  qq({ setId: "s007", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『賛成』の対義語として正しいものは？\n\nA. 反対\nB. 感謝\nC. 決意\nD. 意見", answer: "A. 反対", note: "賛成 ⇔ 反対。", targets: ["賛", "成", "賛成", "反対"] }),
  qq({ setId: "s007", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『満足』の対義語として正しいものは？\n\nA. 不満\nB. 感情\nC. 意思\nD. 反省", answer: "A. 不満", note: "満足 ⇔ 不満。", targets: ["満", "足", "満足", "不満"] }),
  qq({ setId: "s007", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『意見』に近い意味の言葉は？\n\nA. 考え\nB. 数量\nC. 終了\nD. 範囲", answer: "A. 考え", note: "意見は、あることについての考え。", targets: ["意", "見", "意見", "考え"] }),
  qq({ setId: "s007", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『感謝』に近い意味の言葉は？\n\nA. ありがとうと思うこと\nB. 逆の立場をとること\nC. 終わること\nD. 数がへること", answer: "A. ありがとうと思うこと", note: "感謝は、ありがたいと思う気持ち。", targets: ["感", "謝", "感謝"] }),
  qq({ setId: "s007", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『決意』に近い意味の言葉は？\n\nA. 決心\nB. 予定\nC. 失敗\nD. 比較", answer: "A. 決心", note: "決意と決心は、強く心に決めるという意味に近い。", targets: ["決", "意", "決意", "決心"] }),

  // 同音異字 3問
  qq({ setId: "s007", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n自分のイケンを言う。\n\nA. 意見\nB. 異見\nC. 意券\nD. 位見", answer: "A. 意見", note: "意見：あることについての考え。", targets: ["意", "見", "意見", "異見"] }),
  qq({ setId: "s007", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n続けるケツイをする。\n\nA. 決意\nB. 決位\nC. 欠意\nD. 血意", answer: "A. 決意", note: "決意：強く心に決めること。", targets: ["決", "意", "決意"] }),
  qq({ setId: "s007", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n試合の結果にマンゾクする。\n\nA. 満足\nB. 満速\nC. 万足\nD. 満促", answer: "A. 満足", note: "満足：十分だと感じること。", targets: ["満", "足", "満足"] }),

  // 書き取り 14問
  qq({ setId: "s007", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n自分のカンジョウを言葉にする。", answer: "感情", note: "感：感じる。情：気持ち。", targets: ["感", "情", "感情"] }),
  qq({ setId: "s007", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n家族にカンシャする。", answer: "感謝", note: "感：感じる。謝：あやまる、感謝する。", targets: ["感", "謝", "感謝"] }),
  qq({ setId: "s007", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n失敗をハンセイする。", answer: "反省", note: "反：かえす。省：かえりみる。", targets: ["反", "省", "反省"] }),
  qq({ setId: "s007", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n友達の意見にサンセイする。", answer: "賛成", note: "賛：たすける、ほめる、同意する。成：なる。", targets: ["賛", "成", "賛成"] }),
  qq({ setId: "s007", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nその考えにハンタイする。", answer: "反対", note: "反：逆。対：向かい合う。", targets: ["反", "対", "反対"] }),
  qq({ setId: "s007", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n自分のイケンを書く。", answer: "意見", note: "意：考え。見：見る、考え。", targets: ["意", "見", "意見"] }),
  qq({ setId: "s007", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n本人のイシを確認する。", answer: "意思", note: "意思：考えや思い。意志との違いにも注意。", targets: ["意", "思", "意思"] }),
  qq({ setId: "s007", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n続けるケツイをする。", answer: "決意", note: "決：きめる。意：考え、気持ち。", targets: ["決", "意", "決意"] }),
  qq({ setId: "s007", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n結果にマンゾクする。", answer: "満足", note: "満：みちる。足：たりる。", targets: ["満", "足", "満足"] }),
  qq({ setId: "s007", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n理由をそえてフマンを伝える。", answer: "不満", note: "不：〜でない。満：みちる。", targets: ["不", "満", "不満"] }),
  qq({ setId: "s007", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n勝利をヨロコぶ。", answer: "喜ぶ", note: "送り仮名は『喜ぶ』。", targets: ["喜", "喜ぶ"] }),
  qq({ setId: "s007", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n悪い言葉にイカる。", answer: "怒る", note: "送り仮名は『怒る』。", targets: ["怒", "怒る"] }),
  qq({ setId: "s007", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nカナしい気持ちになる。", answer: "悲しい", note: "送り仮名は『悲しい』。", targets: ["悲", "悲しい"] }),
  qq({ setId: "s007", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nタノしい時間を過ごす。", answer: "楽しい", note: "送り仮名は『楽しい』。", targets: ["楽", "楽しい"] }),

  // 送り仮名 3問
  qq({ setId: "s007", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nよろこぶ", answer: "喜ぶ", note: "『喜こぶ』ではなく『喜ぶ』。", targets: ["喜", "喜ぶ"] }),
  qq({ setId: "s007", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nかなしい", answer: "悲しい", note: "『悲い』ではなく『悲しい』。", targets: ["悲", "悲しい"] }),
  qq({ setId: "s007", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nたのしい", answer: "楽しい", note: "『楽い』ではなく『楽しい』。", targets: ["楽", "楽しい"] }),

  // 誤字訂正 3問
  qq({ setId: "s007", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n自分の異見を言う。", answer: "意見", note: "意見：あることについての考え。『異見』ではない。", targets: ["意", "見", "意見", "異見"] }),
  qq({ setId: "s007", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n続ける決位をする。", answer: "決意", note: "決意：強く心に決めること。『決位』ではない。", targets: ["決", "意", "決意", "決位"] }),
  qq({ setId: "s007", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n結果に満速する。", answer: "満足", note: "満足：十分だと感じること。『満速』ではない。", targets: ["満", "足", "満足", "満速"] })
