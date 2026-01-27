import Link from "next/link";
import PageShell from "../components/PageShell";
import { getAllPosts } from "../utils/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <PageShell>
      <header className="space-y-4 reveal">
        <span className="stamp">Blog</span>
        <h1 className="headline">Field notes.</h1>
        <p className="lead">
          Short reads on building, learning, and the occasional experiment.
        </p>
      </header>

      <section className="mt-10 space-y-5 reveal delay-1">
        {posts.length === 0 ? (
          <div className="panel p-6 text-[14px] text-[color:var(--ink-soft)]">
            No posts yet. Check back soon.
          </div>
        ) : (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="panel p-6 transition-transform duration-150 hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold uppercase">
                    {post.title}
                  </h2>
                  <time className="kicker">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))
        )}
      </section>
    </PageShell>
  );
}
