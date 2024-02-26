// Import necessary functions and plugins from contentlayer and other libraries
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** 
 * Define computed fields for the Blog document type.
 * Computed fields are additional fields that can be derived from existing data.
 */
/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  // Resolve function to determine the 'slug' value based on the flattenedPath
  slug: { type: 'string', resolve: (blog) => `/blogs/${blog._raw.flattenedPath}` },
  // Resolve function to determine the 'slugAsParams' value based on the flattenedPath
  slugAsParams: { type: 'string', resolve: (blog) => blog._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

// Define the Blog document type using defineDocumentType function
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`, // File path pattern to match MDX files
  contentType: 'mdx', // Specify content type
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields, // Include computedFields in the definition
}));

// Export a source created with makeSource function
export default makeSource({
  contentDirPath: 'content', // Path to the content directory
  documentTypes: [Blog], // Specify the document types to be processed
  mdx: {
    remarkPlugins: [remarkGfm], // Use remark-gfm plugin for Markdown processing
    rehypePlugins: [
      rehypeSlug, // Use rehype-slug to generate anchor links
      [
        rehypePrettyCode,
        {
          theme: 'min-dark', // Specify the code highlighting theme
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            // Add a class to highlighted lines
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            // Add a class to highlighted words
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'], // Add a class to auto-linked headings
          },
        },
      ],
    ],
  },
});