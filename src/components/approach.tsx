import { steps } from "@/lib/content";

export function Approach() {
  return (
    <section id="approach" className="px-5 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[73.75rem]">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
            A straightforward approach
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Understand, communicate, explore, and build trust.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Meaningful business relationships begin with understanding. Product
            availability, specifications, and commercial terms are taken up
            according to the specific needs of each enquiry.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.index} className="rounded-[1.75rem] border border-line bg-white p-6">
              <p className="font-serif text-2xl text-gold-ink">{step.index}</p>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
