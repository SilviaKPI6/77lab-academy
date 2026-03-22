"use client";

import { useState } from "react";
import { getBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";
import TagFilter from "@/components/blog/TagFilter";
import type { BlogPost } from "@/types";

// Poiché questa è una client component, i dati vengono importati direttamente
// In produzione potremmo usare un server component con fetch

function getAllBlogTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}

export default function BlogPage() {
  const allPosts = getBlogPosts()
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .map((p) => ({ ...p, contentPath: `blog/${p.slug}.mdx` }));

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = getAllBlogTags(allPosts as BlogPost[]);

  const filtered = activeTag
    ? allPosts.filter((p) => p.tags.includes(activeTag))
    : allPosts;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Blog di Silvia</h1>
        <p className="text-slate-400">Riflessioni, approfondimenti e case study sul marketing.</p>
      </div>

      {tags.length > 0 && (
        <div className="mb-6">
          <TagFilter tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-slate-500 text-center py-12">Nessun post trovato.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post as BlogPost} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
