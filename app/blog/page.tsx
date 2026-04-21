import PageShell from "../components/PageShell";

export default function Blog() {
  return (
    <PageShell>
      <div className="page-kicker">§ blog</div>
      <h1 className="page-title">
        Notes from
        <br />
        the desk.
      </h1>

      <div className="empty">No blog yet</div>
    </PageShell>
  );
}
