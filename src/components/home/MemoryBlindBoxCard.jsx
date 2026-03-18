import { useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function MemoryBlindBoxCard({ blindBox }) {
  const [opened, setOpened] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleOpen = () => {
    const randomIndex = Math.floor(Math.random() * blindBox.memories.length);
    setSelectedMemory(blindBox.memories[randomIndex]);
    setOpened(true);
  };

  return (
    <section className="glass-card immersive-card fade-up p-4" style={{ animationDelay: "200ms" }}>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="soft-tap flex w-full items-center justify-between text-left"
      >
        <div className="w-full">
          <SectionHeader
            title={blindBox.title}
            subtitle={blindBox.summaryHint}
            badge={opened ? "已开启" : "待开启"}
            className="mb-0"
          />
        </div>
        <span className="text-lg text-rose-500">{expanded ? "▾" : "▸"}</span>
      </button>

      <div className="mt-3 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-4">
        <p className="text-sm text-rose-700">{blindBox.lockedHint}</p>
        <button
          type="button"
          onClick={handleOpen}
          className="soft-tap mt-3 rounded-xl bg-white px-4 py-2 text-xs font-medium text-rose-700 shadow-sm transition hover:bg-rose-50 active:scale-[0.99]"
        >
          🎁 一键开启盲盒
        </button>

        {opened && selectedMemory && (
          <div className="mt-3 rounded-xl bg-white/80 p-3">
            <p className="text-xs text-rose-500">{selectedMemory.title}</p>
            <p className="mt-1 text-sm leading-6 text-rose-800">{selectedMemory.text}</p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                className="soft-tap rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700"
              >
                💗 收藏
              </button>
              <button
                type="button"
                onClick={handleOpen}
                className="soft-tap rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700"
              >
                ✨ 再开一次
              </button>
            </div>
          </div>
        )}

        {expanded && (
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {blindBox.memories.map((memory) => (
              <span
                key={memory.title}
                className="rounded-lg bg-white/70 px-2 py-1 text-[11px] text-rose-600"
              >
                🧩 {memory.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
