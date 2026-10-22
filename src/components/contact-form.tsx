"use client";

import { FormEvent, useState } from "react";
import { interests } from "@/lib/content";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [doneName, setDoneName] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email.";
    }
    if (message.length < 12) {
      next.message = "Tell us a little more about the enquiry.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setDoneName(name);
  }

  if (doneName) {
    return (
      <div className="rounded-[1.75rem] border border-white/15 bg-white/5 p-7" role="status">
        <p className="font-serif text-3xl leading-tight">Thank you, {doneName}.</p>
        <p className="mt-3 text-sm leading-6 text-white/70">
          This preview keeps your enquiry in the browser. Nothing was sent to
          Harvest Wave. A live inbox can be connected when the site is ready to
          receive business enquiries.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink"
          onClick={() => {
            setDoneName(null);
            setErrors({});
            setFormKey((value) => value + 1);
          }}
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form key={formKey} onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field id="name" name="name" label="Name" error={errors.name} autoComplete="name" />
      <Field
        id="organisation"
        name="organisation"
        label="Organisation (optional)"
        autoComplete="organization"
      />
      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        error={errors.email}
        autoComplete="email"
      />
      <div>
        <label htmlFor="interest" className="mb-2 block text-sm text-white/80">
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none"
        >
          <option value="" className="text-ink">
            Select a category
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest} className="text-ink">
              {interest}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-white/80">
          Your enquiry
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-y rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
          placeholder="Product category, market requirement, or the kind of collaboration you have in mind."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-[#f0c9a0]">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
        >
          Send enquiry
        </button>
        <p className="max-w-xs text-xs leading-5 text-white/45">
          A preview only. Your note stays on this device.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#f0c9a0]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
