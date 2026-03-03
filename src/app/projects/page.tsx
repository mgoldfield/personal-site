import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({
    title,
    href,
    description,
    images,
    children
}: {
    title: string;
    href: string;
    description: string;
    images: { src: string; alt: string; width: number; height: number }[];
    children?: React.ReactNode;
}) {
    return (
        <div className="group rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 overflow-hidden hover:shadow-md transition-all duration-200">
            <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4">
                {images.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="rounded object-cover"
                    />
                ))}
            </Link>
            <div className="p-4">
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-200"
                >
                    {title}
                </Link>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{description}</p>
                {children}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-navy dark:text-white mb-8">Projects</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectCard
                    title="Revelry by Molly Bajgot"
                    href="https://mollybajgot.bandcamp.com/album/revelry"
                    description="keyboards"
                    images={[{ src: "https://f4.bcbits.com/img/a1516643014_10.jpg", alt: "Revelry album art", width: 400, height: 400 }]}
                />

                <ProjectCard
                    title="Tishrei: The End is the Beginning — Cap and Scarf"
                    href="https://elulmusicproject.bandcamp.com/album/tishrei-the-end-is-the-beginning"
                    description="producer and multi-instrumentalist (co-produced with Anat Hochberg)"
                    images={[{ src: "https://f4.bcbits.com/img/a3430763899_10.jpg", alt: "Tishrei: The End is the Beginning album art", width: 400, height: 400 }]}
                />

                <ProjectCard
                    title="Elul: Songs for Turning — Cap and Scarf"
                    href="https://elulmusicproject.bandcamp.com/album/elul-songs-for-turning"
                    description="producer and multi-instrumentalist (co-produced with Anat Hochberg)"
                    images={[{ src: "https://f4.bcbits.com/img/a2638810254_10.jpg", alt: "Elul: Songs for Turning album art", width: 400, height: 400 }]}
                />

                <ProjectCard
                    title="LoopMagic! in-browser DAW"
                    href="https://github.com/mgoldfield/nodelooper"
                    description="a simple in-browser DAW for recording and looping"
                    images={[{ src: "/images/loopmagic.jpg", alt: "LoopMagic in action", width: 500, height: 300 }]}
                />

                <ProjectCard
                    title="The Rationales"
                    href="https://therationales.bandcamp.com/"
                    description="keyboards and bass in performances and recordings 2008-2014"
                    images={[{ src: "https://f4.bcbits.com/img/a0668426547_10.jpg", alt: "The Rationales album art", width: 400, height: 400 }]}
                />
            </div>
        </main>
    );
}
