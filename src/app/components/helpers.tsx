import { transformMarkdown } from '@/lib/posts';
import fs from 'fs';
import path from "path";

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export async function markdownPage(dir: string, name: string, title: string) {
  const markdownPath = path.join(process.cwd(), 'src', 'app', dir, name);
  const markdown = fs.readFileSync(markdownPath);
  const htmlToOutput = await transformMarkdown(markdown.toString());
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <article>
            <section dangerouslySetInnerHTML={{ __html: htmlToOutput}} />
        </article>
    </main>
  );
}

