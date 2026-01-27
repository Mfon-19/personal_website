import type { ReactNode } from "react";
import SiteNav from "./SiteNav";

interface PageShellProps {
  children: ReactNode;
  contentClassName?: string;
}

export default function PageShell({
  children,
  contentClassName = "",
}: PageShellProps) {
  const contentClasses = ["page-content", contentClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="page-shell">
      <SiteNav />
      <main className={contentClasses}>{children}</main>
    </div>
  );
}
