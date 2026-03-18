import { useMemo, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader";

export function PhotoWall({ photos }) {
  const [expanded, setExpanded] = useState(false);

  const visiblePhotos = useMemo(() => {
    if (expanded) return photos;
    return photos.slice(0, 3);
  }, [expanded, photos]);

  return (
    <section className="glass-card fade-up p-4" style={{ animationDelay: "50ms" }}>
      <SectionHeader
        title="照片墙"
        subtitle={expanded ? "全部回忆照片" : "先看 3 张精选"}
        badge={`${photos.length} 张`}
        action={
          photos.length > 3 ? (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="soft-tap rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700"
            >
              {expanded ? "收起" : "查看全部"}
            </button>
          ) : null
        }
      />

      <div className="grid grid-cols-3 gap-2">
        {visiblePhotos.map((photo) => (
          <figure key={photo.id} className="overflow-hidden rounded-2xl bg-white/70">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              loading="lazy"
              className="h-24 w-full object-cover transition duration-300 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
