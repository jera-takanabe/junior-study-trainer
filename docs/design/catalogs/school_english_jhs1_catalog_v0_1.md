# 中1英語 学習内容カタログ v0.1

## 1. この文書の目的

この文書は、中学1年の英語教科書 Sunshine English Course 1 をもとに、Junior Study Trainer で扱う学習内容を整理するためのカタログである。

目的は、問題データをすぐ作ることではなく、次の作業の前提をそろえることである。

- 英語の学習テーマを、教科書単元・文法・表現・技能に分けて整理する
- 問題セット、出典、ページ範囲、進捗管理を分離できるようにする
- 英語特有の「文法軸」「機能表現軸」「場面軸」「技能軸」を扱えるようにする
- 後で目的別問題集を作るときに、抽出条件や明示ID一覧を設計しやすくする

このカタログは v0.1 であり、実装用データ形式ではない。

## 2. 英語カタログの基本設計

英語は、数学・理科・社会のように「単元名＝学習内容」とはしにくい。

同じ PROGRAM の中に、文法、語彙、表現、本文読解、聞く活動、話す活動、書く活動、発表活動が含まれるため、複数の軸で整理する。

### 2.1 主軸

| 軸 | 役割 |
|---|---|
| 教科書単元軸 | Get Ready、PROGRAM、Our Project、Power-Up、Word Web などを整理する |
| 文法軸 | be動詞、一般動詞、can、現在進行形、過去形などを整理する |
| 語彙軸 | 学校、食べ物、家族、旅行、行事などの語彙を整理する |
| 機能表現軸 | 自己紹介する、たずねる、理由を言う、案内するなどを整理する |
| 場面軸 | 学校生活、家庭、旅行、買い物、道案内、発表などを整理する |
| 技能軸 | 聞く、話す、読む、書く、やり取りする、発表するを整理する |

### 2.2 問題データで想定する属性

将来の問題データでは、少なくとも次の属性を持てるようにする。

```text
primaryTheme:
  例）PROGRAM 5 ＞ Pajama Day ＞ Part 1

grammarTags:
  例）三人称単数現在、does、doesn't

vocabularyTags:
  例）学校行事、家族、服、職業

functionTags:
  例）身近な人を紹介する、習慣を説明する、持ち主をたずねる

sceneTags:
  例）学校生活、海外の学校行事、友だちとの会話

skills:
  例）聞く、話す、読む、書く、発表する
```

## 3. 全体構成

```text
中1英語
├─ 英語の学び方・技能
├─ Get Ready
├─ PROGRAM 1 友だちを作ろう
├─ PROGRAM 2 1-B の生徒たち
├─ PROGRAM 3 タレントショーを開こう
├─ PROGRAM 4 Let’s Enjoy Japanese Food.
├─ PROGRAM 5 Pajama Day
├─ PROGRAM 6 The Way to School
├─ PROGRAM 7 オーストラリア紹介
├─ PROGRAM 8 Happy New Year!
├─ PROGRAM 9 A Trip to Finland
├─ PROGRAM 10 Grandma Baba’s Warming Ideas!
├─ Our Project
├─ Power-Up
├─ Word Web
├─ Coffee Break
└─ 巻末資料
```

## 4. 英語の学び方・技能

```text
英語の学び方・技能
├─ 音声を聞き取る
├─ 英語らしく発音する
├─ アルファベットを書く
├─ 単語を書く
├─ 文を書く
├─ 会話を聞き取る
├─ 本文を読む
├─ 自分のことを話す
├─ 相手にたずねる
├─ やり取りする
├─ 原稿を書く
├─ 発表する
└─ 発表を聞いて理解する
```

タグ例：

```text
grammarTags:
  なし、または復習

functionTags:
  学習方法、音声確認、発表、やり取り

sceneTags:
  教室、家庭学習、発表

skills:
  聞く、話す、読む、書く、発表する
```

## 5. Get Ready

Get Ready は、小学校英語の復習と中学英語への橋渡しとして扱う。

```text
Get Ready
├─ 学校や町の中の語句を確認する
├─ 自己紹介を聞き取る
├─ 自分のことを紹介する
├─ クラブ活動への入会を考える
├─ アルファベットを確認する
├─ 英単語の音とつづりを確認する
└─ 単語や文の書き方を確認する
```

タグ例：

```text
grammarTags:
  小学校英語の復習

vocabularyTags:
  学校、町、クラブ活動、自己紹介

functionTags:
  自己紹介する、聞き取る、選ぶ、書く

sceneTags:
  学校、町、クラブ活動

skills:
  聞く、話す、読む、書く
```

