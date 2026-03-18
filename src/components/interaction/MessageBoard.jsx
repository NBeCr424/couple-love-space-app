import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function MessageBoard({ messages }) {
  const [boardMessages, setBoardMessages] = useState(messages);
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState("");

  const visibleMessages = useMemo(() => {
    if (expanded) return boardMessages;
    return boardMessages.slice(-2);
  }, [expanded, boardMessages]);

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    const now = new Date();
    const timeLabel = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(
      2,
      "0"
    )}`;

    setBoardMessages((prev) => [
      ...prev,
      {
        id: `local-${now.getTime()}`,
        sender: "林夏",
        content: text,
        time: timeLabel
      }
    ]);
    setDraft("");
    setExpanded(false);
  };

  return (
    <section className="glass-card fade-up p-4">
      <SectionHeader
        title="留言板"
        subtitle={expanded ? "最近对话" : "先看最近 2 条"}
        action={
          boardMessages.length > 2 ? (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="soft-tap rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-700 transition hover:bg-rose-200/70"
            >
              {expanded ? "收起" : "展开"}
            </button>
          ) : null
        }
      />

      <div className="space-y-2.5">
        {visibleMessages.map((msg) => {
          const mine = msg.sender === "林夏";
          return (
            <article
              key={msg.id}
              className={`rounded-2xl p-3 ${
                mine
                  ? "bg-gradient-to-br from-rose-100 to-pink-100 text-rose-900"
                  : "bg-white/80 text-rose-800"
              }`}
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium opacity-90">{msg.sender}</span>
                <span className="text-rose-500">{msg.time}</span>
              </div>
              <p className="mt-1.5 text-xs leading-6">{msg.content}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-rose-50/80 p-2.5">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSend();
          }}
          placeholder="留一句今天的小心情..."
          className="h-9 flex-1 rounded-xl border border-transparent bg-white px-3 text-xs text-rose-700 outline-none placeholder:text-rose-400 focus:border-rose-200"
        />
        <button
          type="button"
          onClick={handleSend}
          className="soft-tap rounded-xl bg-rose-300 px-3 py-2 text-xs font-medium text-white"
        >
          发送
        </button>
      </div>
    </section>
  );
}
