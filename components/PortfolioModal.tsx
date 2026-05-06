"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import type { PortfolioProject } from "@/lib/portfolioProjects";

export default function PortfolioModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-4 text-left shadow-xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={720}
          className="h-52 w-full rounded-lg object-cover sm:h-64 md:h-72"
        />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {project.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500" title="Client satisfaction score">
            <FaStar className="text-sm" aria-hidden />
            <span className="text-sm font-semibold text-slate-800">{project.satisfactionRating.toFixed(2)}</span>
            <span className="text-sm text-slate-500">/ 5 satisfaction</span>
          </div>
        </div>

        <h3 id="portfolio-modal-title" className="mt-2 text-xl font-semibold text-primary sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-secondary">{project.tagline}</p>

        <dl className="mt-4 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Location</dt>
            <dd className="mt-1 text-slate-800">{project.location}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Client</dt>
            <dd className="mt-1 text-slate-800">{project.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Project total (contract)</dt>
            <dd className="mt-1 font-semibold text-slate-900">{project.totalCostLabel}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Costs saved / value unlocked</dt>
            <dd className="mt-1 text-slate-800">{project.savingsLabel}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <h4 className="text-sm font-semibold text-primary">Project story</h4>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">{project.storyline}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-primary">Timeline</h4>
          <ol className="mt-4 space-y-0">
            {project.timeline.map((t, i) => (
              <li key={i} className="flex gap-3">
                <div className="flex flex-col items-center pt-1">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-secondary ring-4 ring-white" aria-hidden />
                  {i < project.timeline.length - 1 ? (
                    <span className="mt-1 min-h-[2.75rem] w-px grow bg-slate-200" aria-hidden />
                  ) : null}
                </div>
                <div className="pb-6 last:pb-0">
                  <time className="text-xs font-semibold text-primary" dateTime={t.date}>
                    {t.date}
                  </time>
                  <p className="mt-0.5 text-sm text-slate-600">{t.milestone}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-white sm:w-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
