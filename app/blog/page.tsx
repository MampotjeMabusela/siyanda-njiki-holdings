import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Siyanda Njiki Holdings",
  description: "Insights on electrical safety, construction trends, supply chain and transport.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">Blog</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
            <div className="p-4 text-center">
              <p className="text-xs text-slate-500">{post.date} · {post.readingTime}</p>
              <h2 className="mt-2 text-lg font-semibold text-primary">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {post.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs">{tag}</span>)}
              </div>
              <Link className="mt-4 inline-block font-semibold text-secondary" href={`/blog/${post.slug}`}>Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
