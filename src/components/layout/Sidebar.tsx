"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react";
import { getAllFasi, getModuliFase, getLessoniModulo } from "@/data/course-data";
import { isLessonComplete } from "@/lib/progress";

export default function Sidebar() {
  const pathname = usePathname();
  const [openFasi, setOpenFasi] = useState<Set<string>>(new Set(["fase-0"]));
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const fasi = getAllFasi();

  useEffect(() => {
    const allLezioni = fasi.flatMap((f) =>
      getModuliFase(f.id).flatMap((m) => getLessoniModulo(m.id))
    );
    const completed = new Set(
      allLezioni.filter((l) => isLessonComplete(l.id)).map((l) => l.id)
    );
    setCompletedLessons(completed);
  }, [pathname]);

  const toggleFase = (faseId: string) => {
    setOpenFasi((prev) => {
      const next = new Set(prev);
      if (next.has(faseId)) next.delete(faseId);
      else next.add(faseId);
      return next;
    });
  };

  return (
    <aside className="w-70 shrink-0 hidden lg:flex flex-col border-r border-white/10 bg-slate-950/50 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto">
      <div className="p-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Struttura del corso
        </p>
        <nav className="space-y-1">
          {fasi.map((fase) => {
            const moduliFase = getModuliFase(fase.id);
            const totalLezioni = moduliFase.reduce((acc, m) => acc + m.lezioni.length, 0);
            const completedCount = moduliFase.reduce(
              (acc, m) => acc + m.lezioni.filter((id) => completedLessons.has(id)).length,
              0
            );
            const isOpen = openFasi.has(fase.id);

            return (
              <div key={fase.id}>
                <button
                  onClick={() => toggleFase(fase.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-xs font-bold text-indigo-400 w-6">F{fase.numero}</span>
                    <span className="text-slate-300 group-hover:text-white transition-colors line-clamp-1">
                      {fase.titolo}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-xs text-slate-500">
                      {completedCount}/{totalLezioni}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-3 h-3 text-slate-500" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-slate-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {moduliFase.map((modulo) => {
                      const lezioni = getLessoniModulo(modulo.id);
                      const modCompletedCount = lezioni.filter((l) =>
                        completedLessons.has(l.id)
                      ).length;
                      const isActive = pathname.includes(modulo.id);

                      return (
                        <div key={modulo.id}>
                          <Link
                            href={`/moduli/${modulo.id}`}
                            className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors ${
                              isActive
                                ? "bg-indigo-500/20 text-indigo-300"
                                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                            }`}
                          >
                            <span className="line-clamp-1">
                              {modulo.numero}. {modulo.titolo}
                            </span>
                            <div className="flex items-center gap-1 shrink-0 ml-1">
                              {modCompletedCount === lezioni.length && lezioni.length > 0 ? (
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                              ) : (
                                <span className="text-slate-600">
                                  {modCompletedCount}/{lezioni.length}
                                </span>
                              )}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
