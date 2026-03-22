"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ExternalLink, Tag } from "lucide-react";
import type { Book } from "@/types";

interface BookCardProps {
  book: Book;
  index?: number;
}

export default function BookCard({ book, index = 0 }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all h-full flex flex-col">
        <div className="flex items-start gap-4 mb-3">
          <div className="w-14 h-20 rounded-lg bg-gradient-to-br from-indigo-900/60 to-violet-900/60 border border-white/10 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 text-indigo-400/60" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2 mb-1">
              {book.titolo}
            </h3>
            <p className="text-xs text-slate-400">{book.autore}</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-3 flex-1 line-clamp-3">
          {book.descrizione}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-500"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {book.moduliCollegati.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {book.moduliCollegati.map((moduloId) => (
              <Link
                key={moduloId}
                href={`/moduli/${moduloId}`}
                className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {moduloId}
              </Link>
            ))}
          </div>
        )}

        {book.linkAcquisto && (
          <a
            href={book.linkAcquisto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3 h-3" />
            Acquista
          </a>
        )}
      </div>
    </motion.div>
  );
}
