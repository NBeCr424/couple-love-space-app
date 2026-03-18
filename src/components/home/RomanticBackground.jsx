const twinkleStars = [
  { id: "star-1", top: "8%", left: "12%", size: 2.5, delay: "0.1s", duration: "4.6s" },
  { id: "star-2", top: "14%", right: "16%", size: 3, delay: "1.2s", duration: "5.2s" },
  { id: "star-3", top: "26%", left: "72%", size: 2, delay: "0.8s", duration: "6s" },
  { id: "star-4", top: "39%", left: "18%", size: 2.8, delay: "1.9s", duration: "5.5s" },
  { id: "star-5", top: "54%", right: "22%", size: 2.6, delay: "0.5s", duration: "4.8s" },
  { id: "star-6", top: "67%", left: "34%", size: 2.2, delay: "1.5s", duration: "5.6s" },
  { id: "star-7", bottom: "19%", right: "13%", size: 3.2, delay: "0.9s", duration: "4.9s" },
  { id: "star-8", bottom: "10%", left: "14%", size: 2.4, delay: "1.8s", duration: "5.8s" }
];

export function RomanticBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="romantic-bg" />
      <div className="romantic-blob blob-a" />
      <div className="romantic-blob blob-b" />
      <div className="romantic-blob blob-c" />
      {twinkleStars.map((star) => (
        <span
          key={star.id}
          className="twinkle-dot"
          style={{
            top: star.top,
            right: star.right,
            bottom: star.bottom,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration
          }}
        />
      ))}
    </div>
  );
}
