export const wishesMockData = {
  categories: [
    { id: "all", label: "全部" },
    { id: "travel", label: "旅行" },
    { id: "daily", label: "日常" },
    { id: "growth", label: "成长" }
  ],
  wishes: [
    {
      id: "wish-1",
      title: "一起看一次冬天的雪",
      category: "travel",
      owner: "双人",
      status: "pending",
      targetDate: "2026.12",
      note: "想在安静的小镇散步，拍很多合照。"
    },
    {
      id: "wish-2",
      title: "每周做一次双人晚餐",
      category: "daily",
      owner: "双人",
      status: "in_progress",
      targetDate: "进行中",
      note: "不追求复杂，哪怕是简单意面也很好。"
    },
    {
      id: "wish-3",
      title: "一起练完 20 次晨跑",
      category: "growth",
      owner: "周野",
      status: "in_progress",
      targetDate: "2026.06",
      note: "完成后去吃一顿火锅庆祝。"
    },
    {
      id: "wish-4",
      title: "写一封手写信给对方",
      category: "daily",
      owner: "林夏",
      status: "done",
      targetDate: "已完成",
      note: "信里写了我们第一年最感谢彼此的事。"
    }
  ]
};
