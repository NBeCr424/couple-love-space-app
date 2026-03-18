import { useMemo, useState } from "react";

export function MonthlyLoveSummaryCard({ summary }) {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);

  const metrics = useMemo(
    () => [
      { id: "m1", icon: "📷", text: `回忆 ${summary.memoryCount}` },
      { id: "m2", icon: "💞", text: `情绪同步 ${summary.moodSyncCount}` },
      { id: "m3", icon: "📮", text: `未来信 ${summary.mailboxCount}` },
      { id: "m4", icon: "🎁", text: `惊喜 ${summary.surpriseCount}` }
    ],
    [summary]
  );

  const handleSave = () => {
    if (saved) return;
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <section className="glass-card immersive-card fade-up p-4">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="soft-tap flex w-full items-center justify-between text-left"
      >
        <div>
          <p className="text-xs text-rose-500">{summary.monthLabel}</p>
          <h2 className="mt-1 text-sm font-semibold text-rose-800">{summary.title}</h2>
          <p className="mt-1 text-[11px] text-rose-500">{summary.generatedAt}</p>
        </div>
        <span className="text-lg text-rose-500">{expanded ? "▾" : "▸"}</span>
      </button>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {metrics.map((metric) => (
          <span key={metric.id} className="rounded-full bg-rose-100/80 px-2.5 py-1 text-[11px] text-rose-700">
            {metric.icon} {metric.text}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs leading-6 text-rose-700">{summary.sentence}</p>
      <p className="mt-1 text-[11px] text-rose-500">关系温度 {summary.energyTrend}</p>

      {expanded && (
        <div className="fade-up mt-3 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-3">
          <p className="text-xs text-rose-600">本月高光时刻</p>
          <div className="mt-2 space-y-1.5">
            {summary.highlights.map((item) => (
              <p key={item} className="text-xs text-rose-700">
                · {item}
              </p>
            ))}
          </div>

          <button
            type="button"
            onClick={handleSave}
            className={`soft-tap mt-3 w-full rounded-xl px-3 py-2 text-xs font-medium transition ${
              saved
                ? "bg-rose-300 text-white"
                : "bg-white text-rose-700 shadow-sm hover:bg-rose-50 active:scale-[0.99]"
            }`}
          >
            {saved ? "已收藏到你们的星球档案" : "收藏本月总结卡"}
          </button>
        </div>
      )}
    </section>
  );
}
