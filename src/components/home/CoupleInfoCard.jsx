function AvatarBadge({ nickname, initials, avatarGradient, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradient} text-base font-semibold text-rose-900 shadow-sm`}
      >
        {initials}
      </div>
      <span className="text-sm font-medium text-rose-800">{nickname}</span>
    </div>
  );
}

export function CoupleInfoCard({ couple, loveDays }) {
  return (
    <section className="glass-card immersive-card fade-up p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.24em] text-rose-500/80">Only Us</p>
        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
          专属空间
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <AvatarBadge
            nickname={couple.partnerA.nickname}
            initials={couple.partnerA.initials}
            avatarGradient={couple.partnerA.avatarGradient}
            className="z-10"
          />
          <AvatarBadge
            nickname={couple.partnerB.nickname}
            initials={couple.partnerB.initials}
            avatarGradient={couple.partnerB.avatarGradient}
            className="-ml-3 rounded-full bg-white/40 pl-3"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-white/70 p-3">
        <p className="text-sm text-rose-700/90">恋爱第 {loveDays} 天</p>
        <p className="mt-1 text-xs text-rose-500">今天也在一起生活，哪怕只是留下一句问候</p>
      </div>
    </section>
  );
}
