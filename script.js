// =============================================
//  ★重要設定: ビデオチャット用サーバーURL★
// =============================================
// Replitで取得したURLをここに貼り付けてください（https:// ではなく wss:// に書き換える）
// 例: "wss://english-park-server.username.replit.co"
const SIGNALING_SERVER_URL = "wss://d3d09ea0-3b2c-4695-92df-c578bf0d0ee4-00-16jcgj5b32n67.pike.replit.dev";


// =============================================
//  全体で使用するデータ (完全版・大幅拡充)
// =============================================
const pronunciationSentences = [
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
    { en: "The weather is lovely today, isn't it?", ja: "今日は素敵な天気ですね。" },
    { en: "It looks like it's going to rain.", ja: "雨が降りそうですね。" },
    { en: "I can't stand this heat.", ja: "この暑さには耐えられません。" },
    { en: "Make sure to bundle up, it's freezing outside.", ja: "しっかり着込んでね、外は凍える寒さだから。" },
    { en: "My favorite season is autumn.", ja: "私の一番好きな季節は秋です。" },
    { en: "I'd like to check in, please.", ja: "チェックインをお願いします。" },
    { en: "Which platform does the train for Osaka leave from?", ja: "大阪行きの電車は何番線から出発しますか？" },
    { en: "How long does it take to get there by taxi?", ja: "そこまでタクシーでどのくらい時間がかかりますか？" },
    { en: "Could you recommend a good local restaurant?", ja: "おすすめの地元のレストランを教えていただけますか？" },
    { en: "I have a reservation under the name of Sato.", ja: "佐藤の名前で予約しています。" },
    { en: "Actions speak louder than words.", ja: "行動は言葉よりも雄弁である。" },
    { en: "The early bird catches the worm.", ja: "早起きは三文の徳。" },
    { en: "Better late than never.", ja: "遅れてもやらないよりはまし。" },
    { en: "Practice makes perfect.", ja: "習うより慣れよ。（練習は完璧を作る）" },
    { en: "Where there's a will, there's a way.", ja: "意志あるところに道は開ける。" },
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
        { ja: "未来", correct: "future", incorrect: ["past", "letter", "dream"] }, 
        { ja: "訪れる", correct: "visit", incorrect: ["return", "watch", "break"] },
        { ja: "高価な", correct: "expensive", incorrect: ["heavy", "beautiful", "cold"] },
        { ja: "図書館", correct: "library", incorrect: ["museum", "theater", "gym"] },
        { ja: "朝食", correct: "breakfast", incorrect: ["snack", "dessert", "vegetable"] },
        { ja: "言語", correct: "language", incorrect: ["song", "story", "sound"] },
        { ja: "質問する", correct: "ask", incorrect: ["answer", "shout", "forget"] },
        { ja: "いつも", correct: "always", incorrect: ["soon", "once", "later"] },
        { ja: "国", correct: "country", incorrect: ["capital", "continent", "flag"] },
        { ja: "幸せな", correct: "happy", incorrect: ["tired", "hungry", "busy"] },
        { ja: "家族", correct: "family", incorrect: ["neighbor", "teacher", "stranger"] },
        { ja: "仕事", correct: "work", incorrect: ["hobby", "vacation", "sleep"] },
        { ja: "都市", correct: "city", incorrect: ["island", "forest", "desert"] },
        { ja: "音楽", correct: "music", incorrect: ["movie", "picture", "dance"] },
        { ja: "川", correct: "river", incorrect: ["mountain", "sky", "cloud"] },
        { ja: "有名な", correct: "famous", incorrect: ["rich", "tall", "kind"] },
        { ja: "聞く", correct: "listen", incorrect: ["touch", "smell", "taste"] },
        { ja: "書く", correct: "write", incorrect: ["sing", "dance", "sleep"] },
        { ja: "走る", correct: "run", incorrect: ["fly", "swim", "sit"] },
        { ja: "簡単", correct: "easy", incorrect: ["wrong", "dark", "loud"] },
        { ja: "重い", correct: "heavy", incorrect: ["thin", "soft", "sweet"] },
        { ja: "若い", correct: "young", incorrect: ["tall", "short", "fast"] },
        { ja: "店", correct: "store", incorrect: ["bank", "hospital", "church"] },
        { ja: "助ける", correct: "help", incorrect: ["break", "lose", "wait"] },
        { ja: "今日", correct: "today", incorrect: ["weekend", "holiday", "morning"] },
        { ja: "天気", correct: "weather", incorrect: ["season", "temperature", "wind"] },
        { ja: "駅", correct: "station", incorrect: ["bridge", "corner", "street"] },
        { ja: "医者", correct: "doctor", incorrect: ["pilot", "artist", "farmer"] },
        { ja: "使う", correct: "use", incorrect: ["buy", "sell", "find"] },
        { ja: "同じ", correct: "same", incorrect: ["new", "old", "good"] },
        { ja: "話す", correct: "speak", incorrect: ["cry", "laugh", "think"] },
        { ja: "木", correct: "tree", incorrect: ["flower", "grass", "stone"] },
        { ja: "料理する", correct: "cook", incorrect: ["wash", "clean", "drive"] },
        { ja: "教える", correct: "teach", incorrect: ["borrow", "lend", "forget"] },
        { ja: "ドア", correct: "door", incorrect: ["floor", "roof", "wall"] },
        { ja: "水", correct: "water", incorrect: ["fire", "earth", "air"] },
        { ja: "学校", correct: "school", incorrect: ["office", "park", "home"] },
        { ja: "友達", correct: "friend", incorrect: ["enemy", "parent", "child"] },
        { ja: "食べる", correct: "eat", incorrect: ["drink", "sleep", "play"] },
        { ja: "大きい", correct: "big", incorrect: ["small", "long", "short"] },
        { ja: "見る", correct: "see", incorrect: ["hear", "feel", "say"] },
        { ja: "時間", correct: "time", incorrect: ["place", "date", "year"] },
        { ja: "人々", correct: "people", incorrect: ["animals", "things", "ideas"] },
        { ja: "日", correct: "day", incorrect: ["night", "week", "month"] },
        { ja: "良い", correct: "good", incorrect: ["bad", "nice", "great"] },
        { ja: "車", correct: "car", incorrect: ["bus", "train", "bike"] },
        { ja: "家", correct: "house", incorrect: ["room", "garden", "pool"] }
    ],
    intermediate: [
        { ja: "機会", correct: "opportunity", incorrect: ["problem", "accident", "miracle"] },
        { ja: "改善する", correct: "improve", incorrect: ["destroy", "accept", "repeat"] },
        { ja: "政府", correct: "government", incorrect: ["community", "company", "university"] },
        { ja: "影響", correct: "influence", incorrect: ["force", "luck", "secret"] },
        { ja: "提案する", correct: "suggest", incorrect: ["command", "demand", "promise"] },
        { ja: "責任", correct: "responsibility", incorrect: ["hobby", "right", "award"] },
        { ja: "発表する", correct: "announce", incorrect: ["whisper", "hide", "guess"] },
        { ja: "比較する", correct: "compare", incorrect: ["ignore", "separate", "connect"] },
        { ja: "利用可能な", correct: "available", incorrect: ["broken", "hidden", "impossible"] },
        { ja: "発展させる", correct: "develop", incorrect: ["stop", "shrink", "finish"] },
        { ja: "顧客", correct: "customer", incorrect: ["owner", "manager", "creator"] },
        { ja: "会社", correct: "company", incorrect: ["group", "family", "team"] },
        { ja: "能力", correct: "ability", incorrect: ["weakness", "shape", "color"] },
        { ja: "記事", correct: "article", incorrect: ["advertisement", "novel", "letter"] },
        { ja: "含む", correct: "include", incorrect: ["exclude", "remove", "forget"] },
        { ja: "しかしながら", correct: "however", incorrect: ["therefore", "because", "also"] },
        { ja: "提供する", correct: "provide", incorrect: ["receive", "take", "hide"] },
        { ja: "減らす", correct: "reduce", incorrect: ["increase", "add", "grow"] },
        { ja: "従業員", correct: "employee", incorrect: ["boss", "competitor", "student"] },
        { ja: "態度", correct: "attitude", incorrect: ["height", "weight", "age"] },
        { ja: "成功", correct: "success", incorrect: ["failure", "mistake", "problem"] },
        { ja: "交通", correct: "traffic", incorrect: ["nature", "weather", "space"] },
        { ja: "議論する", correct: "discuss", incorrect: ["agree", "listen", "ignore"] },
        { ja: "伝統", correct: "tradition", incorrect: ["fashion", "trend", "rumor"] },
        { ja: "目的", correct: "purpose", incorrect: ["accident", "luck", "chaos"] },
        { ja: "知識", correct: "knowledge", incorrect: ["opinion", "feeling", "dream"] },
        { ja: "普通", correct: "normal", incorrect: ["strange", "special", "perfect"] },
        { ja: "環境", correct: "environment", incorrect: ["machine", "tool", "device"] },
        { ja: "努力", correct: "effort", incorrect: ["rest", "luck", "talent"] },
        { ja: "説明する", correct: "explain", incorrect: ["confuse", "hide", "question"] },
        { ja: "価格", correct: "price", incorrect: ["size", "quality", "speed"] },
        { ja: "生産する", correct: "produce", incorrect: ["consume", "destroy", "buy"] },
        { ja: "距離", correct: "distance", incorrect: ["time", "weight", "temperature"] },
        { ja: "海外の", correct: "foreign", incorrect: ["local", "native", "domestic"] },
        { ja: "解決する", correct: "solve", incorrect: ["create", "cause", "complicate"] },
        { ja: "最近の", correct: "recent", incorrect: ["ancient", "future", "old"] },
        { ja: "決定する", correct: "decide", incorrect: ["hesitate", "wonder", "consider"] },
        { ja: "社会", correct: "society", incorrect: ["planet", "individual", "culture"] },
        { ja: "関係", correct: "relationship", incorrect: ["connection", "contact", "meeting"] },
        { ja: "経験", correct: "experience", incorrect: ["experiment", "memory", "feeling"] },
        { ja: "信じる", correct: "believe", incorrect: ["doubt", "know", "see"] },
        { ja: "教育", correct: "education", incorrect: ["information", "training", "study"] },
        { ja: "恐らく", correct: "probably", incorrect: ["certainly", "definitely", "absolutely"] },
        { ja: "情報", correct: "information", incorrect: ["news", "data", "fact"] },
        { ja: "共通の", correct: "common", incorrect: ["rare", "unique", "special"] },
        { ja: "含む", correct: "contain", incorrect: ["release", "empty", "spill"] },
        { ja: "旅行", correct: "journey", incorrect: ["trip", "voyage", "tour"] },
        { ja: "技術", correct: "technology", incorrect: ["science", "skill", "art"] }
    ],
    advanced: [
        { ja: "重要な", correct: "significant", incorrect: ["minor", "trivial", "slight"] },
        { ja: "結果", correct: "consequence", incorrect: ["cause", "origin", "start"] },
        { ja: "実行する", correct: "implement", incorrect: ["cancel", "postpone", "design"] },
        { ja: "不可欠な", correct: "essential", incorrect: ["optional", "unnecessary", "extra"] },
        { ja: "組織", correct: "organization", incorrect: ["individual", "chaos", "mess"] },
        { ja: "多様性", correct: "diversity", incorrect: ["uniformity", "sameness", "similarity"] },
        { ja: "説得する", correct: "persuade", incorrect: ["dissuade", "discourage", "force"] },
        { ja: "認識", correct: "perception", incorrect: ["reality", "fact", "truth"] },
        { ja: "貢献する", correct: "contribute", incorrect: ["withdraw", "take", "subtract"] },
        { ja: "効率的な", correct: "efficient", incorrect: ["wasteful", "ineffective", "slow"] },
        { ja: "交渉する", correct: "negotiate", incorrect: ["demand", "refuse", "dominate"] },
        { ja: "その後の", correct: "subsequent", incorrect: ["previous", "prior", "initial"] },
        { ja: "解釈する", correct: "interpret", incorrect: ["misunderstand", "confuse", "obscure"] },
        { ja: "禁止する", correct: "prohibit", incorrect: ["permit", "allow", "encourage"] },
        { ja: "蓄積する", correct: "accumulate", incorrect: ["disperse", "scatter", "spend"] },
        { ja: "正確な", correct: "accurate", incorrect: ["inaccurate", "wrong", "flawed"] },
        { ja: "達成する", correct: "achieve", incorrect: ["fail", "abandon", "surrender"] },
        { ja: "適切な", correct: "appropriate", incorrect: ["inappropriate", "unsuitable", "improper"] },
        { ja: "議論", correct: "controversy", incorrect: ["agreement", "harmony", "consensus"] },
        { ja: "実証する", correct: "demonstrate", incorrect: ["conceal", "disprove", "hide"] },
        { ja: "強調する", correct: "emphasize", incorrect: ["understate", "downplay", "ignore"] },
        { ja: "巨大な", correct: "enormous", incorrect: ["tiny", "minuscule", "small"] },
        { ja: "評価する", correct: "evaluate", incorrect: ["neglect", "overlook", "ignore"] },
        { ja: "最終的に", correct: "eventually", incorrect: ["never", "initially", "immediately"] },
        { ja: "仮定する", correct: "assume", incorrect: ["prove", "know", "confirm"] },
        { ja: "構成する", correct: "constitute", incorrect: ["dismantle", "break", "separate"] },
        { ja: "文脈", correct: "context", incorrect: ["isolation", "vacuum", "void"] },
        { ja: "確立する", correct: "establish", incorrect: ["abolish", "demolish", "end"] },
        { ja: "示す", correct: "indicate", incorrect: ["hide", "conceal", "deny"] },
        { ja: "個々の", correct: "individual", incorrect: ["group", "collective", "public"] },
        { ja: "法律", correct: "legislation", incorrect: ["anarchy", "chaos", "suggestion"] },
        { ja: "方法", correct: "method", incorrect: ["chaos", "disorder", "guesswork"] },
        { ja: "参加する", correct: "participate", incorrect: ["observe", "watch", "withdraw"] },
        { ja: "明らかにする", correct: "reveal", incorrect: ["hide", "cover", "mask"] },
        { ja: "移す", correct: "transfer", incorrect: ["keep", "hold", "remain"] },
        { ja: "分析する", correct: "analyze", incorrect: ["synthesize", "guess", "summarize"] },
        { ja: "利益", correct: "benefit", incorrect: ["disadvantage", "loss", "cost"] },
        { ja: "複雑な", correct: "complex", incorrect: ["simple", "easy", "clear"] },
        { ja: "減少する", correct: "decline", incorrect: ["increase", "rise", "grow"] },
        { ja: "経済", correct: "economy", incorrect: ["finance", "business", "market"] },
        { ja: "機能", correct: "function", incorrect: ["form", "design", "style"] },
        { ja: "投資", correct: "investment", incorrect: ["expense", "debt", "loan"] },
        { ja: "主要な", correct: "major", incorrect: ["minor", "secondary", "trivial"] },
        { ja: "パーセント", correct: "percent", incorrect: ["fraction", "ratio", "number"] },
        { ja: "期間", correct: "period", incorrect: ["moment", "point", "instant"] },
        { ja: "政策", correct: "policy", incorrect: ["rule", "law", "guideline"] },
        { ja: "研究", correct: "research", incorrect: ["study", "survey", "investigation"] },
        { ja: "役割", correct: "role", incorrect: ["part", "job", "position"] }
    ],
    expert: [
        { ja: "遍在する", correct: "ubiquitous", incorrect: ["rare", "scarce", "uncommon"] },
        { ja: "悪化させる", correct: "exacerbate", incorrect: ["improve", "soothe", "calm"] },
        { ja: "良心的な", correct: "conscientious", incorrect: ["careless", "negligent", "irresponsible"] },
        { ja: "豊富な", correct: "plethora", incorrect: ["shortage", "lack", "scarcity"] },
        { ja: "一時的な", correct: "ephemeral", incorrect: ["permanent", "eternal", "lasting"] },
        { ja: "有利な", correct: "lucrative", incorrect: ["unprofitable", "losing", "worthless"] },
        { ja: "無気力な", correct: "lethargic", incorrect: ["energetic", "vigorous", "active"] },
        { ja: "曖昧な", correct: "ambiguous", incorrect: ["clear", "explicit", "precise"] },
        { ja: "緩和する", correct: "alleviate", incorrect: ["aggravate", "intensify", "worsen"] },
        { ja: "お世辞", correct: "adulation", incorrect: ["criticism", "condemnation", "insult"] },
        { ja: "食い違い", correct: "discrepancy", incorrect: ["similarity", "consistency", "agreement"] },
        { ja: "多作な", correct: "prolific", incorrect: ["unproductive", "barren", "sterile"] },
        { ja: "無害な", correct: "innocuous", incorrect: ["harmful", "toxic", "dangerous"] },
        { ja: "軽減する", correct: "mitigate", incorrect: ["increase", "amplify", "heighten"] },
        { ja: "表向きは", correct: "ostensibly", incorrect: ["genuinely", "truly", "actually"] },
        { ja: "深く根付いた", correct: "entrenched", incorrect: ["superficial", "temporary", "flexible"] },
        { ja: "放棄する", correct: "abdicate", incorrect: ["seize", "usurp", "claim"] },
        { ja: "口達者な", correct: "glib", incorrect: ["sincere", "thoughtful", "hesitant"] },
        { ja: "批准する", correct: "ratify", incorrect: ["veto", "reject", "oppose"] },
        { ja: "無関心", correct: "apathy", incorrect: ["passion", "enthusiasm", "interest"] },
        { ja: "逆説的な", correct: "paradoxical", incorrect: ["logical", "consistent", "straightforward"] },
        { ja: "撤回する", correct: "rescind", incorrect: ["enforce", "enact", "uphold"] },
        { ja: "無駄に使う", correct: "squander", incorrect: ["save", "conserve", "hoard"] },
        { ja: "ありふれた", correct: "mundane", incorrect: ["extraordinary", "exciting", "unique"] },
        { ja: "有害な", correct: "detrimental", incorrect: ["beneficial", "helpful", "advantageous"] },
        { ja: "先見の明", correct: "prescience", incorrect: ["hindsight", "ignorance", "unawareness"] },
        { ja: "増殖する", correct: "proliferate", incorrect: ["dwindle", "decrease", "decline"] },
        { ja: "沈静化させる", correct: "placate", incorrect: ["provoke", "anger", "antagonize"] },
        { ja: "冗長な", correct: "redundant", incorrect: ["essential", "concise", "necessary"] },
        { ja: "倹約な", correct: "frugal", incorrect: ["extravagant", "wasteful", "spendthrift"] },
        { ja: "無口な", correct: "taciturn", incorrect: ["talkative", "garrulous", "loquacious"] },
        { ja: "証明する", correct: "corroborate", incorrect: ["contradict", "refute", "deny"] },
        { ja: "とらえどころのない", correct: "elusive", incorrect: ["obvious", "direct", "accessible"] },
        { ja: "称賛する", correct: "extol", incorrect: ["denounce", "criticize", "condemn"] },
        { ja: "ごまかし", correct: "subterfuge", incorrect: ["honesty", "candor", "openness"] },
        { ja: "融和的な", correct: "conciliatory", incorrect: ["hostile", "aggressive", "confrontational"] }, 
        { ja: "難解な", correct: "esoteric", incorrect: ["common", "simple", "well-known"] }, { ja: "うやうやしい", correct: "obsequious", incorrect: ["arrogant", "domineering", "assertive"] }, 
        { ja: "倹約", correct: "parsimony", incorrect: ["generosity", "extravagance", "wastefulness"] }, { ja: "予言の", correct: "prophetic", incorrect: ["retrospective", "historical", "unseeing"] }, 
        { ja: "休止", correct: "respite", incorrect: ["continuation", "work", "effort"] }, { ja: "神聖な", correct: "sacrosanct", incorrect: ["profane", "unholy", "violable"] }, 
        { ja: "散漫な", correct: "desultory", incorrect: ["focused", "methodical", "systematic"] }, { ja: "悪意のある", correct: "malevolent", incorrect: ["benevolent", "kind", "friendly"] }, 
        { ja: "博識な", correct: "erudite", incorrect: ["ignorant", "uneducated", "simple"] }, { ja: "偽の", correct: "spurious", incorrect: ["authentic", "genuine", "real"] }, 
        { ja: "好戦的な", correct: "pugnacious", incorrect: ["peaceful", "passive", "friendly"] }, { ja: "おしゃべりな", correct: "garrulous", incorrect: ["taciturn", "quiet", "silent"] }
    ]
};
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
const featureDescriptions = {
    speaking: {
        title: "スピーキング練習",
        description: "お手本の音声を聞いてから発音することで、英語特有のリズムやイントネーションを練習します。\n\nAIがあなたの音声を解析し、発音の正確さと話すペース（速さ）を評価してフィードバックを表示します。\n\n録音された自分の声を聞き直すことで、客観的に改善点を見つけることができます。"
    },
    wordquiz: {
        title: "単語クイズ",
        description: "初級から専門家レベルまで、4つの難易度から選べる4択クイズです。\n\n・初級: 英検3級レベル\n・中級: 英検準2級・2級レベル\n・上級: 英検準1級レベル\n・専門家: 英検1級・TOEIC 800+レベル\n\n繰り返し挑戦して、語彙力を強化しましょう。"
    },
    listening: {
        title: "リスニングチャレンジ",
        description: "ネイティブスピーカーによる英語の音声を聞き取り、正確に書き起こす「ディクテーション」の練習です。\n\n聞き取れない部分は何度でも再生できます。細かい冠詞や前置詞まで正確に聞き取る力を養います。"
    },
    reading: {
        title: "読解練習",
        description: "短い英語の文章を読み、その内容に関する質問に答えることで、リーディング力を鍛えます。\n\nクイズ終了後には、英文と日本語訳を並べて確認できるので、文脈や表現の復習に最適です。"
    },
    videochat: {
        title: "ビデオチャット",
        description: "WebRTC技術を使用して、離れた場所にいる相手とリアルタイムで映像と音声をつないで会話ができます。\n\n表示されるトピックについて話したり、フリートークを楽しんだりして、実践的な英会話力を身につけましょう。\n(カメラとマイクの許可が必要です)"
    },
    industry: {
        title: "専門分野別 (Industry Focus)",
        description: "特定の業界（IT, ビジネス, 医療, 金融）に特化した専門用語やフレーズを学習できます。\n\n・フラッシュカード: 重要単語の暗記\n・キーフレーズ: 実践的な例文\n・ミニ記事: 業界ニュースの読解\n\n自分のキャリアや興味に合わせた英語力を身につけましょう。"
    },
    popculture: {
        title: "アニメ・洋楽で学ぶ",
        description: "世界中で愛される日本のアニメや、有名な洋楽の歌詞から英語を学びます。\n\n教科書には載っていない「生きた表現」や「感情のこもった言い回し」を楽しく身につけることができます。"
    }
};
const idiomsData = [
    { idiom: "Break a leg!", meaning: "幸運を祈るよ！/ 頑張って！", description: "舞台に出る役者にかける激励の言葉が由来です。" },
    { idiom: "Bite the bullet.", meaning: "歯を食いしばって耐える", description: "困難な状況に立ち向かうこと。" },
    { idiom: "Piece of cake.", meaning: "朝飯前", description: "とても簡単なこと。" },
    { idiom: "Hit the road.", meaning: "出発する", description: "旅に出る、帰る。" },
    { idiom: "Under the weather.", meaning: "体調が悪い", description: "気分が優れないこと。" },
    // イディオム追加
    { idiom: "Spill the beans", meaning: "秘密を漏らす", description: "豆をこぼす＝秘密をばらす。" },
    { idiom: "Once in a blue moon", meaning: "ごくまれに", description: "めったにないこと。" },
    { idiom: "The ball is in your court", meaning: "次は君の番だ", description: "決定権は相手にある。" },
    { idiom: "Cost an arm and a leg", meaning: "非常に高い", description: "手足を失うほど高価。" },
    { idiom: "Let the cat out of the bag", meaning: "秘密を漏らす", description: "うっかり秘密を言ってしまう。" }
];

