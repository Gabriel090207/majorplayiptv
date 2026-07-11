import Hero from "../components/Home/Hero/Hero";
import Highlights from "../components/Home/Highlights/Highlights";
import HowItWorks from "../components/Home/HowItWorks/HowItWorks";
import Devices from "../components/Home/Devices/Devices";
import Trending from "../components/Home/Trending/Trending";
import Plans from "../components/Home/Plans/Plans";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import FAQ from "../components/Home/FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <HowItWorks />
      <Devices />
      <Trending />
      <Plans />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;