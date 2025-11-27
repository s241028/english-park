// ... (データ部分は変更なし。省略せずにそのまま使ってください) ...
// =============================================
//  全体で使用するデータ
// =============================================
const pronunciationSentences = [
    { en: "How are you doing?", ja: "調子はどうですか？" },
    { en: "It's nice to meet you.", ja: "はじめまして。" },
    // ... (他の全ての文) ...
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

// ... (quizDataSets, idiomsData, readingQuizData, conversationTopics, listeningChallengeSentences も省略せずそのまま) ...
// (容量削減のためここでは省略しますが、元のデータを使ってください)
const quizDataSets = {
    beginner: [
        { ja: "未来", correct: "future", incorrect: ["past", "letter", "dream"] }, 
        // ...
    ],
    // ...
};
const idiomsData = [
    { idiom: "Break a leg!", meaning: "幸運を祈るよ！/ 頑張って！", description: "舞台に出る役者にかける激励の言葉が由来です。" },
    // ...
];
const readingQuizData = [
     {
        title: "A Day at the Beach",
        passage: "Yesterday, my family and I went to the beach...",
        translation: "昨日、家族と私はビーチに行きました...",
        questions: [ /*...*/ ]
    },
    // ...
];
const conversationTopics = [
    "What is the most interesting place you have ever visited?",
    // ...
];
const listeningChallengeSentences = pronunciationSentences;

// =============================================
//  機能説明データ
// =============================================
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
    }
};


// =============================================
//  Audio Context & Speech Synthesis Setup
// =============================================
// (変更なし)
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

// モーダル要素
const infoModal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-modal');

// 情報ボタンのイベント設定
document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // 親要素(カード)のクリックイベントを防止
        const featureKey = btn.dataset.feature;
        const data = featureDescriptions[featureKey];
        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            // 改行コードを反映させるためにCSSでwhite-space: pre-wrapを設定済み
            infoModal.classList.remove('hidden');
        }
    });
});

// モーダルを閉じる処理
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

startSpeakingPracticeButton.addEventListener('click', (e) => { 
    if(e.target.classList.contains('info-btn')) return; // 情報ボタンクリック時は遷移しない
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

backButtonSpeaking.addEventListener('click', () => showScreen(homeScreen));
backButtonFromLevels.addEventListener('click', () => showScreen(homeScreen));
backButtonFromQuiz.addEventListener('click', () => showScreen(quizLevelScreen));
backButtonFromListening.addEventListener('click', () => showScreen(homeScreen));
backButtonFromReading.addEventListener('click', () => showScreen(homeScreen));
backButtonFromVideo.addEventListener('click', () => { if (typeof peerConnection !== 'undefined' && peerConnection) { hangUp(); } showScreen(homeScreen); });


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
    const cleanOriginal = originalText.toLowerCase().replace(/[.,!?]/g, '').split(' ');
    const cleanUser = transcript.toLowerCase().replace(/[.,!?]/g, '').split(' ');
    let correctWords = 0;
    const feedbackHtml = cleanOriginal.map((word, index) => {
        if (cleanUser[index] === word) { correctWords++; return `<span class="correct">${word}</span>`; }
        else { return `<span class="incorrect" data-word="${word}">${word}</span> (<span class="your-speech">${cleanUser[index] || '×'}</span>)`; }
    }).join(' ');

    const score = Math.round((correctWords / cleanOriginal.length) * 100);
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
//  単語クイズロジック (変更なし)
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
//  リスニングチャレンジロジック (変更なし)
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
//  読解練習ロジック (変更なし)
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
    } else {
        readingFinalScore.textContent = "スコアの計算に問題がありました。";
    }
}

readingRestartButton.addEventListener('click', startNewReadingQuiz);


// =============================================
//  ビデオチャットロジック (WebRTC実装)
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
const roomId = 'default-room'; 

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
        videoStatus.textContent = "サーバー接続エラー。server.js は起動していますか？";
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
                case 'error':
                    videoStatus.textContent = `サーバーエラー: ${data.message}`;
                    break;
            }
        } catch (err) {
            console.error("Signaling message processing error:", err);
            videoStatus.textContent = "接続処理中にエラーが発生しました。";
        }
    };

    socket.onclose = () => {
        if (videoStatus.textContent !== "通話を終了しました。") { 
             videoStatus.textContent = "サーバーから切断されました。";
        }
        hangUp();
    };

    socket.onerror = (err) => {
        console.error("WebSocket error:", err);
        videoStatus.textContent = "サーバー接続エラー。server.jsが起動しているか確認してください。";
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
    if (videoStatus.textContent !== "通話を終了しました。") { 
         videoStatus.textContent = "通話を終了しました。";
    }
    
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
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
    }
    socket = null;
    
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
        s.classList.remove('active');
        s.style.display = 'none';
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