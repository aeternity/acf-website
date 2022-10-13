import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "Author of the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blog_posts",
  documentTypes: [BlogPost],
});
