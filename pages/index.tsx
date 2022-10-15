import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogPosts, BlogPost } from "contentlayer/generated";
import { Url } from "url";

const HomePageLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <a className="link link-primary">{text}</a>
    </Link>
  );
};

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Aeternity Crypto Foundation</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Aeternity Crypto Foundation</h1>

      <div>
        <h3 className={"text-xl"}>Main Links</h3>
        <div className="flex space-x-3">
          <HomePageLink href={"/about"} text={"Who we are"} />
          <HomePageLink href={"/blog"} text={"Blog"} />
          <HomePageLink href={"/phylosophy"} text={"Our Philosophy"} />
          <HomePageLink
            href={"/grant-program"}
            text={"Ecosystem Grant Program"}
          />
          <HomePageLink
            href={"/supported-projects"}
            text={"Supported Projects"}
          />
        </div>
      </div>

      <div className={"mt-6"}>
        <h3 className={"text-xl"}>Footer</h3>
        <div className="flex space-x-3">
          <HomePageLink
            href={"https://aeternity.com"}
            text={"aeternity blockchain"}
          />
          <HomePageLink
            href={
              "https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
            }
            text={"Submit a Grant Proposal"}
          />
          <HomePageLink href={"/media-kit"} text={"Media Kit"} />
          <HomePageLink href={"/contact-us"} text={"Contact Us"} />
        </div>
        <div>
          <h3>SOCIAL ICONS </h3>
          Twitter <br />
          <HomePageLink
            href={"https://forum.aeternity.com/c/li-foundation/31"}
            text={"Forum"}
          />{" "}
          <br />
          Youtube, Telegram/Discord (will inform)
        </div>
      </div>
      <div className={"flex space-x-1"}>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
        <button className="btn btn-ghost">button</button>
        <button className="btn btn-active">button</button>
      </div>
    </div>
  );
}
