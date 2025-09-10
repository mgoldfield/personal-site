import { getSortedPosts, getPost, getFormattedDate } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getSortedPosts();
    return posts.map(p => ({postId: p.id}));
}

export default async function BlogPost({ params }: {params: Promise<{ postId: string}>}){
    const {postId} = await params;
    const posts = getSortedPosts(); 
    const maybePost = posts.find(post => post.id === postId);
    if (!maybePost){
        return notFound();
    } else {
        const {title, date, contentHTML} = await getPost(postId);
        const pubDate = getFormattedDate(date);
        return (
            <main className="max-w-4xl mx-auto px-6 py-8">
                <article className="prose prose-lg prose-gray dark:prose-invert mx-auto">
                    <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            {title}
                        </h1>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <time dateTime={date} className="text-sm">
                                {pubDate}
                            </time>
                        </div>
                    </header>
                    <section 
                        className="prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: contentHTML}} 
                    />
                </article>
            </main>
        )
    }
}