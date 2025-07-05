import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen text-black relative">
      {/* Left Navigation */}
      <nav className="fixed top-0 left-0 z-10 p-8 md:p-12">
        <ul className="flex flex-col space-y-3">
          <li>
            <Link
              href="/"
              className="text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Experience
            </Link>
          </li>
          <li>
            <a
              href="#blog"
              className="text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-end justify-start min-h-screen max-w-7xl ml-auto px-6 sm:px-12 sm:pr-24 pt-16">
        {/* Page Title */}
        <div className="w-full mb-16">
          <h1 className="text-[80px] font-semibold text-right mb-6 leading-tight">
            experience
          </h1>
          <p className="text-[18px] text-right max-w-[50ch] ml-auto leading-[1.6] opacity-80">
            my professional journey and the roles that shaped me
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="w-full flex flex-col gap-12 mb-24">
          {experiences.map((experience, index) => (
            <div key={index} className="group max-w-[672px] mx-auto">
              {/* Experience Card */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-gray-300">
                {/* Company Logo/Header */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Experience Content */}
                <div className="p-8">
                  {/* Position & Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h2 className="text-[28px] font-semibold leading-tight">
                      {experience.position}
                    </h2>
                    <span className="text-[14px] font-medium text-gray-600 mt-1 sm:mt-0">
                      {experience.begin} - {experience.end}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-[20px] font-medium text-gray-800 mb-6">
                    {experience.company}
                  </h3>

                  {/* Experience Description */}
                  <p className="text-[16px] leading-[1.6] opacity-90">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
