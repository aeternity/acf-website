import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogPosts, BlogPost } from "contentlayer/generated";
import { updateTitleTag } from "../_app";
import { assetUrl } from "../../lib";
import { SimpleContainer } from "../../components/SimpleContainer";

export async function getStaticProps() {
  const posts = allBlogPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return { props: { posts } };
}

function PostCard(post: BlogPost) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="link link-primary">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      {updateTitleTag("Blog")}
      <div
        className="absolute w-[100%] h-[100%]"
        style={{
          background: "url('/netDotBg.png')",
        }}
      />
      <SimpleContainer>
        <>
          <h1 className="mb-8 text-3xl font-bold">
            Æternity crypto foundation Blog
          </h1>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </>
      </SimpleContainer>
    </>
  );
}