// =============================================
//  Industry Focus Data (Extended)
// =============================================
const industryData = {
    it: {
        title: "IT & Tech",
        flashcards: [
            { term: "Latency", meaning: "遅延（時間）", sentence: "We need to reduce the network latency for better performance." },
            { term: "Scalability", meaning: "拡張性", sentence: "Cloud services offer high scalability for growing businesses." },
            { term: "Encryption", meaning: "暗号化", sentence: "End-to-end encryption protects user privacy." },
            { term: "Deployment", meaning: "展開・実装", sentence: "The deployment to the production server was successful." },
            { term: "Algorithm", meaning: 'アルゴリズム', sentence: 'We developed a new search algorithm.' },
            { term: "Backend", meaning: "バックエンド", sentence: "He specializes in backend development using Node.js." },
            { term: "Debugging", meaning: "デバッグ", sentence: "Debugging is an essential part of software development." },
            { term: "Authentication", meaning: "認証", sentence: "Two-factor authentication improves security." }
        ],
        phrases: [
            { 
                scenario: "Daily Stand-up",
                keyphrase: "I'm currently working on...",
                translation: "現在は〜に取り組んでいます",
                scenarioTrans: "毎日のスタンドアップミーティングにて"
            },
            { 
                scenario: "Reporting an Issue",
                keyphrase: "I've encountered a blocker.",
                translation: "進行を妨げる問題（ブロッカー）に遭遇しました",
                scenarioTrans: "進捗報告にて"
            },
            { 
                scenario: "Code Review",
                keyphrase: "Could you walk me through this logic?",
                translation: "このロジックについて説明してもらえますか？",
                scenarioTrans: "コードレビューにて"
            }
        ],
        articles: [
            {
                title: "The Rise of AI Agents",
                content: "Autonomous AI agents are becoming increasingly capable of performing complex tasks without human intervention. Unlike traditional chatbots, these agents can plan, execute, and refine their actions to achieve specific goals, transforming how we interact with software.",
                source: "TechDaily 2024",
                translation: "自律型AIエージェントは、人間の介入なしに複雑なタスクを実行する能力をますます高めています。従来のチャットボットとは異なり、これらのエージェントは特定の目標を達成するために行動を計画、実行、修正することができ、私たちがソフトウェアと対話する方法を変革しています。"
            },
            {
                title: "Zero Trust Security",
                content: "Zero Trust architecture is rapidly becoming the standard for cloud security. Organizations are moving away from perimeter-based defenses to a model where every access request is verified, regardless of where it originates.",
                source: "CyberSec Weekly",
                translation: "ゼロトラストアーキテクチャは、急速にクラウドセキュリティの標準になりつつあります。組織は境界ベースの防御から、アクセス要求がどこから来たかにかかわらず、すべての要求を検証するモデルへと移行しています。"
            }
        ]
    },
    business: {
        title: "Business",
        flashcards: [
            { term: "ROI", meaning: "投資対効果", sentence: "We need to calculate the ROI before approving the budget." },
            { term: "Stakeholder", meaning: "利害関係者", sentence: "It is important to keep all stakeholders informed." },
            { term: "Quarterly", meaning: "四半期ごとの", sentence: "Our quarterly earnings exceeded expectations." },
            { term: "Agenda", meaning: "議題", sentence: "Let's stick to the agenda to save time." },
            { term: "Strategy", meaning: "戦略", sentence: "We are developing a new marketing strategy." }
        ],
        phrases: [
            { 
                scenario: "Negotiation",
                keyphrase: "Is there any room for movement on the price?",
                translation: "価格について交渉の余地はありますか？",
                scenarioTrans: "価格交渉にて"
            },
            { 
                scenario: "Meeting",
                keyphrase: "Let's get the ball rolling.",
                translation: "さあ、始めましょう。",
                scenarioTrans: "会議の開始時"
            },
            { 
                scenario: "Agreement",
                keyphrase: "I think we're on the same page.",
                translation: "私たちの認識は一致していると思います。",
                scenarioTrans: "合意形成時"
            }
        ],
        articles: [
            {
                title: "Remote Work Trends",
                content: "Many companies are settling into a permanent hybrid work model. This approach balances the flexibility of working from home with the collaborative benefits of in-person interaction, though it presents new challenges for company culture.",
                source: "BizWorld",
                translation: "多くの企業が恒久的なハイブリッドワークモデルに落ち着きつつあります。このアプローチは、在宅勤務の柔軟性と対面での交流による協力的なメリットのバランスをとっていますが、企業文化にとって新たな課題も提示しています。"
            }
        ]
    },
    medical: {
        title: "Medical",
        flashcards: [
            { term: "Diagnosis", meaning: "診断", sentence: "Early diagnosis is key to effective treatment." },
            { term: "Prescription", meaning: "処方箋", sentence: "The doctor wrote a prescription for antibiotics." },
            { term: "Symptom", meaning: "症状", sentence: "Common symptoms include fever and cough." },
            { term: "Chronic", meaning: "慢性の", sentence: "He suffers from chronic back pain." },
            { term: "Vaccine", meaning: "ワクチン", sentence: "The new vaccine proved to be highly effective." }
        ],
        phrases: [
            { 
                scenario: "Consultation",
                keyphrase: "On a scale of 1 to 10, how would you rate your pain?",
                translation: "1から10の段階で言うと、痛みはどれくらいですか？",
                scenarioTrans: "患者の診察にて"
            },
            { 
                scenario: "Treatment",
                keyphrase: "This medication may cause some side effects.",
                translation: "この薬はいくつかの副作用を引き起こす可能性があります。",
                scenarioTrans: "治療説明にて"
            }
        ],
        articles: [
            {
                title: "Gene Therapy Breakthroughs",
                content: "Recent breakthroughs in CRISPR technology have opened new possibilities for treating genetic disorders. Clinical trials are showing promising results for conditions previously thought untreatable, offering hope to millions.",
                source: "MedJournal",
                translation: "CRISPR技術における最近の進歩は、遺伝性疾患の治療に新たな可能性を切り開きました。臨床試験では、以前は治療不可能と考えられていた病状に対して有望な結果が示されており、何百万人もの人々に希望を与えています。"
            }
        ]
    },
    finance: {
        title: "Finance",
        flashcards: [
            { term: "Asset", meaning: "資産", sentence: "The company has significant assets in real estate." },
            { term: "Liability", meaning: "負債", sentence: "Reducing liabilities is our primary goal this year." },
            { term: "Dividend", meaning: "配当", sentence: "Shareholders received a dividend of $2 per share." },
            { term: "Compliance", meaning: "法令遵守", sentence: "We must ensure strict compliance with new regulations." },
            { term: "Audit", meaning: "監査", sentence: "The annual audit will begin next week." }
        ],
        phrases: [
            { 
                scenario: "Investment",
                keyphrase: "It's crucial to diversify your portfolio.",
                translation: "ポートフォリオを分散させることが極めて重要です。",
                scenarioTrans: "投資アドバイスにて"
            },
            { 
                scenario: "Contract",
                keyphrase: "Please review the terms and conditions carefully.",
                translation: "利用規約を注意深く確認してください。",
                scenarioTrans: "契約確認にて"
            }
        ],
        articles: [
            {
                title: "Cryptocurrency Regulation",
                content: "Governments worldwide are intensifying efforts to regulate cryptocurrency markets. The focus is on preventing money laundering and ensuring consumer protection without stifling innovation in the fintech sector.",
                source: "FinanceDaily",
                translation: "世界各国の政府は、暗号資産市場の規制強化に力を入れています。焦点は、フィンテック分野のイノベーションを阻害することなく、マネーロンダリングを防止し、消費者保護を確保することにあります。"
            }
        ]
    }
};

