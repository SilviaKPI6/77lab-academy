"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, Circle } from "lucide-react";
import type { Lezione } from "@/types";

interface LezioneCardProps {
  lezione: Lezione;
  isCompleted?: boolean;
  index: number;
}

export default function LezioneCard({ lezione, isCompleted = false, index }: LezioneCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
    >
      <Link href={`/lezioni/${lezione.id}`}>
        <div className={`group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
          isCompleted
            ? "bg-green-500/5 border-green-500/20 hover:bg-green-500/10"
            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/30"
        }`}>
          <div className="shrink-0 mt-0.5">
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            ) : (
              <Circle className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Lezione {lezione.numero}</p>
                <h4 className={`font-medium text-sm transition-colors ${
                  isCompleted ? "text-green-300" : "text-white group-hover:text-indigo-300"
                }`}>
                  {lezione.titolo}
                </h4>
              </div>
              <div className="flex items-center gap-1 shrink-0 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                <span>{lezione.durata}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">{lezione.obiettivo}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
