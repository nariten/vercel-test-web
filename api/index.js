export default function handler(request, response) {
  // 1. 運勢のリストを用意する
  const fortunes = ["大吉 🌟", "吉 ✨", "中吉 👍", "小吉 😊", "凶 💧", "大凶 🌊"];
  
  // 2. ランダムに1つの運勢を選ぶ
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const todaysFortune = fortunes[randomIndex];

  // 3. 現在の時刻を取得する
  const now = new Date();
  const timeString = now.toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });

  // 4. ブラウザに結果を返す（HTML形式で読みやすくします）
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.status(200).send(`
    <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
      <h1>🔮 今日のおみくじ</h1>
      <p style="font-size: 48px; font-weight: bold; color: #ff4757;">${todaysFortune}</p>
      <p style="color: #777;">（占った時間: ${timeString}）</p>
      <hr style="width: 200px; margin: 30px auto;">
      <button onclick="window.location.reload()" style="padding: 10px 20px; font-size: 16px; cursor: pointer; border-radius: 5px; border: 1px solid #ccc; background: #fbfbfb;">
        もう一度引く 🔄
      </button>
    </div>
  `);
}