// =============================================
//  Pop Culture Data (NEW & EXPANDED)
// =============================================
const popCultureData = {
    anime: [
        // Original
        { en: "I'm gonna be the Pirate King!", ja: "海賊王に俺はなる！", source: "One Piece", note: "'gonna' は 'going to' の口語的な省略形です。" },
        { en: "I am the bone of my sword.", ja: "体は剣で出来ている。", source: "Fate/stay night", note: "詩的な表現。'bone' はここでは「骨子」「本質」といった意味合い。" },
        { en: "If you give up, that's when the game is over.", ja: "あきらめたらそこで試合終了ですよ。", source: "Slam Dunk", note: "条件節(If...)を使った有名な格言。" },
        { en: "I'm not gonna run away, I never go back on my word!", ja: "逃げたりしねぇ…！俺は自分の言葉を曲げねぇ！", source: "Naruto", note: "'go back on one's word' で「約束を破る」「前言撤回する」という意味。" },
        { en: "In the name of the moon, I will punish you!", ja: "月にかわっておしおきよ！", source: "Sailor Moon", note: "'In the name of ~' は「〜の名において」という決まり文句。" },
        // Added
        { en: "Set your heart ablaze.", ja: "心を燃やせ。", source: "Demon Slayer: Mugen Train", note: "'ablaze' は「燃え上がって」「輝いて」という意味の形容詞。" },
        { en: "If you don't fight, you can't win.", ja: "戦わなければ勝てない。", source: "Attack on Titan", note: "シンプルな条件文。戦う意志の強さを表しています。" },
        { en: "Once you've met someone you never really forget them.", ja: "一度あったことは忘れないものさ。", source: "Spirited Away", note: "記憶の奥底には残っているという、千と千尋の神隠しの名言。" },
        { en: "Try laughing. Then whatever scares you will go away.", ja: "笑ってみな。そうすれば怖いものは消えていくよ。", source: "My Neighbor Totoro", note: "'whatever' は「〜するものは何でも」という意味の関係代名詞。" },
        { en: "A lesson without pain is meaningless.", ja: "痛みを伴わない教訓には意義がない。", source: "Fullmetal Alchemist", note: "等価交換の法則を説く深いセリフ。" },
        { en: "I want to change the world.", ja: "僕は新世界の神になる。", source: "Death Note", note: "意訳ですが、英語ではシンプルに「世界を変えたい」と表現されることが多いです。" },
        { en: "I don’t want to regret the way I lived.",ja: "生き様で後悔はしたくない。",source: "Jujutsu Kaisen",note: "want to + 動詞原形。the way I lived は「自分の生き方」を包括的に表す定番表現。"},
        { en: "I want to know! What “I love you” means… I want to know.",ja: "知りたいのです！『あいしてる』を……知りたいのです。",source: "Violet Evergarden",note: "What “I love you” means は間接疑問文。感情語をそのまま引用符で扱うことで、言葉そのものへの問いになっている。"},
        { en: "Even a low-class warrior can surpass an elite, if he works hard enough.",ja: "落ちこぼれだって必死で努力すりゃ、エリートを超えることがあるかもよ。",source: "Dragon Ball Z (Son Goku)",note: "Even ～ can ～ で「〜でさえ〜できるかもしれない」。if he works hard enough は条件を強調する定型表現。"},
        { en: "It's over 9000!", ja: "戦闘力たったの5か…ゴミめ。（※英語圏では9000以上！）", source: "Dragon Ball Z", note: "英語圏のネットミームとして有名な誤訳（原作は8000）。" },
        { en: "Resolve is carving out your path through the darkness of the wilderness!!", ja: "『覚悟』とは！！暗闇の荒野に！！進むべき道を切り開く事だッ！", source: "JoJo's Bizarre Adventure", note: "Resolve を主語にした定義文。比喩（darkness / wilderness）で精神性を描くジョジョ特有の演説調。"},
        { en: "There are times when you have to do something even when you know it’s impossible.", ja: "無理だと分かってても、やらなきゃなんねー時だってあるんだ。", source: "Dragon Ball", note: "There are times when ～ で一般論を提示しつつ、even when で逆境条件を重ねる名文。" },
        { en: "Someone who doesn’t believe in themselves has no value in making an effort!!!", ja: "自分を信じない奴になんかに、努力する価値は無い!!!", source: "Naruto", note: "関係代名詞 Someone who ～ で人物を定義し、has no value in ～ で価値の否定を強調する断言表現。" }

    ],
    music: [
        // Original
        { en: "Let it be.", ja: "あるがままに / なすがままに", source: "The Beatles - Let It Be", note: "使役動詞 let + 目的語 + 原形不定詞。「それを（it）あるがままの状態（be）にさせておけ」という意味。" },
        { en: "I will always love you.", ja: "いつまでもあなたを愛し続けるでしょう", source: "Whitney Houston - I Will Always Love You", note: "未来の意志を表す 'will' と頻度を表す副詞 'always' の組み合わせ。" },
        { en: "We are the champions, my friends.", ja: "私たちはチャンピオンだ、友よ", source: "Queen - We Are The Champions", note: "勝利のアンセムとして世界中で歌われるフレーズ。" },
        { en: "Shake it off.", ja: "気にしない / 振り払う", source: "Taylor Swift - Shake It Off", note: "嫌なことや批判を「振り払う」という意味のスラング。" },
        { en: "Imagine there's no heaven.", ja: "想像してごらん、天国なんてないんだと", source: "John Lennon - Imagine", note: "仮定法ではなく、命令形で「想像してごらん」と語りかけています。" },
        // Added
        { en: "If you want to make the world a better place, take a look at yourself.", ja: "世界を良くしたいなら、まず自分自身を見つめ直せ", source: "Michael Jackson - Man in the Mirror", note: "変革は自分から、という強いメッセージ。" },
        { en: "Let it go, let it go. Can't hold it back anymore.", ja: "ありのままで。もうこれ以上抑えられない", source: "Disney - Frozen", note: "'hold back' で「抑える」「隠す」という意味。" },
        { en: "All you need is love.", ja: "愛こそすべて", source: "The Beatles - All You Need Is Love", note: "文法的には「あなたが必要とするすべては、愛である」。" },
        { en: "I'm in love with the shape of you.", ja: "君のその姿に恋してるんだ", source: "Ed Sheeran - Shape of You", note: "'be in love with' で「〜に恋している」。" },
        { en: "Hello from the other side.", ja: "向こう側から、ハロー", source: "Adele - Hello", note: "別れた相手への電話。「向こう側」は物理的な距離や心理的な距離を表します。" },
        { en: "Don't stop believin'.", ja: "信じることをやめないで", source: "Journey - Don't Stop Believin'", note: "否定命令文。希望を持ち続けることの大切さを歌っています。" },
        { en: "Just the way you are.", ja: "そのままの君でいて", source: "Bruno Mars - Just the Way You Are", note: "「君のありのままの姿」という意味。" }
    ]
};

