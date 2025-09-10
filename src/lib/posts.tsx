import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

 const postsDirectory = path.join(process.cwd(), 'src', 'blog-posts');
 export function getSortedPosts() {
    const filenames = fs.readdirSync(postsDirectory);
    const allPosts = filenames.map(filename => {
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const metadata = matter(fileContents);
        const post: Blogpost = {
            id: filename.split('.')[0],
            title: metadata.data.title,
            date: metadata.data.date,
            category: metadata.data.category
        };
        return post;
    });
    return allPosts.sort((p, q) => p.date < q.date ? 1 : -1);
 }

 export async function transformMarkdown(text: string) {
    return (await remark()
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(text)).toString();
 }

 export async function getPost(id: string) {
    const postPath = path.join(postsDirectory, `${id}.md`);
    const postText = fs.readFileSync(postPath, 'utf-8');
    const metadata = matter(postText);
    const formattedPost: Blogpost & {contentHTML: string} = {
        id, 
        title: metadata.data.title,
        date: metadata.data.date,
        contentHTML: await transformMarkdown(metadata.content),
    }
    return formattedPost;
 }

export function getFormattedDate(date: string){
    return new Intl.DateTimeFormat('en-us', {dateStyle: 'long'}).format(new Date(date));
}

export function getPostsByCategory(category: string) {
    const allPosts = getSortedPosts();
    return allPosts.filter(post => post.category === category);
}

export function getCategories() {
    const allPosts = getSortedPosts();
    const categories = new Set(allPosts.map(post => post.category).filter(Boolean));
    return Array.from(categories);
}
