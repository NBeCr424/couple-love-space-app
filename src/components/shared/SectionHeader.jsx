export function SectionHeader({
  title,
  subtitle = "",
  badge = "",
  action = null,
  className = ""
}) {
  const hasRight = Boolean(badge || action);

  return (
    <div className={`mb-3 flex items-start justify-between gap-3 ${className}`}>
      <div>
        <h2 className="text-sm font-semibold text-rose-800">{title}</h2>
        {subtitle ? <p className="mt-1 text-[11px] text-rose-500">{subtitle}</p> : null}
      </div>
      {hasRight ? (
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] text-rose-700">
              {badge}
            </span>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
