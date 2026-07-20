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
