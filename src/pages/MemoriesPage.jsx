import { StoryHintCard } from "../components/layout/StoryHintCard";
import { LoveTimeline } from "../components/memories/LoveTimeline";
import { MemoryCards } from "../components/memories/MemoryCards";
import { MonthlyLoveSummaryCard } from "../components/memories/MonthlyLoveSummaryCard";
import { PhotoWall } from "../components/memories/PhotoWall";
import { memoriesMockData } from "../mock/memoriesData";
import { universeMockData } from "../mock/universeData";

export function MemoriesPage() {
  return (
    <div className="space-y-3.5">
      <StoryHintCard
        icon="🧩"
        title="回忆档案"
        hint="你们的重要瞬间都会留在这里，随时可以回来翻翻。"
      />
      <MonthlyLoveSummaryCard summary={universeMockData.monthlySummary} />
      <LoveTimeline timeline={memoriesMockData.timeline} />
      <PhotoWall photos={memoriesMockData.photos} />
      <MemoryCards memoryCards={memoriesMockData.memoryCards} />
    </div>
  );
}