## 6. PROGRAM 1 友だちを作ろう

中心は be動詞 am / are と、自己紹介・出身をたずねる表現である。

```text
PROGRAM 1 友だちを作ろう
├─ Basic Dialog
│  ├─ I am ...
│  ├─ You are ...
│  ├─ Are you ...?
│  └─ Where are you from?
├─ Part 1 入学式の日
│  ├─ 自己紹介
│  ├─ Nice to meet you.
│  ├─ I'm ...
│  └─ I'm from ...
├─ Part 2 新しいクラスメート
│  ├─ Are you a new student?
│  ├─ Yes, I am.
│  └─ Where are you from?
├─ Action
│  ├─ 自己紹介を書く
│  ├─ 出身を言う
│  ├─ 好きなものを言う
│  └─ 得意なことを言う
├─ 英語早わかり
│  ├─ be動詞 am / are
│  ├─ be動詞の疑問文
│  └─ where を使った疑問文
└─ Step
   └─ 発表上手になろう
```

タグ例：

```text
grammarTags:
  be動詞、am、are、be動詞の疑問文、where

vocabularyTags:
  名前、国、出身、好きなもの、得意なこと

functionTags:
  自己紹介する、名前を言う、出身を言う、出身をたずねる、初対面のあいさつをする

sceneTags:
  入学式、教室、友だちとの会話

skills:
  聞く、話す、読む、書く、発表する
```

## 7. PROGRAM 2 1-B の生徒たち

中心は一般動詞の現在形、否定文、疑問文、疑問詞 when である。

```text
PROGRAM 2 1-B の生徒たち
├─ Basic Dialog
│  ├─ I have ...
│  ├─ I don't like ...
│  ├─ Do you ...?
│  └─ When do you ...?
├─ Part 1 真央はアーティスト？
│  ├─ I draw pictures every day.
│  ├─ I don't draw pictures.
│  └─ 日常的にすることを言う
├─ Part 2 アニャはスポーツ好き
│  ├─ Do you like baseball?
│  ├─ Yes, I do.
│  ├─ I like ...
│  └─ When do you play ...?
├─ Action
│  ├─ 教室の絵を見てたずねる
│  └─ How many ... do you see?
├─ 英語早わかり
│  ├─ 一般動詞
│  ├─ 一般動詞の否定文
│  ├─ 一般動詞の疑問文
│  └─ 疑問詞 when
└─ アクションコーナー
   ├─ Play baseball.
   ├─ Don't play baseball.
   └─ 命令文の導入
```

タグ例：

```text
grammarTags:
  一般動詞、一般動詞の否定文、一般動詞の疑問文、do、don't、when、命令文

vocabularyTags:
  スポーツ、趣味、曜日、日常動作、教室のもの

functionTags:
  日常的にすることを言う、好きなものを言う、相手にたずねる、時をたずねる、指示する、禁止する

sceneTags:
  教室、友だちとの会話、学校生活、スポーツ、趣味

skills:
  聞く、話す、読む、書く、やり取りする
```

## 8. PROGRAM 3 タレントショーを開こう

中心は助動詞 can である。

```text
PROGRAM 3 タレントショーを開こう
├─ Basic Dialog
│  ├─ Can you ...?
│  ├─ Yes, I can.
│  ├─ No, I can't.
│  ├─ What can you ...?
│  └─ I can ...
├─ Part 1
│  ├─ できることを言う
│  ├─ できないことを言う
│  └─ いっしょに発表する提案
├─ Part 2
│  ├─ What can you do?
│  └─ 得意なことをたずねる
├─ Action
│  ├─ ロボットを紹介する
│  ├─ できることを説明する
│  └─ 発表する
├─ 英語早わかり
│  ├─ can の肯定文
│  ├─ can の否定文
│  ├─ can の疑問文
│  └─ What can ...?
└─ Step
   └─ マッピングを使って発表を組み立てる
```

タグ例：

```text
grammarTags:
  can、can't、can の疑問文、what can

vocabularyTags:
  趣味、特技、動作、発表

functionTags:
  できることを言う、できないことを言う、できることをたずねる、提案する、発表する

sceneTags:
  学校生活、タレントショー、友だちとの会話、発表

skills:
  聞く、話す、読む、書く、発表する、やり取りする
```

## 9. PROGRAM 4 Let’s Enjoy Japanese Food.