// =============================================
//  学習記録 & ダッシュボード機能
// =============================================
const STORAGE_KEY = 'englishParkData';

function loadLearningData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    } else {
        return {
            lastStudyDate: null,
            streak: 0,
            totalSessions: 0,
            scores: {
                beginner: 0,
                intermediate: 0,
                advanced: 0,
                expert: 0
            },
            badges: []
        };
    }
}

function saveLearningData(updatedData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
}

function recordSession(scoreData) {
    let data = loadLearningData();
    const today = new Date().toDateString();

    if (data.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (data.lastStudyDate === yesterday.toDateString()) {
            data.streak++;
        } else {
            data.streak = 1;
        }
        data.lastStudyDate = today;
    }

    data.totalSessions++;

    if (scoreData && scoreData.type === 'wordquiz') {
        if (scoreData.score > (data.scores[scoreData.level] || 0)) {
            data.scores[scoreData.level] = scoreData.score;
        }
    }

    checkBadges(data);
    saveLearningData(data);
}

function checkBadges(data) {
    const newBadges = [];
    if (data.totalSessions >= 1 && !data.badges.includes('first_step')) {
        newBadges.push('first_step');
        alert("🎉 バッジ獲得: はじめの一歩！");
    }
    if (data.streak >= 3 && !data.badges.includes('streak_3')) {
        newBadges.push('streak_3');
        alert("🔥 バッジ獲得: 3日連続学習！");
    }
    if (newBadges.length > 0) {
        data.badges.push(...newBadges);
    }
}

