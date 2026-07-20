//=============================
// 作品紹介
//=============================
const gameData = {
    mh1:
    "モンスターハンターは2004年3月11日にPlayStation2で発売されたシリーズ第1作です。",
    mhg:
    "モンスターハンターGは2005年1月20日に発売され、追加要素が収録された作品です。"
};
//=============================
// 読み上げ
//=============================
function speakGame() {
    // 選択された作品
    const game =
        document.getElementById("gameSelect").value;
    // 紹介文
    const text =
        gameData[game];
    // 音声データ
    const speech =
        new SpeechSynthesisUtterance(text);
    // 日本語
    speech.lang = "ja-JP";
    // 読み上げ開始
    speechSynthesis.speak(speech);
}
//=============================
// 停止
//=============================
function stopSpeech() {
    speechSynthesis.cancel();
}
