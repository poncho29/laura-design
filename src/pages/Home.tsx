import { Navbar } from "../components/common";
import { HeroSection, ProjectSection, SkillSection } from "../section";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection />

        <SkillSection />

        <ProjectSection />
      </main>
    </>
  )
}
