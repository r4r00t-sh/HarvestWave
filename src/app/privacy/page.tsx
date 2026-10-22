import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
        Harvest Wave
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">Privacy</h1>
      <div className="mt-8 space-y-5 text-base leading-8 text-ink/80">
        <p>
          This site is a preview of the Harvest Wave marketing page. The
          enquiry form does not send your note to a server. What you type stays
          in the browser until you leave or refresh.
        </p>
        <p>
          Harvest Wave does not run accounts, advertising trackers, or a
          mailing list on this preview. If a live inbox is connected later, the
          form should say so on the page before you submit.
        </p>
        <p>
          Photographs illustrate agricultural products and the landscapes that
          inspire the brand. They are not presented as Harvest Wave facilities,
          customers, or confirmed supply sources.
        </p>
      </div>
    </article>
  );
}
