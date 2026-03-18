import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function MemoryCards({ memoryCards }) {
  const [expanded, setExpanded] = useState(false);

  const visibleCards = useMemo(() => {
    if (expanded) return memoryCards;
    return memoryCards.slice(0, 2);
  }, [expanded, memoryCards]);

  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "90ms" }}>
      <SectionHeader
        title="回忆卡片"
        subtitle={expanded ? "完整卡片" : "先看重点 2 条"}
        action={
          memoryCards.length > 2 ? (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="soft-tap rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700"
            >
              {expanded ? "收起" : "展开"}
            </button>
          ) : null
        }
      />

      <div className="mt-3 space-y-2.5">
        {visibleCards.map((card) => (
          <article
            key={card.id}
            className="rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 to-rose-50/80 p-3"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-rose-800">{card.title}</p>
              <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] text-rose-600">
                {card.mood}
              </span>
            </div>
            <p className="mt-2 text-xs leading-6 text-rose-700/90">{card.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
