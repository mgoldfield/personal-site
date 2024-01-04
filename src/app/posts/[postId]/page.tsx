import { getSortedPosts, getPost, getFormattedDate } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts = getSortedPosts();
    return posts.map(p => ({postId: p.id}));
}

export default async function BlogPost({ params: {postId} }: {params: { postId: string}}){
    const posts = getSortedPosts(); 
    const maybePost = posts.find(post => post.id === postId);
    if (!maybePost){
        return notFound();
    } else {
        const {title, date, contentHTML} = await getPost(postId);
        const pubDate = getFormattedDate(date);
        return (
            <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                <h1 className="text-3xl mt-4 mb-0">{title}</h1>
                <p className="mt-0">
                    {pubDate}
                </p>
                <article>
                    <section dangerouslySetInnerHTML={{ __html: contentHTML}} />
                </article>
            </main>
        )
    }
}