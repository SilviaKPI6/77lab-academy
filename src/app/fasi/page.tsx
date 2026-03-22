import { getAllFasi, getModuliFase } from "@/data/course-data";
import FaseCard from "@/components/academy/FaseCard";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = { title: "Fasi del corso — 77LAB Academy" };

export default function FasiPage() {
  const fasi = getAllFasi();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-w-0 max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Il corso</h1>
          <p className="text-slate-400">
            {fasi.length} fasi, dal WHY all&apos;esecuzione operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fasi.map((fase) => {
            const moduliFase = getModuliFase(fase.id);
            const totalLezioni = moduliFase.reduce((acc, m) => acc + m.lezioni.length, 0);
            return (
              <FaseCard
                key={fase.id}
                fase={fase}
                completedLezioni={0}
                totalLezioni={totalLezioni}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
