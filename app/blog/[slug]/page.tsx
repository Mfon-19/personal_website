import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "../../utils/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Mfon Udoh`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen text-black relative">
      <nav className="mobile-nav md:fixed md:top-0 md:left-0 md:z-10 md:p-8 lg:p-12">
        <ul className="flex flex-row justify-center space-x-6 md:flex-col md:space-x-0 md:space-y-3">
          <li>
            <Link
              href="/"
              className="text-[16px] md:text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-[16px] md:text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-[16px] md:text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-[16px] md:text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main className="main-content flex flex-col items-center justify-start min-h-screen max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-8 md:pt-16">
        <article className="w-full max-w-[720px] mx-auto mb-16 md:mb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] md:text-[15px] opacity-60 hover:opacity-100 transition-opacity duration-200 mb-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          <header className="mb-8 md:mb-12">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[14px] opacity-60">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-[11px] rounded-full font-medium text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-black prose-p:text-black prose-p:opacity-90 prose-p:leading-[1.8] prose-a:text-black prose-a:underline prose-strong:text-black prose-code:text-black prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-ul:text-black prose-ol:text-black prose-li:text-black prose-li:opacity-90">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    </div>
  );
}
