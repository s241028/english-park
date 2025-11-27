// =============================================
//  全体で使用するデータ (完全版)
// =============================================
const pronunciationSentences = [
    // 日常会話
    { en: "How are you doing?", ja: "調子はどうですか？" },
    { en: "It's nice to meet you.", ja: "はじめまして。" },
    { en: "How have you been?", ja: "いかがお過ごでしたか？" },
    { en: "My name is Kenji Tanaka.", ja: "私の名前は田中健司です。" },
    { en: "What do you do for a living?", ja: "お仕事は何をされていますか？" },
    { en: "I'm really looking forward to it.", ja: "本当に楽しみにしています。" },
    { en: "That sounds like a great idea.", ja: "それは素晴らしいアイデアですね。" },
    { en: "I completely agree with you.", ja: "あなたに完全に同意します。" },
    { en: "I'm sorry, I didn't catch that.", ja: "すみません、聞き取れませんでした。" },
    { en: "Could you please repeat that?", ja: "もう一度言っていただけますか？" },
    { en: "How was your weekend?", ja: "週末はどうでしたか？" },
    { en: "Have a great day!", ja: "良い一日を！" },
    { en: "Take care and see you soon.", ja: "気をつけて、また近いうちに会いましょう。" },
    { en: "It was nice talking to you.", ja: "お話できてよかったです。" },
    { en: "Let's keep in touch.", ja: "これからも連絡を取り合いましょう。" },
    // 質問
    { en: "What time is it now?", ja: "今、何時ですか？" },
    { en: "Could you help me with this?", ja: "これを手伝っていただけますか？" },
    { en: "Excuse me, where is the restroom?", ja: "すみません、お手洗いはどこですか？" },
    { en: "How much does this cost?", ja: "これはいくらですか？" },
    { en: "Do you have any recommendations?", ja: "何かおすすめはありますか？" },
    { en: "What kind of music do you like?", ja: "どんな音楽が好きですか？" },
    { en: "Could you speak a little more slowly?", ja: "もう少しゆっくり話していただけますか？" },
    { en: "What does this word mean?", ja: "この単語はどういう意味ですか？" },
    { en: "Can you give me an example?", ja: "例を挙げてもらえますか？" },
    { en: "How do I get to the station from here?", ja: "ここから駅までどう行けばいいですか？" },
    // レストラン・買い物
    { en: "I'd like a cup of coffee, please.", ja: "コーヒーを一杯いただけますか。" },
    { en: "Can I have the bill, please?", ja: "お会計をお願いします。" },
    { en: "I'm just looking, thank you.", ja: "見ているだけです、ありがとう。" },
    { en: "Everything was great, thank you.", ja: "すべて素晴らしかったです、ありがとう。" },
    { en: "A table for two, please.", ja: "2人席をお願いします。" },
    { en: "Do you accept credit cards?", ja: "クレジットカードは使えますか？" },
    { en: "I'll have the same thing.", ja: "私も同じものをいただきます。" },
    { en: "Is this seat taken?", ja: "この席は空いていますか？" },
    { en: "Could I have a glass of water?", ja: "お水を一杯いただけますか？" },
    { en: "Keep the change.", ja: "おつりは取っておいてください。" },
    // 感情・意見
    { en: "That's very kind of you.", ja: "ご親切にどうもありがとうございます。" },
    { en: "I'm so excited about the trip.", ja: "その旅行にとてもワクワクしています。" },
    { en: "To be honest, I don't really like it.", ja: "正直に言うと、あまり好きではありません。" },
    { en: "I see what you mean, but I have a different opinion.", ja: "おっしゃることはわかりますが、私は違う意見です。" },
    { en: "That makes sense.", ja: "なるほど、理解できます。" },
    { en: "I'm a little nervous about the presentation.", ja: "プレゼンテーションのことで少し緊張しています。" },
    { en: "This is exactly what I was looking for.", ja: "これはまさに私が探していたものです。" },
    { en: "I'm feeling a bit under the weather today.", ja: "今日は少し体調が悪いです。" },
    { en: "No problem at all.", ja: "全然問題ないですよ。" },
    { en: "It's not a big deal.", ja: "たいしたことではありません。" },
    // ビジネス・仕事
    { en: "I'll get back to you as soon as possible.", ja: "できるだけ早く折り返し連絡します。" },
    { en: "Could you send me the details by email?", ja: "詳細をメールで送っていただけますか？" },
    { en: "I have a meeting at 3 p.m.", ja: "午後3時に会議があります。" },
    { en: "Let's schedule a call for next week.", ja: "来週、電話会議を予定しましょう。" },
    { en: "I'm running a little late, but I'll be there soon.", ja: "少し遅れていますが、もうすぐ着きます。" },
    { en: "He is in charge of the marketing department.", ja: "彼はマーケティング部の責任者です。" },
    { en: "We need to meet the deadline.", ja: "私たちは締め切りに間に合わせる必要があります。" },
    { en: "Thank you for your hard work.", ja: "お仕事お疲れ様です。" },
    { en: "Let's wrap up this meeting.", ja: "この会議を終わりにしましょう。" },
    { en: "I'm looking forward to working with you.", ja: "あなたと一緒にお仕事できるのを楽しみにしています。" },
    // 天気・季節
    { en: "The weather is lovely today, isn't it?", ja: "今日は素敵な天気ですね。" },
    { en: "It looks like it's going to rain.", ja: "雨が降りそうですね。" },
    { en: "I can't stand this heat.", ja: "この暑さには耐えられません。" },
    { en: "Make sure to bundle up, it's freezing outside.", ja: "しっかり着込んでね、外は凍える寒さだから。" },
    { en: "My favorite season is autumn.", ja: "私の一番好きな季節は秋です。" },
    // 旅行・交通
    { en: "I'd like to check in, please.", ja: "チェックインをお願いします。" },
    { en: "Which platform does the train for Osaka leave from?", ja: "大阪行きの電車は何番線から出発しますか？" },
    { en: "How long does it take to get there by taxi?", ja: "そこまでタクシーでどのくらい時間がかかりますか？" },
    { en: "Could you recommend a good local restaurant?", ja: "おすすめの地元のレストランを教えていただけますか？" },
    { en: "I have a reservation under the name of Sato.", ja: "佐藤の名前で予約しています。" },
    // ことわざ・格言
    { en: "Actions speak louder than words.", ja: "行動は言葉よりも雄弁である。" },
    { en: "The early bird catches the worm.", ja: "早起きは三文の徳。" },
    { en: "Better late than never.", ja: "遅れてもやらないよりはまし。" },
    { en: "Practice makes perfect.", ja: "習うより慣れよ。（練習は完璧を作る）" },
    { en: "Where there's a will, there's a way.", ja: "意志あるところに道は開ける。" },
    // 追加の日常フレーズ
    { en: "What are you up to this evening?", ja: "今晩は何をしますか？" },
    { en: "I'm just hanging out at home.", ja: "家でぶらぶらしているだけです。" },
    { en: "It's on the tip of my tongue.", ja: "喉まで出かかっているんだけど思い出せない。" },
    { en: "Could you do me a favor?", ja: "お願いがあるのですが。" },
    { en: "I'll take your word for it.", ja: "あなたの言うことを信じますよ。" },
    { en: "You can say that again!", ja: "全くその通りです！" },
    { en: "I'm not sure I follow you.", ja: "おっしゃっていることがよく分かりません。" },
    { en: "Let's agree to disagree.", ja: "意見が違うということで合意しましょう。" },
    { en: "I couldn't have done it without you.", ja: "あなたなしではできませんでした。" },
    { en: "Can I take a rain check?", ja: "またの機会にお願いできますか？" },
    { en: "I think I'll pass on that.", ja: "それは遠慮しておきます。" },
    { en: "That's easier said than done.", ja: "言うは易く行うは難し、ですね。" },
    { en: "You've got to be kidding me.", ja: "冗談でしょう？" },
    { en: "It's a piece of cake.", ja: "楽勝だよ。" },
    { en: "I'm all ears.", ja: "ぜひ聞かせてください。" },
    { en: "Let's call it a day.", ja: "今日はこの辺で終わりにしましょう。" },
    { en: "I'm on my way.", ja: "今向かっています。" },
    { en: "Long time no see.", ja: "久しぶりですね。" },
    { en: "It's up to you.", ja: "あなた次第です。" },
    { en: "I'll keep that in mind.", ja: "心に留めておきます。" }
];

