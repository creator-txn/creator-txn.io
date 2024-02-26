/* NEXT FEATURE | Link + Image + notFound() */
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
/* DATE FNS | Date Library */
import { format, parseISO } from "date-fns";
/* REACT ICONS | Icon Library */
import { VscCalendar } from "react-icons/vsc";
/* CONTENTLAYER | Generated Blog Content w/ MDX & Built-In Type Support */
import { allBlogs, Blog } from "contentlayer/generated";
/* METHOD2: Display Blog Post (MDX Content) Basic View
import { useMDXComponent } from "next-contentlayer/hooks"; */
import { Mdx } from "@/app/ui/mdx";

/* generateStaticParams function 
- using a fetch request, the requests are automatically memoized.
- fetch request with the same arguments across multiple generateStaticParams, 
  Layouts, and Pages will only be made once.
- decreases build times. */
export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export default async function BlogPostPage({
  params
}: {
  params: {
    slug: string
  }
}) {

  /* SPECIFIC BLOG VARIABLE - Find blog post for current page */
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  /* ERROR 404 - If blog post does not exist */
  if (!blog) notFound();

  /* METHOD(2): Parse MDX file via the useMDXComponent hook 
  const MDXContent = useMDXComponent(blog.body.raw) */

  /* BREADCRUMB */
  const breadcrumb = blog.slug.replace("/blogs/", "");

  return (
    <div className="display-flex-center__container">
      <div className="article__container">
        <div className="article__content">
          <h1 className="display-1 mb-0">{blog.title}</h1>
          {/* BREADCRUMBS BAR */}
          <nav aria-label="breadcrumb" style={{ fontSize: '14px' }}>
            <ol className="breadcrumb mt-2 mb-4" id="breadcrumb-bar">
              <li className="breadcrumb-item"><Link href="#">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/blogs">Blogs</Link></li>
              <li 
                className="breadcrumb-item active text-capitalize" 
                aria-current="page"
              > <Link href={breadcrumb}>{breadcrumb}</Link>
              </li>
            </ol>
          </nav>
          {/* BLOG PREVIEW IMAGE */}
          {blog.image && (
              <Image
                src={blog.image} 
                alt={blog.title} 
                width={300}
                height={200}
                className="img-theme w-100 mb-4"
              />
            )}
          <div className="d-flex justify-content-between">
            {/* BLOG DATE */}
            <time
              className="d-block" 
              dateTime={blog.publishedAt}
            >
              <div className="d-flex align-items-center mb-4">
                <VscCalendar style={{ width: '1rem', height: 'auto', marginRight: '0.2rem'}} />
                <span className="d-none d-md-block pl-3">Published on</span> 
                <span className="mx-1">{format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}</span>
              </div>
            </time>
          </div>
          {/* BLOG CONTENT W/ STYLING */}
          <Mdx code={blog.body.code} />
          {/* METHOD(2): BLOG CONTENT */}
          {/* <MDXContent /> */}
          {/* <article dangerouslySetInnerHTML={{ __html: body.body.raw }}></article> */}
        </div>
      </div>
    </div>
  );
}