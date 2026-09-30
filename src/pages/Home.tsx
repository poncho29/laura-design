import { Footer, Navbar } from "../components/common";
import { ContactSection, HeroSection, ProjectSection, ProfileSection } from "../section";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection id="hero"/>

        <ProfileSection id="profile" />

        <ProjectSection id="projects" />

        <ContactSection id="contact" />
      </main>

      <Footer />
    </>
  )
}
