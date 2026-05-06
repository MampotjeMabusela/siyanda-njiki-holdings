type ServicePoint = { title: string; description: string };
type Props = {
  title: string;
  points: Array<string | ServicePoint>;
  imageSrc?: string;
  imageAlt?: string;
};

function isDetailedPoint(point: string | ServicePoint): point is ServicePoint {
  return typeof point !== "string";
}

export default function ServiceCard({ title, points, imageSrc, imageAlt = "Service image" }: Props) {
  return (
    <article className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200 sm:p-6">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="mx-auto mt-4 h-auto max-h-72 w-full max-w-3xl rounded-xl object-cover sm:max-h-[22rem]"
        />
      )}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-sm text-slate-700">
        {points.map((p) => (
          <li key={isDetailedPoint(p) ? p.title : p}>
            {isDetailedPoint(p) ? (
              <>
                <span className="font-semibold text-primary">{p.title}: </span>
                {p.description}
              </>
            ) : (
              p
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