中心は this / that / it / he / she と、ものや人を紹介する表現である。

```text
PROGRAM 4 Let’s Enjoy Japanese Food.
├─ Basic Dialog
│  ├─ This is ...
│  ├─ Is that ...?
│  ├─ No, it isn't.
│  ├─ It's ...
│  ├─ Who is this woman?
│  └─ She is ...
├─ Part 1 真央の家に遊びにきた！
│  ├─ This is udon.
│  ├─ It's ...
│  └─ 食べ物を説明する
├─ Part 2 真央のおばさん
│  ├─ Who's this lady?
│  ├─ She's ...
│  ├─ What's this dish?
│  └─ 人や料理を紹介する
├─ Review
│  ├─ this / that / it の使い分け
│  ├─ he / she の使い分け
│  └─ 会話の内容確認
├─ Action
│  ├─ 長さ・色・形などをたずねる
│  └─ ものの特徴を説明する
└─ 英語早わかり
   ├─ This is ...
   ├─ That is ...
   ├─ Is this / that ...?
   ├─ It is ...
   ├─ He is ...
   └─ She is ...
```

タグ例：

```text
grammarTags:
  this、that、it、he、she、be動詞、this/that の疑問文、who

vocabularyTags:
  食べ物、日本食、料理、家族、職業、形容詞

functionTags:
  ものを紹介する、ものについてたずねる、人を紹介する、料理を説明する、特徴を説明する

sceneTags:
  家庭、食事、料理紹介、友だちとの会話

skills:
  聞く、話す、読む、書く、やり取りする
```

## 10. PROGRAM 5 Pajama Day

中心は三人称単数現在である。

```text
PROGRAM 5 Pajama Day
├─ Basic Dialog
│  ├─ My brother likes ...
│  ├─ He sees ...
│  ├─ He doesn't ...
│  ├─ Does your brother ...?
│  └─ What does he ...?
├─ Part 1 アメリカのおもしろい学校行事
│  ├─ She lives in ...
│  ├─ She doesn't like ...
│  └─ 人や学校行事を紹介する
├─ Part 2 大人もパジャマデー
│  ├─ Does he work ...?
│  ├─ Yes, he does.
│  └─ 学校行事・チャリティーを説明する
├─ Action
│  ├─ 身近な人を紹介する
│  ├─ 住んでいる場所を言う
│  ├─ 職業や好きなものを言う
│  └─ 発表する
├─ 英語早わかり
│  ├─ 一般動詞の三人称単数現在
│  ├─ -s / -es
│  ├─ studies などの形
│  ├─ doesn't
│  ├─ Does ...?
│  └─ does / doesn't の答え方
└─ Power-Up
   └─ 持ち主をたずねる
      ├─ Whose ...?
      ├─ Which ...?
      ├─ mine
      ├─ yours
      ├─ hers
      └─ ours
```

タグ例：

```text
grammarTags:
  三人称単数現在、-s、-es、does、doesn't、Does ...?、what does、whose、which、mine、yours、hers、ours

vocabularyTags:
  学校行事、家族、服、職業、チャリティー、持ち物

functionTags:
  身近な人を紹介する、習慣を説明する、好きなものを言う、持ち主をたずねる、学校行事を説明する

sceneTags:
  学校生活、海外の学校行事、友だちとの会話、身近な人の紹介

skills:
  聞く、話す、読む、書く、発表する、やり取りする
```

## 11. PROGRAM 6 The Way to School

中心は目的格の代名詞 him / her と Why ...? / Because ... である。

```text
PROGRAM 6 The Way to School
├─ Basic Dialog
│  ├─ Do you know him?
│  ├─ I don't know her.
│  ├─ Who is that girl?
│  ├─ Why do you like her?
│  └─ Because she is ...
├─ Part 1 ジャクソンの通学
│  ├─ He lives in Kenya.
│  ├─ It takes two hours.
│  ├─ He walks with his sister.
│  └─ 人について説明する
├─ Part 2 通学路にひそむ危険
│  ├─ Why is it dangerous?
│  ├─ Because ...
│  ├─ Why does Jackson go to school?
│  └─ 理由をたずねる・答える
├─ Action
│  ├─ 好きな映画やアニメの登場人物を紹介する
│  ├─ 人物の特徴を説明する
│  └─ 好きな理由を書く
├─ 英語早わかり
│  ├─ him / her
│  ├─ me / you / him / her / it / us / them
│  ├─ my / your / his / her / our / their
│  └─ mine / yours / ours / theirs
└─ Our Project 1
   └─ おすすめの日本食を紹介するスピーチ
```

