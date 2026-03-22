"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Fase } from "@/types";
import ProgressBar from "./ProgressBar";

interface FaseCardProps {
  fase: Fase;
  completedLezioni?: number;
  totalLezioni?: number;
}

export default function FaseCard({ fase, completedLezioni = 0, totalLezioni = 0 }: FaseCardProps) {
  const progressPercent = totalLezioni > 0 ? Math.round((completedLezioni / totalLezioni) * 100) : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/fasi/${fase.id}`}>
        <div className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">F{fase.numero}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-indigo-300 transition-colors">
                  {fase.titolo}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{fase.moduli.length} moduli</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0" />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {fase.descrizione}
          </p>

          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Progresso</span>
              <span>{completedLezioni}/{totalLezioni} lezioni</span>
            </div>
            <ProgressBar value={progressPercent} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
