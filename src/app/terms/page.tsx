import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
        Harvest Wave
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">Terms</h1>
      <div className="mt-8 space-y-5 text-base leading-8 text-ink/80">
        <p>
          Harvest Wave is presented here as a brand. Nothing on this site is an
          offer to sell a specific product, and the page does not confirm
          availability, certifications, capacity, or commercial terms.
        </p>
        <p>
          Product interests, specifications, and business opportunities are
          discussed enquiry by enquiry. Please do not treat the form
          confirmation as a message received by Harvest Wave.
        </p>
        <p>
          The name Harvest Wave, the page, and the written copy belong to this
          project. Photography is used under the license of its source.
        </p>
      </div>
    </article>
  );
}