const quizDataSets = {
    beginner: [
        { ja: "未来", correct: "future", incorrect: ["past", "letter", "dream"] }, { ja: "訪れる", correct: "visit", incorrect: ["return", "watch", "break"] },
        { ja: "高価な", correct: "expensive", incorrect: ["heavy", "beautiful", "cold"] }, { ja: "図書館", correct: "library", incorrect: ["museum", "theater", "gym"] },
        { ja: "朝食", correct: "breakfast", incorrect: ["snack", "dessert", "vegetable"] }, { ja: "言語", correct: "language", incorrect: ["song", "story", "sound"] },
        { ja: "質問する", correct: "ask", incorrect: ["answer", "shout", "forget"] }, { ja: "いつも", correct: "always", incorrect: ["soon", "once", "later"] },
        { ja: "国", correct: "country", incorrect: ["capital", "continent", "flag"] }, { ja: "幸せな", correct: "happy", incorrect: ["tired", "hungry", "busy"] },
        { ja: "家族", correct: "family", incorrect: ["neighbor", "teacher", "stranger"] }, { ja: "仕事", correct: "work", incorrect: ["hobby", "vacation", "sleep"] },
        { ja: "都市", correct: "city", incorrect: ["island", "forest", "desert"] }, { ja: "音楽", correct: "music", incorrect: ["movie", "picture", "dance"] },
        { ja: "川", correct: "river", incorrect: ["mountain", "sky", "cloud"] }, { ja: "有名な", correct: "famous", incorrect: ["rich", "tall", "kind"] },
        { ja: "聞く", correct: "listen", incorrect: ["touch", "smell", "taste"] }, { ja: "書く", correct: "write", incorrect: ["sing", "dance", "sleep"] },
        { ja: "走る", correct: "run", incorrect: ["fly", "swim", "sit"] }, { ja: "簡単", correct: "easy", incorrect: ["wrong", "dark", "loud"] },
        { ja: "重い", correct: "heavy", incorrect: ["thin", "soft", "sweet"] }, { ja: "若い", correct: "young", incorrect: ["tall", "short", "fast"] },
        { ja: "店", correct: "store", incorrect: ["bank", "hospital", "church"] }, { ja: "助ける", correct: "help", incorrect: ["break", "lose", "wait"] },
        { ja: "今日", correct: "today", incorrect: ["weekend", "holiday", "morning"] }, { ja: "天気", correct: "weather", incorrect: ["season", "temperature", "wind"] },
        { ja: "駅", correct: "station", incorrect: ["bridge", "corner", "street"] }, { ja: "医者", correct: "doctor", incorrect: ["pilot", "artist", "farmer"] },
        { ja: "使う", correct: "use", incorrect: ["buy", "sell", "find"] }, { ja: "同じ", correct: "same", incorrect: ["new", "old", "good"] },
        { ja: "話す", correct: "speak", incorrect: ["cry", "laugh", "think"] }, { ja: "木", correct: "tree", incorrect: ["flower", "grass", "stone"] },
        { ja: "料理する", correct: "cook", incorrect: ["wash", "clean", "drive"] }, { ja: "教える", correct: "teach", incorrect: ["borrow", "lend", "forget"] },
        { ja: "ドア", correct: "door", incorrect: ["floor", "roof", "wall"] }, { ja: "水", correct: "water", incorrect: ["fire", "earth", "air"] }, 
        { ja: "学校", correct: "school", incorrect: ["office", "park", "home"] }, { ja: "友達", correct: "friend", incorrect: ["enemy", "parent", "child"] }, 
        { ja: "食べる", correct: "eat", incorrect: ["drink", "sleep", "play"] }, { ja: "大きい", correct: "big", incorrect: ["small", "long", "short"] }, 
        { ja: "見る", correct: "see", incorrect: ["hear", "feel", "say"] }, { ja: "時間", correct: "time", incorrect: ["place", "date", "year"] }, 
        { ja: "人々", correct: "people", incorrect: ["animals", "things", "ideas"] }, { ja: "日", correct: "day", incorrect: ["night", "week", "month"] }, 
        { ja: "良い", correct: "good", incorrect: ["bad", "nice", "great"] }, { ja: "車", correct: "car", incorrect: ["bus", "train", "bike"] }, 
        { ja: "家", correct: "house", incorrect: ["room", "garden", "pool"] }
    ],
    intermediate: [
        { ja: "機会", correct: "opportunity", incorrect: ["problem", "accident", "miracle"] }, { ja: "改善する", correct: "improve", incorrect: ["destroy", "accept", "repeat"] },
        { ja: "政府", correct: "government", incorrect: ["community", "company", "university"] }, { ja: "影響", correct: "influence", incorrect: ["force", "luck", "secret"] },
        { ja: "提案する", correct: "suggest", incorrect: ["command", "demand", "promise"] }, { ja: "責任", correct: "responsibility", incorrect: ["hobby", "right", "award"] },
        { ja: "発表する", correct: "announce", incorrect: ["whisper", "hide", "guess"] }, { ja: "比較する", correct: "compare", incorrect: ["ignore", "separate", "connect"] },
        { ja: "利用可能な", correct: "available", incorrect: ["broken", "hidden", "impossible"] }, { ja: "発展させる", correct: "develop", incorrect: ["stop", "shrink", "finish"] },
        { ja: "顧客", correct: "customer", incorrect: ["owner", "manager", "creator"] }, { ja: "会社", correct: "company", incorrect: ["group", "family", "team"] },
        { ja: "能力", correct: "ability", incorrect: ["weakness", "shape", "color"] }, { ja: "記事", correct: "article", incorrect: ["advertisement", "novel", "letter"] },
        { ja: "含む", correct: "include", incorrect: ["exclude", "remove", "forget"] }, { ja: "しかしながら", correct: "however", incorrect: ["therefore", "because", "also"] },
        { ja: "提供する", correct: "provide", incorrect: ["receive", "take", "hide"] }, { ja: "減らす", correct: "reduce", incorrect: ["increase", "add", "grow"] },
        { ja: "従業員", correct: "employee", incorrect: ["boss", "competitor", "student"] }, { ja: "態度", correct: "attitude", incorrect: ["height", "weight", "age"] },
        { ja: "成功", correct: "success", incorrect: ["failure", "mistake", "problem"] }, { ja: "交通", correct: "traffic", incorrect: ["nature", "weather", "space"] },
        { ja: "議論する", correct: "discuss", incorrect: ["agree", "listen", "ignore"] }, { ja: "伝統", correct: "tradition", incorrect: ["fashion", "trend", "rumor"] },
        { ja: "目的", correct: "purpose", incorrect: ["accident", "luck", "chaos"] }, { ja: "知識", correct: "knowledge", incorrect: ["opinion", "feeling", "dream"] },
        { ja: "普通", correct: "normal", incorrect: ["strange", "special", "perfect"] }, { ja: "環境", correct: "environment", incorrect: ["machine", "tool", "device"] },
        { ja: "努力", correct: "effort", incorrect: ["rest", "luck", "talent"] }, { ja: "説明する", correct: "explain", incorrect: ["confuse", "hide", "question"] },
        { ja: "価格", correct: "price", incorrect: ["size", "quality", "speed"] }, { ja: "生産する", correct: "produce", incorrect: ["consume", "destroy", "buy"] },
        { ja: "距離", correct: "distance", incorrect: ["time", "weight", "temperature"] }, { ja: "海外の", correct: "foreign", incorrect: ["local", "native", "domestic"] },
        { ja: "解決する", correct: "solve", incorrect: ["create", "cause", "complicate"] }, { ja: "最近の", correct: "recent", incorrect: ["ancient", "future", "old"] }, 
        { ja: "決定する", correct: "decide", incorrect: ["hesitate", "wonder", "consider"] }, { ja: "社会", correct: "society", incorrect: ["planet", "individual", "culture"] }, 
        { ja: "関係", correct: "relationship", incorrect: ["connection", "contact", "meeting"] }, { ja: "経験", correct: "experience", incorrect: ["experiment", "memory", "feeling"] }, 
        { ja: "信じる", correct: "believe", incorrect: ["doubt", "know", "see"] }, { ja: "教育", correct: "education", incorrect: ["information", "training", "study"] }, 
        { ja: "恐らく", correct: "probably", incorrect: ["certainly", "definitely", "absolutely"] }, { ja: "情報", correct: "information", incorrect: ["news", "data", "fact"] }, 
        { ja: "共通の", correct: "common", incorrect: ["rare", "unique", "special"] }, { ja: "含む", correct: "contain", incorrect: ["release", "empty", "spill"] }, 
        { ja: "旅行", correct: "journey", incorrect: ["trip", "voyage", "tour"] }, { ja: "技術", correct: "technology", incorrect: ["science", "skill", "art"] }
    ],
    advanced: [
        { ja: "重要な", correct: "significant", incorrect: ["minor", "trivial", "slight"] }, { ja: "結果", correct: "consequence", incorrect: ["cause", "origin", "start"] },
        { ja: "実行する", correct: "implement", incorrect: ["cancel", "postpone", "design"] }, { ja: "不可欠な", correct: "essential", incorrect: ["optional", "unnecessary", "extra"] },
        { ja: "組織", correct: "organization", incorrect: ["individual", "chaos", "mess"] }, { ja: "多様性", correct: "diversity", incorrect: ["uniformity", "sameness", "similarity"] },
        { ja: "説得する", correct: "persuade", incorrect: ["dissuade", "discourage", "force"] }, { ja: "認識", correct: "perception", incorrect: ["reality", "fact", "truth"] },
        { ja: "貢献する", correct: "contribute", incorrect: ["withdraw", "take", "subtract"] }, { ja: "効率的な", correct: "efficient", incorrect: ["wasteful", "ineffective", "slow"] },
        { ja: "交渉する", correct: "negotiate", incorrect: ["demand", "refuse", "dominate"] }, { ja: "その後の", correct: "subsequent", incorrect: ["previous", "prior", "initial"] },
        { ja: "解釈する", correct: "interpret", incorrect: ["misunderstand", "confuse", "obscure"] }, { ja: "禁止する", correct: "prohibit", incorrect: ["permit", "allow", "encourage"] },
        { ja: "蓄積する", correct: "accumulate", incorrect: ["disperse", "scatter", "spend"] }, { ja: "正確な", correct: "accurate", incorrect: ["inaccurate", "wrong", "flawed"] },
        { ja: "達成する", correct: "achieve", incorrect: ["fail", "abandon", "surrender"] }, { ja: "適切な", correct: "appropriate", incorrect: ["inappropriate", "unsuitable", "improper"] },
        { ja: "議論", correct: "controversy", incorrect: ["agreement", "harmony", "consensus"] }, { ja: "実証する", correct: "demonstrate", incorrect: ["conceal", "disprove", "hide"] },
        { ja: "強調する", correct: "emphasize", incorrect: ["understate", "downplay", "ignore"] }, { ja: "巨大な", correct: "enormous", incorrect: ["tiny", "minuscule", "small"] },
        { ja: "評価する", correct: "evaluate", incorrect: ["neglect", "overlook", "ignore"] }, { ja: "最終的に", correct: "eventually", incorrect: ["never", "initially", "immediately"] },
        { ja: "仮定する", correct: "assume", incorrect: ["prove", "know", "confirm"] }, { ja: "構成する", correct: "constitute", incorrect: ["dismantle", "break", "separate"] },
        { ja: "文脈", correct: "context", incorrect: ["isolation", "vacuum", "void"] }, { ja: "確立する", correct: "establish", incorrect: ["abolish", "demolish", "end"] },
        { ja: "示す", correct: "indicate", incorrect: ["hide", "conceal", "deny"] }, { ja: "個々の", correct: "individual", incorrect: ["group", "collective", "public"] },
        { ja: "法律", correct: "legislation", incorrect: ["anarchy", "chaos", "suggestion"] }, { ja: "方法", correct: "method", incorrect: ["chaos", "disorder", "guesswork"] },
        { ja: "参加する", correct: "participate", incorrect: ["observe", "watch", "withdraw"] }, { ja: "明らかにする", correct: "reveal", incorrect: ["hide", "cover", "mask"] },
        { ja: "移す", correct: "transfer", incorrect: ["keep", "hold", "remain"] }, { ja: "分析する", correct: "analyze", incorrect: ["synthesize", "guess", "summarize"] }, 
        { ja: "利益", correct: "benefit", incorrect: ["disadvantage", "loss", "cost"] }, { ja: "複雑な", correct: "complex", incorrect: ["simple", "easy", "clear"] }, 
        { ja: "減少する", correct: "decline", incorrect: ["increase", "rise", "grow"] }, { ja: "経済", correct: "economy", incorrect: ["finance", "business", "market"] }, 
        { ja: "機能", correct: "function", incorrect: ["form", "design", "style"] }, { ja: "投資", correct: "investment", incorrect: ["expense", "debt", "loan"] }, 
        { ja: "主要な", correct: "major", incorrect: ["minor", "secondary", "trivial"] }, { ja: "パーセント", correct: "percent", incorrect: ["fraction", "ratio", "number"] }, 
        { ja: "期間", correct: "period", incorrect: ["moment", "point", "instant"] }, { ja: "政策", correct: "policy", incorrect: ["rule", "law", "guideline"] }, 
        { ja: "研究", correct: "research", incorrect: ["study", "survey", "investigation"] }, { ja: "役割", correct: "role", incorrect: ["part", "job", "position"] }
    ],
    expert: [
        { ja: "遍在する", correct: "ubiquitous", incorrect: ["rare", "scarce", "uncommon"] }, { ja: "悪化させる", correct: "exacerbate", incorrect: ["improve", "soothe", "calm"] },
        { ja: "良心的な", correct: "conscientious", incorrect: ["careless", "negligent", "irresponsible"] }, { ja: "豊富な", correct: "plethora", incorrect: ["shortage", "lack", "scarcity"] },
        { ja: "一時的な", correct: "ephemeral", incorrect: ["permanent", "eternal", "lasting"] }, { ja: "有利な", correct: "lucrative", incorrect: ["unprofitable", "losing", "worthless"] },
        { ja: "無気力な", correct: "lethargic", incorrect: ["energetic", "vigorous", "active"] }, { ja: "曖昧な", correct: "ambiguous", incorrect: ["clear", "explicit", "precise"] },
        { ja: "緩和する", correct: "alleviate", incorrect: ["aggravate", "intensify", "worsen"] }, { ja: "お世辞", correct: "adulation", incorrect: ["criticism", "condemnation", "insult"] },
        { ja: "食い違い", correct: "discrepancy", incorrect: ["similarity", "consistency", "agreement"] }, { ja: "多作な", correct: "prolific", incorrect: ["unproductive", "barren", "sterile"] },
        { ja: "無害な", correct: "innocuous", incorrect: ["harmful", "toxic", "dangerous"] }, { ja: "軽減する", correct: "mitigate", incorrect: ["increase", "amplify", "heighten"] },
        { ja: "表向きは", correct: "ostensibly", incorrect: ["genuinely", "truly", "actually"] }, { ja: "深く根付いた", correct: "entrenched", incorrect: ["superficial", "temporary", "flexible"] },
        { ja: "放棄する", correct: "abdicate", incorrect: ["seize", "usurp", "claim"] }, { ja: "口達者な", correct: "glib", incorrect: ["sincere", "thoughtful", "hesitant"] },
        { ja: "批准する", correct: "ratify", incorrect: ["veto", "reject", "oppose"] }, { ja: "無関心", correct: "apathy", incorrect: ["passion", "enthusiasm", "interest"] },
        { ja: "逆説的な", correct: "paradoxical", incorrect: ["logical", "consistent", "straightforward"] }, { ja: "撤回する", correct: "rescind", incorrect: ["enforce", "enact", "uphold"] },
        { ja: "無駄に使う", correct: "squander", incorrect: ["save", "conserve", "hoard"] }, { ja: "ありふれた", correct: "mundane", incorrect: ["extraordinary", "exciting", "unique"] },
        { ja: "有害な", correct: "detrimental", incorrect: ["beneficial", "helpful", "advantageous"] }, { ja: "先見の明", correct: "prescience", incorrect: ["hindsight", "ignorance", "unawareness"] },
        { ja: "増殖する", correct: "proliferate", incorrect: ["dwindle", "decrease", "decline"] }, { ja: "沈静化させる", correct: "placate", incorrect: ["provoke", "anger", "antagonize"] },
        { ja: "冗長な", correct: "redundant", incorrect: ["essential", "concise", "necessary"] }, { ja: "倹約な", correct: "frugal", incorrect: ["extravagant", "wasteful", "spendthrift"] },
        { ja: "無口な", correct: "taciturn", incorrect: ["talkative", "garrulous", "loquacious"] }, { ja: "証明する", correct: "corroborate", incorrect: ["contradict", "refute", "deny"] },
        { ja: "とらえどころのない", correct: "elusive", incorrect: ["obvious", "direct", "accessible"] }, { ja: "称賛する", correct: "extol", incorrect: ["denounce", "criticize", "condemn"] },
        { ja: "ごまかし", correct: "subterfuge", incorrect: ["honesty", "candor", "openness"] }, { ja: "融和的な", correct: "conciliatory", incorrect: ["hostile", "aggressive", "confrontational"] }, 
        { ja: "難解な", correct: "esoteric", incorrect: ["common", "simple", "well-known"] }, { ja: "うやうやしい", correct: "obsequious", incorrect: ["arrogant", "domineering", "assertive"] }, 
        { ja: "倹約", correct: "parsimony", incorrect: ["generosity", "extravagance", "wastefulness"] }, { ja: "予言の", correct: "prophetic", incorrect: ["retrospective", "historical", "unseeing"] }, 
        { ja: "休止", correct: "respite", incorrect: ["continuation", "work", "effort"] }, { ja: "神聖な", correct: "sacrosanct", incorrect: ["profane", "unholy", "violable"] }, 
        { ja: "散漫な", correct: "desultory", incorrect: ["focused", "methodical", "systematic"] }, { ja: "悪意のある", correct: "malevolent", incorrect: ["benevolent", "kind", "friendly"] }, 
        { ja: "博識な", correct: "erudite", incorrect: ["ignorant", "uneducated", "simple"] }, { ja: "偽の", correct: "spurious", incorrect: ["authentic", "genuine", "real"] }, 
        { ja: "好戦的な", correct: "pugnacious", incorrect: ["peaceful", "passive", "friendly"] }, { ja: "おしゃべりな", correct: "garrulous", incorrect: ["taciturn", "quiet", "silent"] }
    ]
};
const idiomsData = [
    { idiom: "Break a leg!", meaning: "幸運を祈るよ！/ 頑張って！", description: "舞台に出る役者にかける激励の言葉が由来です。直接「Good luck」と言うと逆に不運を招くと信じられていたため、反対の言葉をかけるようになりました。" },
    { idiom: "Bite the bullet.", meaning: "歯を食いしばって耐える / 困難に立ち向かう", description: "昔、麻酔なしで手術を受ける兵士が、痛みをこらえるために弾丸を噛んだという話から来ています。" },
    { idiom: "Once in a blue moon.", meaning: "ごくまれに / めったにない", description: "「青い月」は非常に珍しい天文現象であることから、「めったに起こらないこと」のたとえとして使われます。" },
    { idiom: "The ball is in your court.", meaning: "次の一手は君次第だ / あとは君の番だ", description: "テニスなどで、ボールが相手のコートにある状況をイメージしてください。ボールを打ち返すかどうかは相手次第ですよね。" },
    { idiom: "Spill the beans.", meaning: "秘密を漏らす / ばらす", description: "古代ギリシャの投票で、豆が入った瓶をうっかりこぼしてしまい、結果がバレてしまったことから来ています。" },
    { idiom: "Piece of cake.", meaning: "朝飯前 / とても簡単なこと", description: "楽に勝てたコンテストの賞品としてケーキが与えられたことから、「楽なこと」を意味するようになったと言われています。" },
    { idiom: "Hit the road.", meaning: "出発する / 帰る", description: "文字通り「道（road）を打つ（hit）」、つまり旅や帰り道のために出発することを意味します。" },
    { idiom: "Under the weather.", meaning: "気分が悪い / 体調がすぐれない", description: "船乗りが悪天候の時に船酔いを避けるため、甲板の下にいたことが由来とされています。" },
    { idiom: "Cost an arm and a leg.", meaning: "非常に高価である", description: "自分の腕や脚を犠牲にするほどの価値がある、という意味から、とてつもなく高い値段を表す表現になりました。" },
    { idiom: "Let the cat out of the bag.", meaning: "秘密をうっかり漏らす", description: "昔、市場で豚と偽って猫を袋に入れて売る詐欺があり、その袋から猫が飛び出して秘密がバレたことが由来です。" },
    { idiom: "When pigs fly.", meaning: "ありえないこと", description: "「豚が空を飛ぶ」なんてことは絶対にありえない、という状況を表す皮肉な表現です。" },
    { idiom: "Kill two birds with one stone.", meaning: "一石二鳥", description: "一つの石で二羽の鳥を仕留める、という意味で、一つの行動で二つの目的を達成することを表します。" },
    { idiom: "A blessing in disguise.", meaning: "不幸中の幸い", description: "最初は悪いことだと思ったものが、後になって良い結果をもたらす状況を指します。" },
    { idiom: "Call it a day.", meaning: "（その日の仕事を）切り上げる", description: "今日の仕事や活動はこれで終わり、と宣言する時に使います。" },
    { idiom: "Get out of hand.", meaning: "手に負えなくなる", description: "状況がコントロールできないほど悪化したり、混沌としたりすることを指します。" },
    { idiom: "Go the extra mile.", meaning: "一層の努力をする", description: "期待されている以上のこと、または求められている以上の努力をすることを意味します。" },
    { idiom: "Hang in there.", meaning: "頑張って / あきらめないで", description: "困難な状況にいる人に対して、励ましの言葉として使われます。" },
    { idiom: "It's not rocket science.", meaning: "そんなに難しいことじゃない", description: "ロケット科学ほど複雑ではない、つまり「非常に簡単だ」ということを強調する表現です。" },
    { idiom: "Make a long story short.", meaning: "手短に言うと / 要するに", description: "長い話を省略して、結論や要点だけを話すときに使われる前置きです。" },
    { idiom: "On the same page.", meaning: "意見が一致している / 認識が同じである", description: "会議などで、参加者全員が同じ情報や理解を共有している状態を指します。" },
    { idiom: "The best of both worlds.", meaning: "両方の世界の良いとこ取り / 一挙両得", description: "二つの異なるものの利点を同時に享受できる、理想的な状況を指します。" },
    { idiom: "Jump on the bandwagon.", meaning: "時流に乗る / 勝ち馬に乗る", description: "人気のあるものや流行しているものに、深く考えずに便乗する様子を表します。" },
    { idiom: "Beat around the bush.", meaning: "遠回しな言い方をする", description: "本題に直接触れるのを避けて、回りくどい話し方をすることを指します。" },
    { idiom: "Better late than never.", meaning: "遅れてもやらないよりはまし", description: "何かを始めるのが遅すぎたとしても、全くやらないよりはずっと良い、という意味です。" },
    { idiom: "Bite off more than you can chew.", meaning: "自分の能力以上のことをしようとする", description: "一口で噛み切れないほど大きく食べ物を口に入れることから、自分の処理能力を超える仕事や課題を引き受けることを指します。" },
    { idiom: "By the skin of one's teeth.", meaning: "かろうじて / 間一髪で", description: "「歯の皮」という存在しないほどのわずかな差で、何かを成し遂げたり、危険を回避したりした状況で使います。" },
    { idiom: "Don't count your chickens before they hatch.", meaning: "捕らぬ狸の皮算用", description: "卵がまだ孵化していないうちから鶏の数を数えるな、つまり、事が確定する前に期待しすぎるなという戒めです。" },
    { idiom: "Every cloud has a silver lining.", meaning: "どんな悪い状況にも良い面はある", description: "厚い雲の向こう側は太陽で銀色に輝いていることから、希望を失わないように励ます言葉です。" },
    { idiom: "Fit as a fiddle.", meaning: "とても健康で元気だ", description: "「フィドル（バイオリン）」が良い音を出すためには完璧な状態である必要があることから来ています。" },
    { idiom: "Give someone the benefit of the doubt.", meaning: "大目に見る / 疑わしきは罰せず", description: "確証がない限りは、誰かの言うことや行動を信じてあげる、という意味です。" },
    { idiom: "Go down in flames.", meaning: "さんざんな失敗に終わる", description: "炎上しながら墜落する飛行機のように、劇的かつ完全に失敗することを指します。" },
    { idiom: "Hit the nail on the head.", meaning: "的を射る / 図星を指す", description: "釘の頭を的確に打つように、物事の核心を正確に言い当てたときに使います。" },
    { idiom: "In the heat of the moment.", meaning: "カッとなって / 夢中になって", description: "怒りや興奮で冷静な判断ができない一瞬の状況を指します。" },
    { idiom: "It takes two to tango.", meaning: "喧嘩両成敗", description: "タンゴは二人で踊るもの。つまり、争いや問題は一方だけが悪いのではなく、両者に責任があるという意味です。" },
    { idiom: "Keep something at bay.", meaning: "〜を寄せ付けない / 食い止める", description: "敵や問題などが近づいてこないように、一定の距離を保つことを意味します。" },
    { idiom: "Leave no stone unturned.", meaning: "あらゆる手を尽くす / 徹底的に調査する", description: "宝物を探すために、全ての石をひっくり返してでも見つけようとする様子から来ています。" },
    { idiom: "Let sleeping dogs lie.", meaning: "触らぬ神に祟りなし", description: "眠っている犬を起こすと面倒なことになるように、余計な問題を引き起こさないように、そっとしておくべきだという意味です。" },
    { idiom: "Look before you leap.", meaning: "転ばぬ先の杖", description: "跳ぶ前に（危険がないか）よく見ろ、という意味で、行動を起こす前によく考えるべきだという戒めです。" },
    { idiom: "Miss the boat.", meaning: "好機を逃す", description: "乗るべき船に乗り遅れてしまった状況から、チャンスを逃してしまったことを指します。" },
    { idiom: "Off the hook.", meaning: "責任・窮地から解放される", description: "釣り針（hook）から外れた魚のように、困難な状況や責任から解放されることを意味します。" },
    { idiom: "Pull someone's leg.", meaning: "からかう / 冗談を言う", description: "相手を騙したり、冗談を言ってからかったりする軽い行為を指します。" },
    { idiom: "Rain on someone's parade.", meaning: "水を差す / 人の楽しみにケチをつける", description: "楽しみにしていたパレードの日に雨が降るように、誰かの計画や喜びに水を差す行為を指します。" },
    { idiom: "Read between the lines.", meaning: "行間を読む / 言外の意味を読み取る", description: "書かれている言葉の裏にある、隠された本当の意味や意図を理解することを指します。" },
    { idiom: "See eye to eye.", meaning: "意見が完全に一致する", description: "物事を全く同じ視点（目）で見ている、という意味から来ています。" },
    { idiom: "Sit on the fence.", meaning: "日和見をする / 中立の立場をとる", description: "どちらの側にもつかず、フェンスの上に座って状況を傍観している様子を表します。" },
    { idiom: "Speak of the devil.", meaning: "噂をすれば影", description: "悪魔（devil）の話をしていたら、まさにその本人が現れた、という状況で使います。" },
    { idiom: "Steal someone's thunder.", meaning: "人の手柄を横取りする / 人のお株を奪う", description: "劇で雷の音を出す装置を発明した人が、自分の劇が失敗した後に、他の劇でその装置が使われているのを見て言った言葉が由来です。" },
    { idiom: "Take something with a grain of salt.", meaning: "話半分に聞く", description: "一粒の塩（a grain of salt）を加えて（味付けして）聞く、つまり、全てを鵜呑みにせず、少し疑ってかかるべきだという意味です。" },
    { idiom: "The last straw.", meaning: "我慢の限界", description: "ラクダの背中に藁を一本ずつ乗せていき、ついに耐えきれなくなった最後の一本の藁、という意味です。" },
    { idiom: "Throw caution to the wind.", meaning: "危険を顧みない / 向こう見ずな行動をとる", description: "注意や警告（caution）を風に投げ捨ててしまうように、リスクを全く考えずに行動することを指します。" },
    { idiom: "To make matters worse.", meaning: "さらに悪いことには", description: "すでに悪い状況に、さらに別の問題が加わって事態が悪化する時に使います。" },
    { idiom: "Your guess is as good as mine.", meaning: "私にも分からない", description: "あなたの推測も私の推測も同じくらい当てにならない、つまり、全く見当がつかないという意味です。" },
    { idiom: "A dime a dozen.", meaning: "ありふれた / どこにでもある", description: "1ダース（12個）がたったの10セント（dime）で買えるほど、価値が低く、ありふれていることを指します。" },
    { idiom: "Chip on one's shoulder.", meaning: "喧嘩腰の態度", description: "昔、肩に乗せた木片（chip）を打ち落とされたら喧嘩を売る、という少年たちの遊びから来ています。" },
    { idiom: "Cut corners.", meaning: "手を抜く / 節約のために近道をする", description: "品質や安全性を犠牲にして、時間やお金を節約するために最も簡単な方法をとることを指します。" },
    { idiom: "Don't put all your eggs in one basket.", meaning: "一つのことに全てを賭けるな", description: "全ての卵を一つのかごに入れると、そのかごを落とした時に全て割れてしまうことから来ています。" },
    { idiom: "Elephant in the room.", meaning: "誰もが気づいているが、あえて触れない問題", description: "部屋に象がいるのに誰もそのことに触れない、という不自然な状況を表します。" },
    { idiom: "Get a taste of your own medicine.", meaning: "自分のしたことの報いを受ける", description: "自分が他人に与えた不快な薬（medicine）を、自分自身が味わうことになる、という意味です。" },
    { idiom: "Give someone the cold shoulder.", meaning: "冷たくあしらう / よそよそしい態度をとる", description: "昔、歓迎しない客には冷たい羊の肩肉（cold shoulder）を出したという習慣が由来とされています。" },
    { idiom: "Go on a wild goose chase.", meaning: "無駄な追いかけっこをする / 見込みのないことを探す", description: "捕まえるのがほぼ不可能な野生のガチョウを追いかけることから、達成不可能な目標を追い求めることを指します。" },
    { idiom: "Good things come to those who wait.", meaning: "待てば海路の日和あり", description: "辛抱強く待つことができる人には、良い結果が訪れる、という意味です。" },
    { idiom: "Heard it through the grapevine.", meaning: "噂で聞いた", description: "「ブドウのつる（grapevine）」のように、人から人へと伝わっていく非公式な情報源、つまり噂話を指します。" },
    { idiom: "Hit the books.", meaning: "猛勉強する", description: "文字通り「本を叩く」ように、集中的に、そして熱心に勉強することを意味します。" },
    { idiom: "Ignorance is bliss.", meaning: "知らぬが仏", description: "知らない方が、心配やストレスがなく幸せでいられる、という意味です。" },
    { idiom: "It's a small world.", meaning: "世間は狭いですね", description: "予期せぬ場所で知人に出会ったり、意外な共通点が見つかったりしたときに使います。" },
    { idiom: "Let someone off the hook.", meaning: "（人を）許す / 大目に見る", description: "釣り針にかかった魚を逃がしてあげるように、誰かの責任や罰を免除してあげることを意味します。" },
    { idiom: "Method to my madness.", meaning: "一見無茶苦茶に見えるが、実は考えがある", description: "シェイクスピアの『ハムレット』からの引用で、狂気（madness）に見える行動にも、実は論理的な方法（method）があることを示します。" },
    { idiom: "Not my cup of tea.", meaning: "私の好みではない", description: "英国の紅茶文化から来ており、自分にとって興味がない、または好きではないことを丁寧に表現する方法です。" },
    { idiom: "Put a sock in it.", meaning: "静かにしろ / 黙れ", description: "非常に口語的で、少し失礼な表現です。相手にうるさいから黙ってほしいと伝える時に使います。" },
    { idiom: "Rule of thumb.", meaning: "経験則 / 目安", description: "厳密な科学的根拠はないが、経験上だいたい正しいとされる、おおよその基準や方法を指します。" },
    { idiom: "Saving for a rainy day.", meaning: "万一に備えて貯金する", description: "雨の日（rainy day）、つまり、予期せぬ困難や出費が必要になった時のために、お金を蓄えておくことを意味します。" },
    { idiom: "The whole nine yards.", meaning: "全部 / 何から何まで", description: "語源は諸説ありますが、必要なもの全て、あるいは考えられる全てのものを提供・実行することを意味します。" },
    { idiom: "Third time's a charm.", meaning: "三度目の正直", description: "二度失敗しても、三度目にはうまくいく、という楽観的な信念を表します。" },
    { idiom: "Tie the knot.", meaning: "結婚する", description: "昔の結婚式で、夫婦の手を結び合わせる（tie a knot）儀式があったことから来ています。" },
    { idiom: "Water under the bridge.", meaning: "過ぎたこと / もう済んだこと", description: "橋の下を流れていった水はもう戻ってこないように、過去の問題はもう気にする必要がない、という意味です。" },
    { idiom: "Wear one's heart on one's sleeve.", meaning: "感情をあからさまにする", description: "中世の騎士が、思いを寄せる女性の印を袖（sleeve）につけていたことから、自分の感情を隠さずに見せることを指します。" },
    { idiom: "You can't judge a book by its cover.", meaning: "人は見かけによらない", description: "本の表紙だけでその内容を判断できないように、外見だけで物事や人の本質を判断してはいけない、という戒めです。" },
    { idiom: "A penny for your thoughts.", meaning: "何を考えているの？", description: "相手が物思いにふけっている時に、その考えを優しく尋ねる表現です。" },
    { idiom: "Add insult to injury.", meaning: "傷口に塩を塗る", description: "すでに悪い状況（injury）に、さらに侮辱（insult）を加えて、事態を悪化させることを指します。" },
    { idiom: "All bark and no bite.", meaning: "口先ばかりで実行が伴わない", description: "よく吠える（bark）犬ほど、実際には噛まない（bite）ことから来ています。" },
    { idiom: "Back to the drawing board.", meaning: "振り出しに戻る / 計画を練り直す", description: "計画が失敗したため、設計図（drawing board）の段階からもう一度やり直す必要があることを意味します。" },
    { idiom: "Between a rock and a hard place.", meaning: "板挟みになる / 進退窮まる", description: "岩と硬い場所の間に挟まれて、どちらに動いても困難な状況に陥ることを指します。" },
    { idiom: "Cross that bridge when you come to it.", meaning: "その時になったら考える", description: "まだ起きていない問題を心配するのではなく、実際にその問題に直面した時に考えれば良い、という意味です。" },
    { idiom: "Cry over spilt milk.", meaning: "覆水盆に返らず", description: "こぼれた（spilt）牛乳を嘆いても元には戻らないように、起きてしまったことを後悔しても仕方がない、という意味です。" },
    { idiom: "Curiosity killed the cat.", meaning: "好奇心は身を滅ぼす", description: "余計な詮索は危険を招くことがある、という警告として使われます。" },
    { idiom: "Cut to the chase.", meaning: "要点を言う / 本題に入る", description: "映画で、退屈な会話シーンを飛ばして、追いかけっこ（chase）のシーンに移ることから来ています。" },
    { idiom: "Devil's advocate.", meaning: "あえて反対意見を言う人", description: "議論を深めるために、意図的に反対の立場をとって意見を述べる人のことを指します。" },
    { idiom: "Elvis has left the building.", meaning: "お開きです / 終了です", description: "エルヴィス・プレスリーのコンサート終了後、アンコールを求める観客に対して、彼がもう会場にいないことを伝えるアナウンスが由来です。" },
    { idiom: "Face the music.", meaning: "現実を受け入れる / 自分の行いの結果に直面する", description: "自分の行動が招いた好ましくない結果や批判を、逃げずに受け入れなければならない状況を指します。" },
    { idiom: "Feeling blue.", meaning: "落ち込んでいる / 憂鬱だ", description: "青色（blue）が、英語圏ではしばしば悲しみや憂鬱な気分の象徴として使われることから来ています。" },
    { idiom: "Get wind of something.", meaning: "〜を嗅ぎつける / 噂を耳にする", description: "風（wind）が噂や情報を運んでくるイメージから、何かを間接的に知ることを意味します。" },
    { idiom: "Go out on a limb.", meaning: "危険を冒す / 大胆な推測をする", description: "木の幹から伸びた細い枝（limb）の先に行くように、支持を得られないかもしれない危険な立場をとることを指します。" },
    { idiom: "Let the chips fall where they may.", meaning: "結果は天に任せる", description: "木を切った時に木片（chips）がどこに落ちようと気にしないように、結果をコントロールしようとせず、自然の成り行きに任せる態度を示します。" },
    { idiom: "Lick one's wounds.", meaning: "傷を癒す / 敗北から立ち直る", description: "動物が傷（wounds）を舐めて治すように、失敗や敗北の後に、プライベートな時間を持って心身を回復させることを指します。" },
    { idiom: "Once bitten, twice shy.", meaning: "羹に懲りて膾を吹く", description: "一度噛まれる（bitten）と、次からは臆病（shy）になる、という意味で、一度の失敗に懲りて過度に用心深くなる様子を表します。" },
    { idiom: "Play it by ear.", meaning: "臨機応変に行う", description: "楽譜を見ずに、聞いた音（ear）を頼りに演奏するように、事前の計画なしにその場の状況に合わせて行動することを指します。" }
];
const readingQuizData = [
    {
        title: "A Day at the Beach",
        passage: "Yesterday, my family and I went to the beach. The sun was shining brightly and the sky was a beautiful blue. My sister and I built a large sandcastle with a tall tower. My dad went for a swim in the cool ocean, while my mom read a book under a big umbrella. For lunch, we ate sandwiches and drank lemonade. It was a perfect day.",
        translation: "昨日、家族と私はビーチに行きました。太陽は明るく輝いていて、空は美しい青色でした。妹と私は高い塔のある大きな砂の城を作りました。父は冷たい海で泳ぎに行き、母は大きな傘の下で本を読んでいました。昼食には、サンドイッチを食べてレモネードを飲みました。完璧な一日でした。",
        questions: [
            {
                q: "What was the weather like?",
                correct: "Sunny and clear",
                incorrect: ["Rainy and cold", "Cloudy and windy", "Snowy"]
            },
            {
                q: "What did the author and their sister build?",
                correct: "A sandcastle",
                incorrect: ["A boat", "A house", "A car"]
            },
            {
                q: "What did the mom do at the beach?",
                correct: "Read a book",
                incorrect: ["Went for a swim", "Ate sandwiches", "Built a sandcastle"]
            }
        ]
    },
    {
        title: "My First Pet",
        passage: "When I was eight years old, I got my first pet. It was a small, golden hamster named Leo. Every morning, I gave him fresh food and water. I loved watching him run on his wheel and stuff his cheeks with seeds. Cleaning his cage was not my favorite job, but I did it every week. Leo was a tiny friend, but he brought so much joy to my life.",
        translation: "私が8歳の時、初めてのペットを飼いました。それはレオという名前の小さなゴールデンハムスターでした。毎朝、私は彼に新鮮な餌と水を与えました。彼が回し車で走ったり、頬を種でいっぱいにしたりするのを見るのが大好きでした。彼のケージを掃除するのは好きな仕事ではありませんでしたが、毎週やりました。レオは小さな友達でしたが、私の人生にたくさんの喜びをもたらしてくれました。",
        questions: [
            {
                q: "What kind of pet did the author get?",
                correct: "A hamster",
                incorrect: ["A dog", "A cat", "A fish"]
            },
            {
                q: "What was the pet's name?",
                correct: "Leo",
                incorrect: ["Max", "Goldie", "Fuzzy"]
            },
            {
                q: "What job did the author NOT enjoy?",
                correct: "Cleaning the cage",
                incorrect: ["Giving food and water", "Watching him run", "Playing with him"]
            }
        ]
    },
    {
        title: "A Trip to the Supermarket",
        passage: "On Saturday morning, I went to the supermarket with my mom to buy groceries for the week. Our shopping list was long. We needed milk, bread, eggs, and cheese from the dairy section. Then, we went to the produce section to get fresh fruits and vegetables like apples, bananas, and carrots. The busiest part was the checkout counter. We had to wait in line for ten minutes, but I was happy because mom bought me a chocolate bar.",
        translation: "土曜日の朝、私は母と一緒にスーパーマーケットに行き、一週間分の食料品を買いました。買い物リストは長かったです。乳製品売り場で牛乳、パン、卵、チーズが必要でした。次に、青果売り場に行き、リンゴ、バナナ、ニンジンなどの新鮮な果物や野菜を手に入れました。一番混雑していたのはレジカウンターでした。列に10分並ばなければなりませんでしたが、母がチョコレートバーを買ってくれたので私は幸せでした。",
        questions: [
            {
                q: "Where did the author go on Saturday?",
                correct: "To the supermarket",
                incorrect: ["To the park", "To school", "To the library"]
            },
            {
                q: "Which of these items was NOT on the list?",
                correct: "Juice",
                incorrect: ["Milk", "Bread", "Eggs"]
            },
            {
                q: "What did the author get as a treat?",
                correct: "A chocolate bar",
                incorrect: ["An apple", "A toy", "Ice cream"]
            }
        ]
    }
];
const conversationTopics = [
    "What is the most interesting place you have ever visited?", "If you could have any superpower, what would it be and why?",
    "What is your favorite movie or book and why?", "Describe your dream vacation.", "What new skill would you like to learn?",
    "What is the best meal you have ever had?", "Talk about your favorite season and why you like it."
];
const listeningChallengeSentences = pronunciationSentences;

