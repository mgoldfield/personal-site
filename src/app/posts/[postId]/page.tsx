import { getSortedPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Post({ params: {postId} }: {params: { postId: string}}){
    const posts = getSortedPosts(); 
    const maybePost = posts.find(post => post.id === postId);
    if (!maybePost){
        return notFound();
    } else {
        const {title, date, contentHTML} = await getPost(postId);
        return (
            <main className=""></main>
        )
    }
}