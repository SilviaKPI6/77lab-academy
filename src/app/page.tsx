import Link from "next/link";
import { ArrowRight, BookOpen, Layers, GraduationCap, Library } from "lucide-react";
import { getAllFasi, getModuliFase, getLessoniModulo } from "@/data/course-data";
import { getBlogPosts } from "@/lib/mdx";
import FaseCard from "@/components/academy/FaseCard";
import BlogCard from "@/components/blog/BlogCard";

export default function HomePage() {
  const fasi = getAllFasi();
  const blogPosts = getBlogPosts()
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 3);

  const totalModuli = fasi.reduce((acc, f) => acc + f.moduli.length, 0);
  const totalLezioni = fasi.reduce((acc, f) => {
    return acc + getModuliFase(f.id).reduce((a, m) => a + m.lezioni.length, 0);
  }, 0);

  const stats = [
    { label: "Fasi", value: fasi.length, icon: Layers },
    { label: "Moduli", value: totalModuli, icon: BookOpen },
    { label: "Lezioni", value: totalLezioni, icon: GraduationCap },
    { label: "Libri", value: "19+", icon: Library },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6 py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-2">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          Il corso di marketing più completo in italiano
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            77LAB Marketing
          </span>
          <br />
          <span className="text-white">Academy</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          26 moduli, 76 lezioni, dal WHY all&apos;esecuzione. Un percorso completo per diventare un marketer straordinario.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fasi"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Inizia il corso
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/biblioteca"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
          >
            Esplora la biblioteca
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="p-5 rounded-xl bg-white/5 border border-white/10 text-center"
          >
            <Icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </section>

      {/* Fasi */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Le fasi del corso</h2>
            <p className="text-sm text-slate-400 mt-1">Un percorso strutturato dal WHY all&apos;esecuzione</p>
          </div>
          <Link
            href="/fasi"
            className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Vedi tutte
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {fasi.map((fase) => {
            const moduliFase = getModuliFase(fase.id);
            const totalLezioniInFase = moduliFase.reduce((acc, m) => acc + m.lezioni.length, 0);
            return (
              <FaseCard
                key={fase.id}
                fase={fase}
                completedLezioni={0}
                totalLezioni={totalLezioniInFase}
              />
            );
          })}
        </div>
      </section>

      {/* Blog */}
      {blogPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Dal blog</h2>
              <p className="text-sm text-slate-400 mt-1">Approfondimenti e riflessioni sul marketing</p>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Vedi tutti
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={{ ...post, contentPath: `blog/${post.slug}.mdx` }}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* CTA Chiedi a Silvia */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/20 p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-3">Hai una domanda?</h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Scrivi a Silvia direttamente. Risponde personalmente a ogni domanda sul corso e sul marketing.
          </p>
          <Link
            href="/chiedi-a-silvia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Chiedi a Silvia
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
