import { markdownPage } from "../components/helpers";

export default async function About() {
  return (

  <main className="px-6 prose prose-lg prose-slate dark:prose-invert mx-auto">
    <h1 className="text-3xl mt-4 mb-0">About</h1>
    <article>
      <section>
       <p>Hello! My name is Matt Goldfield. I work on projects centered around
      data, distributed systems, music, and combinations of those topics. I
      like thinking about how humans collaborate and build relationships, and
      about work and housing coops. I sometimes play and record music, and I
      cook and bake a lot.</p>
      <p>I'm currently a software engineer at <a href="https://www.izotope.com/">iZotope</a>.</p>
      <p>Various current and past software projects, including a (now inactive)
      simple in-browser DAW called <a href="https://github.com/mgoldfield/nodelooper">LoopMagic!</a>.</p>
      <p>I sometimes make records with <a href="https://www.anathalevyhochberg.com/">Anat Halevy Hochberg</a> under 
      our duet <a href="https://elulmusicproject.bandcamp.com/">Cap and Scarf</a>.</p>
      <p>From 2008-2015 I played in the rock band <a href="https://therationales.bandcamp.com/">The Rationales</a>.</p>
      <p>I'm somewhat obsessed with cooking, especially smoking and curing,
      fermenting, bread, pizza, noodles, and dumplings. Here are a few <a href="https://photos.app.goo.gl/SdtHzGY2h6QRuHKm6">creations</a>.</p>
       </section>
    </article>
  </main>
  )
};
