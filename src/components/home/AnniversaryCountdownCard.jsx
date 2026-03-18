import { SectionHeader } from "../shared/SectionHeader";

export function AnniversaryCountdownCard({ label, dateLabel, daysLeft }) {
  const numberText = daysLeft === 0 ? "今天" : `${daysLeft} 天`;

  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "40ms" }}>
      <SectionHeader title={label} subtitle="下一个特别日子" badge={dateLabel} />

      <div className="flex items-end justify-between rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100/80 px-4 py-3">
        <p className="text-xs text-rose-600">距离你们的小仪式</p>
        <p className="text-xl font-semibold tracking-tight text-rose-700">{numberText}</p>
      </div>
    </section>
  );
}
