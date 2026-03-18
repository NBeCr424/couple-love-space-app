import { SectionHeader } from "../shared/SectionHeader";

export function WishSummaryCard({ wishes, planetStage = "" }) {
  const total = wishes.length;
  const doneCount = wishes.filter((item) => item.status === "done").length;
  const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  return (
    <section className="glass-card fade-up p-4">
      <SectionHeader
        title="愿望陪伴感"
        subtitle="不用追进度，按你们的节奏慢慢实现"
        badge={`已完成 ${doneCount}/${total}`}
      />

      <div className="mt-3 h-2 rounded-full bg-rose-100/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-300 to-pink-300 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-rose-600">这个月的愿望温度 {progress}%</p>
      {planetStage && <p className="mt-1 text-[11px] text-rose-500">🏡 当前小屋: {planetStage}</p>}
    </section>
  );
}