// =============================================
//  Audio Context & Speech Synthesis Setup
// =============================================
document.body.addEventListener('click', () => {
    try {
        const audioContext = window.AudioContext || window.webkitAudioContext;
        if (audioContext && new audioContext().state === 'suspended') {
            new audioContext().resume().catch(e => console.error("AudioContext resume failed:", e));
        }
    } catch(e) {
        console.error("Could not resume AudioContext", e);
    }
}, { once: true });


let usVoice = null;

function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        console.warn("No speech synthesis voices found.");
        return;
    }
    
    usVoice = voices.find(voice => voice.lang === 'en-US');

    if (!usVoice) {
        usVoice = voices.find(voice => voice.lang.startsWith('en-'));
    }

    if (usVoice) {
        console.log("Selected speech synthesis voice:", usVoice.name);
    } else {
        console.warn("No English voice found. The browser will use its default.");
    }
}

populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(text, callback) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (usVoice) {
        utterance.voice = usVoice;
    } else {
        populateVoiceList();
        if(usVoice) utterance.voice = usVoice;
    }
    utterance.lang = 'en-US';
    if (callback) utterance.onend = callback;
    window.speechSynthesis.speak(utterance);
}

// =============================================
//  画面管理
// =============================================
const splashScreen = document.getElementById('splash-screen');
const enterAppButton = document.getElementById('enter-app-button');

