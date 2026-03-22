import { notFound } from "next/navigation";
import { getAllModuli, getModuloById, getLessoniModulo, getFaseById } from "@/data/course-data";
import { getBooksByModulo } from "@/data/books-data";
import LezioneCard from "@/components/academy/LezioneCard";
import BookCard from "@/components/biblioteca/BookCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import { Sparkles } from "lucide-react";

export async function generateStaticParams() {
  return getAllModuli().map((m) => ({ moduloId: m.id }));
}

export async function generateMetadata({ params }: { params: { moduloId: string } }) {
  const modulo = getModuloById(params.moduloId);
  return { title: modulo ? `${modulo.titolo} — 77LAB Academy` : "Modulo non trovato" };
}

export default function ModuloPage({ params }: { params: { moduloId: string } }) {
  const modulo = getModuloById(params.moduloId);
  if (!modulo) notFound();

  const fase = getFaseById(modulo.faseId);
  const lezioni = getLessoniModulo(modulo.id);
  const libri = getBooksByModulo(modulo.id);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-w-0 max-w-screen-xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Corso", href: "/fasi" },
            fase ? { label: fase.titolo, href: `/fasi/${fase.id}` } : { label: "" },
            { label: modulo.titolo },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600/50 to-violet-600/50 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <span className="text-indigo-300 font-bold text-sm">{modulo.numero}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold text-white">{modulo.titolo}</h1>
                {modulo.isNew && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    NUOVO
                  </span>
                )}
              </div>
              <p className="text-slate-400 mt-1 max-w-2xl">{modulo.descrizione}</p>
              <p className="text-sm text-slate-500 mt-1">{lezioni.length} lezioni</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-10">
          {lezioni.map((lezione, i) => (
            <LezioneCard key={lezione.id} lezione={lezione} isCompleted={false} index={i} />
          ))}
        </div>

        {libri.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">Libri consigliati per questo modulo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {libri.map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
