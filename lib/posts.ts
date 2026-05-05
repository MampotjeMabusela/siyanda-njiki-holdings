import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  author: string;
  content: string;
  readingTime: string;
};

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((name) => {
    const slug = name.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, name);
    const source = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(source);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags ?? [],
      image: data.image,
      author: data.author ?? "Siyanda Njiki Holdings",
      content,
      readingTime: readingTime(content).text,
    } as Post;
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}
