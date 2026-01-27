import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import PageShell from "../../components/PageShell";
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
    <PageShell contentClassName="page-content--narrow">
      <article className="panel p-6 md:p-10 reveal">
        <Link href="/blog" className="btn btn-secondary w-fit">
          <span aria-hidden="true">&lt;-</span>
          Back to blog
        </Link>

        <header className="mt-6 space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <time className="kicker">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-lg mt-8 max-w-none">
          <MDXRemote source={post.content} components={{ Image }} />
        </div>
      </article>
    </PageShell>
  );
}
