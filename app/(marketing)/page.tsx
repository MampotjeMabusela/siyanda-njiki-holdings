import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBolt, FaBus, FaFaucetDrip, FaHelmetSafety, FaSolarPanel, FaTruckFast } from "react-icons/fa6";
import ElectricitySlideshow from "@/components/ElectricitySlideshow";
import CivilSlideshow from "@/components/CivilSlideshow";
import PlumbingSlideshow from "@/components/PlumbingSlideshow";

export const metadata: Metadata = {
  title: "Home | Syanda Njiki Holdings",
  description: "Building Tomorrow, Delivering Today - supply, construction and transport services.",
};

type ServiceTile = [string, string, ReactNode];

export default function HomePage() {
  const services: ServiceTile[] = [
    [
      "Electricity",
      "Substations and transformers, street lighting, kiosk inspections, and reliable electrical infrastructure maintenance.",
      <FaBolt key="b" className="text-secondary text-2xl" />,
    ],
    [
      "Civil Work",
      "Painting, tiling, carpentry and component installs for sites that need a professional finish on time.",
      <FaHelmetSafety key="h" className="text-secondary text-2xl" />,
    ],
    [
      "Plumbing",
      "Installations, leak detection, drains and sewers, fixtures, and domestic and commercial troubleshooting.",
      <FaFaucetDrip key="p" className="text-secondary text-2xl" />,
    ],
    [
      "Supply",
      "PPE, electrical equipment, stationery, groceries, furniture, and event décor through vetted sourcing.",
      <FaTruckFast key="t" className="text-secondary text-2xl" />,
    ],
    [
      "Transport",
      "Licensed passenger mobility and insured goods deliveries with safety-focused drivers and planners.",
      <FaBus key="s" className="text-secondary text-2xl" />,
    ],
    [
      "Solar",
      "Renewable-energy support alongside traditional electrical scopes for efficiency and uptime.",
      <FaSolarPanel key="sp" className="text-secondary text-2xl" />,
    ],
  ];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="hero-business-bg absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:py-16 md:py-24">
          <h1 className="mx-auto text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] sm:text-4xl md:text-6xl">
            Syanda Njiki Holdings (PTY) LTD
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] sm:text-base md:text-lg md:tracking-[0.2em]">
            SNH • Building Tomorrow, Delivering Today
          </p>
          <p className="mt-4 text-base font-semibold text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] md:text-lg">
            Based in Mpumalanga • Serving South Africa
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] md:text-5xl">
            Reliable supply, construction and transport services with proven professionalism.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] md:text-lg">
            Syanda Njiki Holdings delivers efficient, high-quality, and customer-centric solutions across electrical,
            civil, plumbing, supply, transport and solar — from maintenance to full project support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-secondary px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-secondary/90">
              Get a Quote
            </Link>
            <Link href="/services" className="rounded-full border-2 border-white px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Our Services
            </Link>
            <Link href="/portfolio" className="rounded-full bg-white/10 px-5 py-3 font-semibold text-white ring-2 ring-white/40 transition hover:bg-white/20">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">What we offer</h2>
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          One multi-disciplinary partner for municipalities, builders, estates and industrial clients — combining accredited electrical work with civil finishes, plumbing,
          procurement, logistics and renewable-ready solutions.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, description, icon]) => (
          <div key={title as string} className="rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className="flex justify-center">{icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-primary">{title as string}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description as string}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Recent project work</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Browse snapshots from active electricity, civil and plumbing scopes. Use the arrows on each carousel to flip through crews, sites and completions.
          </p>
          <Link href="/portfolio" className="mt-4 inline-block text-sm font-semibold text-secondary hover:underline">
            See full portfolio →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 lg:max-w-md">
            <ElectricitySlideshow />
          </div>
          <div className="min-w-0 lg:max-w-md">
            <CivilSlideshow />
          </div>
          <div className="min-w-0 lg:max-w-md">
            <PlumbingSlideshow />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Trusted by growing organizations</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Regulation-ready partners aligned with accredited industry bodies across construction and contracting.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
            <Image src="/images/client-nhbrc.png" alt="NHBRC" width={170} height={170} className="h-24 w-auto object-contain" />
            <span className="mt-2 text-xs font-medium text-slate-500">NHBRC</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
            <Image src="/images/client-sabisa.png" alt="SABISA" width={170} height={170} className="h-24 w-auto object-contain" />
            <span className="mt-2 text-xs font-medium text-slate-500">SABISA</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
            <Image src="/images/client-sagga.png" alt="SAGGA" width={170} height={170} className="h-24 w-auto object-contain" />
            <span className="mt-2 text-xs font-medium text-slate-500">SAGGA</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
            <Image src="/images/client-cidb.png" alt="CIDB" width={170} height={170} className="h-24 w-auto object-contain" />
            <span className="mt-2 text-xs font-medium text-slate-500">CIDB</span>
          </div>
        </div>
      </section>
    </main>
  );
}
