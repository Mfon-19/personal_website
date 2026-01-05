import Link from "next/link";
import { getAllPosts } from "../utils/blog";

export default function Blog() {
  const posts = getAllPosts();

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

      <main className="main-content flex flex-col items-center md:items-end justify-start min-h-screen max-w-7xl mx-auto md:ml-auto px-4 sm:px-6 md:px-12 lg:pr-24 pt-8 md:pt-16">
        <div className="w-full mb-12 md:mb-16">
          <h1 className="text-[48px] sm:text-[60px] md:text-[80px] font-semibold text-center md:text-right mb-4 md:mb-6 leading-tight">
            blog
          </h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-right max-w-[50ch] mx-auto md:ml-auto leading-[1.6] opacity-80 px-4 md:px-0">
            thoughts, learnings, and things I find interesting
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-6 md:gap-8 mb-16 md:mb-24">
          {posts.length === 0 ? (
            <p className="text-center md:text-right text-[16px] opacity-60">
              No posts yet. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block">
                <article className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-gray-300 max-w-[672px] mx-auto">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h2 className="text-[20px] md:text-[24px] font-semibold leading-tight group-hover:opacity-70 transition-opacity duration-200">
                      {post.title}
                    </h2>
                    <time className="text-[13px] md:text-[14px] opacity-60 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <p className="text-[14px] md:text-[15px] leading-[1.6] mb-4 opacity-80">
                    {post.excerpt}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-[11px] md:text-[12px] rounded-full font-medium text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
