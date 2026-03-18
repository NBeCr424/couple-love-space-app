export const homeMockData = {
  couple: {
    partnerA: {
      nickname: "林夏",
      initials: "夏",
      avatarGradient: "from-rose-200 via-pink-200 to-fuchsia-200"
    },
    partnerB: {
      nickname: "周野",
      initials: "野",
      avatarGradient: "from-orange-200 via-rose-200 to-pink-200"
    },
    startDate: "2024-03-16"
  },
  anniversary: {
    label: "在一起纪念日",
    month: 3,
    day: 16
  },
  quote: {
    content: "你不用每天都说爱我，来我身边就已经是答案。",
    source: "今日一句情话"
  },
  dailyNudge: {
    subtitle: "今天不需要打卡，做一件小事就很好",
    tip: "你们的空间会因为每一次轻互动慢慢升温，不必追求高频。",
    hint: "没有完成也没关系，明天再来看看。",
    actions: [
      { id: "nudge-miss", icon: "💌", label: "发个想念" },
      { id: "nudge-memory", icon: "📝", label: "留一句话" }
    ]
  },
  loveWeather: {
    title: "今天的恋爱天气",
    forecast: "晴间微风，适合想念和拥抱",
    temperatureText: "甜度指数 92%",
    moods: [
      {
        nickname: "林夏",
        mood: "想你"
      },
      {
        nickname: "周野",
        mood: "平静但很依赖你"
      }
    ]
  },
  blindBox: {
    title: "回忆盲盒",
    lockedHint: "轻轻打开，看看你们曾经的一瞬间",
    summaryHint: "本周还有 2 个回忆待开启",
    memories: [
      {
        title: "去年的今天",
        text: "你在地铁口等我，手里拿着我最爱的热可可。"
      },
      {
        title: "凌晨 00:17",
        text: "你说“睡不着也没关系，我陪你听雨。”"
      },
      {
        title: "第一次做饭",
        text: "虽然盐放多了，但你说这是“爱心重口味限定版”。"
      }
    ]
  },
  recentMoment: {
    type: "photo",
    title: "最近一条回忆",
    note: "今天下班路上的晚霞很好看，第一时间想拍给你。",
    createdAt: "2 小时前"
  }
};
