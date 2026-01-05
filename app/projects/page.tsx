import Image from "next/image";
import Link from "next/link";
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
            projects
          </h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-right max-w-[50ch] mx-auto md:ml-auto leading-[1.6] opacity-80 px-4 md:px-0">
            a collection of things I&rsquo;ve built that I&rsquo;m proud of
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-8 md:gap-12 mb-16 md:mb-24">
          {projects.map((project, index) => (
            <div key={index} className="group w-full max-w-[672px] mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-gray-300">
                <div className="relative w-full h-48 md:h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image.replace("public/", "/")}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-[24px] md:text-[28px] font-semibold mb-4 leading-tight">
                    {project.name}
                  </h2>

                  <p className="text-[15px] md:text-[16px] leading-[1.6] mb-4 md:mb-6 opacity-90">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-[12px] md:text-[13px] rounded-full font-medium text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] md:text-[16px] font-medium hover:opacity-70 transition-opacity duration-200">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-5 md:h-5">
                      <path
                        d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                        fill="currentColor"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
