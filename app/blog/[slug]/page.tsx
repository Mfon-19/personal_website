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
    <PageShell contentClassName="page page--narrow">
      <article className="story-shell">
        <Link href="/blog" className="story-back">
          ← Back to blog
        </Link>

        <h1 className="story-title">{post.title}</h1>

        <div className="story-meta">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.tags.length > 0 ? <span>{post.tags.join(" · ")}</span> : null}
        </div>

        <div className="story-prose prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={{ Image }} />
        </div>
      </article>
    </PageShell>
  );
}
