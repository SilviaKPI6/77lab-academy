"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Tag, BookOpen } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formattedDate = post.data
    ? new Date(post.data).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-pointer h-full">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            {post.data && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
            )}
            {post.moduloCollegato && (
              <span className="flex items-center gap-1 ml-auto px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                <BookOpen className="w-3 h-3" />
                {post.moduloCollegato}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-indigo-300 transition-colors line-clamp-2">
            {post.titolo}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {post.descrizione}
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
