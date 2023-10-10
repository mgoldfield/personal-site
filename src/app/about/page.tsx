import Link from "next/link";

export default function About() {
  return (
    <div>
      Hello! My name is Matt Goldfield. I work on projects centered around data,
      distributed systems, music, and combinations of those topics. I like
      thinking about how humans collaborate and build relationships, and about
      work and housing coops. I sometimes play and record music, and I cook and
      bake a lot. I&apos;m currently a software engineer at{" "}
      <Link href="https://www.izotope.com/">iZotope</Link>. I&apos;m an emeritus
      member at the worker coop{" "}
      <Link href="https://www.politicsrewired.com/">Politics Rewired</Link>.
      Various current and past software projects, including a (now inactive)
      simple in-browser DAW called{" "}
      <Link href="https://github.com/mgoldfield/nodelooper">loopmagic!</Link>,
      live on <Link href="https://github.com/mgoldfield">Github</Link>. I
      sometimes make records with{" "}
      <Link href="https://www.anathalevyhochberg.com/">
        Anat Halevy Hochberg
      </Link>
      under our duet{" "}
      <Link href="https://elulmusicproject.bandcamp.com/">Cap and Scarf</Link>.
      From 2008-2015 I played in the rock band{" "}
      <Link href="https://therationales.bandcamp.com/">The Rationales</Link>.
      I&apos;m somewhat obsessed with cooking, especially smoking and curing,
      fermenting, bread, pizza, noodles, and dumplings. Here are a few{" "}
      <Link href="https://photos.app.goo.gl/SdtHzGY2h6QRuHKm6">creations</Link>{" "}
      over the years.
    </div>
  );
}
