"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-primary">Something went wrong</h1>
      <p className="mt-3 text-slate-600">
        We hit an unexpected issue while loading this page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full bg-secondary px-5 py-2 font-semibold text-white"
      >
        Try again
      </button>
      <p className="mt-4 text-xs text-slate-500">
        {error?.message ? `Details: ${error.message}` : ""}
      </p>
    </main>
  );
}
