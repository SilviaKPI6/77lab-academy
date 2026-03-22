import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import LessonRenderer from "@/components/academy/LessonRenderer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Calendar, Tag, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  return { title: post ? `${post.frontmatter.title as string} — 77LAB Academy` : "Post non trovato" };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const date = frontmatter.data
    ? new Date(frontmatter.data as string).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const tags = (frontmatter.tags as string[]) || [];
  const moduloCollegato = frontmatter.moduloCollegato as string | undefined;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: frontmatter.title as string }]} />

      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {frontmatter.title as string}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
          {date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
          )}
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {moduloCollegato && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm">
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-slate-300">
              Questo argomento è approfondito nel{" "}
              <Link href={`/moduli/${moduloCollegato}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                {moduloCollegato}
              </Link>
            </span>
          </div>
        )}
      </header>

      <LessonRenderer content={content} />
    </div>
  );
}
