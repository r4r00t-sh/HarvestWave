import Image from "next/image";

export function Heritage() {
  return (
    <section id="heritage" className="px-5 py-20 sm:py-28" aria-labelledby="heritage-title">
      <div className="relative mx-auto min-h-[32rem] max-w-[73.75rem] overflow-hidden rounded-[1.75rem] sm:min-h-[36rem]">
        <Image
          src="/images/hills.jpg"
          alt="A houseboat on a palm-lined backwater in Kerala"
          fill
          sizes="(min-width: 1280px) 90rem, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/15" />
        <div className="relative flex min-h-[32rem] max-w-xl flex-col justify-end p-7 text-white sm:min-h-[36rem] sm:p-12">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
            Inspired by Kerala
          </p>
          <h2
            id="heritage-title"
            className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl"
          >
            Natural origins, and an international outlook.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/85">
            Kerala’s agricultural landscapes, tropical crops, and history of
            spice cultivation and trade give Harvest Wave its point of
            departure. The brand looks from that heritage toward business
            relationships in wider markets.
          </p>
        </div>
      </div>
    </section>
  );
}
