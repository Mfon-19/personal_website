import { homeIntro, homeSocialLinks } from "../utils/siteContent";

function SocialIcon({ kind }: { kind: (typeof homeSocialLinks)[number]["kind"] }) {
  switch (kind) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.94 8.5H3.56V20h3.38zM5.25 3A1.97 1.97 0 0 0 3.3 4.98c0 1.08.86 1.95 1.92 1.95h.03a1.96 1.96 0 1 0 0-3.93M20.7 12.68c0-3.64-1.95-5.33-4.55-5.33-2.1 0-3.04 1.15-3.56 1.96V8.5H9.2c.04.53 0 11.5 0 11.5h3.39v-6.42c0-.34.02-.68.13-.92.28-.68.92-1.38 1.98-1.38 1.4 0 1.96 1.05 1.96 2.59V20H20.7z"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.54 1.05 1.54 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.9c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.48.11 2.74.64.72 1.03 1.63 1.03 2.75 0 3.93-2.33 4.8-4.56 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2"
          />
        </svg>
      );
    case "resume":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 2.75h8.9L20 7.86V21.25a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1m8 1.8v3.7h3.66zM8 11h8v-1.5H8zm0 3.5h8V13H8zm0 3.5h5v-1.5H8z"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 5.75h16a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.75a1 1 0 0 1 1-1m0 1.73v.3l8 5.53 8-5.53v-.3zm16 2.12-7.43 5.13a1 1 0 0 1-1.14 0L4 9.6v7.15h16z"
          />
        </svg>
      );
  }
}

export default function HomeHero() {
  return (
    <div className="home-right">
      <div className="name-block">
        <span className="name">Mfon Udoh</span>
        <p className="intro">{homeIntro}</p>
        <div className="social-links" aria-label="Social links">
          {homeSocialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                className="social-link"
                href={link.href}
                aria-label={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <SocialIcon kind={link.kind} />
                <span className="social-tip">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
