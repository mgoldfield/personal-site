import { getSortedPosts, getFormattedDate, getCategories } from "@/lib/posts";
import Link from "next/link";

const categoryDisplayNames: Record<string, string> = {
    'dsp': 'DSP & Audio',
    'cooking': 'Cooking',
    'ml': 'Machine Learning',
};

function getCategoryLabel(category: string) {
    return categoryDisplayNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

type ListItemProps = {
    post: Blogpost,
}
export function ListItem({post}: ListItemProps) {
    const {id, title, date, category} = post;
    const formattedDate = getFormattedDate(date);
    return(
        <li className="group p-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:shadow-md transition-all duration-200" key={id}>
            <Link className="block" href={`/posts/${id}`}>
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200">
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                            <p className="text-sm text-stone-600 dark:text-stone-400">{formattedDate}</p>
                            {category && (
                                <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs rounded-full">
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

function ResourcesSection() {
    return (
        <div className="mb-8 mt-8">
            <h2 className="text-lg font-semibold text-navy dark:text-white mb-3">Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <Link 
                    href="/resources/technical"
                    className="group p-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-700 hover:shadow-md transition-all duration-200"
                >
                    <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200">
                        Technical Resources
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                        Books, blogs, and courses I&apos;ve learned from
                    </p>
                </Link>
                
                <Link 
                    href="/resources/culinary"
                    className="group p-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-700 hover:shadow-md transition-all duration-200"
                >
                    <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200">
                        Culinary Resources
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                        Bread books, blogs, and baking resources
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default function Posts() {
    const posts = getSortedPosts();
    const categories = getCategories();
    
    return (
        <section className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Blog</h1>
                <p className="text-stone-600 dark:text-stone-400 mb-6">Thoughts, ideas, and insights</p>
                
                {categories.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-navy dark:text-white mb-3">Browse by Topic</h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map(category => (
                                <Link 
                                    key={category}
                                    href={`/blog/${category}`}
                                    className="px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors duration-200 font-medium"
                                >
                                    {getCategoryLabel(category)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-navy dark:text-white">All Posts</h2>
            </div>
            
            <ul className="space-y-4">
                {posts.map(post => <ListItem key={post.id} post={post} />)}
            </ul>

            <ResourcesSection />
        </section>
    );
}