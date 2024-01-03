import { getSortedPosts, getFormattedDate } from "@/lib/posts";
import Link from "next/link";

type ListItemProps = {
    post: Blogpost,

}
export function ListItem({post}: ListItemProps) {
    const {id, title, date} = post;
    const formattedDate = getFormattedDate(date);
    return(<li className="mt-4 text-2xl dark:text-while/90" key={id}>
        <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
        <br/>
        <p className="text-sm mt-1">{formattedDate}</p>
    </li>);
}

export default function Posts() {
    const posts = getSortedPosts();
    return (<section>
        <h2 className="text-4xl font-bold dark:text-white/90">blog</h2>
        <ul className="w-full">
            {posts.map(post => ListItem({post}))}
        </ul>
    </section>);
}