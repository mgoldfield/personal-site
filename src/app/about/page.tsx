import Image from "next/image";

export default async function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About</h1>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hello! My name is Matt Goldfield. I work on projects centered around data, distributed systems, music, and combinations of those topics. I like thinking about how humans collaborate and build relationships, and about work and housing coops. I sometimes play and record music, and I cook and bake a lot.
              </p>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>I am currently a software engineer at <a href="https://www.izotope.com/" className="text-blue-600 dark:text-blue-400 hover:underline">iZotope</a>.</p>
                
                <p>Various current and past software projects, including a (now inactive) simple in-browser DAW called <a href="https://github.com/mgoldfield/nodelooper" className="text-blue-600 dark:text-blue-400 hover:underline">LoopMagic!</a>.</p>
                
                <p>I sometimes make records with <a href="https://www.anathalevyhochberg.com/" className="text-blue-600 dark:text-blue-400 hover:underline">Anat Halevy Hochberg</a> under our duet <a href="https://elulmusicproject.bandcamp.com/" className="text-blue-600 dark:text-blue-400 hover:underline">Cap and Scarf</a>.</p>
                
                <p>From 2008-2015 I played in the rock band <a href="https://therationales.bandcamp.com/" className="text-blue-600 dark:text-blue-400 hover:underline">The Rationales</a>.</p>
                
                <p>I am somewhat obsessed with cooking, especially smoking and curing, fermenting, bread, pizza, noodles, and dumplings. Here are a few <a href="https://photos.app.goo.gl/SdtHzGY2h6QRuHKm6" className="text-blue-600 dark:text-blue-400 hover:underline">creations</a>.</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <Image
                src="/images/me and oven.jpeg"
                alt="Matt with wood-fired oven"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
