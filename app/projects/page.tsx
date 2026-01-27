import Image from "next/image";
import PageShell from "../components/PageShell";
import projectsData from "../utils/projects.json";

interface Project {
  name: string;
  description: string;
  github_link: string;
  technologies: string[];
  image: string;
}

export default function Projects() {
  const projects: Project[] = projectsData;

  return (
    <PageShell>
      <header className="space-y-4 reveal">
        <span className="stamp">Projects</span>
        <h1 className="headline">Big ideas, bold builds.</h1>
        <p className="lead">
          A selection of the products, experiments, and systems that show how I
          work.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-2 reveal delay-1">
        {projects.map((project) => (
          <article key={project.name} className="panel overflow-hidden">
            <div className="relative aspect-[16/10] w-full border-b-[3px] border-black">
              <Image
                src={project.image.replace("public/", "/")}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold uppercase">
                {project.name}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em]">
                View repo
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