const homeScreen = document.getElementById('home-screen');
const speakingPracticeScreen = document.getElementById('speaking-practice-screen');
const wordQuizScreen = document.getElementById('word-quiz-screen');
const quizLevelScreen = document.getElementById('quiz-level-screen');
const listeningChallengeScreen = document.getElementById('listening-challenge-screen');
const readingQuizScreen = document.getElementById('reading-quiz-screen');
const videoChatScreen = document.getElementById('video-chat-screen');

const startSpeakingPracticeButton = document.getElementById('start-speaking-practice');
const goToQuizLevelsButton = document.getElementById('go-to-quiz-levels');
const startListeningChallengeButton = document.getElementById('start-listening-challenge');
const startReadingQuizButton = document.getElementById('start-reading-quiz');
const startVideoChatButton = document.getElementById('start-video-chat');

const backButtonSpeaking = document.getElementById('backButtonSpeaking');
const backButtonFromLevels = document.getElementById('backButtonFromLevels');
const backButtonFromQuiz = document.getElementById('backButtonFromQuiz');
const backButtonFromListening = document.getElementById('backButtonFromListening');
const backButtonFromReading = document.getElementById('backButtonFromReading');
const backButtonFromVideo = document.getElementById('backButtonFromVideo');

function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none'; 
    });
    screenToShow.style.display = 'block'; 
    screenToShow.classList.add('active'); 

    if (screenToShow === homeScreen) {
        displayIdiomOfTheDay();
    }
}

