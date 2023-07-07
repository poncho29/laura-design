import { Footer, Navbar } from "../components/common";
import { ContactSection, HeroSection, ProjectSection, SkillSection } from "../section";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection id="hero"/>

        <SkillSection id="skills" />

        <ProjectSection id="projects" />

        <ContactSection id="contact" />

        <Footer />
      </main>
    </>
  )
}
