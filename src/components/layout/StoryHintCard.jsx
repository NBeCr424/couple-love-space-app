export function StoryHintCard({ icon, title, hint, delay = "0ms" }) {
  return (
    <section className="glass-card immersive-card fade-up p-3.5" style={{ animationDelay: delay }}>
      <div className="flex items-center gap-2">
        <span className="rounded-xl bg-rose-100 px-2 py-1 text-sm">{icon}</span>
        <div>
          <p className="text-xs font-medium text-rose-700">{title}</p>
          <p className="text-[11px] text-rose-500">{hint}</p>
        </div>
      </div>
    </section>
  );
}
