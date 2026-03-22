"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import TagFilter from "@/components/blog/TagFilter";
import type { BlogPost } from "@/types";

function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = getAllTags(posts);
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <>
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
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      )}
    </>
  );
}
