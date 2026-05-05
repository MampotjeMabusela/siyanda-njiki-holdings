type Props = { title: string; text: string };
export default function ValueCard({ title, text }: Props) {
  return (
    <div className="rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
      <h4 className="font-semibold text-primary">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
