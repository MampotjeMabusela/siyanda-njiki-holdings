type Props = { title: string; points: string[] };
export default function ServiceCard({ title, points }: Props) {
  return (
    <article className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-sm text-slate-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}
