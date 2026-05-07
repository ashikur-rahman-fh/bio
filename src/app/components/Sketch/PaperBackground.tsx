export default function PaperBackground() {
  return (
    <div
      aria-hidden
      className="paper-bg paper-noise pointer-events-none fixed inset-0 z-[-1]"
    >
      <svg
        className="absolute left-[5%] top-[18%] h-24 w-24 opacity-[0.12]"
        viewBox="0 0 100 100"
      >
        <path
          d="M10 50 Q30 20 50 50 T90 50"
          fill="none"
          stroke="#1E5ACB"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
      <svg
        className="absolute bottom-[12%] right-[8%] h-32 w-32 opacity-[0.1]"
        viewBox="0 0 100 100"
      >
        <path
          d="M20 80 L40 30 L60 70 L80 25"
          fill="none"
          stroke="#171717"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute right-[22%] top-[8%] h-20 w-20 opacity-[0.11]"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 15 L58 42 L88 42 L64 58 L72 85 L50 68 L28 85 L36 58 L12 42 L42 42 Z"
          fill="none"
          stroke="#F6B733"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
