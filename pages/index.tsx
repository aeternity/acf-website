import Head from "next/head";
import { BlogPost } from "contentlayer/generated";
import { HomePageLink } from "../components/HomePageLink";

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
    </div>
  );
}
