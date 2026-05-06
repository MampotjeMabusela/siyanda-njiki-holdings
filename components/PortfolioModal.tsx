"use client";

type Project = { title: string; image: string; description: string; client: string };

export default function PortfolioModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/70 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-4 sm:p-5">
        <img src={project.image} alt={project.title} className="h-52 w-full rounded-lg object-cover sm:h-64 md:h-72" />
        <h3 className="mt-4 text-xl font-semibold text-primary sm:text-2xl">{project.title}</h3>
        <p className="mt-2 text-slate-600">{project.description}</p>
        <p className="mt-1 text-sm text-slate-500">Client: {project.client}</p>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-white" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