enterAppButton.addEventListener('click', () => showScreen(homeScreen));

startSpeakingPracticeButton.addEventListener('click', () => { showScreen(speakingPracticeScreen); initializeSpeakingPractice(); });
goToQuizLevelsButton.addEventListener('click', () => showScreen(quizLevelScreen));
startListeningChallengeButton.addEventListener('click', () => {
    showScreen(listeningChallengeScreen);
    startNewListeningChallenge();
});
startReadingQuizButton.addEventListener('click', () => {
    showScreen(readingQuizScreen);
    startNewReadingQuiz();
});
startVideoChatButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * conversationTopics.length);
    document.getElementById('video-topic').textContent = conversationTopics[randomIndex];
    document.getElementById('video-status').textContent = "「Start Call」を押して、カメラとマイクを許可してください。";
    showScreen(videoChatScreen);
});

backButtonSpeaking.addEventListener('click', () => showScreen(homeScreen));
backButtonFromLevels.addEventListener('click', () => showScreen(homeScreen));
backButtonFromQuiz.addEventListener('click', () => showScreen(quizLevelScreen));
backButtonFromListening.addEventListener('click', () => showScreen(homeScreen));
backButtonFromReading.addEventListener('click', () => showScreen(homeScreen));
backButtonFromVideo.addEventListener('click', () => { if (typeof peerConnection !== 'undefined' && peerConnection) { hangUp(); } showScreen(homeScreen); });


