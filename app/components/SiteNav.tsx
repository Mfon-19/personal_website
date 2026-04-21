"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="primary" aria-label="Primary">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/blog"
            ? pathname.startsWith("/blog")
            : pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "active" : undefined}>
            {link.label}
            <span className="arr" aria-hidden="true">
              ↗
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
