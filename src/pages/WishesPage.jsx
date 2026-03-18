import { useMemo, useState } from "react";
import { StoryHintCard } from "../components/layout/StoryHintCard";
import { WishCategoryFilter } from "../components/wishes/WishCategoryFilter";
import { WishList } from "../components/wishes/WishList";
import { WishSummaryCard } from "../components/wishes/WishSummaryCard";
import { wishesMockData } from "../mock/wishesData";
import { universeMockData } from "../mock/universeData";

export function WishesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWishes = useMemo(() => {
    if (activeCategory === "all") return wishesMockData.wishes;
    return wishesMockData.wishes.filter((wish) => wish.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-3.5">
      <StoryHintCard
        icon="🏡"
        title="愿望清单"
        hint="把想一起做的事先放进来，什么时候完成都可以。"
      />
      <WishSummaryCard wishes={wishesMockData.wishes} planetStage={universeMockData.planet.stageName} />
      <WishCategoryFilter
        categories={wishesMockData.categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <WishList wishes={filteredWishes} />
    </div>
  );
}
