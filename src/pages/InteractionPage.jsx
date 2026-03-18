import { EmotionPairCard } from "../components/interaction/EmotionPairCard";
import { MessageBoard } from "../components/interaction/MessageBoard";
import { TimeMailboxEntry } from "../components/interaction/TimeMailboxEntry";
import { MissYouAction } from "../components/home/MissYouAction";
import { StoryHintCard } from "../components/layout/StoryHintCard";
import { interactionMockData } from "../mock/interactionData";

export function InteractionPage() {
  return (
    <div className="space-y-3.5">
      <StoryHintCard
        icon="💞"
        title="今日互动"
        hint="这里适合留一句话、同步一下心情，不需要很正式。"
      />
      <MessageBoard messages={interactionMockData.messages} />
      <MissYouAction />
      <EmotionPairCard moods={interactionMockData.moods} initialSyncScore={interactionMockData.syncScore} />
      <TimeMailboxEntry mailbox={interactionMockData.mailbox} />
    </div>
  );
}