// =============================================
//  スピーキング練習ロジック (統合版)
// =============================================
const sentenceElement = document.getElementById('sentence');
const meaningElement = document.getElementById('sentence-meaning');
const listenButton = document.getElementById('listenButton');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const statusElement = document.getElementById('status');
const nextButton = document.getElementById('nextButton');
const userRecordingPlayer = document.getElementById('user-recording-player');

let currentSentenceIndex = -1;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let mediaRecorder;
let audioChunks = [];
let modelAudioDuration = 0;
let userSpeechStartTime = 0;
let userSpeechEndTime = 0;
let isSpeakingPracticeInitialized = false;

function initializeSpeakingPractice() {
    if (isSpeakingPracticeInitialized && recognition && mediaRecorder) {
         setNewSentence(); 
         return;
    }

    if (!('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices)) {
        statusElement.textContent = "エラー: マイクへのアクセスがブラウザでサポートされていません。";
        [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
        return;
    }
    if (!SpeechRecognition) {
        statusElement.textContent = "エラー: 音声認識がブラウザでサポートされていません。";
        [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
        return;
    }
    if (!('MediaRecorder' in window)) {
         statusElement.textContent = "エラー: 音声録音がブラウザでサポートされていません。";
        [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
        return;
    }


    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            try {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = event => { audioChunks.push(event.data); };
                mediaRecorder.onstop = () => {
                    if (audioChunks.length > 0) {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        userRecordingPlayer.src = audioUrl;
                        audioChunks = [];
                    } else {
                        console.warn("No audio data recorded.");
                         userRecordingPlayer.src = ''; 
                    }
                };
                mediaRecorder.onerror = (event) => {
                     console.error('MediaRecorder error:', event.error);
                     statusElement.textContent = `録音エラー: ${event.error.message}`;
                };

                recognition = new SpeechRecognition();
                Object.assign(recognition, { lang: 'en-US', interimResults: false, continuous: false });

                recognition.addEventListener('result', handleRecognitionResult);
                recognition.addEventListener('speechstart', handleSpeechStart);
                recognition.addEventListener('end', handleRecognitionEnd);
                recognition.addEventListener('error', handleRecognitionError);

                isSpeakingPracticeInitialized = true; 
                setNewSentence();

            } catch (err) {
                 console.error("Error initializing MediaRecorder or Recognition:", err);
                 statusElement.textContent = `初期化エラー: ${err.message}`;
                 [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
            }
        })
        .catch(err => {
            console.error("getUserMedia error:", err);
            statusElement.textContent = `エラー: マイクへのアクセス許可が必要です (${err.message})。`;
            [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
        });
}

function handleRecognitionResult(event) {
    if (speakingPracticeScreen.style.display !== 'block') return; 
    userSpeechEndTime = performance.now();
    const transcript = event.results[0][0].transcript;
    generateCombinedFeedback(transcript);
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

function handleSpeechStart() {
    if (speakingPracticeScreen.style.display !== 'block') return;
    userSpeechStartTime = performance.now();
}

function handleRecognitionEnd() {
    if (speakingPracticeScreen.style.display !== 'block') return;
    if (startButton.disabled) {
        startButton.disabled = false;
        stopButton.disabled = true;
        statusElement.classList.remove('recording');
        if (feedbackElement.innerHTML === '-') {
            statusElement.textContent = "音声が認識されませんでした。もう一度試してください。";
        } else {
            statusElement.textContent = "結果を確認してください。";
        }
    }
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

function handleRecognitionError(event) {
    if (speakingPracticeScreen.style.display !== 'block') return;
    console.error('SpeechRecognition error:', event.error);
    statusElement.textContent = `音声認識エラー: ${event.error}`;
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}


function resetResults() {
    scoreElement.innerHTML = `0 <span class="score-unit">/ 100</span>`;
    scoreElement.className = '';
    feedbackElement.innerHTML = '-';
    userRecordingPlayer.src = ''; 
    modelAudioDuration = 0; 
    userSpeechStartTime = 0;
    userSpeechEndTime = 0;
}

function setNewSentence() {
    if (!isSpeakingPracticeInitialized) {
        initializeSpeakingPractice(); 
        return;
    }
    let newIndex;
    do { newIndex = Math.floor(Math.random() * pronunciationSentences.length); } while (pronunciationSentences.length > 1 && newIndex === currentSentenceIndex);
    currentSentenceIndex = newIndex;
    const { en, ja } = pronunciationSentences[currentSentenceIndex];
    resetResults();
    sentenceElement.textContent = en;
    meaningElement.textContent = ja;
    statusElement.textContent = "準備完了です。「お手本を聞く」か「録音開始」を押してください。";
    listenButton.disabled = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

listenButton.addEventListener('click', () => {
    const text = pronunciationSentences[currentSentenceIndex].en;
    let startTime;
    speak(text, () => {
        modelAudioDuration = performance.now() - startTime;
        listenButton.disabled = false;
    });
    startTime = performance.now();
    listenButton.disabled = true;
});

startButton.addEventListener('click', () => { 
    mediaRecorder.start();
    recognition.start();
    statusElement.textContent = "話してください...";
    statusElement.classList.add('recording'); 
    startButton.disabled = true; 
    stopButton.disabled = false; 
    resetResults(); 
});

stopButton.addEventListener('click', () => {
    if (mediaRecorder.state === 'recording') mediaRecorder.stop();
    if (recognition) recognition.stop();
});

function generateCombinedFeedback(transcript) {
    const originalText = pronunciationSentences[currentSentenceIndex].en;
    const cleanOriginal = originalText.toLowerCase().replace(/[.,!?]/g, '').trim().split(/\s+/); 
    const cleanUser = transcript.toLowerCase().replace(/[.,!?]/g, '').trim().split(/\s+/); 

    let correctWords = 0;
    const feedbackHtml = cleanOriginal.map((word, index) => {
        if (cleanUser[index] === word) { 
            correctWords++; 
            return `<span class="correct">${word}</span>`; 
        } else { 
            const userWord = cleanUser[index] ? `<span class="your-speech">${cleanUser[index]}</span>` : '<span class="your-speech">×</span>';
            return `<span class="incorrect" data-word="${word}">${word}</span> (${userWord})`; 
        }
    }).join(' ');
    
    const score = cleanOriginal.length > 0 ? Math.round((correctWords / cleanOriginal.length) * 100) : 0; 
    scoreElement.innerHTML = `${score} <span class="score-unit">/ 100</span>`;
    scoreElement.className = score >= 80 ? 'score-high' : score >= 50 ? 'score-mid' : 'score-low';
    
    let fullFeedback = `<strong>お手本との比較:</strong> ${feedbackHtml}`;

    const userSpeechDuration = userSpeechEndTime - userSpeechStartTime;
    let paceFeedback = '';
    
    console.log(`User speech duration: ${userSpeechDuration}ms`, `Model duration: ${modelAudioDuration}ms`);

    if (modelAudioDuration > 50 && userSpeechDuration > 50) { 
        const paceRatio = userSpeechDuration / modelAudioDuration;
        if (paceRatio > 1.5) { 
            paceFeedback = "🐢 <strong>ペース:</strong> 少しゆっくりでした。もう少しテンポを上げてみましょう。";
        } else if (paceRatio < 0.7) { 
            paceFeedback = "🐇 <strong>ペース:</strong> 少し早口でした。焦らず話してみましょう。";
        } else {
            paceFeedback = "👍 <strong>ペース:</strong> 素晴らしい！お手本に近い自然なスピードです。";
        }
        fullFeedback += `<div class="feedback-pace-section">${paceFeedback}</div>`;
    } else {
         fullFeedback += `<div class="feedback-pace-section">ⓘ ペースの評価に必要な音声が録音されませんでした。</div>`;
    }

    feedbackElement.innerHTML = fullFeedback;
}

nextButton.addEventListener('click', setNewSentence);
feedbackElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('incorrect')) {
        const wordToSpeak = e.target.dataset.word;
        if (wordToSpeak) {
            speak(wordToSpeak);
        }
    }
});

// =============================================
//  単語クイズロジック
// =============================================
const levelCards = document.querySelectorAll('.level-card');
const quizGameArea = document.getElementById('quiz-game-area');
const quizQuestionCounter = document.getElementById('quiz-question-counter');
const quizScoreDisplay = document.getElementById('quiz-score');
const quizQuestion = document.getElementById('quiz-question');
const quizOptionsGrid = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizEndScreen = document.getElementById('quiz-end-screen');
const quizFinalScore = document.getElementById('quiz-final-score');
const quizRestartButton = document.getElementById('quiz-restart-button');
let currentQuizIndex = 0, quizScore = 0, questionsForCurrentQuiz = [], currentQuizLevel = '';
levelCards.forEach(card => {
    card.addEventListener('click', () => {
        currentQuizLevel = card.dataset.level;
        startNewQuizSet();
    });
});
function shuffleArray(array) { return [...array].sort(() => Math.random() - 0.5); }
function startNewQuizSet() {
    const fullQuizData = quizDataSets[currentQuizLevel];
    if (!fullQuizData || fullQuizData.length === 0) {
        console.error(`No quiz data found for level: ${currentQuizLevel}`);
        alert(`レベル「${currentQuizLevel}」の単語データが見つかりません。`);
        return;
    }
    questionsForCurrentQuiz = shuffleArray(fullQuizData).slice(0, 10); 
    showScreen(wordQuizScreen);
    startQuiz();
}
function startQuiz() {
    currentQuizIndex = 0; quizScore = 0;
    quizGameArea.style.display = 'block';
    quizEndScreen.style.display = 'none';
    quizFeedback.textContent = '';
    showNextQuestion();
}
function showNextQuestion() {
    if (!questionsForCurrentQuiz || currentQuizIndex >= questionsForCurrentQuiz.length) { 
        endQuiz(); 
        return; 
    }
    quizQuestionCounter.textContent = `Question ${currentQuizIndex + 1} / ${questionsForCurrentQuiz.length}`;
    quizScoreDisplay.textContent = `Score: ${quizScore}`;
    quizFeedback.textContent = '';
    const { ja, correct, incorrect } = questionsForCurrentQuiz[currentQuizIndex];
    quizQuestion.textContent = ja;
    quizOptionsGrid.innerHTML = '';
    const options = shuffleArray([correct, ...incorrect]);
    options.forEach(optionText => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.className = 'quiz-option-btn';
        button.addEventListener('click', handleOptionClick);
        quizOptionsGrid.appendChild(button);
    });
}
function handleOptionClick(event) {
    const selectedButton = event.target;
    if (currentQuizIndex >= questionsForCurrentQuiz.length) return; 
    
    const correctAnswer = questionsForCurrentQuiz[currentQuizIndex].correct;
    document.querySelectorAll('#quiz-options .quiz-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) btn.classList.add('correct-answer');
    });

    if (selectedButton.textContent === correctAnswer) {
        quizScore++;
        quizFeedback.textContent = "正解！🎉";
        quizFeedback.className = 'quiz-feedback correct-feedback';
    } else {
        selectedButton.classList.add('incorrect-answer');
        quizFeedback.textContent = `不正解... 正解は「${correctAnswer}」`;
        quizFeedback.className = 'quiz-feedback incorrect-feedback';
    }
    currentQuizIndex++;
    setTimeout(showNextQuestion, 1500); 
}
function endQuiz() {
    quizGameArea.style.display = 'none';
    quizEndScreen.style.display = 'block';
    quizFinalScore.textContent = `${questionsForCurrentQuiz.length}問中 ${quizScore}問 正解！`;
}
quizRestartButton.addEventListener('click', startNewQuizSet);


// =============================================
//  リスニングチャレンジロジック
// =============================================
const playAudioButton = document.getElementById('play-audio-button');
const listeningStatus = document.getElementById('listening-status');
const listeningInput = document.getElementById('listening-input');
const submitListeningButton = document.getElementById('submit-listening-button');
const listeningFeedbackArea = document.getElementById('listening-feedback-area');
const listeningResultTitle = document.getElementById('listening-result-title');
const listeningFeedbackText = document.getElementById('listening-feedback-text');
const listeningCorrectAnswer = document.getElementById('listening-correct-answer');
const nextListeningButton = document.getElementById('next-listening-button');
let currentListeningSentence = {};

function startNewListeningChallenge() {
    let newIndex = Math.floor(Math.random() * listeningChallengeSentences.length);
    currentListeningSentence = listeningChallengeSentences[newIndex];
    listeningInput.value = '';
    listeningInput.disabled = false;
    submitListeningButton.style.display = 'block';
    listeningFeedbackArea.style.display = 'none';
    playAudioButton.disabled = false;
    listeningStatus.textContent = '';
}
playAudioButton.addEventListener('click', () => {
    if (!currentListeningSentence || !currentListeningSentence.en) return;
    const textToSpeak = currentListeningSentence.en;
    speak(textToSpeak, () => { 
        playAudioButton.disabled = false; 
        listeningStatus.textContent = 'もう一度聞きますか？'; 
    });
    playAudioButton.disabled = true; 
    listeningStatus.textContent = '再生中...';
});
submitListeningButton.addEventListener('click', () => {
    const userAnswer = listeningInput.value.trim();
    if (userAnswer === '') { 
        showCustomAlert('何か入力してください。'); 
        return; 
    }
    if (!currentListeningSentence || !currentListeningSentence.en) return;
    const correctAnswer = currentListeningSentence.en;
    const cleanUserAnswer = userAnswer.toLowerCase().replace(/[.,!?]/g, '').trim();
    const cleanCorrectAnswer = correctAnswer.toLowerCase().replace(/[.,!?]/g, '').trim();
    listeningFeedbackArea.style.display = 'block';
    submitListeningButton.style.display = 'none';
    listeningInput.disabled = true;
    listeningCorrectAnswer.textContent = correctAnswer;
    if (cleanUserAnswer === cleanCorrectAnswer) {
        listeningResultTitle.textContent = "素晴らしい！正解です！";
        listeningResultTitle.className = 'correct';
        listeningFeedbackText.textContent = '完璧に聞き取れています。';
    } else {
        listeningResultTitle.textContent = "おしい！不正解です";
        listeningResultTitle.className = 'incorrect';
        listeningFeedbackText.textContent = 'もう一度挑戦してみましょう。';
    }
});
nextListeningButton.addEventListener('click', startNewListeningChallenge);

// =============================================
//  読解練習ロジック
// =============================================
const readingGameArea = document.getElementById('reading-game-area');
const readingTitle = document.getElementById('reading-title');
const readingPassage = document.getElementById('reading-passage');
const readingQuestionCounter = document.getElementById('reading-question-counter');
const readingScoreDisplay = document.getElementById('reading-score');
const readingQuestion = document.getElementById('reading-question');
const readingOptionsGrid = document.getElementById('reading-options');
const readingFeedback = document.getElementById('reading-feedback');
const readingEndScreen = document.getElementById('reading-end-screen');
const readingFinalScore = document.getElementById('reading-final-score');
const readingRestartButton = document.getElementById('reading-restart-button');

let currentReadingData = {};
let currentReadingQuestionIndex = 0;
let readingScore = 0;

function startNewReadingQuiz() {
    const newIndex = Math.floor(Math.random() * readingQuizData.length);
    currentReadingData = readingQuizData[newIndex];
    
    currentReadingQuestionIndex = 0;
    readingScore = 0;

    readingTitle.textContent = currentReadingData.title;
    readingPassage.textContent = currentReadingData.passage;

    readingGameArea.style.display = 'block';
    readingEndScreen.style.display = 'none';
    
    showNextReadingQuestion();
}

function showNextReadingQuestion() {
    if (!currentReadingData || !currentReadingData.questions || currentReadingQuestionIndex >= currentReadingData.questions.length) {
        endReadingQuiz();
        return;
    }

    readingQuestionCounter.textContent = `Question ${currentReadingQuestionIndex + 1} / ${currentReadingData.questions.length}`;
    readingScoreDisplay.textContent = `Score: ${readingScore}`;
    readingFeedback.textContent = '';

    const questionData = currentReadingData.questions[currentReadingQuestionIndex];
    readingQuestion.textContent = questionData.q;
    
    readingOptionsGrid.innerHTML = '';
    const options = shuffleArray([questionData.correct, ...questionData.incorrect]);
    options.forEach(optionText => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.className = 'quiz-option-btn';
        button.addEventListener('click', handleReadingOptionClick);
        readingOptionsGrid.appendChild(button);
    });
}

function handleReadingOptionClick(event) {
    const selectedButton = event.target;
    if (currentReadingQuestionIndex >= currentReadingData.questions.length) return; 

    const correctAnswer = currentReadingData.questions[currentReadingQuestionIndex].correct;

    document.querySelectorAll('#reading-options .quiz-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct-answer');
        }
    });

    if (selectedButton.textContent === correctAnswer) {
        readingScore++;
        readingFeedback.textContent = "正解！🎉";
        readingFeedback.className = 'quiz-feedback correct-feedback';
    } else {
        selectedButton.classList.add('incorrect-answer');
        readingFeedback.textContent = `不正解... 正解は「${correctAnswer}」`;
        readingFeedback.className = 'quiz-feedback incorrect-feedback';
    }

    currentReadingQuestionIndex++;
    setTimeout(showNextReadingQuestion, 1500);
}

