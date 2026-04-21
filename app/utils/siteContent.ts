export interface HomeSocialLink {
  label: string;
  href: string;
  kind: "linkedin" | "github" | "resume" | "email";
}

export const homeIntro =
  "Computer science student with a love for systems. I love learning about and building stuff close to the metal; storage engines, operating systems, etc. I also love performance engineering; it gives me a lot of pleasure to make things go fast.";

export const homeSocialLinks: HomeSocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mfonudoh18",
    kind: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mfon-19",
    kind: "github",
  },
  {
    label: "Resume",
    href: "/resume/Mfon Resume.pdf",
    kind: "resume",
  },
  {
    label: "Email",
    href: "mailto:mfonezekel@gmail.com",
    kind: "email",
  },
];
