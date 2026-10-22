import Link from "next/link";

type LogoProps = {
  tone?: "ink" | "light";
};

export function Logo({ tone = "ink" }: LogoProps) {
  const word = tone === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-gold">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
          <path
            d="M16 26V14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 16.2c0-4.6 3.2-7.4 7.4-7.4-1 4.6-3.6 7.4-7.4 7.4Z"
            fill="currentColor"
          />
          <path
            d="M16 18.6c0-3.6-2.7-6-6.4-6 1 3.7 3.2 6 6.4 6Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={`text-[0.9375rem] font-semibold tracking-tight ${word}`}>
        Harvest Wave
      </span>
    </Link>
  );
}