function endReadingQuiz() {
    readingGameArea.style.display = 'none';
    readingEndScreen.style.display = 'block';
     if (currentReadingData && currentReadingData.questions) {
        readingFinalScore.textContent = `${currentReadingData.questions.length}問中 ${readingScore}問 正解！`;
        // リザルト画面に本文と訳を表示
        document.getElementById('review-passage-en').textContent = currentReadingData.passage;
        document.getElementById('review-passage-ja').textContent = currentReadingData.translation;
    } else {
        readingFinalScore.textContent = "スコアの計算に問題がありました。"; // Fallback message
    }
}

readingRestartButton.addEventListener('click', startNewReadingQuiz);


// =============================================
//  ビデオチャットロジック (WebRTC実装 - 映像あり版)
// =============================================
const startCallBtn = document.getElementById('start-call-btn');
const endCallBtn = document.getElementById('end-call-btn');
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const videoStatus = document.getElementById('video-status');

let peerConnection;
let localStream;
let remoteStream;
let socket;
const roomId = 'default-room'; // 簡略化のためルームIDを固定

// Googleが提供するパブリックSTUNサーバー
const stunServers = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
    ]
};

startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', hangUp);

async function startCall() {
    startCallBtn.disabled = true;
    endCallBtn.disabled = false;
    videoStatus.textContent = "カメラとマイクを起動中..."; 

    try {
        // ▼▼▼ 【修正】 映像ありに変更 ▼▼▼
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true }); 
        // ▼▼▼ 【修正】 自分の映像をセット ▼▼▼
        localVideo.srcObject = localStream;
    } catch (err) {
        console.error("getUserMedia error:", err);
        videoStatus.textContent = "エラー: カメラまたはマイクを起動できません。"; 
        startCallBtn.disabled = false;
        endCallBtn.disabled = true;
        return;
    }

    videoStatus.textContent = "シグナリングサーバーに接続中...";

    // ★ここをReplitのURL (wss://...) に書き換えてください
    let wsUrl = 'ws://localhost:8080'; 
    try {
        socket = new WebSocket(wsUrl); 
    } catch (err) {
        videoStatus.textContent = "サーバー接続エラー。";
        startCallBtn.disabled = false;
        endCallBtn.disabled = true;
        return;
    }

    socket.onopen = () => {
        videoStatus.textContent = "サーバーに接続しました。ルームに参加します...";
        socket.send(JSON.stringify({ type: 'join', room: roomId }));
    };

    socket.onmessage = async (message) => {
        const data = JSON.parse(message.data);
        console.log('シグナリングメッセージ受信:', data);

        try {
            switch (data.type) {
                case 'joined':
                    videoStatus.textContent = "ルームに参加しました。相手を待っています...";
                    createPeerConnection();
                    break;
                case 'user-joined':
                    videoStatus.textContent = "相手が参加しました。接続を開始します...";
                    createPeerConnection(); 
                    const offer = await peerConnection.createOffer();
                    await peerConnection.setLocalDescription(offer);
                    socket.send(JSON.stringify({ type: 'offer', sdp: peerConnection.localDescription }));
                    break;
                case 'offer':
                    videoStatus.textContent = "接続リクエストを受信しました...";
                    createPeerConnection(); 
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
                    const answer = await peerConnection.createAnswer();
                    await peerConnection.setLocalDescription(answer);
                    socket.send(JSON.stringify({ type: 'answer', sdp: peerConnection.localDescription }));
                    break;
                case 'answer':
                    videoStatus.textContent = "接続が確立されました。";
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
                    break;
                case 'candidate':
                    if (peerConnection && data.candidate) {
                        await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
                    }
                    break;
                case 'user-left':
                    videoStatus.textContent = "相手が退出しました。";
                    hangUp(); 
                    break;
                case 'room-full':
                    videoStatus.textContent = "エラー: ルームは満室です。";
                    hangUp();
                    break;
            }
        } catch (err) {
            console.error(err);
        }
    };
}

