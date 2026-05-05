"use client";
import { useMemo, useState } from "react";
import PortfolioModal from "./PortfolioModal";

const projects = Array.from({ length: 10 }).map((_, i) => {
  const categories = ["Electrical", "Civil", "Supply", "Transport"] as const;
  const category = categories[i % categories.length];
  const id = i + 1;
  const image =
    id === 1 && category === "Electrical"
      ? "/images/portfolio-electrical-1.png"
      : id === 2 && category === "Civil"
        ? "/images/portfolio-civil-2.png"
      : id === 3 && category === "Supply"
        ? "/images/portfolio-supply-3.png"
      : id === 4 && category === "Transport"
        ? "/images/portfolio-transport-4.png"
      : id === 5 && category === "Electrical"
        ? "/images/portfolio-electrical-5.png"
      : id === 6 && category === "Civil"
        ? "/images/portfolio-civil-6.png"
      : id === 7 && category === "Supply"
        ? "/images/portfolio-supply-7.png"
      : id === 8 && category === "Transport"
        ? "/images/portfolio-transport-8.png"
      : id === 9 && category === "Electrical"
        ? "/images/portfolio-electrical-9.png"
      : `https://placehold.co/600x400/0F172A/F59E0B?text=${category}`;
  return { id, title: `${category} Project ${id}`, category, image, description: `Professional ${category.toLowerCase()} project delivery with measurable outcomes.`, client: `Client ${id}` };
}).filter((project) => !(project.id === 10 && project.category === "Civil"));

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const filtered = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Portfolio</h1>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">{["All", "Electrical", "Civil", "Supply", "Transport"].map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm ${f === filter ? "bg-primary text-white" : "bg-white ring-1 ring-slate-200"}`}>{f}</button>)}</div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{filtered.map((project) => <button key={project.id} onClick={() => setSelected(project)} className="group relative overflow-hidden rounded-xl text-left"><img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">{project.category}</span><div className="absolute inset-0 grid place-items-center bg-slate-900/40 opacity-0 transition group-hover:opacity-100"><span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white">View Project</span></div></button>)}</div>
      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
