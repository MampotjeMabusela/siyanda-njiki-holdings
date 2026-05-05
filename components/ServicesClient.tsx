"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const categories = {
  Electricity: ["Substation maintenance", "Transformer replacement/repair", "Current transformer servicing", "Street light service", "Kiosk/pillar box inspection"],
  Civil: ["Painting", "Tiling", "Carpentry", "Component installation"],
  Plumbing: ["Pipe installation and rerouting", "Leak detection and repair", "Drain and sewer line maintenance", "Bathroom and kitchen fixture fitting", "Water pressure troubleshooting"],
  Supply: ["PPE", "Electrical equipment", "Stationery", "Groceries", "Furniture", "Event organization and catering decor"],
  Transport: ["Safe passenger transport", "Secure goods delivery"],
};

export default function ServicesClient() {
  const [active, setActive] = useState<keyof typeof categories>("Electricity");
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Our Services</h1>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {Object.keys(categories).map((c) => (
          <button key={c} onClick={() => setActive(c as keyof typeof categories)} className={`rounded-full px-4 py-2 text-sm ${active === c ? "bg-primary text-white" : "bg-white ring-1 ring-slate-200"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-8"><ServiceCard title={`${active} Services`} points={categories[active]} /></div>
    </main>
  );
}
