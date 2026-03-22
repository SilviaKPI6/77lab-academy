import { notFound } from "next/navigation";
import { getAllFasi, getFaseById, getModuliFase } from "@/data/course-data";
import ModuloCard from "@/components/academy/ModuloCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";

export async function generateStaticParams() {
  return getAllFasi().map((f) => ({ faseId: f.id }));
}

export async function generateMetadata({ params }: { params: { faseId: string } }) {
  const fase = getFaseById(params.faseId);
  return { title: fase ? `${fase.titolo} — 77LAB Academy` : "Fase non trovata" };
}

export default function FasePage({ params }: { params: { faseId: string } }) {
  const fase = getFaseById(params.faseId);
  if (!fase) notFound();

  const moduliFase = getModuliFase(fase.id);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-w-0 max-w-screen-xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Corso", href: "/fasi" }, { label: fase.titolo }]} />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">F{fase.numero}</span>
            </div>
            <h1 className="text-2xl font-bold text-white">{fase.titolo}</h1>
          </div>
          <p className="text-slate-400 max-w-2xl">{fase.descrizione}</p>
          <p className="text-sm text-slate-500 mt-2">{moduliFase.length} moduli</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moduliFase.map((modulo) => (
            <ModuloCard key={modulo.id} modulo={modulo} completedLezioni={0} />
          ))}
        </div>
      </div>
    </div>
  );
}
