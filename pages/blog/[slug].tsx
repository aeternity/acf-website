import { format, parseISO } from "date-fns";
import { allBlogPosts, BlogPost } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { updateTitleTag } from "../_app";

export async function getStaticPaths() {
  const paths = allBlogPosts.map((post) => `/${post.url}`);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogPosts.find(
    (post) => post._raw.flattenedPath === `blog/${params?.slug}`
  );
  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({ post }: { post: BlogPost }) => (
  <div className="p-4">
    {updateTitleTag(`${post.title} - Blog`)}

    <article className="mx-auto max-w-2xl py-16 prose prose-xl">
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <p>{post.author}</p>
      </div>
      <div
        className="cl-post-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  </div>
);

export default PostLayout;
