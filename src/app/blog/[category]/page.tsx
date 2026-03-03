import { getPostsByCategory, getCategories, getFormattedDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map(category => ({category}));
}

const categoryDescriptions: Record<string, {title: string, description: string, image?: string}> = {
    'dsp': {
        title: 'Audio and Digital Signal Processing',
        description: 'When I started at iZotope, I had a background in programming and discrete math, but had very little DSP knowledge. I\'ve tried to write some of my learning down to help me clarify my own understanding, and maybe in the process be helpful to others on a similar journey.'
    },
    'cooking': {
        title: 'Cooking, Fire, and Ovens',
        description: 'This wood fired oven was built for me by my friend Sam. Stay tuned for more posts about firing and baking techniques and recipes!',
        image: '/images/oven.jpg'
    },
    'ml': {
        title: 'Machine Learning',
        description: 'Notes and reflections from machine learning projects and competitions.'
    }
};

export default async function CategoryPage({ params }: {params: Promise<{ category: string}>}) {
    const {category} = await params;
    const posts = getPostsByCategory(category);
    
    if (posts.length === 0) {
        return notFound();
    }

    const categoryInfo = categoryDescriptions[category] || {
        title: category.charAt(0).toUpperCase() + category.slice(1),
        description: `Posts about ${category}`
    };

    return (
        <main className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                    {categoryInfo.title}
                </h1>
                {categoryInfo.image && (
                    <div className="mb-6">
                        <Image
                            src={categoryInfo.image}
                            alt={categoryInfo.title}
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                )}
                <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                    {categoryInfo.description}
                </p>
            </div>
            
            <div className="mb-8">
                <Link 
                    href="/blog"
                    className="text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-200"
                >
                    ← Back to all posts
                </Link>
            </div>

            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="group p-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:shadow-md transition-all duration-200">
                        <Link className="block" href={`/posts/${post.id}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <p className="text-sm text-stone-600 dark:text-stone-400">{getFormattedDate(post.date)}</p>
                                        {post.category && (
                                            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs rounded-full">
                                                {post.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}