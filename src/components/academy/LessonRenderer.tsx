import { MDXRemote } from "next-mdx-remote/rsc";

interface LessonRendererProps {
  content: string;
}

export default function LessonRenderer({ content }: LessonRendererProps) {
  return (
    <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-indigo-400 prose-strong:text-white prose-code:text-indigo-300 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-indigo-500 prose-blockquote:text-slate-400">
      <MDXRemote source={content} />
    </div>
  );
}