function updateDashboardUI() {
    const data = loadLearningData();
    document.getElementById('dashboard-streak').textContent = `${data.streak} Day Streak`;
    document.getElementById('dashboard-total-sessions').textContent = `${data.totalSessions}回`;
    document.getElementById('dashboard-last-date').textContent = data.lastStudyDate || '未実施';
    document.getElementById('best-score-beginner').textContent = data.scores.beginner || '-';
    document.getElementById('best-score-intermediate').textContent = data.scores.intermediate || '-';
    document.getElementById('best-score-advanced').textContent = data.scores.advanced || '-';
    document.getElementById('best-score-expert').textContent = data.scores.expert || '-';

    const badgeContainer = document.getElementById('badges-container');
    badgeContainer.innerHTML = '';
    const badgeDefinitions = {
        'first_step': { icon: '🌱', name: 'はじめの一歩' },
        'streak_3': { icon: '🔥', name: '三日坊主卒業' },
        'word_master': { icon: '👑', name: '単語マスター' }
    };

    if (data.badges.length === 0) {
        badgeContainer.innerHTML = '<p class="no-badges">まだバッジはありません。学習を始めましょう！</p>';
    } else {
        data.badges.forEach(badgeId => {
            const badge = badgeDefinitions[badgeId];
            if (badge) {
                const badgeEl = document.createElement('div');
                badgeEl.className = 'badge';
                badgeEl.innerHTML = `<div class="badge-icon">${badge.icon}</div><div class="badge-name">${badge.name}</div>`;
                badgeContainer.appendChild(badgeEl);
            }
        });
    }
}


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
    try {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
            setTimeout(populateVoiceList, 100);
            return;
        }
        usVoice = voices.find(voice => voice.lang === 'en-US') || voices.find(voice => voice.lang.startsWith('en-'));
    } catch (e) {}
}
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(text, callback) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (!usVoice) populateVoiceList();
    if (usVoice) utterance.voice = usVoice;
    utterance.lang = 'en-US';
    if (callback) utterance.onend = callback;
    window.speechSynthesis.speak(utterance);
}

// =============================================
//  画面管理 & モーダル制御
// =============================================
const splashScreen = document.getElementById('splash-screen');
const enterAppButton = document.getElementById('enter-app-button');
const infoModal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-modal');

document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const featureKey = btn.dataset.feature;
        const data = featureDescriptions[featureKey];
        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            infoModal.classList.remove('hidden');
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    infoModal.classList.add('hidden');
});
window.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.add('hidden');
    }
});


