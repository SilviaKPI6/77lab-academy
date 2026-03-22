"use client";

import { useState } from "react";
import { books, getAllBookTags } from "@/data/books-data";
import BookCard from "@/components/biblioteca/BookCard";
import TagFilter from "@/components/blog/TagFilter";
import { Library } from "lucide-react";

export default function BibliotecaPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = getAllBookTags();

  const filtered = activeTag
    ? books.filter((b) => b.tags.includes(activeTag))
    : books;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Library className="w-5 h-5 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">Biblioteca</h1>
        </div>
        <p className="text-slate-400">
          I libri che ci hanno ispirato. {books.length} titoli fondamentali per ogni marketer.
        </p>
      </div>

      <div className="mb-6">
        <TagFilter tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((book, i) => (
          <BookCard key={book.id} book={book} index={i} />
        ))}
      </div>
    </div>
  );
}
