import { useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function HomeDailyNudgeCard({ nudge }) {
  const [selected, setSelected] = useState("");

  return (
    <section className="glass-card immersive-card fade-up p-4" style={{ animationDelay: "10ms" }}>
      <SectionHeader title="今日回访理由" subtitle={nudge.subtitle} badge="10 秒就够" />

      <div className="rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 px-3.5 py-3">
        <p className="text-xs leading-6 text-rose-700">{nudge.tip}</p>
        <div className="mt-3 flex gap-2">
          {nudge.actions.map((action) => {
            const active = selected === action.id;
            return (
              <button
                key={action.id}
                type="button"
                onClick={() => setSelected(action.id)}
                className={`soft-tap flex-1 rounded-xl px-3 py-2 text-xs font-medium transition ${
                  active
                    ? "bg-rose-300 text-white"
                    : "bg-white text-rose-700 shadow-sm hover:bg-rose-50"
                }`}
              >
                {active ? "已完成" : `${action.icon} ${action.label}`}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-[11px] text-rose-500">{nudge.hint}</p>
    </section>
  );
}
