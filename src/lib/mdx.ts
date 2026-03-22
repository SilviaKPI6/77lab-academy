import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export function getLezioneContent(contentPath: string): {
  frontmatter: Record<string, unknown>;
  content: string;
} {
  const fullPath = path.join(contentDirectory, contentPath);
  if (!fs.existsSync(fullPath)) {
    return {
      frontmatter: {},
      content: "# Contenuto in arrivo\n\n> Questo contenuto è in fase di scrittura. Torna presto!",
    };
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

export function getBlogPosts(): Array<{
  slug: string;
  titolo: string;
  descrizione: string;
  data: string;
  tags: string[];
  moduloCollegato?: string;
}> {
  const blogDir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const fullPath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: file.replace(".mdx", ""),
      titolo: (data.title as string) || "",
      descrizione: (data.descrizione as string) || "",
      data: (data.data as string) || "",
      tags: (data.tags as string[]) || [],
      moduloCollegato: data.moduloCollegato as string | undefined,
    };
  });
}

export function getBlogPost(slug: string): {
  frontmatter: Record<string, unknown>;
  content: string;
} | null {
  const fullPath = path.join(contentDirectory, "blog", `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}
