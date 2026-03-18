const DAY_MS = 24 * 60 * 60 * 1000;

const normalize = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export function getLoveDays(startDateString) {
  const today = normalize(new Date());
  const startDate = normalize(new Date(startDateString));
  const diff = today.getTime() - startDate.getTime();
  return Math.max(1, Math.floor(diff / DAY_MS) + 1);
}

export function getNextAnniversary(month, day) {
  const now = normalize(new Date());
  let target = new Date(now.getFullYear(), month - 1, day);

  if (target.getTime() < now.getTime()) {
    target = new Date(now.getFullYear() + 1, month - 1, day);
  }

  const daysLeft = Math.ceil((target.getTime() - now.getTime()) / DAY_MS);
  return { target, daysLeft };
}

export function formatDateLabel(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}
