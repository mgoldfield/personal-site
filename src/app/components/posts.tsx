import { getSortedPosts, getFormattedDate, getCategories } from "@/lib/posts";
import Link from "next/link";

type ListItemProps = {
    post: Blogpost,

}
export function ListItem({post}: ListItemProps) {
    const {id, title, date, category} = post;
    const formattedDate = getFormattedDate(date);
    return(
        <li className="group mb-8 p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200" key={id}>
            <Link className="block" href={`/posts/${id}`}>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
                            {category && (
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                    {category}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default function Posts() {
    const posts = getSortedPosts();
    const categories = getCategories();
    
    return (
        <section className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Thoughts, ideas, and insights</p>
                
                {categories.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Browse by Topic</h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map(category => (
                                <Link 
                                    key={category}
                                    href={`/blog/${category}`}
                                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 font-medium"
                                >
                                    {category === 'dsp' ? 'DSP & Audio' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Posts</h2>
            </div>
            
            <ul className="space-y-0">
                {posts.map(post => ListItem({post}))}
            </ul>
        </section>
    );
}