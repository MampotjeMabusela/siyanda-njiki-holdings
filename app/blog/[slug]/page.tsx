import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Siyanda Njiki Holdings`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const html = await renderMarkdown(post.content);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold text-primary">{post.title}</h1>
      <p className="mt-2 text-sm text-slate-500">{post.date} · {post.readingTime}</p>
      <article className="prose mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
