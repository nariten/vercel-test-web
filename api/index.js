export default function handler(request, response) {
  // 1. 運勢のリスト
  const fortunes = ["大吉 🌟", "吉 ✨", "中吉 👍", "小吉 😊", "凶 💧", "大凶 🌊"];
  
  // 2. ランダムに選ぶ
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const todaysFortune = fortunes[randomIndex];

  // 3. ラッキーアイテムも追加してみましょう！
  const items = ["スマホ", "お気に入りの靴", "美味しいコーヒー", "読書", "チョコレート"];
  const randomItem = items[Math.floor(Math.random() * items.length)];

  // 4. HTMLではなく「JSONデータ」としてブラウザに返却する
  response.status(200).json({
    fortune: todaysFortune,
    luckyItem: randomItem
  });
}
