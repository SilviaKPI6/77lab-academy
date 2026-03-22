import { notFound } from "next/navigation";
import { getAllModuli, getLezioneById, getModuloById, getFaseById, getNextLezione, getPrevLezione, getLessoniModulo } from "@/data/course-data";
import { getLezioneContent } from "@/lib/mdx";
import LessonRenderer from "@/components/academy/LessonRenderer";
import LessonNavigation from "@/components/academy/LessonNavigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import LessonCompleteButton from "./LessonCompleteButton";
import { Clock, Target } from "lucide-react";

export async function generateStaticParams() {
  const allModuli = getAllModuli();
  const params: { lezioneId: string }[] = [];
  for (const modulo of allModuli) {
    for (const lezioneId of modulo.lezioni) {
      params.push({ lezioneId });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { lezioneId: string } }) {
  const lezione = getLezioneById(params.lezioneId);
  return { title: lezione ? `${lezione.titolo} — 77LAB Academy` : "Lezione non trovata" };
}

export default function LezionePage({ params }: { params: { lezioneId: string } }) {
  const lezione = getLezioneById(params.lezioneId);
  if (!lezione) notFound();

  const modulo = getModuloById(lezione.moduloId);
  const fase = modulo ? getFaseById(modulo.faseId) : undefined;
  const prev = getPrevLezione(lezione.id);
  const next = getNextLezione(lezione.id);
  const { content } = getLezioneContent(lezione.contentPath);
  const allLezioni = modulo ? getLessoniModulo(modulo.id) : [];
  const lezioneIndex = allLezioni.findIndex((l) => l.id === lezione.id) + 1;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Corso", href: "/fasi" },
              fase ? { label: fase.titolo, href: `/fasi/${fase.id}` } : { label: "" },
              modulo ? { label: modulo.titolo, href: `/moduli/${modulo.id}` } : { label: "" },
              { label: lezione.titolo },
            ]}
          />

          {/* Header lezione */}
          <div className="mb-8">
            <p className="text-xs text-slate-500 mb-1">
              Lezione {lezioneIndex} di {allLezioni.length}
              {modulo && ` — ${modulo.titolo}`}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{lezione.titolo}</h1>

            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>{lezione.durata}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <Target className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{lezione.obiettivo}</span>
              </div>
            </div>

            {lezione.contenuti.length > 0 && (
              <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                <p className="text-xs font-semibold text-indigo-400 mb-2">Contenuti chiave</p>
                <ul className="space-y-1">
                  {lezione.contenuti.map((c, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1 h-1 bg-indigo-400 rounded-full mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contenuto MDX */}
          <LessonRenderer content={content} />

          {/* Bottone completa */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <LessonCompleteButton lezioneId={lezione.id} />
          </div>

          {/* Navigazione prev/next */}
          <LessonNavigation prev={prev} next={next} />
        </div>
      </div>
    </div>
  );
}
