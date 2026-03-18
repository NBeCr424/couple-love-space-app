import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function PlanetGrowthCard({ planet }) {
  const [exp, setExp] = useState(planet.currentExp);
  const [feedback, setFeedback] = useState("轻触一下，就算今天对彼此的回应");

  const progress = useMemo(
    () => Math.min(100, Math.round((exp / planet.nextLevelExp) * 100)),
    [exp, planet.nextLevelExp]
  );

  const handleAction = (action) => {
    setExp((prev) => Math.min(planet.nextLevelExp, prev + action.exp));
    setFeedback(`${action.icon} ${action.label}，今天的星球又亮了一点`);
  };

  return (
    <section className="glass-card immersive-card fade-up p-4" style={{ animationDelay: "20ms" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="w-full">
          <SectionHeader
            title={planet.name}
            subtitle={planet.stageName}
            className="mb-0"
          />
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 px-3 py-2 text-right">
          <p className="text-[11px] text-rose-500">Lv.{planet.level}</p>
          <p className="mt-0.5 text-xs font-medium text-rose-800">{planet.moodWeather}</p>
        </div>
      </div>

      <div className="mt-3 h-2 rounded-full bg-rose-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-300 to-pink-300 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-rose-600">本周亮度 {Math.round((exp / planet.nextLevelExp) * 100)}% · {planet.hint}</p>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {planet.quickActions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => handleAction(action)}
            className="soft-tap rounded-2xl bg-white/80 px-2 py-2 text-xs text-rose-700 transition active:scale-[0.98]"
          >
            <span className="mr-1">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {planet.links.map((link) => (
          <span
            key={link.key}
            className="rounded-full bg-rose-100/80 px-2.5 py-1 text-[11px] text-rose-700"
          >
            {link.icon} {link.text}
          </span>
        ))}
      </div>

      <p className="mt-2 text-[11px] text-rose-500">{feedback}</p>
    </section>
  );
}
