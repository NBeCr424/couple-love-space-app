import { SectionHeader } from "../shared/SectionHeader";

export function DailyQuoteCard({ quote }) {
  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "80ms" }}>
      <SectionHeader title={quote.source} subtitle="给今天留一句温柔的话" />
      <p className="text-[15px] leading-7 text-rose-900">“{quote.content}”</p>
    </section>
  );
}
