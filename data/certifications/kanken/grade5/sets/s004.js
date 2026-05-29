// =========================================================
// 漢検5級 Set 004：基本熟語・日常語 04 v1 qq形式
//
// 前提：questions_kanken5_all_sets_v0_6_s001_s002_s003 と同じく、
// 以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s004 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
// =========================================================

  // =======================================================
  // Set 004：基本熟語・日常語 04 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s004", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『変化』", answer: "へんか", note: "意味：ようすや状態が変わること。例：体の変化、天気の変化。", targets: ["変", "化", "変化"] }),
  qq({ setId: "s004", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『比較』", answer: "ひかく", note: "意味：二つ以上のものを比べること。例：前回の記録と比較する。", targets: ["比", "較", "比較"] }),
  qq({ setId: "s004", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『対象』", answer: "たいしょう", note: "意味：目当てとなるもの。例：調査の対象、練習の対象。", targets: ["対", "象", "対象"] }),
  qq({ setId: "s004", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『状態』", answer: "じょうたい", note: "意味：その時のようす。例：体の状態を確認する。", targets: ["状", "態", "状態"] }),
  qq({ setId: "s004", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『行動』", answer: "こうどう", note: "意味：実際に何かをすること。例：すぐに行動する。", targets: ["行", "動", "行動"] }),
  qq({ setId: "s004", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『努力』", answer: "どりょく", note: "意味：目標に向かって力を尽くすこと。例：努力を続ける。", targets: ["努", "力", "努力"] }),
  qq({ setId: "s004", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『成功』", answer: "せいこう", note: "意味：目的どおりによい結果になること。", targets: ["成", "功", "成功"] }),
  qq({ setId: "s004", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『失敗』", answer: "しっぱい", note: "意味：うまくいかないこと。例：失敗から学ぶ。", targets: ["失", "敗", "失敗"] }),
  qq({ setId: "s004", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『希望』", answer: "きぼう", note: "意味：こうなってほしいと願うこと。例：希望を持つ。", targets: ["希", "望", "希望"] }),
  qq({ setId: "s004", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『予定』", answer: "よてい", note: "意味：前もって決めておくこと。例：週末の予定。", targets: ["予", "定", "予定"] }),

  // 意味 6問
  qq({ setId: "s004", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『変化』の意味として正しいものは？\n\nA. ようすや状態が変わること\nB. 何かを強く押すこと\nC. 人を集めること\nD. 文字を消すこと", answer: "A. ようすや状態が変わること", note: "例：体の変化、気温の変化。", targets: ["変", "化", "変化"] }),
  qq({ setId: "s004", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『比較』の意味として正しいものは？\n\nA. 二つ以上のものを比べること\nB. とても速く走ること\nC. 何もせずに待つこと\nD. 物をあたためること", answer: "A. 二つ以上のものを比べること", note: "例：前回の結果と比較する。", targets: ["比", "較", "比較"] }),
  qq({ setId: "s004", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『対象』の意味として正しいものは？\n\nA. 目当てとなるもの\nB. 物を入れる箱\nC. 日がのぼること\nD. とても小さい音", answer: "A. 目当てとなるもの", note: "例：調査の対象、練習の対象。", targets: ["対", "象", "対象"] }),
  qq({ setId: "s004", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『状態』の意味として正しいものは？\n\nA. その時のようす\nB. 人の名前\nC. 空の色\nD. 食べ物の味", answer: "A. その時のようす", note: "例：体の状態、道路の状態。", targets: ["状", "態", "状態"] }),
  qq({ setId: "s004", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『努力』の意味として正しいものは？\n\nA. 目標に向かって力を尽くすこと\nB. 物をこわすこと\nC. 早く帰ること\nD. 大きな音を出すこと", answer: "A. 目標に向かって力を尽くすこと", note: "例：努力を続ける、努力が実る。", targets: ["努", "力", "努力"] }),
  qq({ setId: "s004", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『予定』の意味として正しいものは？\n\nA. 前もって決めておくこと\nB. 何度も失敗すること\nC. 水をあたためること\nD. 遠くをながめること", answer: "A. 前もって決めておくこと", note: "例：明日の予定、練習の予定。", targets: ["予", "定", "予定"] }),

  // 対義語・類義語 5問
  qq({ setId: "s004", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『成功』の対義語として正しいものは？\n\nA. 失敗\nB. 希望\nC. 行動\nD. 予定", answer: "A. 失敗", note: "成功 ⇔ 失敗。失敗は責める言葉ではなく、学びの材料にもなる。", targets: ["成", "功", "成功", "失敗"] }),
  qq({ setId: "s004", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『行動』の反対に近い言葉は？\n\nA. 停止\nB. 比較\nC. 希望\nD. 対象", answer: "A. 停止", note: "文脈によって異なるが、ここでは『動くこと』に対して『止まること』を考える。", targets: ["行", "動", "行動", "停止"] }),
  qq({ setId: "s004", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『比較』に近い意味の言葉は？\n\nA. 比べること\nB. 失敗すること\nC. 予定すること\nD. 努力すること", answer: "A. 比べること", note: "比較は、二つ以上のものを比べること。", targets: ["比", "較", "比較", "比べる"] }),
  qq({ setId: "s004", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『状態』に近い意味の言葉は？\n\nA. ようす\nB. 目標\nC. 比較\nD. 原因", answer: "A. ようす", note: "状態は、その時のようすのこと。", targets: ["状", "態", "状態", "ようす"] }),
  qq({ setId: "s004", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『希望』に近い意味の言葉は？\n\nA. 願い\nB. 失敗\nC. 変化\nD. 対象", answer: "A. 願い", note: "希望は、こうなってほしいと願うこと。", targets: ["希", "望", "希望", "願い"] }),

  // 同音異字 3問
  qq({ setId: "s004", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n前回の記録とヒカクする。\n\nA. 比較\nB. 非較\nC. 比校\nD. 秘角", answer: "A. 比較", note: "比較：二つ以上のものを比べること。", targets: ["比", "較", "比較"] }),
  qq({ setId: "s004", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n試合でセイコウする。\n\nA. 成功\nB. 成効\nC. 正功\nD. 生功", answer: "A. 成功", note: "成功：目的どおりによい結果になること。", targets: ["成", "功", "成功", "成効"] }),
  qq({ setId: "s004", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n明日のヨテイを確認する。\n\nA. 予定\nB. 予低\nC. 余定\nD. 世定", answer: "A. 予定", note: "予定：前もって決めておくこと。", targets: ["予", "定", "予定"] }),

  // 書き取り 14問
  qq({ setId: "s004", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n体のヘンカを記録する。", answer: "変化", note: "変：かわる。化：かわる。", targets: ["変", "化", "変化"] }),
  qq({ setId: "s004", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n前回の結果とヒカクする。", answer: "比較", note: "比：くらべる。較：くらべる。", targets: ["比", "較", "比較"] }),
  qq({ setId: "s004", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n調査のタイショウを決める。", answer: "対象", note: "対：むかい合う。象：かたち、ようす。", targets: ["対", "象", "対象"] }),
  qq({ setId: "s004", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n体のジョウタイを確認する。", answer: "状態", note: "状：ようす。態：ようす。", targets: ["状", "態", "状態"] }),
  qq({ setId: "s004", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nすぐにコウドウする。", answer: "行動", note: "行：いく、おこなう。動：うごく。", targets: ["行", "動", "行動"] }),
  qq({ setId: "s004", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n毎日ドリョクを続ける。", answer: "努力", note: "努：つとめる。力：ちから。", targets: ["努", "力", "努力"] }),
  qq({ setId: "s004", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n試合でセイコウする。", answer: "成功", note: "成：なる。功：てがら、よい結果。", targets: ["成", "功", "成功"] }),
  qq({ setId: "s004", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nシッパイから学ぶ。", answer: "失敗", note: "失：うしなう。敗：やぶれる。", targets: ["失", "敗", "失敗"] }),
  qq({ setId: "s004", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nキボウを持って進む。", answer: "希望", note: "希：まれ、ねがう。望：のぞむ。", targets: ["希", "望", "希望"] }),
  qq({ setId: "s004", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n明日のヨテイを確認する。", answer: "予定", note: "予：前もって。定：さだめる。", targets: ["予", "定", "予定"] }),
  qq({ setId: "s004", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n計画をカえる。", answer: "変える", note: "送り仮名は『変える』。変化の『変』。", targets: ["変", "変える"] }),
  qq({ setId: "s004", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n二つの記録をクラべる。", answer: "比べる", note: "送り仮名は『比べる』。比較の『比』。", targets: ["比", "比べる"] }),
  qq({ setId: "s004", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n目標に向かってツトめる。", answer: "努める", note: "送り仮名は『努める』。努力の『努』。", targets: ["努", "努める"] }),
  qq({ setId: "s004", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n勝利をノゾむ。", answer: "望む", note: "送り仮名は『望む』。希望の『望』。", targets: ["望", "望む"] }),

  // 送り仮名 3問
  qq({ setId: "s004", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nかえる", answer: "変える", note: "『変る』ではなく『変える』。", targets: ["変", "変える"] }),
  qq({ setId: "s004", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nくらべる", answer: "比べる", note: "『比る』ではなく『比べる』。", targets: ["比", "比べる"] }),
  qq({ setId: "s004", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nさだめる", answer: "定める", note: "『定る』ではなく『定める』。予定の『定』。", targets: ["定", "定める"] }),

  // 誤字訂正 3問
  qq({ setId: "s004", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n試合で成効する。", answer: "成功", note: "成功：目的どおりによい結果になること。『成効』ではない。", targets: ["成", "功", "成功", "成効"] }),
  qq({ setId: "s004", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n前回の記録と比校する。", answer: "比較", note: "比較：二つ以上のものを比べること。『比校』ではない。", targets: ["比", "較", "比較", "比校"] }),
  qq({ setId: "s004", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n明日の予低を確認する。", answer: "予定", note: "予定：前もって決めておくこと。『予低』ではない。", targets: ["予", "定", "予定", "予低"] })
