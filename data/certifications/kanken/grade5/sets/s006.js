// =========================================================
// 漢検5級 Set 006：基本熟語・日常語 06 v1 qq形式
// file: questions_kanken5_s006_basic_daily_words_v1_qq_format.js
//
// 前提：統合版 questions.js 側で以下が定義済みであること。
// - qq(...)
// - MOVE
// - WRITE
//
// 使い方：
// - window.QUIZ_SETS に s006 を追加
// - window.QUIZ_QUESTIONS の末尾に、この qq(...) 群を追記
//
// Set 006 対象漢字 20字：
// 数・量・程・度・範・囲・単・位・基・準
// 平・均・割・合・増・加・減・少・以・上
//
// 内容：44問
// - 漢検5級・移動用：24問
// - 漢検5級・書き練習：20問
//
// 注意：これはオリジナル練習問題です。過去問の転載ではありません。
// =========================================================

  // =======================================================
  // Set 006：基本熟語・日常語 06 / 44問
  // =======================================================

  // 読み 10問
  qq({ setId: "s006", type: "read", n: 1, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『数量』", answer: "すうりょう", note: "意味：数や量。例：数量を確認する。", targets: ["数", "量", "数量"] }),
  qq({ setId: "s006", type: "read", n: 2, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『程度』", answer: "ていど", note: "意味：物事の大きさ・強さ・進み具合などの度合い。例：疲れの程度。", targets: ["程", "度", "程度"] }),
  qq({ setId: "s006", type: "read", n: 3, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『範囲』", answer: "はんい", note: "意味：ある決められた広がり。例：テスト範囲。", targets: ["範", "囲", "範囲"] }),
  qq({ setId: "s006", type: "read", n: 4, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『単位』", answer: "たんい", note: "意味：数量を表す基準となるもの。例：長さの単位。", targets: ["単", "位", "単位"] }),
  qq({ setId: "s006", type: "read", n: 5, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『基準』", answer: "きじゅん", note: "意味：比べたり判断したりするときのもとになるもの。", targets: ["基", "準", "基準"] }),
  qq({ setId: "s006", type: "read", n: 6, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『平均』", answer: "へいきん", note: "意味：いくつかの数をならした値。例：平均点。", targets: ["平", "均", "平均"] }),
  qq({ setId: "s006", type: "read", n: 7, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『割合』", answer: "わりあい", note: "意味：全体に対する部分の大きさ。例：正解の割合。", targets: ["割", "合", "割合"] }),
  qq({ setId: "s006", type: "read", n: 8, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『増加』", answer: "ぞうか", note: "意味：数や量がふえること。", targets: ["増", "加", "増加"] }),
  qq({ setId: "s006", type: "read", n: 9, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『減少』", answer: "げんしょう", note: "意味：数や量がへること。", targets: ["減", "少", "減少"] }),
  qq({ setId: "s006", type: "read", n: 10, category: MOVE, level: "読み", unit: "小6漢字", questionType: "read", question: "次の漢字の読みは？\n\n『以上』", answer: "いじょう", note: "意味：その数を含んで、それより上。例：10点以上。", targets: ["以", "上", "以上"] }),

  // 意味 6問
  qq({ setId: "s006", type: "meaning", n: 1, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『範囲』の意味として正しいものは？\n\nA. ある決められた広がり\nB. 数や量がふえること\nC. 全体に対する部分の大きさ\nD. いくつかの数をならした値", answer: "A. ある決められた広がり", note: "例：テスト範囲、活動範囲。", targets: ["範", "囲", "範囲"] }),
  qq({ setId: "s006", type: "meaning", n: 2, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『単位』の意味として正しいものは？\n\nA. 数量を表す基準となるもの\nB. 予定をたしかめること\nC. 物事を始めること\nD. 順番を決めること", answer: "A. 数量を表す基準となるもの", note: "例：m、cm、kg、分など。", targets: ["単", "位", "単位"] }),
  qq({ setId: "s006", type: "meaning", n: 3, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『基準』の意味として正しいものは？\n\nA. 比べたり判断したりするときのもとになるもの\nB. 何度も続けること\nC. 途中で終わること\nD. 数がへること", answer: "A. 比べたり判断したりするときのもとになるもの", note: "例：判断の基準、評価の基準。", targets: ["基", "準", "基準"] }),
  qq({ setId: "s006", type: "meaning", n: 4, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『平均』の意味として正しいものは？\n\nA. いくつかの数をならした値\nB. 数や量がふえること\nC. その数を含んで、それより上\nD. 物事の順番", answer: "A. いくつかの数をならした値", note: "例：平均点、平均身長。", targets: ["平", "均", "平均"] }),
  qq({ setId: "s006", type: "meaning", n: 5, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『割合』の意味として正しいものは？\n\nA. 全体に対する部分の大きさ\nB. 予定を立てること\nC. 文字を正しく直すこと\nD. 同じことが続くこと", answer: "A. 全体に対する部分の大きさ", note: "例：正解した割合、人数の割合。", targets: ["割", "合", "割合"] }),
  qq({ setId: "s006", type: "meaning", n: 6, category: MOVE, level: "選択・意味", unit: "語句の意味", questionType: "meaning", question: "『以上』の意味として正しいものは？\n\nA. その数を含んで、それより上\nB. その数を含んで、それより下\nC. 決められた範囲の内側\nD. 物事が終わること", answer: "A. その数を含んで、それより上", note: "10以上なら10を含む。", targets: ["以", "上", "以上"] }),

  // 対義語・類義語 5問
  qq({ setId: "s006", type: "antonym", n: 1, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『増加』の対義語として正しいものは？\n\nA. 減少\nB. 平均\nC. 範囲\nD. 単位", answer: "A. 減少", note: "増加 ⇔ 減少。", targets: ["増", "加", "増加", "減少"] }),
  qq({ setId: "s006", type: "antonym", n: 2, category: MOVE, level: "選択・対義語", unit: "対義語", questionType: "antonym", question: "『以上』の反対に近い言葉は？\n\nA. 以下\nB. 以内\nC. 以外\nD. 以前", answer: "A. 以下", note: "以上 ⇔ 以下。どちらも基準の数を含む。", targets: ["以", "上", "以上", "以下"] }),
  qq({ setId: "s006", type: "synonym", n: 1, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『程度』に近い意味の言葉は？\n\nA. どのくらいか\nB. 始めること\nC. 終わること\nD. 順番", answer: "A. どのくらいか", note: "程度は、物事の度合いを表す。", targets: ["程", "度", "程度", "どのくらい"] }),
  qq({ setId: "s006", type: "synonym", n: 2, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『数量』に近い意味の言葉は？\n\nA. 数や量\nB. 予定\nC. 確認\nD. 努力", answer: "A. 数や量", note: "数量は、数と量をまとめて表す言葉。", targets: ["数", "量", "数量"] }),
  qq({ setId: "s006", type: "synonym", n: 3, category: MOVE, level: "選択・類義語", unit: "類義語", questionType: "synonym", question: "『基準』に近い意味の言葉は？\n\nA. 目安\nB. 失敗\nC. 終了\nD. 途中", answer: "A. 目安", note: "基準は、判断するときのもとになるもの。", targets: ["基", "準", "基準", "目安"] }),

  // 同音異字 3問
  qq({ setId: "s006", type: "homophone", n: 1, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nテストのハンイを確認する。\n\nA. 範囲\nB. 半囲\nC. 反囲\nD. 範位", answer: "A. 範囲", note: "範囲：ある決められた広がり。", targets: ["範", "囲", "範囲", "半囲"] }),
  qq({ setId: "s006", type: "homophone", n: 2, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\n人数がゾウカする。\n\nA. 増加\nB. 増可\nC. 蔵加\nD. 増化", answer: "A. 増加", note: "増加：数や量がふえること。", targets: ["増", "加", "増加"] }),
  qq({ setId: "s006", type: "homophone", n: 3, category: MOVE, level: "選択・同音異字", unit: "同音異字", questionType: "homophone", question: "文に合う漢字はどれ？\n\nヘイキン点を出す。\n\nA. 平均\nB. 平近\nC. 平金\nD. 並均", answer: "A. 平均", note: "平均：いくつかの数をならした値。", targets: ["平", "均", "平均"] }),

  // 書き取り 14問
  qq({ setId: "s006", type: "write", n: 1, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nスウリョウを確認する。", answer: "数量", note: "数：かず。量：はかる、量。", targets: ["数", "量", "数量"] }),
  qq({ setId: "s006", type: "write", n: 2, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n疲れのテイドを記録する。", answer: "程度", note: "程：ほど。度：どあい。", targets: ["程", "度", "程度"] }),
  qq({ setId: "s006", type: "write", n: 3, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nテストのハンイを確認する。", answer: "範囲", note: "範：はん、手本や決まり。囲：かこむ。", targets: ["範", "囲", "範囲"] }),
  qq({ setId: "s006", type: "write", n: 4, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n長さのタンイを覚える。", answer: "単位", note: "単：ひとつ、単位。位：くらい、位置。", targets: ["単", "位", "単位"] }),
  qq({ setId: "s006", type: "write", n: 5, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n判断のキジュンを決める。", answer: "基準", note: "基：もと。準：基準、そなえる。", targets: ["基", "準", "基準"] }),
  qq({ setId: "s006", type: "write", n: 6, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\nヘイキン点を出す。", answer: "平均", note: "平：たいら。均：ひとしい。", targets: ["平", "均", "平均"] }),
  qq({ setId: "s006", type: "write", n: 7, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n正解のワリアイを計算する。", answer: "割合", note: "割：わる。合：あう、合わせる。", targets: ["割", "合", "割合"] }),
  qq({ setId: "s006", type: "write", n: 8, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n人数がゾウカする。", answer: "増加", note: "増：ふえる。加：くわえる。", targets: ["増", "加", "増加"] }),
  qq({ setId: "s006", type: "write", n: 9, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n時間がゲンショウする。", answer: "減少", note: "減：へる。少：すくない。", targets: ["減", "少", "減少"] }),
  qq({ setId: "s006", type: "write", n: 10, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n10点イジョウを目指す。", answer: "以上", note: "以上：その数を含んで、それより上。", targets: ["以", "上", "以上"] }),
  qq({ setId: "s006", type: "write", n: 11, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n10点イカを確認する。", answer: "以下", note: "以下：その数を含んで、それより下。", targets: ["以", "下", "以下"] }),
  qq({ setId: "s006", type: "write", n: 12, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n時間イナイに終える。", answer: "以内", note: "以内：決められた範囲の内側。", targets: ["以", "内", "以内"] }),
  qq({ setId: "s006", type: "write", n: 13, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n数がフえる。", answer: "増える", note: "送り仮名は『増える』。増加の『増』。", targets: ["増", "増える"] }),
  qq({ setId: "s006", type: "write", n: 14, category: WRITE, level: "書き取り", unit: "小6漢字", questionType: "write", question: "次のカタカナを漢字で書きなさい。\n\n数がヘる。", answer: "減る", note: "送り仮名は『減る』。減少の『減』。", targets: ["減", "減る"] }),

  // 送り仮名 3問
  qq({ setId: "s006", type: "okuri", n: 1, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nふえる", answer: "増える", note: "『増る』ではなく『増える』。", targets: ["増", "増える"] }),
  qq({ setId: "s006", type: "okuri", n: 2, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nへる", answer: "減る", note: "『減える』ではなく『減る』。", targets: ["減", "減る"] }),
  qq({ setId: "s006", type: "okuri", n: 3, category: WRITE, level: "送り仮名", unit: "送り仮名", questionType: "write", question: "正しい送り仮名で書きなさい。\n\nくわえる", answer: "加える", note: "『加る』ではなく『加える』。増加の『加』。", targets: ["加", "加える"] }),

  // 誤字訂正 3問
  qq({ setId: "s006", type: "error", n: 1, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\nテストの半囲を確認する。", answer: "範囲", note: "範囲：ある決められた広がり。『半囲』ではない。", targets: ["範", "囲", "範囲", "半囲"] }),
  qq({ setId: "s006", type: "error", n: 2, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n人数が増可する。", answer: "増加", note: "増加：数や量がふえること。『増可』ではない。", targets: ["増", "加", "増加", "増可"] }),
  qq({ setId: "s006", type: "error", n: 3, category: WRITE, level: "誤字訂正", unit: "誤字訂正", questionType: "write", question: "まちがっている漢字を正しく直しなさい。\n\n平近点を出す。", answer: "平均", note: "平均：いくつかの数をならした値。『平近』ではない。", targets: ["平", "均", "平均", "平近"] })
