"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { buildLeadWhatsAppUrl } from "@/lib/contactLead";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string().min(1),
  message: z.string().min(10),
});
type FormData = z.infer<typeof schema>;

export default function ContactClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      emailSent?: boolean;
      whatsappUrl?: string;
    };

    if (!res.ok || !json.ok) {
      toast.error("Something went wrong. Please try WhatsApp or call us.");
      return;
    }

    if (json.emailSent) {
      toast.success("Message sent to our email. WhatsApp opens with the same details — tap Send.");
    } else {
      toast.message("Could not reach email.", {
        description: "Sending your details via WhatsApp instead.",
      });
    }

    const wa = json.whatsappUrl ?? buildLeadWhatsAppUrl(data);
    window.open(wa, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-primary">Get in touch</h2>
          <p className="mt-2 text-sm">
            220 Tambo Village, Emzinoni, Bethal, Mpumalanga, 2309
          </p>
          <p className="text-sm">+27 79 221 9330</p>
          <p className="text-sm">info.thegembeselectrical@gmail.com</p>
          <iframe
            title="Syanda location"
            className="mt-4 h-72 w-full rounded-lg border-0"
            loading="lazy"
            src="https://maps.google.com/maps?q=220%20Tambo%20Village%2C%20Bethal%2C%20Mpumalanga%2C%202309&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200"
        >
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full rounded-md border p-3 text-left"
          />
          <p className="text-xs text-red-500">{errors.fullName?.message}</p>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-md border p-3 text-left"
          />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full rounded-md border p-3 text-left"
          />
          <p className="text-xs text-red-500">{errors.phone?.message}</p>
          <select
            {...register("service")}
            className="w-full rounded-md border p-3 text-left"
          >
            <option value="">Service Interested</option>
            <option>Electrical</option>
            <option>Civil</option>
            <option>Plumbing</option>
            <option>Supply</option>
            <option>Transport</option>
            <option>Solar</option>
            <option>Other</option>
          </select>
          <p className="text-xs text-red-500">{errors.service?.message}</p>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="h-32 w-full rounded-md border p-3 text-left"
          />
          <p className="text-xs text-red-500">{errors.message?.message}</p>
          <button
            disabled={isSubmitting}
            className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-white sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <p className="text-xs text-slate-500">
            We email your enquiry to{" "}
            <span className="font-medium">
              info.thegembeselectrical@gmail.com
            </span>{" "}
            and open WhatsApp with the same text so we see it instantly.
          </p>
        </form>
      </div>
    </main>
  );
}