const homeScreen = document.getElementById('home-screen');
const speakingPracticeScreen = document.getElementById('speaking-practice-screen');
const wordQuizScreen = document.getElementById('word-quiz-screen');
const quizLevelScreen = document.getElementById('quiz-level-screen');
const listeningChallengeScreen = document.getElementById('listening-challenge-screen');
const readingQuizScreen = document.getElementById('reading-quiz-screen');
const videoChatScreen = document.getElementById('video-chat-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
// Industry Focus Screens
const industrySelectionScreen = document.getElementById('industry-selection-screen');
const industryModuleScreen = document.getElementById('industry-module-screen');
const industryFlashcardScreen = document.getElementById('industry-flashcard-screen');
const industryPhraseScreen = document.getElementById('industry-phrase-screen');
const industryArticleScreen = document.getElementById('industry-article-screen');
// Pop Culture Screens
const popCultureMenuScreen = document.getElementById('pop-culture-menu-screen');
const popCultureQuizScreen = document.getElementById('pop-culture-quiz-screen');


const startSpeakingPracticeButton = document.getElementById('start-speaking-practice');
const goToQuizLevelsButton = document.getElementById('go-to-quiz-levels');
const startListeningChallengeButton = document.getElementById('start-listening-challenge');
const startReadingQuizButton = document.getElementById('start-reading-quiz');
const startVideoChatButton = document.getElementById('start-video-chat');
const startIndustryFocusButton = document.getElementById('start-industry-focus');
const goToDashboardButton = document.getElementById('go-to-dashboard');
const startPopCultureButton = document.getElementById('start-pop-culture');

const backButtonSpeaking = document.getElementById('backButtonSpeaking');
const backButtonFromLevels = document.getElementById('backButtonFromLevels');
const backButtonFromQuiz = document.getElementById('backButtonFromQuiz');
const backButtonFromListening = document.getElementById('backButtonFromListening');
const backButtonFromReading = document.getElementById('backButtonFromReading');
const backButtonFromVideo = document.getElementById('backButtonFromVideo');
const backButtonFromDashboard = document.getElementById('backButtonFromDashboard');
const backButtonFromIndustry = document.getElementById('backButtonFromIndustry');
const backButtonFromModule = document.getElementById('backButtonFromModule');
const backButtonFromIndFlashcard = document.getElementById('backButtonFromIndFlashcard');
const backButtonFromIndPhrase = document.getElementById('backButtonFromIndPhrase');
const backButtonFromIndArticle = document.getElementById('backButtonFromIndArticle');
const backButtonFromPopMenu = document.getElementById('backButtonFromPopMenu');
const backButtonFromPopQuiz = document.getElementById('backButtonFromPopQuiz');


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
    if (screenToShow === dashboardScreen) {
        updateDashboardUI();
    }
}

enterAppButton.addEventListener('click', () => {
    // スプラッシュから遷移するときにもイディオムを表示
    displayIdiomOfTheDay();
    showScreen(homeScreen);
});

startSpeakingPracticeButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return; 
    showScreen(speakingPracticeScreen); initializeSpeakingPractice(); 
});
goToQuizLevelsButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return;
    showScreen(quizLevelScreen); 
});
startListeningChallengeButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return;
    showScreen(listeningChallengeScreen); startNewListeningChallenge(); 
});
startReadingQuizButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return;
    showScreen(readingQuizScreen); startNewReadingQuiz(); 
});
startVideoChatButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return;
    const randomIndex = Math.floor(Math.random() * conversationTopics.length);
    document.getElementById('video-topic').textContent = conversationTopics[randomIndex];
    document.getElementById('video-status').textContent = "「Start Call」を押して、カメラとマイクを許可してください。";
    showScreen(videoChatScreen);
});
startIndustryFocusButton.addEventListener('click', (e) => {
    if(e.target.classList.contains('info-btn')) return;
    showScreen(industrySelectionScreen);
});
goToDashboardButton.addEventListener('click', () => showScreen(dashboardScreen));
startPopCultureButton.addEventListener('click', (e) => {
    if(e.target.classList.contains('info-btn')) return;
    showScreen(popCultureMenuScreen);
});

backButtonSpeaking.addEventListener('click', () => showScreen(homeScreen));
backButtonFromLevels.addEventListener('click', () => showScreen(homeScreen));
backButtonFromQuiz.addEventListener('click', () => showScreen(quizLevelScreen));
backButtonFromListening.addEventListener('click', () => showScreen(homeScreen));
backButtonFromReading.addEventListener('click', () => showScreen(homeScreen));
backButtonFromVideo.addEventListener('click', () => { if (typeof peerConnection !== 'undefined' && peerConnection) { hangUp(); } showScreen(homeScreen); });
backButtonFromDashboard.addEventListener('click', () => showScreen(homeScreen));
backButtonFromIndustry.addEventListener('click', () => showScreen(homeScreen));
backButtonFromModule.addEventListener('click', () => showScreen(industrySelectionScreen));
backButtonFromIndFlashcard.addEventListener('click', () => showScreen(industryModuleScreen));
backButtonFromIndPhrase.addEventListener('click', () => showScreen(industryModuleScreen));
backButtonFromIndArticle.addEventListener('click', () => showScreen(industryModuleScreen));
backButtonFromPopMenu.addEventListener('click', () => showScreen(homeScreen));
backButtonFromPopQuiz.addEventListener('click', () => showScreen(popCultureMenuScreen));


// =============================================
//  スピーキング練習ロジック
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
                         userRecordingPlayer.src = ''; 
                    }
                };
                mediaRecorder.onerror = (event) => {
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
                 statusElement.textContent = `初期化エラー: ${err.message}`;
                 [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
            }
        })
        .catch(err => {
            statusElement.textContent = `エラー: マイクへのアクセス許可が必要です (${err.message})。`;
            [listenButton, startButton, stopButton, nextButton].forEach(btn => btn.disabled = true);
        });
}

function handleRecognitionResult(event) {
    if (speakingPracticeScreen.style.display !== 'block') return; 
    userSpeechEndTime = performance.now();
    const transcript = event.results[0][0].transcript;
    generateCombinedFeedback(transcript);
    recordSession(); 
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
    if (!mediaRecorder || !recognition) {
        statusElement.textContent = "エラー: 録音/認識機能が準備できていません。";
        return;
    }
    try {
        resetResults(); 
        mediaRecorder.start();
        recognition.start();
        statusElement.textContent = "話してください...";
        statusElement.classList.add('recording'); 
        startButton.disabled = true; 
        stopButton.disabled = false; 
    } catch (err) {
        statusElement.textContent = `開始エラー: ${err.message}`;
        startButton.disabled = false; 
        stopButton.disabled = true;
    }
});

