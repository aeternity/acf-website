import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

export const Person = defineDocumentType(() => ({
  name: "Person",
  filePathPattern: `persons/*.md`,
  fields: {
    index: { type: "number", required: true, description: "Sorting index" },
    name: { type: "string", required: true },
    position: { type: "string", description: "Role in ACF", required: true },
    imageSrc: { type: "string", description: "Portrait", required: false },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, Person],
});
