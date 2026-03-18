import { useMemo, useState } from "react";
import { BottomNav } from "./components/layout/BottomNav";
import { StoryPulse } from "./components/layout/StoryPulse";
import { RomanticBackground } from "./components/home/RomanticBackground";
import { HomePage } from "./pages/HomePage";
import { InteractionPage } from "./pages/InteractionPage";
import { MemoriesPage } from "./pages/MemoriesPage";
import { WishesPage } from "./pages/WishesPage";

const pageMetaMap = {
  home: {
    title: "Only Us",
    subtitle: "你们的专属空间，轻轻记录就很好",
    hint: "今天不需要打卡，留一句就算在认真相爱。"
  },
  memories: {
    title: "回忆",
    subtitle: "把值得反复想起的瞬间放在这里",
    hint: "这里是可回看的恋爱档案。"
  },
  interaction: {
    title: "互动",
    subtitle: "不用长篇大论，点一下也算回应",
    hint: "轻互动比高频任务更容易长期坚持。"
  },
  wishes: {
    title: "愿望",
    subtitle: "慢慢实现，不急着一次做完",
    hint: "先写下愿望，再按你们的节奏前进。"
  }
};

function renderPage(tab) {
  switch (tab) {
    case "memories":
      return <MemoriesPage />;
    case "interaction":
      return <InteractionPage />;
    case "wishes":
      return <WishesPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const meta = useMemo(() => pageMetaMap[activeTab], [activeTab]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <RomanticBackground />

      <main
        className="relative mx-auto w-full max-w-md px-4 pb-24 pt-6"
        style={{ paddingBottom: "calc(6.5rem + env(safe-area-inset-bottom))" }}
      >
        <header className="fade-up mb-4 px-1">
          <p className="text-xs uppercase tracking-[0.24em] text-rose-500/80">{meta.title}</p>
          <p className="mt-1 text-sm text-rose-700/90">{meta.subtitle}</p>
          <p className="mt-1 text-[11px] text-rose-500">{meta.hint}</p>
        </header>
        <StoryPulse activeTab={activeTab} />
        <section key={activeTab} className="page-switch">
          {renderPage(activeTab)}
        </section>
      </main>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