function createPeerConnection() {
    if (peerConnection) return; 

    try {
        peerConnection = new RTCPeerConnection(stunServers);

        peerConnection.ontrack = (event) => {
            if (!remoteStream) {
                remoteStream = new MediaStream();
            }
            event.streams[0].getTracks().forEach(track => {
                remoteStream.addTrack(track);
            });
            // ▼▼▼ 【修正】 映像を表示 ▼▼▼
            remoteVideo.srcObject = remoteStream; 
        };

        peerConnection.onicecandidate = (event) => {
            if (event.candidate && socket && socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({ type: 'candidate', candidate: event.candidate }));
            }
        };
        
        peerConnection.oniceconnectionstatechange = () => {
            if (peerConnection.iceConnectionState === 'failed' || 
                peerConnection.iceConnectionState === 'disconnected' || 
                peerConnection.iceConnectionState === 'closed') {
                if (videoStatus.textContent === "接続が確立されました。") { 
                    videoStatus.textContent = "接続が切れました。";
                }
            }
        };

        // ローカルストリームのトラックを追加
        if (localStream) {
            localStream.getTracks().forEach(track => {
                peerConnection.addTrack(track, localStream);
            });
        }
    } catch (err) {
        console.error("Error creating PeerConnection:", err);
        videoStatus.textContent = "接続の作成に失敗しました。";
    }
}

function hangUp() {
    videoStatus.textContent = "通話を終了しました。";
    
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStream = null;
    }
    if (socket) {
        socket.close();
        socket = null;
    }
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
    startCallBtn.disabled = false;
    endCallBtn.disabled = true;
}


// =============================================
//  今日のイディオムロジック
// =============================================
function displayIdiomOfTheDay() {
    const idiomDateEl = document.getElementById('idiom-date');
    const idiomPhraseEl = document.getElementById('idiom-phrase');
    const idiomMeaningEl = document.getElementById('idiom-meaning');
    const idiomDescriptionEl = document.getElementById('idiom-description');

    if (!idiomDateEl || !idiomPhraseEl || !idiomMeaningEl || !idiomDescriptionEl) {
        return; 
    }
     if (idiomsData.length === 0) {
        console.error("Idioms data is empty.");
        idiomPhraseEl.textContent = "イディオムデータが見つかりません。";
        return;
    }

    const today = new Date();
    
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayIndex = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));

    const idiomIndex = dayIndex % idiomsData.length;
    const dailyIdiom = idiomsData[idiomIndex];

    idiomDateEl.textContent = `${today.getMonth() + 1}月${today.getDate()}日`;

    idiomPhraseEl.textContent = dailyIdiom.idiom;
    idiomMeaningEl.textContent = dailyIdiom.meaning;
    idiomDescriptionEl.textContent = dailyIdiom.description;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.screen').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });
    splashScreen.style.display = 'flex'; 
    splashScreen.classList.add('active');

    setTimeout(() => {
        if (splashScreen.classList.contains('active')) {
            showScreen(homeScreen);
        }
    }, 3000); 
});

function showCustomAlert(message) {
    console.warn("Using placeholder alert:", message);
    alert(message); 
}