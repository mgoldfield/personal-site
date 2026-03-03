import Link from "next/link";
import { getSortedPosts, getFormattedDate } from "@/lib/posts";

function RecentPostItem({ post }: { post: Blogpost }) {
  const { id, title, date, category } = post;
  const formattedDate = getFormattedDate(date);
  
  return (
    <Link 
      href={`/posts/${id}`}
      className="group p-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:shadow-md transition-all duration-200 block"
    >
      <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200 mb-1">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <p className="text-sm text-stone-600 dark:text-stone-400">{formattedDate}</p>
        {category && (
          <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs rounded-full">
            {category}
          </span>
        )}
      </div>
    </Link>
  );
}

export default function Main() {
  const recentPosts = getSortedPosts().slice(0, 3);
  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg prose-stone dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
              Hello! I work on projects centered around data, music and digital audio, distributed systems, and combinations of those topics. 
              I like thinking about how humans collaborate and build relationships, and about work and housing coops. 
              I sometimes play and record music, and I cook and bake a lot.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-400 mt-4">
              <Link href="/about" className="text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300">
                More about me →
              </Link>
            </p>
          </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Recent Posts</h2>
          <p className="text-stone-600 dark:text-stone-400">Latest thoughts and learnings</p>
        </div>
        
        <div className="space-y-4 mb-6">
          {recentPosts.map(post => (
            <RecentPostItem key={post.id} post={post} />
          ))}
        </div>
        
        <div>
          <Link
            href="/blog"
            className="text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium transition-colors duration-200"
          >
            View all posts →
          </Link>
        </div>
      </section>
    </main>
  );
}
