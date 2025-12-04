import Hero from "./components/Hero";
import GlobeSection from "./components/Globe";
import RegionsOverview from "./components/RegionsOverview";
import FeaturedArticles from "./components/FeaturedArticles";
import Merchandise from "./components/Merchandise";
import Sources from "./components/Sources";
import AboutSupport from "./components/About";

const Landing = () => {
  return (
    <main>
      <Hero />
      <GlobeSection />
      <RegionsOverview />
      <FeaturedArticles />
      <Merchandise />
      <Sources />
      <AboutSupport />
    </main>
  );
};

export default Landing;