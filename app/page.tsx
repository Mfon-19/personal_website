import Link from "next/link";
import PageShell from "./components/PageShell";

const socialLinks = [
  {
    label: "GitHub",
    detail: "Open source, experiments, and prototypes.",
    href: "https://github.com/Mfon-19",
  },
  {
    label: "LinkedIn",
    detail: "Roles, writing, and updates.",
    href: "https://linkedin.com/in/mfonudoh18",
  },
  {
    label: "Resume",
    detail: "One page snapshot of my work.",
    href: "/resume/Mfon Resume.pdf",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 reveal">
          <h1 className="headline">
            hi, i&apos;m <span className="font-bold">Mfon</span>
          </h1>
          <p className="lead">
            i&apos;m a 4th year computer science student currently learning
            systems engineering and distributed systems. here, i list some of my
            projects, and sometimes, i write blogs on what i find interesting
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn btn-primary">
              See projects
            </Link>
            <a
              href="/resume/Mfon Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary">
              Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Systems engineering</span>
            <span className="tag">Distributed systems</span>
            <span className="tag">Parallel computing</span>
          </div>
        </div>

        <div className="panel p-6 md:p-8 reveal delay-1">
          <p className="kicker">Find me</p>
          <h2 className="mt-4 text-2xl font-semibold uppercase">
            Links and profiles.
          </h2>
          <div className="mt-6 grid gap-4 text-[13px]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel--ink panel-link p-4 transition-transform duration-150 hover:-translate-y-1">
                <p className="kicker">{link.label}</p>
                <p className="mt-2 text-[14px] leading-relaxed">
                  {link.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 space-y-6 reveal delay-2">
        <div className="panel p-6 md:p-8">
          <p className="kicker">Projects</p>
          <h2 className="mt-4 text-2xl font-semibold uppercase">
            Browse the full archive.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
            All shipped projects live on the projects page, with full details,
            tech stacks, and source links.
          </p>
          <Link href="/projects" className="btn btn-primary mt-6 w-fit">
            View all projects
          </Link>
        </div>
      </section>

      <section className="mt-14 reveal delay-3">
        <div className="panel p-6 md:p-8">
          <p className="kicker">Let&#39;s talk</p>
          <h2 className="mt-4 text-2xl font-semibold uppercase">
            Build the next thing.
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
            Open to collaborations, mentorship, and product problems worth
            solving.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
