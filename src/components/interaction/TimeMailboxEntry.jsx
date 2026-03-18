import { useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function TimeMailboxEntry({ mailbox }) {
  const [expanded, setExpanded] = useState(false);
  const [sentTemplateId, setSentTemplateId] = useState("");

  const handleSendTemplate = (templateId) => {
    setSentTemplateId(templateId);
    window.setTimeout(() => setSentTemplateId(""), 1800);
  };

  return (
    <section className="glass-card immersive-card fade-up p-4" style={{ animationDelay: "110ms" }}>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="soft-tap flex w-full items-center justify-between text-left"
      >
        <div className="w-full">
          <SectionHeader
            title={mailbox.title}
            subtitle="写给未来的彼此"
            className="mb-0"
          />
        </div>
        <span className="text-lg text-rose-500">{expanded ? "▾" : "▸"}</span>
      </button>

      <div className="mt-3 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 p-3">
        <p className="text-xs leading-6 text-rose-700">{mailbox.hint}</p>
        <p className="mt-1 text-[11px] text-rose-500">下一封将在 {mailbox.nextOpenTime} 开启</p>
        <div className="mt-2 rounded-xl bg-white/80 px-3 py-2 text-[11px] text-rose-600">
          📬 当前待开启 {mailbox.unreadCount} 封
        </div>

        {expanded && (
          <>
            <div className="mt-3 flex flex-wrap gap-2">
              {mailbox.quickTemplates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => handleSendTemplate(template.id)}
                  className={`soft-tap rounded-full px-2.5 py-1 text-[11px] transition ${
                    sentTemplateId === template.id
                      ? "bg-rose-300 text-white"
                      : "bg-white text-rose-700 shadow-sm active:scale-[0.97]"
                  }`}
                >
                  {template.icon} {sentTemplateId === template.id ? "已寄出" : template.label}
                </button>
              ))}
            </div>

            <div className="mt-3 space-y-2">
              {mailbox.pendingLetters.map((letter) => (
                <article
                  key={letter.id}
                  className="rounded-xl bg-white/80 px-3 py-2 text-xs text-rose-700"
                >
                  <p className="font-medium">{letter.title}</p>
                  <p className="mt-1 text-[11px] text-rose-500">🔒 {letter.openAt}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
