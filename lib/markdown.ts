import remarkRehype from "remark-rehype/lib"
import rehypeSlug from "rehype-slug"
import { unified } from "unified"
import remarkParse from "remark-parse"
import rehypeStringify from "rehype-stringify"
import { template, html } from "rehype-template"

export const markdownToHtmlSync = (
  markdown: string,
) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    // .use(template, {
    //   template: x =>
    //     html`<article>${x}</article>`,
    // })
    .use(rehypeSlug)

  const result = processor.use(rehypeStringify).processSync(markdown)
  return result.toString()
}
