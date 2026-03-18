import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function EmotionPairCard({ moods, initialSyncScore = 82 }) {
  const [expanded, setExpanded] = useState(false);
  const [syncScore, setSyncScore] = useState(initialSyncScore);
  const [currentMoodMap, setCurrentMoodMap] = useState(
    Object.fromEntries(moods.map((item) => [item.id, item.mood]))
  );

  const scoreLabel = useMemo(() => {
    if (syncScore >= 92) return "很合拍";
    if (syncScore >= 80) return "节奏稳定";
    return "轻微错拍";
  }, [syncScore]);

  const handlePickMood = (moodId, optionText) => {
    setCurrentMoodMap((prev) => ({ ...prev, [moodId]: optionText }));
    setSyncScore((prev) => Math.min(99, prev + 1));
  };

  return (
    <section className="glass-card immersive-card fade-up p-4" style={{ animationDelay: "60ms" }}>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="soft-tap flex w-full items-center justify-between text-left"
      >
        <div className="w-full">
          <SectionHeader
            title="平行情绪卡"
            subtitle="点图标就能同步状态"
            className="mb-0"
          />
        </div>
        <span className="text-lg text-rose-500">{expanded ? "▾" : "▸"}</span>
      </button>

      <div className="mt-2 rounded-2xl bg-rose-50/80 px-3 py-2 text-xs text-rose-700">
        同步指数 {syncScore}% · {scoreLabel}
      </div>

      {expanded && (
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {moods.map((mood) => (
            <article
              key={mood.id}
              className={`rounded-2xl bg-gradient-to-br ${mood.color} p-3 text-rose-800`}
            >
              <p className="text-xs font-medium opacity-80">{mood.nickname}</p>
              <p className="mt-2 text-sm leading-6">
                {mood.icon} {currentMoodMap[mood.id]}
              </p>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {mood.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handlePickMood(mood.id, option.text)}
                    className="soft-tap rounded-full bg-white/80 px-2 py-1 text-[11px] text-rose-700 active:scale-[0.97]"
                  >
                    {option.icon}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
