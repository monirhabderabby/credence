"use client";

import { useRef, useState, type FormEvent } from "react";

type Field = "name" | "email" | "inquiry";
const fields: { id: Field; label: string; placeholder: string }[] = [
  { id: "name", label: "Name", placeholder: "Jane Doe" },
  { id: "email", label: "Business Email", placeholder: "jane@company.com" },
  { id: "inquiry", label: "Inquiry", placeholder: "How can we help you?" },
];
const fieldClass = "block w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-base text-[#1a1a1a] transition-all placeholder:text-[#737373] focus:border-[#ffbc16] focus:outline-none focus:ring-1 focus:ring-[#ffbc16] aria-invalid:border-red-600 aria-invalid:focus:ring-red-600";
const fieldDelays = ["delay-100", "delay-175", "delay-250"];

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [deliveryError, setDeliveryError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const nextErrors: Partial<Record<Field, string>> = {};
    for (const { id, label } of fields) {
      const control = elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement;
      if (!control.value.trim()) nextErrors[id] = `Please enter your ${label.toLowerCase()}.`;
      else if (!control.validity.valid) nextErrors[id] = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    setDeliveryError("");
    const firstInvalid = fields.find(({ id }) => nextErrors[id]);
    if (firstInvalid) {
      (elements.namedItem(firstInvalid.id) as HTMLElement).focus();
      return;
    }
    // No contact API exists in this project. Never simulate delivery or discard the draft.
    setDeliveryError("Your message has not been sent. Online delivery is not connected yet. Please email hello@growwithcredence.com directly. Your entries are still here.");
  }

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl sm:p-10">
      <form id="contact-form" ref={form} noValidate onSubmit={submit} aria-describedby="contact-delivery-note" className="flex scroll-mt-[120px] flex-col gap-6">
        <div className="space-y-4">
          {fields.map(({ id, label, placeholder }, index) => {
            const common = {
              id: `contact-${id}`, name: id, required: true, placeholder,
              "aria-invalid": Boolean(errors[id]),
              "aria-describedby": errors[id] ? `contact-${id}-error` : undefined,
              onChange: () => { setErrors(previous => ({ ...previous, [id]: undefined })); setDeliveryError(""); },
            };
            return (
              <div key={id} className={`animate-in fill-mode-backwards fade-in-75 slide-in-from-bottom-3 duration-500 ease-out motion-reduce:animate-none ${fieldDelays[index]}`}>
                <label htmlFor={`contact-${id}`} className="mb-1.5 ml-1 block text-sm font-bold opacity-80">{label}</label>
                {id === "inquiry" ? <textarea {...common} className={`${fieldClass} min-h-[120px] resize-none`} /> : <input {...common} type={id === "email" ? "email" : "text"} autoComplete={id === "email" ? "email" : "name"} className={fieldClass} />}
                {errors[id] && <p id={`contact-${id}-error`} className="mt-2 text-sm text-red-700">{errors[id]}</p>}
              </div>
            );
          })}
        </div>
        <button type="submit" className="mt-2 w-full animate-in fill-mode-backwards fade-in-75 slide-in-from-bottom-3 rounded-xl bg-[#ffbc16] py-4 text-lg font-bold text-[#3c2f21] duration-500 delay-325 ease-out hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d28a2d] disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:animate-none motion-reduce:transition-none">Send Message</button>
        <p id="contact-delivery-note" className="text-sm leading-relaxed text-[#3c2f21]/70">Online delivery is not connected yet. Please <a className="underline underline-offset-4 hover:text-[#a45f41]" href="mailto:hello@growwithcredence.com">email us directly</a>.</p>
        <div role="alert" aria-atomic="true">{deliveryError && <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-800">{deliveryError}</p>}</div>
      </form>
    </div>
  );
}
