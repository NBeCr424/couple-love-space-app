import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

const statusMap = {
  pending: { label: "想做", className: "bg-rose-100 text-rose-700" },
  in_progress: { label: "慢慢来", className: "bg-amber-100 text-amber-700" },
  done: { label: "完成啦", className: "bg-emerald-100 text-emerald-700" }
};

export function WishList({ wishes }) {
  const [expanded, setExpanded] = useState(false);

  const visibleWishes = useMemo(() => {
    if (expanded) return wishes;
    return wishes.slice(0, 3);
  }, [expanded, wishes]);

  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "90ms" }}>
      <SectionHeader
        title="双人愿望清单"
        subtitle={expanded ? "全部愿望" : "先看最想做的 3 条"}
        action={
          wishes.length > 3 ? (
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
        {visibleWishes.map((wish) => {
          const status = statusMap[wish.status];
          return (
            <article
              key={wish.id}
              className={`rounded-2xl border border-white/70 p-3 ${
                wish.status === "done"
                  ? "bg-gradient-to-br from-emerald-50/80 to-white/80"
                  : "bg-gradient-to-br from-white/80 to-rose-50/80"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-rose-800">{wish.title}</p>
                  <p className="mt-1 text-[11px] text-rose-500">
                    {wish.owner} · 预计 {wish.targetDate}
                  </p>
                </div>
                <span className={`rounded-full px-2 py-1 text-[11px] ${status.className}`}>
                  {status.label}
                </span>
              </div>
              <p className="mt-2 text-xs leading-6 text-rose-700/90">{wish.note}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
