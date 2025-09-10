import Link from "next/link";

export default function TechnicalResources() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-8">
                <Link 
                    href="/blog"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                    ← Back to blog
                </Link>
            </div>
            
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Technical Resources I&apos;ve Learned From
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Here are some things I&apos;ve learned from in the past. Most of them are free!
                </p>
            </div>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                <h2>Blogs</h2>
                <ul>
                    <li><a href="https://jvns.ca/">Julia Evans</a> - Great articles on a variety of technical topics and creativity awesomeness</li>
                    <li><a href="https://www.youtube.com/@MikeShah">Mike Shah</a> - C++ and learning programming techniques</li>
                    <li><a href="https://journal.stuffwithstuff.com/">Robert Nystrom</a> - Programming languages and type systems among other cool stuff</li>
                </ul>

                <h2>Books</h2>
                <ul>
                    <li><a href="https://dataintensive.net/">Designing Data-Intensive Applications by Martin Kleppmann</a> - Exactly what it says :)</li>
                    <li><a href="https://ccrma.stanford.edu/~jos/">All books by Julius Smith</a> - Excellent DSP learning resources from an <a href="https://www.dictionary.com/e/slang/og/">OG</a></li>
                    <li><a href="https://craftinginterpreters.com/contents.html">Crafting Interpreters by Robert Nystrom</a> - Understanding interpreters and about compilers</li>
                </ul>

                <h2>Other</h2>
                <ul>
                    <li><a href="https://fast.ai">fast.ai</a> - beautiful courses on ML from top to bottom. I learned as much about teaching pedagogy as I learned about neural nets taking these courses.</li>
                    <li><a href="https://www.youtube.com/c/3blue1brown">3blue1brown</a> - beautiful intuitive visual explanations of mathematics relating to CS and physics including Fourier Transforms</li>
                </ul>
            </div>
        </main>
    );
}