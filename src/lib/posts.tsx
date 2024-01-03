import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

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
            date: metadata.data.date
        };
        return post;
    });
    return allPosts.sort((p, q) => p.date < q.date ? 1 : -1);
 }

 export async function getPost(id: string) {
    const postPath = path.join(postsDirectory, `${id}.md`);
    const postText = fs.readFileSync(postPath, 'utf-8');
    const metadata = matter(postText);
    const formattedPostText = await remark().use(html).process(metadata.content);
    const formattedPost: Blogpost & {contentHTML: string} = {
        id, 
        title: metadata.data.title,
        date: metadata.data.date,
        contentHTML: formattedPostText.toString(),
    }
    return formattedPost;
 }

export function getFormattedDate(date: string){
    return new Intl.DateTimeFormat('en-us', {dateStyle: 'long'}).format(new Date(date));
}
