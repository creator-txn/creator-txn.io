/* METADATA | [S.E.O] Search Engine Optimization */
import type { Metadata } from "next";
/* NEXT FEATURE | Link + Image */
import Link from "next/link";
import Image from "next/image";
/* REACT BOOTSTRAP | UI Components Library */
import { Col, Row } from "react-bootstrap";
/* REACT ICONS | Icon Library */
import { VscCalendar } from "react-icons/vsc";
/* DATE FNS | Date Library */
import { compareDesc, format, parseISO } from "date-fns";
/* CONTENTLAYER | Generated Blog Content w/ MDX & Built-In Type Support */
import { allBlogs, Blog } from "contentlayer/generated";

/* METADATA TAGS | [S.E.O] */
export const metadata: Metadata = {
  title: "Blogs",
  description: "Featured articulations on interested topics.",
};

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

/* BLOG PREVIEW COMPONENT */
function BlogPostPreview(blog: Blog) {

  return (
    <Col sm="12" md="6" lg="6" xl="4" className="mb-5">
      <section className="preview-card__container">
        {/* BLOG PREVIEW IMAGE */}
        {blog.image && (
          <Image 
            src={blog.image} 
            alt={blog.title} 
            width={300}
            height={200} 
            className="img-theme w-100" 
          />
        )}
        {/* BLOG PREVIEW CONTENT */}
        <div className="preview-card__content">
          <h2><Link href={blog.slug}>{blog.title}</Link></h2>
          <time dateTime={blog.publishedAt}>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center mt-2">
                <VscCalendar 
                  style={{ 
                    width: '1rem', 
                    height: 'auto', 
                    marginRight: '0.2rem'
                  }} 
                />
                {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
              </div>
            </div>
          </time>
          <p>{blog.description}</p>
        </div>
      </section>
    </Col>
  )
}

/* Featured Blogs Home Page */
export default function BlogsPage() {

  // List blogs starting with latest dated post first
  const blogs = allBlogs
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  return (
    <div className="mt-5">
      {/* PAGE TITLE */}
      <small>ContentLayer Plugin w/ MDX</small>
      <h1 className="mb-4 mb-lg-5">FEATURED BLOGS</h1>
      {/* BREADCRUMBS BAR */}
      <nav aria-label="breadcrumb" style={{ fontSize: '14px' }}>
        <ol className="breadcrumb" id="breadcrumb-bar">
          <li className="breadcrumb-item"><Link href="#">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ol>
      </nav>
      {/* DISPLAY BLOGS */}
      <div>
        <Row>
          {blogs.map((blog, idx) => (
            <><BlogPostPreview key={idx} {...blog} /></>
          ))}
        </Row>
      </div>
    </div>
  );
}