タグ例：

```text
grammarTags:
  代名詞、目的格、him、her、me、us、them、why、because、三人称単数現在

vocabularyTags:
  通学、国、人物、映画、アニメ、理由、特徴

functionTags:
  人について説明する、理由をたずねる、理由を答える、好きな理由を言う、人物を紹介する

sceneTags:
  通学、海外の子どもの生活、映画・アニメ、人物紹介

skills:
  聞く、話す、読む、書く、発表する
```

## 12. PROGRAM 7 オーストラリア紹介

中心は There is / There are と交通手段 by ... である。

```text
PROGRAM 7 オーストラリア紹介
├─ Scenes
│  ├─ There are three parks near my house.
│  ├─ Do you usually go to those parks?
│  ├─ How do you go to Fukuoka?
│  └─ By plane. / By bus.
├─ Part 1 オーストラリアで有名なものは？
│  ├─ There is a famous place in Sydney.
│  ├─ There are a lot of unique animals.
│  └─ 場所やものの存在を説明する
├─ Part 2 オーストラリアの絶景
│  ├─ How can I go there?
│  ├─ By helicopter or seaplane.
│  ├─ It looks like ...
│  └─ 行き方や場所の特徴を説明する
├─ Action
│  ├─ 動物園の配置を考える
│  ├─ 動物の場所を説明する
│  └─ 理由を添えて提案する
├─ Power-Up
│  └─ 学校案内をしよう
│     ├─ Go up the stairs.
│     ├─ Go down the stairs.
│     ├─ on your right / left
│     └─ 場所を案内する
├─ Our Project 2
│  └─ この人を知っていますか
│     ├─ 人物紹介スピーチ
│     ├─ 理由を2点挙げて説明する
│     └─ 原稿を推敲する
└─ Coffee Break
   └─ 色を使った英語表現
```

タグ例：

```text
grammarTags:
  there is、there are、a lot of、how、by、can、前置詞、場所表現

vocabularyTags:
  オーストラリア、動物、場所、交通手段、学校施設、色

functionTags:
  場所にあるものを説明する、交通手段を言う、行き方をたずねる、場所を案内する、提案する

sceneTags:
  町、学校、旅行、オーストラリア、動物園、学校案内

skills:
  聞く、話す、読む、書く、案内する、発表する
```

## 13. PROGRAM 8 Happy New Year!

中心は現在進行形である。

```text
PROGRAM 8 Happy New Year!
├─ Basic Dialog
│  ├─ I'm studying now.
│  ├─ I'm not doing anything now.
│  ├─ Are you still studying?
│  ├─ What are you doing?
│  └─ I'm preparing for ...
├─ Part 1 年越しイベントのライブ配信
│  ├─ We're enjoying ...
│  ├─ Mom is talking with ...
│  ├─ He's shooting a video.
│  └─ 今していることを説明する
├─ Part 2 新年に食べるスイーツ
│  ├─ What are you doing?
│  ├─ I'm looking at ...
│  └─ 年末年始の文化を説明する
├─ Review
│  ├─ 写真を見て状況を説明する
│  └─ 現在進行形で人物の動作を伝える
├─ Action
│  ├─ ライブ配信をリポートする
│  ├─ だれが何をしているか説明する
│  └─ 電話で友だちに伝える
├─ 英語早わかり
│  ├─ 現在進行形
│  ├─ be動詞 + 動詞のing形
│  ├─ 現在進行形の否定文
│  ├─ 現在進行形の疑問文
│  └─ ing形の作り方
└─ Power-Up
   └─ ショッピングをしよう
      ├─ Can I help you?
      ├─ I want ...
      ├─ Do you have the same one in ...?
      ├─ How much is it?
      └─ 買い物の会話
```

タグ例：

```text
grammarTags:
  現在進行形、be動詞、ing形、現在進行形の否定文、現在進行形の疑問文、what are you doing

vocabularyTags:
  年末年始、家族、イベント、動作、買い物、値段

functionTags:
  今していることを言う、今していることをたずねる、状況を説明する、リポートする、買い物をする

sceneTags:
  年末年始、家族、イベント、ライブ配信、買い物、海外文化

skills:
  聞く、話す、読む、書く、やり取りする、リポートする
```

## 14. PROGRAM 9 A Trip to Finland

中心は一般動詞の過去形である。