stopButton.addEventListener('click', () => {
     try {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }
        if (recognition) {
            recognition.stop(); 
        }
    } catch (err) {
        statusElement.textContent = `停止エラー: ${err.message}`;
        startButton.disabled = false;
        stopButton.disabled = true;
        statusElement.classList.remove('recording');
    }
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
    if (modelAudioDuration > 0 && userSpeechDuration > 0) {
        const paceRatio = userSpeechDuration / modelAudioDuration;
        if (paceRatio > 1.4) {
            paceFeedback = "🐢 <strong>ペース:</strong> もう少しテンポを上げると、より自然なリズムになります。";
        } else if (paceRatio < 0.8) {
            paceFeedback = "🐇 <strong>ペース:</strong> 少し早口かもしれません。焦らずゆっくり話すことを意識しましょう。";
        } else {
            paceFeedback = "👍 <strong>ペース:</strong> 素晴らしい！お手本に近い自然なスピードで話せています。";
        }
        fullFeedback += `<div class="feedback-pace-section">${paceFeedback}</div>`;
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

// クイズレベル選択 (Industry Focus用も兼ねるため、IDで識別)
document.querySelectorAll('#quiz-level-screen .level-card').forEach(card => {
    card.addEventListener('click', () => {
        currentQuizLevel = card.dataset.level;
        startNewQuizSet();
    });
});

function shuffleArray(array) { return [...array].sort(() => Math.random() - 0.5); }
function startNewQuizSet() {
    const fullQuizData = quizDataSets[currentQuizLevel];
    if (!fullQuizData || fullQuizData.length === 0) {
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
    recordSession({ type: 'wordquiz', level: currentQuizLevel, score: quizScore });
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
        recordSession();
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
        document.getElementById('review-passage-en').textContent = currentReadingData.passage;
        document.getElementById('review-passage-ja').textContent = currentReadingData.translation;
        recordSession();
    } else {
        readingFinalScore.textContent = "スコアの計算に問題がありました。"; // Fallback message
    }
}

readingRestartButton.addEventListener('click', startNewReadingQuiz);


// =============================================
//  Industry Focus Logic (New)
// =============================================
let indCurrentCategoryKey = null;
let indCurrentIndex = 0;

function selectIndustry(key) {
    indCurrentCategoryKey = key;
    const data = industryData[key];
    document.getElementById('industry-title-display').textContent = data.title;
    showScreen(industryModuleScreen);
}

function startIndustryModule(moduleType) {
    indCurrentIndex = 0;
    const data = industryData[indCurrentCategoryKey];
    
    if (moduleType === 'flashcards') {
        document.getElementById('ind-flashcard-header').textContent = `${data.title} - Flashcards`;
        updateIndFlashcardUI();
        showScreen(industryFlashcardScreen);
    } else if (moduleType === 'phrases') {
        document.getElementById('ind-phrase-header').textContent = `${data.title} - Key Phrases`;
        updateIndPhraseUI();
        showScreen(industryPhraseScreen);
    } else if (moduleType === 'articles') {
        document.getElementById('ind-article-header').textContent = `${data.title} - Mini Articles`;
        updateIndArticleUI();
        showScreen(industryArticleScreen);
    }
}

// -- Flashcards --
function updateIndFlashcardUI() {
    const list = industryData[indCurrentCategoryKey].flashcards;
    const item = list[indCurrentIndex];
    const inner = document.getElementById('ind-flashcard-inner');
    inner.classList.remove('flipped'); 

    setTimeout(() => {
        document.getElementById('ind-card-front').textContent = item.term;
        document.getElementById('ind-card-back-meaning').textContent = item.meaning;
        document.getElementById('ind-card-back-sentence').textContent = `"${item.sentence}"`;
        document.getElementById('ind-card-progress').textContent = `${indCurrentIndex + 1} / ${list.length}`;
    }, 200);
}
function flipIndCard() {
    document.getElementById('ind-flashcard-inner').classList.toggle('flipped');
}
function nextIndCard() {
    const list = industryData[indCurrentCategoryKey].flashcards;
    if (indCurrentIndex < list.length - 1) indCurrentIndex++;
    else indCurrentIndex = 0;
    updateIndFlashcardUI();
}
function prevIndCard() {
    const list = industryData[indCurrentCategoryKey].flashcards;
    if (indCurrentIndex > 0) indCurrentIndex--;
    else indCurrentIndex = list.length - 1;
    updateIndFlashcardUI();
}

// -- Phrases --
function updateIndPhraseUI() {
    const list = industryData[indCurrentCategoryKey].phrases;
    const item = list[indCurrentIndex];
    
    document.getElementById('ind-phrase-scenario').textContent = item.scenario;
    document.getElementById('ind-scenario-trans').textContent = item.scenarioTrans;
    document.getElementById('ind-phrase-text').textContent = item.keyphrase;
    
    document.getElementById('ind-phrase-trans-container').classList.add('hidden');
    document.getElementById('ind-scenario-trans').classList.add('hidden');
    
    document.getElementById('ind-phrase-trans').textContent = item.translation;
    document.getElementById('ind-phrase-progress').textContent = `${indCurrentIndex + 1} / ${list.length}`;
}
function toggleIndPhraseTrans() {
    document.getElementById('ind-phrase-trans-container').classList.toggle('hidden');
    document.getElementById('ind-scenario-trans').classList.toggle('hidden');
}
function nextIndPhrase() {
    const list = industryData[indCurrentCategoryKey].phrases;
    if (indCurrentIndex < list.length - 1) indCurrentIndex++;
    else indCurrentIndex = 0;
    updateIndPhraseUI();
}

// -- Articles --
function updateIndArticleUI() {
    const list = industryData[indCurrentCategoryKey].articles;
    const item = list[indCurrentIndex];
    
    document.getElementById('ind-article-title').textContent = item.title;
    document.getElementById('ind-article-content').textContent = item.content;
    document.getElementById('ind-article-source').textContent = item.source;
    
    document.getElementById('ind-article-trans-container').classList.add('hidden');
    document.getElementById('ind-article-trans').textContent = item.translation;
    
    document.getElementById('ind-article-progress').textContent = `${indCurrentIndex + 1} / ${list.length}`;
}
function toggleIndArticleTrans() {
    document.getElementById('ind-article-trans-container').classList.toggle('hidden');
}
function nextIndArticle() {
    const list = industryData[indCurrentCategoryKey].articles;
    if (indCurrentIndex < list.length - 1) indCurrentIndex++;
    else indCurrentIndex = 0;
    updateIndArticleUI();
}


// =============================================
//  Pop Culture Logic (New)
// =============================================
let popQuizGenre = null;
let popQuizIndex = 0;
let popQuizScore = 0;
let popQuizQuestions = [];

function startPopQuiz(genre) {
    popQuizGenre = genre;
    popQuizIndex = 0;
    popQuizScore = 0;
    
    const sourceData = popCultureData[genre];
    if(!sourceData) return;
    
    popQuizQuestions = shuffleArray(sourceData).slice(0, 5); 
    
    showScreen(popCultureQuizScreen);
    document.getElementById('pop-quiz-end-screen').style.display = 'none';
    document.getElementById('pop-quiz-area').style.display = 'block';
    document.getElementById('pop-quiz-feedback').classList.add('hidden');
    
    showPopQuestion();
}

function showPopQuestion() {
    if (popQuizIndex >= popQuizQuestions.length) {
        endPopQuiz();
        return;
    }
    
    const qData = popQuizQuestions[popQuizIndex];
    document.getElementById('pop-quiz-counter').textContent = `Question ${popQuizIndex + 1} / ${popQuizQuestions.length}`;
    document.getElementById('pop-quiz-score').textContent = `Score: ${popQuizScore}`;
    document.getElementById('pop-quiz-question').textContent = `"${qData.en}"`;
    
    const feedbackArea = document.getElementById('pop-quiz-feedback');
    feedbackArea.classList.add('hidden');
    
    const optionsContainer = document.getElementById('pop-quiz-options');
    optionsContainer.innerHTML = '';
    
    const allData = popCultureData[popQuizGenre];
    const dummies = allData.filter(d => d.ja !== qData.ja).map(d => d.ja);
    const shuffledDummies = shuffleArray(dummies).slice(0, 3);
    const options = shuffleArray([qData.ja, ...shuffledDummies]);
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt;
        btn.onclick = () => handlePopAnswer(opt, qData);
        optionsContainer.appendChild(btn);
    });
}

function handlePopAnswer(selected, qData) {
    const isCorrect = selected === qData.ja;
    const btns = document.querySelectorAll('#pop-quiz-options .quiz-option-btn');
    
    btns.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === qData.ja) btn.classList.add('correct-answer');
        if (!isCorrect && btn.textContent === selected) btn.classList.add('incorrect-answer');
    });

    const feedbackArea = document.getElementById('pop-quiz-feedback');
    const title = document.getElementById('pop-feedback-title');
    
    if (isCorrect) {
        popQuizScore++;
        title.textContent = "Correct! 🎉";
        title.className = "correct-feedback";
    } else {
        title.textContent = "Nice try!";
        title.className = "incorrect-feedback";
    }

    document.getElementById('pop-feedback-source').textContent = `Source: ${qData.source}`;
    document.getElementById('pop-feedback-note').textContent = qData.note;
    feedbackArea.classList.remove('hidden');

    document.getElementById('pop-next-btn').onclick = () => {
        popQuizIndex++;
        showPopQuestion();
    };
}

function endPopQuiz() {
    document.getElementById('pop-quiz-area').style.display = 'none';
    document.getElementById('pop-quiz-end-screen').style.display = 'block';
    document.getElementById('pop-final-score').textContent = `${popQuizQuestions.length}問中 ${popQuizScore}問 正解！`;
    recordSession();
}

document.getElementById('pop-restart-button').addEventListener('click', () => {
    startPopQuiz(popQuizGenre);
});


// =============================================
//  ビデオチャットロジック (WebRTC実装 - 自動マッチング版)
// =============================================
const startCallBtn = document.getElementById('start-call-btn');
const endCallBtn = document.getElementById('end-call-btn');
const switchCameraBtn = document.getElementById('switch-camera-btn');
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const videoStatus = document.getElementById('video-status');

let peerConnection;
let localStream;
let remoteStream;
let socket;
let currentFacingMode = 'user'; 

const stunServers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', hangUp);
if(switchCameraBtn) switchCameraBtn.addEventListener('click', switchCamera); 

