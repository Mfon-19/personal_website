import Image from "next/image";
import PageShell from "../components/PageShell";
import experiencesData from "../utils/experiences.json";

interface Experience {
  company: string;
  position: string;
  description: string;
  begin: string;
  end: string;
  image: string;
}

export default function Experience() {
  const experiences: Experience[] = experiencesData;

  return (
    <PageShell>
      <header className="space-y-4 reveal">
        <span className="stamp">Experience</span>
        <h1 className="headline">Work that sharpened me.</h1>
        <p className="lead">
          Teams and roles where I learned to ship, collaborate, and grow.
        </p>
      </header>

      <section className="mt-10 space-y-6 reveal delay-1">
        {experiences.map((experience) => (
          <article key={experience.company} className="panel p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-3">
                <span className="stamp">
                  {experience.begin} - {experience.end}
                </span>
                <h2 className="text-xl font-semibold uppercase">
                  {experience.position}
                </h2>
                <p className="kicker">{experience.company}</p>
              </div>
              <div className="relative h-16 w-28 border-[3px] border-black bg-white">
                <Image
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  fill
                  sizes="112px"
                  className="object-contain p-2"
                />
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
              {experience.description}
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
