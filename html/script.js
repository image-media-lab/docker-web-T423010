//========================================
// モンスターハンター作品紹介データ
//========================================
const gameData = {
    mh1:
        "モンスターハンターは2004年3月11日にPlayStation2で発売されたシリーズ第1作です。",
    mhg:
        "モンスターハンターGは2005年1月20日に発売され、追加要素が収録された作品です。"
};
//========================================
// シリーズ紹介
//========================================
const seriesText =
"モンスターハンターシリーズは、2004年に発売された『モンスターハンター』から始まったハンティングアクションゲームシリーズです。プレイヤーは巨大なモンスターを狩猟し、素材を集めて武器や防具を強化しながら冒険を進めます。";
//========================================
// 作品紹介を読み上げる
//========================================
function speakGame(){
    // 選択された作品を取得
    const game =
        document.getElementById("gameSelect").value;
    // 読み上げ文章
    const text =
        gameData[game];
    // 読み上げ中なら停止
    speechSynthesis.cancel();
    // 音声データ作成
    const speech =
        new SpeechSynthesisUtterance(text);
    // 日本語
    speech.lang = "ja-JP";
    // 読み上げ速度
    speech.rate = 1.0;
    // 音量
    speech.volume = 1.0;
    // 読み上げ開始
    speechSynthesis.speak(speech);
}
//========================================
// シリーズ紹介を読み上げる
//========================================
function speakSeries(){
    speechSynthesis.cancel();
    const speech =
        new SpeechSynthesisUtterance(seriesText);
    speech.lang = "ja-JP";
    speech.rate = 1.0;
    speech.volume = 1.0;
    speechSynthesis.speak(speech);
}
//========================================
// 停止
//========================================
function stopSpeech(){
    speechSynthesis.cancel();
}
//==================================================
// 発売年クイズデータ
//==================================================
const quizData = [
    {
        question:
            "2004年に発売された作品はどちらでしょう。",
        answer:
            "mh1"
    },
    {
        question:
            "2005年に発売された作品はどちらでしょう。",
        answer:
            "mhg"
    }
];
//==================================================
// 現在の問題番号
//==================================================
let currentQuiz = 0;
//==================================================
// クイズ開始
//==================================================
function startQuiz(){
    // 読み上げ停止
    speechSynthesis.cancel();
    // ランダムに問題を選ぶ
    currentQuiz =
        Math.floor(
            Math.random() * quizData.length
        );
    // 問題表示
    document.getElementById(
        "quizQuestion"
    ).textContent =
        quizData[currentQuiz].question;
    // 結果表示を初期化
    document.getElementById(
        "quizResult"
    ).textContent = "";
    // ラジオボタンをリセット
    const radios =
        document.getElementsByName(
            "quizAnswer"
        );
    radios.forEach(function(radio){

        radio.checked = false;
    });
    // 音声読み上げ
    const speech =
        new SpeechSynthesisUtterance(
            "問題です。" +
            quizData[currentQuiz].question
        );
    speech.lang = "ja-JP";
    speech.rate = 1.0;
    speech.volume = 1.0;
    speechSynthesis.speak(speech);
}
//==================================================
// クイズ回答
//==================================================
function checkQuiz(){
    // 選択された回答
    const answer =
        document.querySelector(
            'input[name="quizAnswer"]:checked'
        );
    // 未選択
    if(answer == null){
        alert(
            "作品を選択してください。"
        );
        return;
    }
    let message;

    // 正解判定
    if(
        answer.value ==
        quizData[currentQuiz].answer
    ){
        message =
            "正解です！";
    }
    else{
        if(
            quizData[currentQuiz].answer ==
            "mh1"
        ){
            message =
            "不正解です。正解はモンスターハンターです。";
        }
        else{
            message =
            "不正解です。正解はモンスターハンターGです。";
        }
    }
    // 結果表示
    document.getElementById(
        "quizResult"
    ).textContent =
        message;
    // 読み上げ
    speechSynthesis.cancel();
    const speech =
        new SpeechSynthesisUtterance(
            message
        );
    speech.lang = "ja-JP";
    speech.rate = 1.0;
    speech.volume = 1.0;
    speechSynthesis.speak(speech);
}