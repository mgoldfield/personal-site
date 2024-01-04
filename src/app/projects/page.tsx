import { markdownPage } from "../components/helpers";

export default async function Projects() {
    return (
  
    <main className="px-6 prose prose-lg prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">Projects</h1>
      <article>
        <section className="m-5">
            <a href="https://elulmusicproject.bandcamp.com/music" className="underline">High Holiday Albums with <em>Cap and Scarf</em></a>
            <div className="flex flex-row justify-between">
                <a href="https://elulmusicproject.bandcamp.com/album/tishrei-the-end-is-the-beginning">
                    <img src="https://f4.bcbits.com/img/a3430763899_10.jpg" className="w-64 m-0" />
                </a>
                <a href="https://elulmusicproject.bandcamp.com/album/elul-songs-for-turning">
                    <img src="https://f4.bcbits.com/img/a2638810254_10.jpg" className="w-64 m-0"/>
                </a>
            </div>
            <div className="prose-sm">
                producer and multi-instrumentalist (co-produced with Anat Hochberg)
            </div>
        </section>
        <section className="m-5">
            <a href="https://therationales.bandcamp.com/">
                <div className="underline">The Rationales</div>
                <img src="https://f4.bcbits.com/img/a0668426547_10.jpg" className="w-64 m-0"/>
            </a>
            <div className="prose-sm">keyboards and bass in performances and recordings 2008-2014</div>
        </section>
      </article>
    </main>
    )
  };
