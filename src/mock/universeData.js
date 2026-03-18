export const universeMockData = {
  storyNodes: [
    { key: "home", icon: "🪐", title: "今天" },
    { key: "memories", icon: "🧩", title: "回忆" },
    { key: "interaction", icon: "💞", title: "互动" },
    { key: "wishes", icon: "🏡", title: "愿望" }
  ],
  planet: {
    name: "Aurora 双人星球",
    stageName: "星灯木屋 Lv.2",
    level: 4,
    currentExp: 72,
    nextLevelExp: 100,
    moodWeather: "暖风晴",
    hint: "每一次想念、回应、回忆，都会让小屋更亮一点。",
    quickActions: [
      { id: "feed-heart", icon: "💗", label: "投喂爱心", exp: 2 },
      { id: "hang-light", icon: "✨", label: "挂一盏灯", exp: 3 },
      { id: "water-plant", icon: "🌱", label: "浇浇小树", exp: 2 }
    ],
    links: [
      { key: "memories", icon: "📷", text: "回忆在增加" },
      { key: "interaction", icon: "💬", text: "互动在发生" },
      { key: "wishes", icon: "🎯", text: "愿望在推进" }
    ]
  },
  monthlySummary: {
    monthLabel: "2026 年 3 月",
    title: "自动月度恋爱总结",
    memoryCount: 18,
    moodSyncCount: 21,
    mailboxCount: 5,
    surpriseCount: 3,
    energyTrend: "+12%",
    generatedAt: "3 分钟前自动生成",
    sentence:
      "这个月你们最有力量的时刻，是再忙也会给彼此一句“我在”。",
    highlights: [
      "03.06 雨天并肩撑伞回家",
      "03.11 异地晚安语音连着听了三次",
      "03.15 提前准备纪念日惊喜小卡片"
    ]
  }
};
