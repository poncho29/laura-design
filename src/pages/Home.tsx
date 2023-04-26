import { Navbar } from "../components/common";
import { HeroSection, SkillSection } from "../section";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection />

        <SkillSection />
      </main>
    </>
  )
}
