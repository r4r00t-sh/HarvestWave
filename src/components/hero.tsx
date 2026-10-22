import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="-mt-[4.5rem] bg-[#10243f] px-5 pb-8 pt-[8rem] text-paper sm:-mt-[4.75rem] sm:pt-[9.75rem] lg:-mt-[4.5rem] lg:pt-[9.5rem]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="rise text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-gold">
          Agricultural products
        </p>
        <h1 className="rise rise-delay-1 mt-5 font-serif text-[2.6rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.6rem]">
          Delivering Nature&apos;s Best, Worldwide.
        </h1>
        <p className="rise rise-delay-2 mx-auto mt-6 max-w-xl text-base leading-7 text-paper/75 sm:text-lg">
          Harvest Wave connects agricultural products with the requirements of
          different markets. The brand is built on quality-conscious practice,
          professional relationships, and a respect for where produce begins.
        </p>
        <div className="rise rise-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition hover:bg-[#b08d45]"
          >
            Make an enquiry
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-paper"
          >
            Product interests
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-[73.75rem]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] sm:aspect-[16/8]">
          <Image
            src="/images/spices.jpg"
            alt="Ginger, pepper, turmeric, and other spices laid out for trade"
            fill
            priority
            loading="eager"
            sizes="(min-width: 1280px) 90rem, 100vw"
            className="object-cover"
          />
          <aside className="absolute bottom-5 left-5 max-w-sm rounded-3xl bg-ink/92 p-5 text-white shadow-lg sm:bottom-8 sm:left-8 sm:p-6">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">
              Harvest Wave
            </p>
            <p className="mt-2 font-serif text-2xl leading-snug">
              Agriculture connects people, communities, and businesses.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
