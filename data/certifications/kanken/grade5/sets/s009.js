// =========================================================
// 漢検5級 Set 009：基本熟語・日常語 09 v1 qq形式
// file: questions_kanken5_s009_basic_daily_words_v1_qq_format.js
//
// 前提：統合版 questions.js 側で以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s009 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 009 対象漢字 20字：
// 社・会・集・団・役・割・参・加・代・表
// 委・員・係・活・動・協・力・公・共・民
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 009：基本熟語・日常語 09 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s009", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『社会』", answer: "しゃかい", note: "意味：人々が集まって生活しているまとまり。例：社会のルール。", targets: ["社", "会", "社会"] }),
  qq({ setId: "s009", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『集団』", answer: "しゅうだん", note: "意味：人や物が集まったまとまり。例：集団で行動する。", targets: ["集", "団", "集団"] }),
  qq({ setId: "s009", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『役割』", answer: "やくわり", note: "意味：その人が受け持つ仕事や働き。例：チームで役割を決める。", targets: ["役", "割", "役割"] }),
  qq({ setId: "s009", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『参加』", answer: "さんか", note: "意味：活動や集まりに加わること。例：練習に参加する。", targets: ["参", "加", "参加"] }),
  qq({ setId: "s009", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『代表』", answer: "だいひょう", note: "意味：多くの人を代表する人やもの。例：チームの代表。", targets: ["代", "表", "代表"] }),
  qq({ setId: "s009", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『委員』", answer: "いいん", note: "意味：ある仕事を任された人。例：図書委員。", targets: ["委", "員", "委員"] }),
  qq({ setId: "s009", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『係員』", answer: "かかりいん", note: "意味：ある仕事を受け持つ人。例：会場の係員。", targets: ["係", "員", "係員"] }),
  qq({ setId: "s009", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『活動』", answer: "かつどう", note: "意味：目的を持って動くこと。例：部活動、学級活動。", targets: ["活", "動", "活動"] }),
  qq({ setId: "s009", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『協力』", answer: "きょうりょく", note: "意味：力を合わせて物事を行うこと。例：友達と協力する。", targets: ["協", "力", "協力"] }),
  qq({ setId: "s009", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『公共』", answer: "こうきょう", note: "意味：社会全体やみんなに関係すること。例：公共の場所。", targets: ["公", "共", "公共"] }),

  // 意味 6問
  qq({ setId: "s009", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『集団』の意味として正しいものは？\n\nA. 人や物が集まったまとまり\nB. 数や量がふえること\nC. 十分でないと感じること\nD. ものがある場所", answer: "A. 人や物が集まったまとまり", note: "例：集団で行動する。", targets: ["集", "団", "集団"] }),
  qq({ setId: "s009", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『役割』の意味として正しいものは？\n\nA. 受け持つ仕事や働き\nB. 目的地に着くこと\nC. 気持ちを表すこと\nD. 物を比べること", answer: "A. 受け持つ仕事や働き", note: "例：チームの中で役割を持つ。", targets: ["役", "割", "役割"] }),
  qq({ setId: "s009", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『参加』の意味として正しいものは？\n\nA. 活動や集まりに加わること\nB. ものを整えること\nC. 場所を移ること\nD. ありがたいと思うこと", answer: "A. 活動や集まりに加わること", note: "例：試合に参加する、行事に参加する。", targets: ["参", "加", "参加"] }),
  qq({ setId: "s009", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『代表』の意味として正しいものは？\n\nA. 多くの人を代表する人やもの\nB. まわりのこと\nC. 数をならした値\nD. 途中でやめること", answer: "A. 多くの人を代表する人やもの", note: "例：学校の代表、チームの代表。", targets: ["代", "表", "代表"] }),
  qq({ setId: "s009", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『協力』の意味として正しいものは？\n\nA. 力を合わせて物事を行うこと\nB. 逆の立場をとること\nC. 順番を決めること\nD. 目的地に着くこと", answer: "A. 力を合わせて物事を行うこと", note: "例：仲間と協力する。", targets: ["協", "力", "協力"] }),
  qq({ setId: "s009", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『公共』の意味として正しいものは？\n\nA. 社会全体やみんなに関係すること\nB. 自分だけに関係すること\nC. ものが少なくなること\nD. 気持ちを整えること", answer: "A. 社会全体やみんなに関係すること", note: "例：公共の場所、公共のルール。", targets: ["公", "共", "公共"] }),

  // 対義語・類義語 5問
  qq({ setId: "s009", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『公共』の反対に近い言葉は？\n\nA. 個人\nB. 集団\nC. 代表\nD. 委員", answer: "A. 個人", note: "公共はみんなに関係すること、個人はひとりひとりに関係すること。", targets: ["公", "共", "公共", "個人"] }),
  qq({ setId: "s009", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『集団』の反対に近い言葉は？\n\nA. 個人\nB. 活動\nC. 社会\nD. 協力", answer: "A. 個人", note: "集団はまとまり、個人はひとり。", targets: ["集", "団", "集団", "個人"] }),
  qq({ setId: "s009", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『役割』に近い意味の言葉は？\n\nA. 役目\nB. 地域\nC. 位置\nD. 感謝", answer: "A. 役目", note: "役割と役目は、受け持つ仕事という意味に近い。", targets: ["役", "割", "役割", "役目"] }),
  qq({ setId: "s009", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『協力』に近い意味の言葉は？\n\nA. 力を合わせること\nB. 反対すること\nC. 減少すること\nD. 出発すること", answer: "A. 力を合わせること", note: "協力は、力を合わせて行うこと。", targets: ["協", "力", "協力"] }),
  qq({ setId: "s009", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『参加』に近い意味の言葉は？\n\nA. 加わること\nB. 失敗すること\nC. 整理すること\nD. 位置を変えること", answer: "A. 加わること", note: "参加は、活動や集まりに加わること。", targets: ["参", "加", "参加", "加わる"] }),

  // 同音異字 3問
  qq({ setId: "s009", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n行事にサンカする。\n\nA. 参加\nB. 産加\nC. 参可\nD. 三加", answer: "A. 参加", note: "参加：活動や集まりに加わること。", targets: ["参", "加", "参加", "産加"] }),
  qq({ setId: "s009", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nチームのダイヒョウに選ばれる。\n\nA. 代表\nB. 大表\nC. 代標\nD. 台表", answer: "A. 代表", note: "代表：多くの人を代表する人やもの。", targets: ["代", "表", "代表", "大表"] }),
  qq({ setId: "s009", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n友達とキョウリョクする。\n\nA. 協力\nB. 強力\nC. 共力\nD. 教力", answer: "A. 協力", note: "協力：力を合わせて物事を行うこと。強力は、力が強いこと。", targets: ["協", "力", "協力", "強力"] }),

  // 書き取り 14問
  qq({ setId: "s009", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nシャカイのルールを学ぶ。", answer: "社会", note: "社：やしろ、会社・社会。会：あう、集まり。", targets: ["社", "会", "社会"] }),
  qq({ setId: "s009", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nシュウダンで行動する。", answer: "集団", note: "集：あつまる。団：まとまり。", targets: ["集", "団", "集団"] }),
  qq({ setId: "s009", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nチームでヤクワリを決める。", answer: "役割", note: "役：仕事。割：わる、分ける。", targets: ["役", "割", "役割"] }),
  qq({ setId: "s009", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n行事にサンカする。", answer: "参加", note: "参：まいる、参加。加：くわえる。", targets: ["参", "加", "参加"] }),
  qq({ setId: "s009", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nチームのダイヒョウになる。", answer: "代表", note: "代：かわる。表：あらわす、おもて。", targets: ["代", "表", "代表"] }),
  qq({ setId: "s009", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n図書イインになる。", answer: "委員", note: "委：ゆだねる。員：人。", targets: ["委", "員", "委員"] }),
  qq({ setId: "s009", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n会場のカカリインに聞く。", answer: "係員", note: "係：かかわる、係。員：人。", targets: ["係", "員", "係員"] }),
  qq({ setId: "s009", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n部カツドウに参加する。", answer: "活動", note: "活：いきる、活動。動：うごく。", targets: ["活", "動", "活動"] }),
  qq({ setId: "s009", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n友達とキョウリョクする。", answer: "協力", note: "協：力を合わせる。力：ちから。", targets: ["協", "力", "協力"] }),
  qq({ setId: "s009", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nコウキョウの場所を大切にする。", answer: "公共", note: "公：おおやけ。共：ともに。", targets: ["公", "共", "公共"] }),
  qq({ setId: "s009", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n国のコクミンとして考える。", answer: "国民", note: "民：人々。Set009では『民』を確認する問題。", targets: ["民", "国民"] }),
  qq({ setId: "s009", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n人がアツまる。", answer: "集まる", note: "送り仮名は『集まる』。集団の『集』。", targets: ["集", "集まる"] }),
  qq({ setId: "s009", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n役をカわる。", answer: "代わる", note: "送り仮名は『代わる』。代表の『代』。", targets: ["代", "代わる"] }),
  qq({ setId: "s009", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n気持ちをアラワす。", answer: "表す", note: "送り仮名は『表す』。代表の『表』。", targets: ["表", "表す"] }),

  // 送り仮名 3問
  qq({ setId: "s009", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nあつまる", answer: "集まる", note: "『集る』ではなく『集まる』。", targets: ["集", "集まる"] }),
  qq({ setId: "s009", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nかわる", answer: "代わる", note: "『代る』ではなく『代わる』。", targets: ["代", "代わる"] }),
  qq({ setId: "s009", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nあらわす", answer: "表す", note: "『表わす』も使われることがあるが、ここでは『表す』で覚える。", targets: ["表", "表す"] }),

  // 誤字訂正 3問
  qq({ setId: "s009", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n行事に産加する。", answer: "参加", note: "参加：活動や集まりに加わること。『産加』ではない。", targets: ["参", "加", "参加", "産加"] }),
  qq({ setId: "s009", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\nチームの大表になる。", answer: "代表", note: "代表：多くの人を代表する人やもの。『大表』ではない。", targets: ["代", "表", "代表", "大表"] }),
  qq({ setId: "s009", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n友達と強力する。", answer: "協力", note: "協力：力を合わせること。『強力』は力が強いこと。", targets: ["協", "力", "協力", "強力"] })
