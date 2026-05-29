// =========================================================
// 漢検5級 Set 005：基本熟語・日常語 05 v1 qq形式
// file: questions_kanken5_s005_basic_daily_words_v1_qq_format.js
//
// 前提：questions_kanken5_all_sets_v0_6_s001_s002_s003 と同じく、
// 以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s005 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 005 対象漢字 20字：
// 時・間・期・限・順・序・計・画・整・理
// 確・認・連・続・途・中・開・始・終・了
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 005：基本熟語・日常語 05 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s005", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『時間』", answer: "じかん", note: "意味：時の長さ。また、ある時刻から時刻までの間。例：練習時間。", targets: ["時", "間", "時間"] }),
  qq({ setId: "s005", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『期間』", answer: "きかん", note: "意味：ある始まりから終わりまでの間。例：試験までの期間。", targets: ["期", "間", "期間"] }),
  qq({ setId: "s005", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『順序』", answer: "じゅんじょ", note: "意味：物事を行う順番。例：順序よく説明する。", targets: ["順", "序", "順序"] }),
  qq({ setId: "s005", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『計画』", answer: "けいかく", note: "意味：前もって考えた手順や予定。例：学習計画を立てる。", targets: ["計", "画", "計画"] }),
  qq({ setId: "s005", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『整理』", answer: "せいり", note: "意味：乱れたものを整えること。例：ノートを整理する。", targets: ["整", "理", "整理"] }),
  qq({ setId: "s005", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『確認』", answer: "かくにん", note: "意味：たしかめること。例：予定を確認する。", targets: ["確", "認", "確認"] }),
  qq({ setId: "s005", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『連続』", answer: "れんぞく", note: "意味：続けて起こること。例：三日連続で練習する。", targets: ["連", "続", "連続"] }),
  qq({ setId: "s005", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『途中』", answer: "とちゅう", note: "意味：物事が終わる前の間。例：練習の途中で休む。", targets: ["途", "中", "途中"] }),
  qq({ setId: "s005", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『開始』", answer: "かいし", note: "意味：始めること。例：試合を開始する。", targets: ["開", "始", "開始"] }),
  qq({ setId: "s005", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『終了』", answer: "しゅうりょう", note: "意味：終わること。例：練習が終了する。", targets: ["終", "了", "終了"] }),

  // 意味 6問
  qq({ setId: "s005", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『期間』の意味として正しいものは？\n\nA. ある始まりから終わりまでの間\nB. 物をきれいに並べること\nC. 予定をたしかめること\nD. 同じことが続くこと", answer: "A. ある始まりから終わりまでの間", note: "例：試験までの期間、練習期間。", targets: ["期", "間", "期間"] }),
  qq({ setId: "s005", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『順序』の意味として正しいものは？\n\nA. 物事を行う順番\nB. 急に変わること\nC. 失敗から学ぶこと\nD. 前もって決めた時点", answer: "A. 物事を行う順番", note: "例：順序よく話す、順序を守る。", targets: ["順", "序", "順序"] }),
  qq({ setId: "s005", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『整理』の意味として正しいものは？\n\nA. 乱れたものを整えること\nB. とても長く続くこと\nC. すぐに始めること\nD. こうなってほしいと願うこと", answer: "A. 乱れたものを整えること", note: "例：机を整理する、考えを整理する。", targets: ["整", "理", "整理"] }),
  qq({ setId: "s005", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『確認』の意味として正しいものは？\n\nA. たしかめること\nB. 何かを比べること\nC. 目標に向かって力を尽くすこと\nD. うまくいかないこと", answer: "A. たしかめること", note: "例：宿題を確認する、時間を確認する。", targets: ["確", "認", "確認"] }),
  qq({ setId: "s005", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『連続』の意味として正しいものは？\n\nA. 続けて起こること\nB. 途中でやめること\nC. 前もって決めること\nD. きれいに整えること", answer: "A. 続けて起こること", note: "例：連続で正解する、連続して走る。", targets: ["連", "続", "連続"] }),
  qq({ setId: "s005", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『終了』の意味として正しいものは？\n\nA. 終わること\nB. 始めること\nC. たしかめること\nD. 順番を決めること", answer: "A. 終わること", note: "開始 ⇔ 終了。", targets: ["終", "了", "終了"] }),

  // 対義語・類義語 5問
  qq({ setId: "s005", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『開始』の対義語として正しいものは？\n\nA. 終了\nB. 確認\nC. 整理\nD. 連続", answer: "A. 終了", note: "開始 ⇔ 終了。", targets: ["開", "始", "開始", "終了"] }),
  qq({ setId: "s005", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『途中』の反対に近い言葉は？\n\nA. 最後\nB. 順序\nC. 予定\nD. 時間", answer: "A. 最後", note: "途中は、終わる前の間。文脈によって『最初』『最後』と対比される。", targets: ["途", "中", "途中", "最後"] }),
  qq({ setId: "s005", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『確認』に近い意味の言葉は？\n\nA. たしかめること\nB. くらべること\nC. はじめること\nD. つづけること", answer: "A. たしかめること", note: "確認は、たしかめること。", targets: ["確", "認", "確認"] }),
  qq({ setId: "s005", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『計画』に近い意味の言葉は？\n\nA. プラン\nB. 失敗\nC. 状態\nD. 対象", answer: "A. プラン", note: "計画は、前もって考えた手順や予定。", targets: ["計", "画", "計画", "プラン"] }),
  qq({ setId: "s005", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『整理』に近い意味の言葉は？\n\nA. 整えること\nB. 始めること\nC. 連続すること\nD. 限ること", answer: "A. 整えること", note: "整理は、乱れたものや考えを整えること。", targets: ["整", "理", "整理", "整える"] }),

  // 同音異字 3問
  qq({ setId: "s005", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n予定をカクニンする。\n\nA. 確認\nB. 格認\nC. 各認\nD. 確任", answer: "A. 確認", note: "確認：たしかめること。", targets: ["確", "認", "確認", "格認"] }),
  qq({ setId: "s005", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n学習ケイカクを立てる。\n\nA. 計画\nB. 形画\nC. 経画\nD. 計各", answer: "A. 計画", note: "計画：前もって考えた手順や予定。", targets: ["計", "画", "計画"] }),
  qq({ setId: "s005", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n練習をシュウリョウする。\n\nA. 終了\nB. 修了\nC. 集了\nD. 終量", answer: "A. 終了", note: "終了：終わること。修了は、学業や課程を終えること。", targets: ["終", "了", "終了", "修了"] }),

  // 書き取り 14問
  qq({ setId: "s005", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n練習ジカンを記録する。", answer: "時間", note: "時：とき。間：あいだ。", targets: ["時", "間", "時間"] }),
  qq({ setId: "s005", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n試験までのキカンを確認する。", answer: "期間", note: "期：ある時期。間：あいだ。", targets: ["期", "間", "期間"] }),
  qq({ setId: "s005", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nジュンジョよく説明する。", answer: "順序", note: "順：じゅんばん。序：順序、はじめ。", targets: ["順", "序", "順序"] }),
  qq({ setId: "s005", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n学習ケイカクを立てる。", answer: "計画", note: "計：はかる、計画。画：え、くぎる、計画。", targets: ["計", "画", "計画"] }),
  qq({ setId: "s005", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nノートをセイリする。", answer: "整理", note: "整：ととのえる。理：ことわり、整える。", targets: ["整", "理", "整理"] }),
  qq({ setId: "s005", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n予定をカクニンする。", answer: "確認", note: "確：たしか。認：みとめる、たしかめる。", targets: ["確", "認", "確認"] }),
  qq({ setId: "s005", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n三日レンゾクで練習する。", answer: "連続", note: "連：つらなる。続：つづく。", targets: ["連", "続", "連続"] }),
  qq({ setId: "s005", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nトチュウで休けいする。", answer: "途中", note: "途：みち。中：なか。", targets: ["途", "中", "途中"] }),
  qq({ setId: "s005", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n試合をカイシする。", answer: "開始", note: "開：ひらく、はじめる。始：はじめる。", targets: ["開", "始", "開始"] }),
  qq({ setId: "s005", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n練習をシュウリョウする。", answer: "終了", note: "終：おわる。了：おえる、おわる。", targets: ["終", "了", "終了"] }),
  qq({ setId: "s005", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n提出キゲンを守る。", answer: "期限", note: "期限：それまでに終えると決められた時点。", targets: ["期", "限", "期限"] }),
  qq({ setId: "s005", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n本をヒラく。", answer: "開く", note: "送り仮名は『開く』。開始の『開』。", targets: ["開", "開く"] }),
  qq({ setId: "s005", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n練習をハジめる。", answer: "始める", note: "送り仮名は『始める』。開始の『始』。", targets: ["始", "始める"] }),
  qq({ setId: "s005", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n最後までツヅける。", answer: "続ける", note: "送り仮名は『続ける』。連続の『続』。", targets: ["続", "続ける"] }),

  // 送り仮名 3問
  qq({ setId: "s005", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nひらく", answer: "開く", note: "『開らく』ではなく『開く』。", targets: ["開", "開く"] }),
  qq({ setId: "s005", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nはじめる", answer: "始める", note: "『始る』ではなく『始める』。", targets: ["始", "始める"] }),
  qq({ setId: "s005", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nつづける", answer: "続ける", note: "『続る』ではなく『続ける』。", targets: ["続", "続ける"] }),

  // 誤字訂正 3問
  qq({ setId: "s005", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n予定を格認する。", answer: "確認", note: "確認：たしかめること。『格認』ではない。", targets: ["確", "認", "確認", "格認"] }),
  qq({ setId: "s005", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n学習形画を立てる。", answer: "計画", note: "計画：前もって考えた手順や予定。『形画』ではない。", targets: ["計", "画", "計画", "形画"] }),
  qq({ setId: "s005", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n練習を終量する。", answer: "終了", note: "終了：終わること。『終量』ではない。", targets: ["終", "了", "終了", "終量"] })
