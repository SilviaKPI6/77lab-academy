import Parser from "rss-parser";
import type { NewsItem } from "@/types";

const feeds = [
  { url: "https://www.searchenginejournal.com/feed/", source: "Search Engine Journal" },
  { url: "https://www.socialmediatoday.com/feed/", source: "Social Media Today" },
  { url: "https://blog.hubspot.com/marketing/rss.xml", source: "HubSpot Marketing" },
  { url: "https://www.thinkwithgoogle.com/intl/it-it/feed/", source: "Think with Google" },
  { url: "https://contentmarketinginstitute.com/feed/", source: "Content Marketing Institute" },
];

export async function fetchAllFeeds(): Promise<NewsItem[]> {
  const parser = new Parser();
  const results = await Promise.allSettled(
    feeds.map(async ({ url, source }) => {
      const feed = await parser.parseURL(url);
      return feed.items.map((item) => ({
        title: item.title || "",
        link: item.link || "",
        pubDate: item.pubDate || item.isoDate || "",
        contentSnippet: item.contentSnippet?.slice(0, 200) || "",
        source,
      }));
    })
  );

  const allItems: NewsItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      allItems.push(...result.value);
    }
  }

  allItems.sort((a, b) => {
    const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return dateB - dateA;
  });

  return allItems.slice(0, 30);
}