```text
PROGRAM 9 A Trip to Finland
├─ 一般動詞の過去形
├─ 規則動詞の過去形
├─ 不規則動詞の過去形
├─ did を使った疑問文
├─ did を使った答え方
├─ 過去の体験を話す
├─ 旅行の思い出を話す
├─ 旅行先で見たもの・食べたものを説明する
├─ 日記を書く
├─ 過去形を使って出来事を書く
├─ 世界のお菓子
└─ インタビューを聞く
```

タグ例：

```text
grammarTags:
  一般動詞の過去形、規則動詞、不規則動詞、did、過去形の疑問文、過去形の否定文

vocabularyTags:
  旅行、国、食べ物、お菓子、体験、日記

functionTags:
  過去の出来事を言う、旅行の思い出を話す、体験をたずねる、日記を書く

sceneTags:
  旅行、海外文化、フィンランド、日記、インタビュー

skills:
  聞く、話す、読む、書く、やり取りする
```

## 15. PROGRAM 10 Grandma Baba’s Warming Ideas!

中心は be動詞の過去形 was / were と過去進行形である。

```text
PROGRAM 10 Grandma Baba’s Warming Ideas!
├─ be動詞の過去形
├─ was / were
├─ was not / were not
├─ Was ...? / Were ...?
├─ 過去進行形
├─ was / were + 動詞のing形
├─ What were you doing?
├─ 物語を読む
├─ 物語の場面を説明する
├─ 登場人物の行動を整理する
├─ 写真を使ってスピーチする
└─ 絵はがきを書く
```

タグ例：

```text
grammarTags:
  be動詞の過去形、was、were、過去進行形、was doing、were doing、what were you doing、enough

vocabularyTags:
  物語、冬、家族、思い出、写真、絵はがき

functionTags:
  過去の状態を説明する、過去にしていたことを言う、物語を説明する、写真について話す、絵はがきを書く

sceneTags:
  物語、冬、家族、思い出、写真、絵はがき

skills:
  聞く、話す、読む、書く、発表する
```

## 16. Our Project

Our Project は、文法単元ではなく統合技能の単元として扱う。

```text
Our Project
├─ Our Project 1
│  └─ おすすめの日本食を紹介するスピーチ
├─ Our Project 2
│  └─ この人を知っていますか
└─ Our Project 3
   └─ 私が選んだ1枚
      ├─ 写真を選ぶ
      ├─ 写真の内容を説明する
      ├─ その写真を選んだ理由を説明する
      ├─ スピーチ原稿を作る
      ├─ 話す順序を考える
      ├─ 発表する
      └─ 発表を聞いて内容を理解する
```

タグ例：

```text
grammarTags:
  既習文法の統合

functionTags:
  紹介する、理由を説明する、順序立てて話す、発表する、聞き取る

sceneTags:
  スピーチ、発表、写真、人物紹介、食べ物紹介

skills:
  話す、書く、聞く、発表する、推敲する
```

## 17. Power-Up

Power-Up は、実用的な場面表現の補強として扱う。

```text
Power-Up
├─ 持ち主をたずねる
├─ 学校案内をする
├─ ショッピングをする
└─ その他の実用会話
```

タグ例：

```text
grammarTags:
  whose、which、所有代名詞、命令文、場所表現、疑問文

functionTags:
  持ち主をたずねる、案内する、買い物をする、値段をたずねる

sceneTags:
  教室、学校、買い物、日常会話

skills:
  聞く、話す、やり取りする
```

## 18. Word Web / Coffee Break

Word Web は語彙ネットワーク、Coffee Break は文化・背景知識として扱う。

```text
Word Web
├─ テーマ別語彙
├─ 関連語彙
├─ 語彙を広げる
└─ 表現に使う

Coffee Break
├─ 英語表現の背景
├─ 文化
├─ 色を使った英語表現
└─ 読み物
```

タグ例：

```text
grammarTags:
  なし、または関連文法

vocabularyTags:
  テーマ別語彙、文化語彙、日常語彙

functionTags:
  語彙を広げる、文化を知る、表現を理解する

sceneTags:
  文化、日常生活、海外

skills:
  読む、語彙確認、表現理解
```

## 19. 巻末資料の扱い

巻末資料は、本文 PROGRAM とは分けて、補助資料・横断学習として扱う。

```text
巻末資料
├─ Word Web
├─ 英語の音
├─ アルファベット・文字
├─ 辞書の使い方
├─ 基本文まとめ
├─ 基本文の練習
├─ Word List
├─ 不規則動詞変化表
├─ 表現集
├─ Small Talk
├─ Let’s Talk
└─ 学習のまとめ・資料
```

