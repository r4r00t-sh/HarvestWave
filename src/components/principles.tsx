import { principles } from "@/lib/content";

export function Principles() {
  return (
    <section id="principles" className="bg-sand px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-[73.75rem]">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
          How we work
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Quality, integrity, reliability, and partnership.
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {principles.map((item) => (
            <li key={item.title} className="rounded-[1.75rem] bg-paper p-7 sm:p-8">
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
