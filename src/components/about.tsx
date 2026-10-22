"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs } from "@/lib/content";

export function About() {
  const [current, setCurrent] = useState<(typeof aboutTabs)[number]["id"]>("company");
  const active = aboutTabs.find((tab) => tab.id === current) ?? aboutTabs[0];

  return (
    <section id="about" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-[73.75rem]">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-ink">
              About the brand
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              From the harvest to a wider market.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div
              role="tablist"
              aria-label="About Harvest Wave"
              className="flex flex-wrap gap-2"
            >
              {aboutTabs.map((tab) => {
                const selected = tab.id === current;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls="about-panel"
                    onClick={() => setCurrent(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      selected ? "bg-ink text-white" : "bg-white text-ink/75 hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <p
              role="tabpanel"
              id="about-panel"
              aria-labelledby={`tab-${active.id}`}
              key={active.id}
              className="rise mt-6 max-w-3xl text-base leading-8 text-ink/80 sm:text-lg"
            >
              {active.body}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          <article className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] md:col-span-3 md:min-h-[22rem]">
            <Image
              src="/images/pepper.jpg"
              alt="Spoons of ground spice and whole peppercorns"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </article>
          <article className="flex flex-col justify-between rounded-[1.75rem] bg-ink p-7 text-white sm:p-8 md:col-span-2">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">
              The name
            </p>
            <div>
              <p className="font-serif text-3xl leading-snug">
                Harvest is the land. Wave is the journey onward.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                The name describes produce moving from its origin toward new
                destinations, and the business relationships that make that
                movement possible.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
