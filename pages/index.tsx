import Head from "next/head";
import { BlogPost } from "contentlayer/generated";
import { NAVBAR_LINKS_DATA, NavBarLinks } from "../components/NavBarLink";
import Link from "next/link";

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Aeternity Crypto Foundation</title>
      </Head>
      <div className="prose">
        <h1 className="mb-8 text-3xl font-light uppercase ">
          æternity Crypto Foundation
        </h1>
        <p>
          The Æternity Crypto Foundation is a non-profit organization <br />
          established in the Principality of Liechtenstein. The Foundation
          brings together all the necessary resources and infrastructure to
          ensure a stable environment and thriving open source ecosystem around
          the æternity blockchain.
        </p>
      </div>
      <ul className="mt-8 space-y-2 md:hidden">
        {NAVBAR_LINKS_DATA.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="">
              <a className={`btn btn-sm btn-ghost`}>{l.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
