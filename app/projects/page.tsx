import PageShell from "../components/PageShell";
import projectsData from "../utils/projects.json";

interface Project {
  name: string;
  description: string;
  github_link: string;
  deployment_url?: string;
  technologies: string[];
}

export default function Projects() {
  const projects = projectsData as Project[];

  return (
    <PageShell>
      <div className="page-kicker">§ projects</div>
      <h1 className="page-title">
        Things I&apos;ve
        <br />
        built.
      </h1>

      {projects.map((project) => (
        <div key={project.name} className="item">
          <div className="when" aria-hidden="true" />
          <div>
            <h3>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name} ↗
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="stack">{project.technologies.join(" · ")}</div>
          </div>
        </div>
      ))}
    </PageShell>
  );
}
