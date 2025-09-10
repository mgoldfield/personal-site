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
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {categoryInfo.description}
                </p>
            </div>
            
            <div className="mb-8">
                <Link 
                    href="/blog"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                    ← Back to all posts
                </Link>
            </div>

            <div className="space-y-8">
                {posts.map(post => (
                    <article key={post.id} className="group p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200">
                        <Link href={`/posts/${post.id}`}>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {getFormattedDate(post.date)}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}