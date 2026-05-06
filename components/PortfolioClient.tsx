"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/lib/portfolioProjects";
import PortfolioModal from "./PortfolioModal";

const FILTERS = ["All", "Electrical", "Civil", "Supply", "Transport"] as const;

export default function PortfolioClient() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [selected, setSelected] = useState<(typeof portfolioProjects)[number] | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Portfolio</h1>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
        Selected deliveries across Mpumalanga and neighbouring districts — each card opens a full story, timeline,
        client context, satisfaction score, and cost outcomes.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm transition ${f === filter ? "bg-primary text-white" : "bg-white ring-1 ring-slate-200 hover:bg-slate-50"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="group flex flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
          >
            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={320}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                {project.category}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/85 to-transparent px-3 pb-3 pt-12">
                <p className="text-xs font-medium text-amber-300">
                  {project.satisfactionRating.toFixed(2)} / 5 satisfaction · {project.totalCostLabel}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-white">{project.title}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs text-slate-500">{project.location}</p>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{project.tagline}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-secondary group-hover:underline">
                View full story & timeline →
              </span>
            </div>
          </button>
        ))}
      </div>

      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
