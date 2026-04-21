import HomeHero from "./components/HomeHero";
import PageShell from "./components/PageShell";

export default function Home() {
  return (
    <PageShell contentClassName="home-main">
      <HomeHero />
    </PageShell>
  );
}
