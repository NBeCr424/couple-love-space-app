import { useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function LoveWeatherCard({ weather }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "120ms" }}>
      <SectionHeader
        title={weather.title}
        subtitle={expanded ? "今天的状态同步" : "先看简版，点开看详情"}
        badge={weather.temperatureText}
        action={
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="soft-tap rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700"
          >
            {expanded ? "收起" : "展开"}
          </button>
        }
      />

      <p className="mt-2 text-sm text-rose-700">{weather.forecast}</p>

      {expanded ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {weather.moods.map((mood) => (
            <div
              key={mood.nickname}
              className="rounded-2xl bg-white/75 px-3 py-2 text-xs text-rose-700"
            >
              <p className="font-medium text-rose-800">{mood.nickname}</p>
              <p className="mt-1 opacity-90">{mood.mood}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
