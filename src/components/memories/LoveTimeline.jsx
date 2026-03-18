import { SectionHeader } from "../shared/SectionHeader";

export function LoveTimeline({ timeline }) {
  return (
    <section className="glass-card fade-up p-4">
      <SectionHeader title="恋爱时间轴" subtitle="按时间回看你们的重要节点" />

      <div className="relative mt-4 space-y-4">
        <span className="absolute bottom-1 left-[7px] top-1 w-px bg-rose-200" />
        {timeline.map((item) => (
          <article key={item.id} className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-white bg-rose-300 shadow-sm" />
            <p className="text-[11px] tracking-wide text-rose-500">{item.date}</p>
            <p className="mt-1 text-sm font-medium text-rose-800">{item.title}</p>
            <p className="mt-1 text-xs leading-6 text-rose-700/90">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
