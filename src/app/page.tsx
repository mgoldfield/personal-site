import Link from "next/link";
import { getSortedPosts, getFormattedDate } from "@/lib/posts";

function RecentPostItem({ post }: { post: Blogpost }) {
  const { id, title, date, category } = post;
  const formattedDate = getFormattedDate(date);
  
  return (
    <Link 
      href={`/posts/${id}`}
      className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-md transition-all duration-200 block"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 mb-1">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
        {category && (
          <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full">
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
    <main className="bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I work on projects centered around data, music and digital audio, distributed systems, and combinations of those topics. 
              I like thinking about how humans collaborate and build relationships, and about work and housing coops. 
              I sometimes play and record music, and I cook and bake a lot.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              <Link href="/about" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                More about me →
              </Link>
            </p>
          </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Recent Posts</h2>
          <p className="text-gray-600 dark:text-gray-400">Latest thoughts and learnings</p>
        </div>
        
        <div className="space-y-4 mb-6">
          {recentPosts.map(post => (
            <RecentPostItem key={post.id} post={post} />
          ))}
        </div>
        
        <div>
          <Link
            href="/blog"
            className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium transition-colors duration-200"
          >
            View all posts →
          </Link>
        </div>
      </section>
    </main>
  );
}
