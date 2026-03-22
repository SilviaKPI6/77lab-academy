import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = { title: "Silvia's Corner — 77LAB Academy" };

export default function SilviasCornerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
          S
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Silvia&apos;s Corner</h1>
        <p className="text-slate-400 leading-relaxed">
          Ciao, sono Silvia — imprenditrice, responsabile marketing e appassionata di cultura aziendale.
          Questa academy nasce dalla mia esperienza sul campo: anni di marketing operativo, strategie
          testate, errori e successi. Ho creato questo percorso per condividere tutto quello che ho
          imparato e che avrei voluto sapere prima.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-white mb-2">Imprenditrice</h3>
          <p className="text-xs text-slate-400">
            Ho fondato e gestito aziende in diversi settori, imparando il marketing dalla sua forma più pratica: quella che genera risultati reali.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-white mb-2">Marketer</h3>
          <p className="text-xs text-slate-400">
            Dal brand strategy all&apos;esecuzione operativa, dalla SEO alle campagne paid. Il marketing è il mio campo da gioco.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-white mb-2">Appassionata di libri</h3>
          <p className="text-xs text-slate-400">
            La biblioteca dell&apos;academy riflette anni di letture. Ogni libro ha cambiato qualcosa nel mio modo di fare marketing.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-white mb-2">Curiosa</h3>
          <p className="text-xs text-slate-400">
            Il marketing cambia velocemente. Resto sempre aggiornata per portare in academy solo quello che funziona davvero oggi.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Leggi il blog
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/chiedi-a-silvia"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-colors"
        >
          Scrivimi
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
