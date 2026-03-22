"use client";

import { Tag } from "lucide-react";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
          activeTag === null
            ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
            : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
        }`}
      >
        Tutti
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag === activeTag ? null : tag)}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
            activeTag === tag
              ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
              : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
          }`}
        >
          <Tag className="w-2.5 h-2.5" />
          {tag}
        </button>
      ))}
    </div>
  );
}
