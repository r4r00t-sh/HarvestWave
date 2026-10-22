import Link from "next/link";
import { Logo } from "@/components/logo";
import { ContactForm } from "@/components/contact-form";
import { companyLinks, productLinks, visitLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[73.75rem] gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
            Business enquiries
          </p>
          <h2 className="mt-4 max-w-[14ch] font-serif text-4xl leading-[1.05] sm:text-5xl">
            Tell us about the requirement.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/70">
            Harvest Wave welcomes conversations about agricultural products,
            sourcing possibilities, distribution opportunities, and potential
            partnerships.
          </p>
        </div>
        <ContactForm />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[73.75rem] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Delivering Nature&apos;s Best, Worldwide. An agricultural products
              brand guided by quality and meaningful connections.
            </p>
          </div>
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Products" links={productLinks} />
          <LinkColumn title="Visit" links={visitLinks} />
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[73.75rem] px-5 py-5 text-sm text-white/45">
          © 2026 Harvest Wave. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/45">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/80 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
