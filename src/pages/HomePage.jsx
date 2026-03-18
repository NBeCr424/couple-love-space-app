import { AnniversaryCountdownCard } from "../components/home/AnniversaryCountdownCard";
import { CoupleInfoCard } from "../components/home/CoupleInfoCard";
import { DailyQuoteCard } from "../components/home/DailyQuoteCard";
import { HomeDailyNudgeCard } from "../components/home/HomeDailyNudgeCard";
import { LoveWeatherCard } from "../components/home/LoveWeatherCard";
import { MemoryBlindBoxCard } from "../components/home/MemoryBlindBoxCard";
import { MissYouAction } from "../components/home/MissYouAction";
import { PlanetGrowthCard } from "../components/home/PlanetGrowthCard";
import { RecentMomentCard } from "../components/home/RecentMomentCard";
import { homeMockData } from "../mock/homeData";
import { universeMockData } from "../mock/universeData";
import { formatDateLabel, getLoveDays, getNextAnniversary } from "../utils/date";

export function HomePage() {
  const loveDays = getLoveDays(homeMockData.couple.startDate);
  const { target, daysLeft } = getNextAnniversary(
    homeMockData.anniversary.month,
    homeMockData.anniversary.day
  );

  return (
    <div className="space-y-3.5">
      <CoupleInfoCard couple={homeMockData.couple} loveDays={loveDays} />
      <HomeDailyNudgeCard nudge={homeMockData.dailyNudge} />
      <MissYouAction />
      <PlanetGrowthCard planet={universeMockData.planet} />
      <MemoryBlindBoxCard blindBox={homeMockData.blindBox} />
      <RecentMomentCard moment={homeMockData.recentMoment} />

      <AnniversaryCountdownCard
        label={homeMockData.anniversary.label}
        dateLabel={formatDateLabel(target)}
        daysLeft={daysLeft}
      />

      <LoveWeatherCard weather={homeMockData.loveWeather} />
      <DailyQuoteCard quote={homeMockData.quote} />
    </div>
  );
}
