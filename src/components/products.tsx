import Image from "next/image";
import { products } from "@/lib/content";

export function Products() {
  return (
    <section id="products" className="px-5 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[73.75rem]">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
            Product interests
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Spices, grains, pulses, and other agricultural produce.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            These categories matter in food systems, culinary traditions, and
            commodity markets. Harvest Wave welcomes enquiries from people and
            organisations who want to discuss requirements and possible
            commercial opportunities. Availability and terms are discussed for
            each enquiry, not assumed in advance.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((item) => (
            <li key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white">
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
