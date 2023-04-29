import { Navbar } from "../components/common";
import { ContactSection, HeroSection, ProjectSection, SkillSection } from "../section";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection />

        <SkillSection />

        <ProjectSection />

        <ContactSection />
      </main>
    </>
  )
}
