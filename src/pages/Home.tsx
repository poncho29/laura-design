import { Navbar } from "../components/common";
import { HeroSection } from "../section/HeroSection";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroSection />
      </main>
    </>
  )
}
