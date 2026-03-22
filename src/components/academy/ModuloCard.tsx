"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import type { Modulo } from "@/types";
import ProgressBar from "./ProgressBar";

interface ModuloCardProps {
  modulo: Modulo;
  completedLezioni?: number;
}

export default function ModuloCard({ modulo, completedLezioni = 0 }: ModuloCardProps) {
  const total = modulo.lezioni.length;
  const progressPercent = total > 0 ? Math.round((completedLezioni / total) * 100) : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/moduli/${modulo.id}`}>
        <div className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-pointer h-full">
          {modulo.isNew && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30">
              <Sparkles className="w-2.5 h-2.5 text-green-400" />
              <span className="text-xs font-semibold text-green-400">NUOVO</span>
            </div>
          )}

          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600/50 to-violet-600/50 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <span className="text-indigo-300 font-bold text-xs">{modulo.numero}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-indigo-300 transition-colors pr-12">
                {modulo.titolo}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{total} lezioni</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {modulo.descrizione}
          </p>

          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Progresso</span>
              <span>{completedLezioni}/{total}</span>
            </div>
            <ProgressBar value={progressPercent} />
          </div>

          <div className="absolute bottom-4 right-4">
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
