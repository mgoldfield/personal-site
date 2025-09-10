import Image from 'next/image';

export default async function Projects() {
    return (
  
    <main className="px-6 prose prose-lg prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">Projects</h1>
      <article>
        <section className="m-5">
            <a href="https://mollybajgot.bandcamp.com/album/revelry" className="underline"><em>Revelry</em> by Molly Bajgot</a>
            <div>
                <a href="https://mollybajgot.bandcamp.com/album/revelry">
                    <Image 
                        alt="Revelry album art" 
                        src="https://f4.bcbits.com/img/a1516643014_10.jpg" 
                        className="m-0"
                        width={300}
                        height={300} />
                </a>
            </div>
            <div className="prose-sm">
                keyboards
            </div>
        </section>
        <section className="m-5">
            <a href="https://elulmusicproject.bandcamp.com/music" className="underline">High Holiday Albums with <em>Cap and Scarf</em></a>
            <div className="flex flex-row justify-between">
                <a href="https://elulmusicproject.bandcamp.com/album/tishrei-the-end-is-the-beginning">
                    <Image 
                        alt="Tishrei: The End is the Beginning album art" 
                        src="https://f4.bcbits.com/img/a3430763899_10.jpg" 
                        className="m-0"
                        width={300}
                        height={300} />
                </a>
                <a href="https://elulmusicproject.bandcamp.com/album/elul-songs-for-turning">
                    <Image 
                        alt="Elul album art" 
                        src="https://f4.bcbits.com/img/a2638810254_10.jpg" 
                        width={300}
                        height={300}
                        className="m-0"/>
                </a>
            </div>
            <div className="prose-sm">
                producer and multi-instrumentalist (co-produced with Anat Hochberg)
            </div>
        </section>
        <section className='m-5'>
            <a href="https://github.com/mgoldfield/nodelooper">
                <div className='underline'>LoopMagic! in-browser DAW</div>
                <Image
                    alt="picture of loopmagic in action"
                    src="/loopmagic.jpg"
                    className='m-0'
                    width={500}
                    height={300} />
            </a>
        </section>
        <section className="m-5">
            <a href="https://therationales.bandcamp.com/">
                <div className="underline">The Rationales</div>
                <Image 
                    alt="rationales album art" 
                    src="https://f4.bcbits.com/img/a0668426547_10.jpg" 
                    className="m-0"
                    width={300}
                    height={300}/>
            </a>
            <div className="prose-sm">keyboards and bass in performances and recordings 2008-2014</div>
        </section>
      </article>
    </main>
    )
  };
