import { transformMarkdown } from '@/lib/posts';
import fs from 'fs';
import path from "path";

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export async function markdownPage(dir: string, name: string) {
  const aboutMarkdownPath = path.join(process.cwd(), 'src', 'app', dir, name);
  const aboutMarkdown = fs.readFileSync(aboutMarkdownPath).toString('utf-8');
  const htmlToOutput = await transformMarkdown(aboutMarkdown);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">About</h1>
        <article>
            <section dangerouslySetInnerHTML={{ __html: htmlToOutput}} />
        </article>
    </main>
  );
}

