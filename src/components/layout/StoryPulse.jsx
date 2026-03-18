import { universeMockData } from "../../mock/universeData";

export function StoryPulse({ activeTab }) {
  return (
    <section className="fade-up mb-4 overflow-x-auto pb-1">
      <div className="flex min-w-max items-center gap-2">
        {universeMockData.storyNodes.map((node) => {
          const active = node.key === activeTab;
          return (
            <div
              key={node.key}
              className={`soft-tap flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition ${
                active
                  ? "story-chip-active bg-rose-200/90 text-rose-800"
                  : "bg-white/80 text-rose-500"
              }`}
            >
              <span>{node.icon}</span>
              <span>{node.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
