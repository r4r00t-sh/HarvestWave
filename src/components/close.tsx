import Link from "next/link";

export function Close() {
  return (
    <section className="px-5 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[73.75rem] rounded-[1.75rem] bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
          Harvest Wave
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-5xl">
          Delivering Nature&apos;s Best, Worldwide.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
          A brand inspired by agriculture, guided by quality, and driven by
          meaningful connections.
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink hover:bg-[#b08d45]"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
