import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Lezione } from "@/types";

interface LessonNavigationProps {
  prev?: Lezione;
  next?: Lezione;
}

export default function LessonNavigation({ prev, next }: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
      {prev ? (
        <Link
          href={`/lezioni/${prev.id}`}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all group max-w-xs"
        >
          <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0 transition-colors" />
          <div className="text-left min-w-0">
            <p className="text-xs text-slate-500">Precedente</p>
            <p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-1">
              {prev.titolo}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/lezioni/${next.id}`}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all group max-w-xs ml-auto"
        >
          <div className="text-right min-w-0">
            <p className="text-xs text-slate-500">Successiva</p>
            <p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-1">
              {next.titolo}
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0 transition-colors" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
