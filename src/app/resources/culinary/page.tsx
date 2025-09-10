import Link from "next/link";

export default function CulinaryResources() {
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
                    Culinary Resources I&apos;ve Learned From
                </h1>
            </div>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                <h2>Books</h2>
                <ul>
                    <li><a href="https://www.goodreads.com/book/show/17557476-tartine-book-no-3?ref=nav_sb_ss_1_13">Tartine Book No. 3</a> by Chad Robertson</li>
                    <li><a href="https://www.theperfectloaf.com/cookbooks/">The Perfect Loaf</a> by Maurizio Leo</li>
                    <li><a href="https://www.goodreads.com/book/show/153245.The_Bread_Builders">The Bread Builders</a> by Alan Scott and Daniel Wing</li>
                    <li><a href="https://www.twoplumpress.com/bookshop/the-long-loaf-bread-for-all-days-by-andrew-barton">The Long Loaf: Bread for All Days</a> by Andrew Barton</li>
                    <li><a href="https://www.goodreads.com/book/show/25614386-sourdough">Sourdough</a> by Sarah Owens</li>
                    <li><a href="https://www.kitchenartsandletters.com/products/flour-is-flavor">Flour is Flavor</a> by Dawn Woodward</li>
                </ul>

                <h2>Blogs and Forums</h2>
                <ul>
                    <li><a href="https://www.theperfectloaf.com/">The Perfect Loaf</a></li>
                    <li><a href="https://www.thefreshloaf.com/">The Fresh Loaf</a></li>
                </ul>

                <h2>Other Stuff</h2>
                <ul>
                    <li><a href="https://kneadingconference.com/">Maine Grain Alliance</a></li>
                    <li><a href="https://breadlab.wsu.edu/">WSU Bread Lab</a></li>
                    <li><a href="https://www.culinarybreedingnetwork.com/">Culinary Breeding Network</a></li>
                    <li><a href="https://backyardbread.com/">Backyard Bread</a></li>
                    <li><a href="https://localgrain.org/">Pioneer Valley Grain CSA</a></li>
                </ul>
            </div>
        </main>
    );
}