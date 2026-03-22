import { fetchAllFeeds } from "@/lib/rss";
import NewsItemComponent from "@/components/novita/NewsItem";
import { Rss } from "lucide-react";

export const revalidate = 3600; // cache 1 ora

export const metadata = { title: "Novità dal mondo marketing — 77LAB Academy" };

export default async function NovitaPage() {
  let news = [];
  let error = false;

  try {
    news = await fetchAllFeeds();
  } catch {
    error = true;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Rss className="w-5 h-5 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">Novità dal mondo marketing</h1>
        </div>
        <p className="text-slate-400">
          Aggiornato in tempo reale dai migliori blog di marketing internazionali.
        </p>
      </div>

      {error ? (
        <div className="text-center py-12 text-slate-500">
          <Rss className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <p>Impossibile caricare le notizie al momento. Riprova più tardi.</p>
        </div>
      ) : news.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <p>Nessuna notizia disponibile.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {news.map((item, i) => (
            <NewsItemComponent key={`${item.link}-${i}`} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
