const tabs = [
  { key: "home", label: "首页", icon: "❤" },
  { key: "memories", label: "回忆", icon: "⌛" },
  { key: "interaction", label: "互动", icon: "✦" },
  { key: "wishes", label: "愿望", icon: "☁" }
];

export function BottomNav({ activeTab, onChange }) {
  return (
    <nav
      className="fixed inset-x-0 z-20 px-4"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-3xl border border-white/70 bg-white/80 px-3 py-2 shadow-blush backdrop-blur-xl">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`soft-tap flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-2 text-xs transition ${
                active
                  ? "bg-rose-100/80 text-rose-700"
                  : "text-rose-500 hover:bg-white/70 hover:text-rose-700"
              }`}
            >
              <span className="text-sm leading-none">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
