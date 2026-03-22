import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-400">77LAB Academy</span>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} 77LAB Academy. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/chiedi-a-silvia"
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors"
            >
              Chiedi a Silvia
            </Link>
            <Link
              href="/silvias-corner"
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors"
            >
              Silvia&apos;s Corner
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
