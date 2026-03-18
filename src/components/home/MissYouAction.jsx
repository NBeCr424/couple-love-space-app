import { useState } from "react";

export function MissYouAction() {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (sent) return;
    setSent(true);
    window.setTimeout(() => setSent(false), 2400);
  };

  return (
    <section className="fade-up" style={{ animationDelay: "160ms" }}>
      <button
        type="button"
        onClick={handleSend}
        className={`soft-tap w-full rounded-3xl px-4 py-4 text-sm font-medium transition-all duration-300 ${
          sent
            ? "bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-blush"
            : "animate-soft-pulse bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300 text-rose-900 shadow-blush hover:brightness-105 active:scale-[0.99]"
        }`}
      >
        {sent ? "想念已发送" : "我想你了"}
      </button>
      <p className="mt-2 text-center text-xs text-rose-500">
        {sent ? "TA 下次打开时会看到这条想念" : "点一下就够，不用写很多"}
      </p>
    </section>
  );
}
