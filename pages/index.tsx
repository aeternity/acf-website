import Head from "next/head";
import { BlogPost } from "contentlayer/generated";

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Aeternity Crypto Foundation</title>
      </Head>

      <h1 className="mb-8 text-3xl font-light uppercase ">
        æternity Crypto Foundation
      </h1>
      <p className="prose">
        The Æternity Crypto Foundation is a non-profit organization
      </p>
      <p>
        established in the Principality of Liechtenstein. The Foundation brings
        together all the necessary resources and infrastructure to ensure a
        stable environment and thriving open source ecosystem around the
        æternity blockchain.
      </p>
    </div>
  );
}
