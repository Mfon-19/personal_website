import type { ReactNode } from "react";
import SiteNav from "./SiteNav";

interface PageShellProps {
  children: ReactNode;
  contentClassName?: string;
}

export default function PageShell({
  children,
  contentClassName = "page",
}: PageShellProps) {
  return (
    <div className="page-shell">
      <SiteNav />
      <main className={contentClassName}>{children}</main>
    </div>
  );
}
