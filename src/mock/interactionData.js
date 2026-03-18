export const interactionMockData = {
  messages: [
    {
      id: "msg-1",
      sender: "林夏",
      content: "今天开会很久，但想到你就没那么累了。",
      time: "18:20"
    },
    {
      id: "msg-2",
      sender: "周野",
      content: "辛苦啦，回家路上记得慢一点，我在等你。",
      time: "18:36"
    },
    {
      id: "msg-3",
      sender: "林夏",
      content: "收到啦，晚点想听你说今天发生了什么。",
      time: "19:02"
    }
  ],
  moods: [
    {
      id: "mood-1",
      nickname: "林夏",
      mood: "想抱抱你",
      icon: "💗",
      color: "from-rose-100 to-pink-100",
      options: [
        { id: "mx-1", icon: "💗", text: "想你" },
        { id: "mx-2", icon: "🌤", text: "放松" },
        { id: "mx-3", icon: "🔥", text: "有干劲" },
        { id: "mx-4", icon: "🫶", text: "想抱抱" }
      ]
    },
    {
      id: "mood-2",
      nickname: "周野",
      mood: "有点疲惫但很想你",
      icon: "🌙",
      color: "from-orange-100 to-rose-100",
      options: [
        { id: "my-1", icon: "🌙", text: "有点累" },
        { id: "my-2", icon: "💗", text: "想你" },
        { id: "my-3", icon: "😌", text: "平静" },
        { id: "my-4", icon: "⚡", text: "打鸡血" }
      ]
    }
  ],
  syncScore: 87,
  mailbox: {
    title: "时空信箱",
    hint: "写下一封未来信，约定某个日期再开启。",
    nextOpenTime: "2026.03.30 22:00",
    unreadCount: 1,
    quickTemplates: [
      { id: "qt-1", icon: "🌙", label: "晚安信", content: "今天辛苦啦，晚安，梦里见。" },
      { id: "qt-2", icon: "🌤", label: "鼓励信", content: "你已经做得很好了，我一直在你这边。" },
      { id: "qt-3", icon: "🎁", label: "惊喜信", content: "给未来的你准备了一份小小惊喜。" }
    ],
    pendingLetters: [
      { id: "pl-1", title: "纪念日当天开启", openAt: "2026.03.30 22:00", status: "locked" },
      { id: "pl-2", title: "下次见面前夜", openAt: "2026.04.11 21:30", status: "locked" }
    ]
  }
};
