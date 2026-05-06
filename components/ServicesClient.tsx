"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const categories = {
  Electricity: [
    {
      title: "Substation maintenance",
      description:
        "Routine inspections, cleaning, and preventative servicing to keep substations stable, safe, and compliant.",
    },
    {
      title: "Transformer replacement/repair",
      description:
        "Fault diagnosis, on-site repairs, and replacement planning to restore reliable power distribution quickly.",
    },
    {
      title: "Current transformer servicing",
      description:
        "Testing, calibration, and corrective maintenance to ensure accurate metering and protection performance.",
    },
    {
      title: "Street light service",
      description:
        "Lamp, fitting, and wiring maintenance to improve visibility, public safety, and nighttime reliability.",
    },
    {
      title: "Kiosk/pillar box inspection",
      description:
        "Condition checks, safety verification, and minor remedial work for secure low-voltage distribution points.",
    },
  ],
  Civil: [
    {
      title: "Painting",
      description:
        "Interior and exterior surface preparation, priming, and finishing for durable, professional results.",
    },
    {
      title: "Tiling",
      description:
        "Accurate floor and wall tile installation with proper leveling, grouting, and edge finishing.",
    },
    {
      title: "Carpentry",
      description:
        "General woodwork, framing, repairs, and fit-outs tailored to site and project requirements.",
    },
    {
      title: "Component installation",
      description:
        "On-site installation of civil components and fixtures aligned to plan specifications and safety standards.",
    },
  ],
  Plumbing: [
    {
      title: "Pipe installation and rerouting",
      description:
        "New pipework layout and rerouting for renovations, upgrades, and more efficient water flow.",
    },
    {
      title: "Leak detection and repair",
      description:
        "Fast fault tracing and repair to reduce water loss, property damage, and downtime.",
    },
    {
      title: "Drain and sewer line maintenance",
      description:
        "Preventative cleaning, blockage removal, and maintenance for reliable drainage performance.",
    },
    {
      title: "Bathroom and kitchen fixture fitting",
      description:
        "Professional installation of taps, sinks, basins, toilets, and related plumbing fixtures.",
    },
    {
      title: "Water pressure troubleshooting",
      description:
        "Diagnosis and correction of low or unstable pressure across domestic and commercial lines.",
    },
  ],
  Supply: [
    {
      title: "PPE",
      description:
        "Reliable sourcing and supply of protective wear and safety gear for compliant site operations.",
    },
    {
      title: "Electrical equipment",
      description:
        "Procurement and delivery of quality electrical components, tools, and support materials.",
    },
    {
      title: "Stationery",
      description:
        "Office and project stationery supply to support administration, reporting, and daily operations.",
    },
    {
      title: "Groceries",
      description:
        "Bulk and routine grocery supply for teams, facilities, and project-based site requirements.",
    },
    {
      title: "Furniture",
      description:
        "Selection and supply of functional furniture solutions for offices, workspaces, and facilities.",
    },
    {
      title: "Event organization and catering decor",
      description:
        "Planning support and decor supply for professional events, meetings, and company functions.",
    },
  ],
  Transport: [
    {
      title: "Safe passenger transport",
      description:
        "Planned, punctual, and safety-focused movement of passengers for staff, teams, and project operations.",
    },
    {
      title: "Secure goods delivery",
      description:
        "Reliable transport of materials and equipment with route coordination, handling care, and timely delivery.",
    },
  ],
};

export default function ServicesClient() {
  const [active, setActive] = useState<keyof typeof categories>("Electricity");
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Our Services</h1>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {Object.keys(categories).map((c) => (
          <button key={c} onClick={() => setActive(c as keyof typeof categories)} className={`rounded-full px-3 py-2 text-xs sm:px-4 sm:text-sm ${active === c ? "bg-primary text-white" : "bg-white ring-1 ring-slate-200"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-8">
        <ServiceCard
          title={`${active} Services`}
          points={categories[active]}
          imageSrc={
            active === "Electricity"
              ? "/images/electricity-services-cover.png"
              : active === "Civil"
                ? "/images/civil-services-cover.png"
                : active === "Plumbing"
                  ? "/images/plumbing-services-cover.png"
                  : active === "Supply"
                  ? "/images/supply-services-cover.png"
                : active === "Transport"
                  ? "/images/transport-services-cover.png"
                : undefined
          }
          imageAlt={
            active === "Electricity"
              ? "Electricity team working near transmission lines"
              : active === "Civil"
                ? "Civil engineering team surveying a construction site"
                : active === "Plumbing"
                  ? "Plumber working on pipe system and fittings"
                  : active === "Supply"
                  ? "Supply operations manager in front of shipping containers"
                : active === "Transport"
                  ? "Transport and logistics operations with trucks and cargo handling"
                : undefined
          }
        />
      </div>
    </main>
  );
}
