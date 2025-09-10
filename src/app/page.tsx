import Link from "next/link";

export default function Main() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Matthew</span>
          </h1>
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I work on projects centered around data, distributed systems, music, and combinations of those topics. 
              I like thinking about how humans collaborate and build relationships, and about work and housing coops. 
              I sometimes play and record music, and I cook and bake a lot.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                More about me →
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Read My Blog
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-medium rounded-lg transition-colors duration-200"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            href="/blog" 
            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Blog
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thoughts, tutorials, and insights on development and technology.
            </p>
          </Link>
          
          <Link 
            href="/projects" 
            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A showcase of my work, experiments, and open source contributions.
            </p>
          </Link>
          
          <Link 
            href="https://github.com/mgoldfield" 
            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore my code, contributions, and collaborative projects.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
