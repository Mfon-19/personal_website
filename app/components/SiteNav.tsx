import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  return (
    <header className="brutal-nav">
      <div className="brutal-nav__inner">
        <Link href="/" className="brutal-logo">
          Mfon Udoh
        </Link>
        <nav className="brutal-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="brutal-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
