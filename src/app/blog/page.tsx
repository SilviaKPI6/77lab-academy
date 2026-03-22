import { getBlogPosts } from "@/lib/mdx";
import BlogListClient from "./BlogListClient";
import type { BlogPost } from "@/types";

export const metadata = { title: "Blog — 77LAB Academy" };

export default function BlogPage() {
  const posts: BlogPost[] = getBlogPosts()
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .map((p) => ({ ...p, contentPath: `blog/${p.slug}.mdx` }));

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Blog di Silvia</h1>
        <p className="text-slate-400">Riflessioni, approfondimenti e case study sul marketing.</p>
      </div>
      <BlogListClient posts={posts} />
    </div>
  );
}
