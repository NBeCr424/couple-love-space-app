import recentMemoryImage from "../../assets/recent-memory.svg";
import { SectionHeader } from "../shared/SectionHeader";

export function RecentMomentCard({ moment }) {
  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "240ms" }}>
      <SectionHeader title={moment.title} subtitle="最近更新" badge={moment.createdAt} />

      <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/70">
        {moment.type === "photo" && (
          <img
            src={recentMemoryImage}
            alt="最近一条照片预览"
            className="h-32 w-full object-cover"
          />
        )}
        <div className="p-3">
          <p className="text-sm leading-6 text-rose-800">{moment.note}</p>
        </div>
      </div>
    </section>
  );
}
