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
            <a
              href="#blog"
              className="text-[16px] md:text-[21px] font-normal leading-tight hover:opacity-70 transition-opacity duration-200">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <main className="main-content flex flex-col items-center md:items-end justify-start min-h-screen max-w-7xl mx-auto md:ml-auto px-4 sm:px-6 md:px-12 lg:pr-24 pt-8 md:pt-16">
        <div className="w-full mb-12 md:mb-16">
          <h1 className="text-[48px] sm:text-[60px] md:text-[80px] font-semibold text-center md:text-right mb-4 md:mb-6 leading-tight">
            experience
          </h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-right max-w-[50ch] mx-auto md:ml-auto leading-[1.6] opacity-80 px-4 md:px-0">
            my professional journey and the roles that shaped me
          </p>
        </div>

        <div className="w-full flex flex-col gap-8 md:gap-12 mb-16 md:mb-24">
          {experiences.map((experience, index) => (
            <div key={index} className="group max-w-[672px] mx-auto w-full">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-gray-300">
                <div className="relative w-full h-40 md:h-48 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h2 className="text-[24px] md:text-[28px] font-semibold leading-tight">
                      {experience.position}
                    </h2>
                    <span className="text-[13px] md:text-[14px] font-medium text-gray-600 mt-1 sm:mt-0">
                      {experience.begin} - {experience.end}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[20px] font-medium text-gray-800 mb-4 md:mb-6">
                    {experience.company}
                  </h3>

                  <p className="text-[15px] md:text-[16px] leading-[1.6] opacity-90">
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