巻末の役割：

```text
巻末の役割
├─ 語彙をテーマ別に整理する
├─ 発音・音声を確認する
├─ 基本文を文法別に復習する
├─ 単語を確認する
├─ 不規則動詞を確認する
├─ 会話表現を場面別に確認する
└─ 書く・話す活動の参考にする
```

## 20. 文法横断カタログ

英語では、教科書順とは別に文法横断で整理する必要がある。

```text
文法横断カタログ
├─ be動詞
│  ├─ am / are
│  ├─ is
│  ├─ be動詞の否定文
│  ├─ be動詞の疑問文
│  └─ was / were
├─ 一般動詞
│  ├─ 肯定文
│  ├─ 否定文
│  ├─ 疑問文
│  ├─ do / don't
│  ├─ 三人称単数現在
│  ├─ does / doesn't
│  └─ 過去形
├─ 助動詞
│  └─ can
├─ 疑問詞
│  ├─ what
│  ├─ where
│  ├─ when
│  ├─ who
│  ├─ whose
│  ├─ which
│  ├─ why
│  └─ how
├─ 代名詞
│  ├─ 主格
│  ├─ 所有格
│  ├─ 目的格
│  └─ 所有代名詞
├─ There is / There are
├─ 現在進行形
├─ 一般動詞の過去形
├─ be動詞の過去形
└─ 過去進行形
```

## 21. 機能表現横断カタログ

```text
機能表現横断カタログ
├─ 自己紹介する
├─ 初対面のあいさつをする
├─ 出身を言う
├─ 出身をたずねる
├─ 好きなものを言う
├─ 日常的にすることを言う
├─ 時をたずねる
├─ できることを言う
├─ できることをたずねる
├─ ものを紹介する
├─ 人を紹介する
├─ 習慣を説明する
├─ 持ち主をたずねる
├─ 理由をたずねる
├─ 理由を答える
├─ 場所にあるものを説明する
├─ 行き方をたずねる
├─ 場所を案内する
├─ 今していることを言う
├─ 買い物をする
├─ 過去の出来事を話す
├─ 体験をたずねる
├─ 物語を説明する
├─ 日記を書く
├─ 絵はがきを書く
└─ 発表する
```

## 22. 場面横断カタログ

```text
場面横断カタログ
├─ 学校生活
├─ 教室
├─ 入学式
├─ 友だちとの会話
├─ クラブ活動
├─ 家庭
├─ 食事
├─ 日本食
├─ 海外の学校行事
├─ 通学
├─ 海外の子どもの生活
├─ 町
├─ 学校案内
├─ 旅行
├─ オーストラリア
├─ 年末年始
├─ 買い物
├─ フィンランド
├─ 日記
├─ 物語
├─ 写真
├─ 絵はがき
└─ 発表
```

## 23. 目的別問題集の候補

このカタログをもとに、将来的に次のような目的別問題集を作れる。

```text
目的別問題集候補
├─ be動詞だけ復習
├─ 一般動詞だけ復習
├─ 疑問文まとめ
├─ 否定文まとめ
├─ 疑問詞まとめ
├─ 代名詞まとめ
├─ 三人称単数現在まとめ
├─ 現在進行形まとめ
├─ 過去形まとめ
├─ 不規則動詞まとめ
├─ 基本文暗記
├─ 場面別会話表現
├─ 自己紹介・人物紹介
├─ 道案内・買い物
├─ 日記・絵はがき
├─ スピーチ・発表
├─ 語彙テーマ別確認
└─ 定期テスト範囲別復習
```

## 24. 既存問題との関係

既存の一問一答データは、このカタログの作成元ではなく、後から対応付ける対象とする。

方針：

- カタログは教科書全体の学習内容を基準に作る
- 既存問題は、後で primaryTheme / grammarTags / vocabularyTags / functionTags / sceneTags / skills に紐づける
- 既存問題の不足は、カタログとの対応で発見する
- 既存問題にないテーマでも、カタログには残す
- 定期テスト対策問題は、教科書カタログとテスト範囲を結び付けて扱う

## 25. 実装時の注意

この文書は設計カタログであり、現時点では次を行わない。

- `app/data/*.js` の変更
- manifest への追加
- 既存問題データの移行
- JSON スキーマ確定
- 目的別問題集の実装
- 進捗データ構造の変更

実装前に、国語カタログも作成し、教科間の共通点と差異を整理する。
