"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-sitebg text-sitetext">
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary">Application error</h1>
          <p className="mt-3 text-slate-600">
            A critical issue occurred. Please refresh or try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-secondary px-5 py-2 font-semibold text-white"
          >
            Reload
          </button>
          <p className="mt-4 text-xs text-slate-500">
            {error?.message ? `Details: ${error.message}` : ""}
          </p>
        </main>
      </body>
    </html>
  );
}
