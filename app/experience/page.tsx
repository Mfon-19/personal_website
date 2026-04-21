import PageShell from "../components/PageShell";
import experiencesData from "../utils/experiences.json";

interface Experience {
  company: string;
  position: string;
  description: string;
  begin: string;
  end: string;
  image?: string;
}

export default function Experience() {
  const experiences = experiencesData as Experience[];

  return (
    <PageShell>
      <div className="page-kicker">§ experience</div>
      <h1 className="page-title">
        Where I&apos;ve
        <br />
        worked.
      </h1>

      {experiences.map((experience) => (
        <div key={`${experience.company}-${experience.begin}`} className="item">
          <div className="when">
            <div>{experience.begin}</div>
            <div>{experience.end}</div>
          </div>
          <div>
            <h3>{experience.position}</h3>
            <div className="who">{experience.company}</div>
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
    </PageShell>
  );
}
