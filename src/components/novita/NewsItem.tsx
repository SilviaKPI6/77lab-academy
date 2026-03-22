import { ExternalLink, Calendar } from "lucide-react";
import type { NewsItem as NewsItemType } from "@/types";

interface NewsItemProps {
  item: NewsItemType;
}

export default function NewsItem({ item }: NewsItemProps) {
  const formattedDate = item.pubDate
    ? new Date(item.pubDate).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-medium">
            {item.source}
          </span>
          {formattedDate && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          )}
        </div>
        <h4 className="font-medium text-sm text-white group-hover:text-indigo-300 transition-colors line-clamp-2 mb-1">
          {item.title}
        </h4>
        {item.contentSnippet && (
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {item.contentSnippet}
          </p>
        )}
      </div>
      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0 mt-1" />
    </a>
  );
}