async function startCall() {
    if (SIGNALING_SERVER_URL.includes("YOUR-REPLIT-URL-HERE")) {
        showToast("サーバーURLが未設定です。script.jsを確認してください。", 'error');
        return;
    }

    startCallBtn.disabled = true;
    endCallBtn.disabled = false;
    if(switchCameraBtn) switchCameraBtn.disabled = false; 
    videoStatus.textContent = "カメラとマイクを起動中..."; 

    try {
        try {
            localStream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: currentFacingMode }, 
                audio: true 
            });
        } catch(e) {
            console.warn("Camera failed, trying audio only");
             localStream = await navigator.mediaDevices.getUserMedia({ 
                video: false, 
                audio: true 
            });
            videoStatus.textContent = "カメラが見つかりません。音声のみで接続します...";
        }
        
        if(localStream.getVideoTracks().length > 0) {
            localVideo.srcObject = localStream;
        }
    } catch (err) {
        console.error("getUserMedia error:", err);
        startCallBtn.disabled = false;
        endCallBtn.disabled = true;
        if(switchCameraBtn) switchCameraBtn.disabled = true;
        return;
    }

    videoStatus.textContent = "マッチング中...";

    try {
        socket = new WebSocket(SIGNALING_SERVER_URL); 
    } catch (err) {
        videoStatus.textContent = "サーバー接続エラー。";
        startCallBtn.disabled = false;
        endCallBtn.disabled = true;
        if(switchCameraBtn) switchCameraBtn.disabled = true;
        return;
    }

    socket.onopen = () => {
        // ▼▼▼ 自動マッチングのため、room指定なしで送信 ▼▼▼
        socket.send(JSON.stringify({ type: 'join' }));
    };

    socket.onmessage = async (message) => {
        const data = JSON.parse(message.data);
        console.log('Signal:', data);

        try {
            switch (data.type) {
                case 'joined':
                    // 自動で割り当てられた部屋IDが入っている
                    videoStatus.textContent = "待機中... 相手を探しています";
                    createPeerConnection();
                    break;
                case 'user-joined':
                    videoStatus.textContent = "相手が見つかりました！接続中...";
                    createPeerConnection(); 
                    const offer = await peerConnection.createOffer();
                    await peerConnection.setLocalDescription(offer);
                    socket.send(JSON.stringify({ type: 'offer', sdp: peerConnection.localDescription }));
                    break;
                case 'offer':
                    videoStatus.textContent = "接続リクエストを受信...";
                    createPeerConnection(); 
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
                    const answer = await peerConnection.createAnswer();
                    await peerConnection.setLocalDescription(answer);
                    socket.send(JSON.stringify({ type: 'answer', sdp: peerConnection.localDescription }));
                    break;
                case 'answer':
                    videoStatus.textContent = "接続完了！通話を開始します";
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
                    break;
                case 'candidate':
                    if (peerConnection && data.candidate) {
                        await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
                    }
                    break;
                case 'user-left':
                    videoStatus.textContent = "相手が退出しました。通話を終了します。";
                    hangUp("相手が退出しました。"); 
                    break;
                case 'error':
                    videoStatus.textContent = `エラー: ${data.message}`;
                    break;
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    // ... (onclose, onerror, switchCamera, createPeerConnection, hangUp は変更なし) ...
    // (省略せず元のコードを使ってください)
    socket.onclose = (event) => {
        let msg = "通話を終了しました。";
        if (event.code !== 1000 && event.code !== 1005) {
            msg = `サーバーから切断されました (Code: ${event.code})`;
        }
        hangUp(msg);
        recordSession();
    };

    socket.onerror = (err) => {
        videoStatus.textContent = "サーバー接続エラー";
    };
}

// ... (残りの関数は以前のまま) ...

async function switchCamera() {
    if (!localStream) return;
    currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    localStream.getVideoTracks().forEach(track => track.stop());
    try {
        const newStream = await navigator.mediaDevices.getUserMedia({
            audio: true, video: { facingMode: currentFacingMode }
        });
        localVideo.srcObject = newStream;
        if (peerConnection) {
            const videoTrack = newStream.getVideoTracks()[0];
            const sender = peerConnection.getSenders().find(s => s.track.kind === 'video');
            if (sender) sender.replaceTrack(videoTrack);
            const audioTrack = newStream.getAudioTracks()[0];
            const audioSender = peerConnection.getSenders().find(s => s.track.kind === 'audio');
            if (audioSender) audioSender.replaceTrack(audioTrack);
        }
        localStream = newStream;
    } catch (err) {
        console.error("Camera switch error:", err);
    }
}

function createPeerConnection() {
    if (peerConnection) return; 
    try {
        peerConnection = new RTCPeerConnection(stunServers);
        peerConnection.ontrack = (event) => {
            if (!remoteStream) remoteStream = new MediaStream();
            event.streams[0].getTracks().forEach(track => remoteStream.addTrack(track));
            remoteVideo.srcObject = remoteStream; 
        };
        peerConnection.onicecandidate = (event) => {
            if (event.candidate && socket && socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({ type: 'candidate', candidate: event.candidate }));
            }
        };
        peerConnection.oniceconnectionstatechange = () => {
            if (peerConnection.iceConnectionState === 'failed' || peerConnection.iceConnectionState === 'disconnected' || peerConnection.iceConnectionState === 'closed') {
                console.log("ICE Connection State:", peerConnection.iceConnectionState);
            }
        };
        if (localStream) {
            localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
        }
    } catch (err) {
        console.error("Error creating PeerConnection:", err);
    }
}

function hangUp(message) {
    if (message) videoStatus.textContent = message;
    else if (videoStatus.textContent !== "通話を終了しました。" && !videoStatus.textContent.includes("エラー")) videoStatus.textContent = "通話を終了しました。";
    
    if (peerConnection) { peerConnection.close(); peerConnection = null; }
    if (localStream) { localStream.getTracks().forEach(track => track.stop()); localStream = null; }
    if (remoteStream) { remoteStream.getTracks().forEach(track => track.stop()); remoteStream = null; }
    if (socket) { socket.onclose = null; socket.close(); socket = null; }
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
    startCallBtn.disabled = false;
    endCallBtn.disabled = true;
    if(switchCameraBtn) switchCameraBtn.disabled = true; 
}

// ... (displayIdiomOfTheDay, DOMContentLoaded などは省略せずそのまま使用) ...
function displayIdiomOfTheDay() {
    try {
        const idiomDateEl = document.getElementById('idiom-date');
        const idiomPhraseEl = document.getElementById('idiom-phrase');
        const idiomMeaningEl = document.getElementById('idiom-meaning');
        const idiomDescriptionEl = document.getElementById('idiom-description');

        if (!idiomDateEl || !idiomPhraseEl || !idiomMeaningEl || !idiomDescriptionEl) return;
         if (!idiomsData || idiomsData.length === 0) { idiomPhraseEl.textContent = "データ読込エラー"; return; }

        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        const dayIndex = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
        const idiomIndex = dayIndex % idiomsData.length;
        const dailyIdiom = idiomsData[idiomIndex];

        idiomDateEl.textContent = `${today.getMonth() + 1}月${today.getDate()}日`;
        idiomPhraseEl.textContent = dailyIdiom.idiom;
        idiomMeaningEl.textContent = dailyIdiom.meaning;
        idiomDescriptionEl.textContent = dailyIdiom.description;
    } catch (e) {
        console.error("Error in displayIdiomOfTheDay:", e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.display = 'flex'; 
        splashScreen.classList.add('active');
        setTimeout(() => {
            if (splashScreen.classList.contains('active')) {
                splashScreen.style.display = 'none';
                splashScreen.classList.remove('active');
                showScreen(homeScreen);
            }
        }, 3000);
    } else { showScreen(homeScreen); }
    displayIdiomOfTheDay();
});

function showToast(message, type = 'info') {
    // ... (省略せずそのまま)
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// =============================================
//  今日のイディオムロジック
// =============================================
function displayIdiomOfTheDay() {
    try {
        console.log("Updating idiom of the day..."); 
        const idiomDateEl = document.getElementById('idiom-date');
        const idiomPhraseEl = document.getElementById('idiom-phrase');
        const idiomMeaningEl = document.getElementById('idiom-meaning');
        const idiomDescriptionEl = document.getElementById('idiom-description');

        if (!idiomDateEl || !idiomPhraseEl || !idiomMeaningEl || !idiomDescriptionEl) {
            console.warn("Idiom elements not found in DOM.");
            return; 
        }
         if (!idiomsData || idiomsData.length === 0) {
            console.error("Idioms data is empty.");
            idiomPhraseEl.textContent = "データ読込エラー";
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
        console.log("Idiom updated:", dailyIdiom.idiom);
    } catch (e) {
        console.error("Error in displayIdiomOfTheDay:", e);
    }
}

// 読み込み完了時だけでなく、スクリプト読み込み直後にも実行を試みる
displayIdiomOfTheDay();

// DOMContentLoadedでも実行（念のため）
document.addEventListener('DOMContentLoaded', () => {
    // 画面初期化（すべて非表示）
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });

    // スプラッシュスクリーン表示
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.display = 'flex'; 
        splashScreen.classList.add('active');

        // 3秒後に自動遷移
        setTimeout(() => {
            if (splashScreen.classList.contains('active')) {
                // スプラッシュを隠してホームを表示
                splashScreen.style.display = 'none';
                splashScreen.classList.remove('active');
                showScreen(homeScreen);
            }
        }, 3000);
    } else {
        // スプラッシュがない場合は即ホームへ
        showScreen(homeScreen);
    }
    
    // ロード時にも強制的にイディオムを表示
    displayIdiomOfTheDay();
});


// =============================================
//  カスタムアラート (プレースホルダー)
// =============================================
function showCustomAlert(message) {
    console.warn("Using placeholder alert:", message);
    alert(message); 
}